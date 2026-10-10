import { site } from "@/lib/site";

export default function ContactDirectory() {
  return (
    <div className="contact-grid">
      <article className="contact-card">
        <h2>Recipes and the website</h2>
        <p>
          Questions, corrections, and ideas about dinners, breakfasts, soups,
          and guides.
        </p>
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
      </article>
      <article className="contact-card">
        <h2>Privacy requests</h2>
        <p>
          Cookie questions, access or deletion requests, and CCPA or GDPR
          messages.
        </p>
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>
      </article>
    </div>
  );
}
