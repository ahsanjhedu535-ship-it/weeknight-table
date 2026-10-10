import Link from "next/link";
import ContactDirectory from "@/components/ContactDirectory";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Quick Dinners",
  description:
    "Contact Quick Dinners at contact@quickdinners.online, or privacy@quickdinners.online for privacy requests. The form checks your message before it opens your email app.",
  alternates: { canonical: "/contact" },
};

export default function Contact({ searchParams }) {
  const raw = Array.isArray(searchParams?.topic) ? searchParams.topic[0] : searchParams?.topic;
  const initialTopic = raw === "privacy" ? "privacy" : "recipe";

  return (
    <section className="section">
      <div className="container">
        <div className="prose">
          <div className="eyebrow">Contact us</div>
          <h1>Contact Quick Dinners</h1>
          <p>
            {site.name} reads messages about recipes, corrections, and this
            website at{" "}
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
            Privacy, cookie, CCPA, and GDPR requests go to{" "}
            <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
            Both addresses are monitored for {site.url}.
          </p>
          <p>
            Use the form below or write to either address directly. The form
            checks that your name, email, topic, and message are filled in.
            A recipe question is addressed to {site.contactEmail}. A privacy
            request is addressed to {site.privacyEmail}. Your email app then
            opens so you can send the message. This website does not keep a
            copy of the form.
          </p>
          <h2>What to include</h2>
          <ul>
            <li>The recipe or guide name, if the note is about a page.</li>
            <li>The line that looks wrong, if you are reporting a correction.</li>
            <li>The email address where a reply should go.</li>
            <li>
              For a privacy request, the state or country you live in, and
              whether you want access, correction, or deletion.
            </li>
          </ul>
        </div>
        <ContactDirectory />
        <div className="prose">
          <h2>Send a message</h2>
          <p>
            Required fields are marked by the checks that run when you submit.
            If a field needs a change, the form names that field and does not
            open your email app. The{" "}
            <Link href="/privacy-policy">privacy policy</Link> explains what
            happens to an email after you send it. The{" "}
            <Link href="/terms">terms of use</Link> cover messages you send
            about the site.
          </p>
        </div>
        <ContactForm initialTopic={initialTopic} />
      </div>
    </section>
  );
}
