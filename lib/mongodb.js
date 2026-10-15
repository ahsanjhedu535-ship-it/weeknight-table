import dns from "node:dns";
import { Resolver } from "node:dns/promises";
import { MongoClient } from "mongodb";

const googleDns = ["8.8.8.8", "8.8.4.4"];
const dbName = "quickdinners";
const globalMongo = globalThis;

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error("DNS lookup timed out")), ms);
    }),
  ]);
}

async function resolveSrv(hostname) {
  const name = `_mongodb._tcp.${hostname}`;
  const google = new Resolver();
  google.setServers(googleDns);
  try {
    return await withTimeout(google.resolveSrv(name), 2500);
  } catch {
    return dns.promises.resolveSrv(name);
  }
}

async function resolveTxt(hostname) {
  const google = new Resolver();
  google.setServers(googleDns);
  try {
    return await withTimeout(google.resolveTxt(hostname), 2500);
  } catch {
    try {
      return await dns.promises.resolveTxt(hostname);
    } catch (error) {
      if (error?.code === "ENODATA" || error?.code === "ENOTFOUND") return [];
      throw error;
    }
  }
}

async function directUri(srvUri) {
  const parsed = new URL(srvUri.replace(/^mongodb\+srv:\/\//, "https://"));
  const records = await resolveSrv(parsed.hostname);
  if (records.length === 0) {
    throw new Error("No Atlas hosts were returned");
  }
  const hosts = records.map((record) => `${record.name}:${record.port || 27017}`).join(",");
  let options = "tls=true";
  const txt = await resolveTxt(parsed.hostname);
  const extra = txt
    .map((parts) => parts.join(""))
    .join("&")
    .replace(/^&|&$/g, "");
  if (extra) options = `${options}&${extra}`;
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
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 8000 });
  await client.connect();
  globalMongo._quickDinnersClient = client;
  return client;
}

export async function getDb() {
  const client = await clientPromise();
  return client.db(dbName);
}
