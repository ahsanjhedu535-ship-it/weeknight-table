import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import { getDb } from "@/lib/mongodb";
import { validateContactMessage } from "@/lib/contactMessage";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Send the message as JSON." }, { status: 400 });
  }

  const errors = validateContactMessage(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const topic = body.topic;
  const message = body.message.trim();
  const inbox = topic === "privacy" ? site.privacyEmail : site.contactEmail;

  try {
    const db = await getDb();
    await db.collection("contact_messages").insertOne({
      name,
      email,
      topic,
      message,
      inbox,
      createdAt: new Date(),
    });
  } catch (error) {
    const detail = String(error?.message || error).replace(/mongodb(\+srv)?:\/\/\S+/gi, "mongodb://[redacted]");
    console.error("contact insert failed", detail);
    const code = !process.env.MONGO_URI
      ? "missing-env"
      : /auth/i.test(detail)
        ? "auth"
        : /whitelist|ServerSelection|MongoNetwork|ECONNREFUSED|timed out/i.test(detail)
          ? "unreachable"
          : "save-failed";
    return NextResponse.json(
      { error: "The message could not be saved. Try again in a moment.", code },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true, inbox });
}
