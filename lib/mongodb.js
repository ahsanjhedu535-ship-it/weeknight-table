import dns from "node:dns";
import { Resolver } from "node:dns/promises";
import { MongoClient } from "mongodb";

const googleDns = ["8.8.8.8", "8.8.4.4"];
dns.setServers(googleDns);

const dbName = "quickdinners";
const globalMongo = globalThis;

function resolver() {
  const lookup = new Resolver();
  lookup.setServers(googleDns);
  return lookup;
}

async function directUri(srvUri) {
  const parsed = new URL(srvUri.replace(/^mongodb\+srv:\/\//, "https://"));
  const lookup = resolver();
  const records = await lookup.resolveSrv(`_mongodb._tcp.${parsed.hostname}`);
  if (records.length === 0) {
    throw new Error("No Atlas hosts were returned");
  }
  const hosts = records.map((record) => `${record.name}:${record.port || 27017}`).join(",");
  let options = "tls=true";
  try {
    const txt = await lookup.resolveTxt(parsed.hostname);
    const extra = txt
      .map((parts) => parts.join(""))
      .join("&")
      .replace(/^&|&$/g, "");
    if (extra) options = `${options}&${extra}`;
  } catch (error) {
    if (error?.code !== "ENODATA" && error?.code !== "ENOTFOUND") throw error;
  }
  const user = decodeURIComponent(parsed.username);
  const password = decodeURIComponent(parsed.password);
  const query = parsed.search ? parsed.search.slice(1) : "";
  const params = [options, query].filter(Boolean).join("&");
  return `mongodb://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${hosts}/${dbName}?${params}`;
}

async function clientPromise() {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not set");
  }
  if (globalMongo._quickDinnersClient) return globalMongo._quickDinnersClient;
  const uri = process.env.MONGO_URI.startsWith("mongodb+srv://")
    ? await directUri(process.env.MONGO_URI)
    : process.env.MONGO_URI;
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 15000 });
  try {
    await client.connect();
  } catch (error) {
    console.error("dns servers", dns.getServers().join(","));
    throw error;
  }
  globalMongo._quickDinnersClient = client;
  return client;
}

export async function getDb() {
  const client = await clientPromise();
  return client.db(dbName);
}
