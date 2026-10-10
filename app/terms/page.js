import Link from "next/link";
import ContactDirectory from "@/components/ContactDirectory";
import { site } from "@/lib/site";

export const metadata = {
  title: "Terms of Use",
  description:
    "Terms for using Quick Dinners recipes, guides, and the contact form at quickdinners.online.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <section className="section">
      <div className="container prose">
        <div className="eyebrow">Site information</div>
        <h1>Terms of use</h1>
        <p>
          <strong>Last updated: October 10, 2026</strong>
        </p>
        <p>
          These terms govern your use of {site.url}, published by {site.name}.
          By using the site, you agree to these terms, the{" "}
          <Link href="/privacy-policy">privacy policy</Link>, and the{" "}
          <Link href="/disclaimer">recipe disclaimer</Link>. If you do not
          agree, do not use the site.
        </p>

        <h2>The publisher</h2>
        <p>
          {site.name} publishes the recipes, guides, and meal planner on this
          website. General questions go to{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          Privacy requests go to{" "}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
        </p>

        <h2>Using the recipes</h2>
        <p>
          Recipes and guides are general cooking information for home cooks in
          the United States. They use US cups and Fahrenheit. Nutrition facts
          are approximate estimates. Results change with ingredients,
          equipment, altitude, and how an oven runs. Read the{" "}
          <Link href="/disclaimer">disclaimer</Link> before you cook, including
          the food-safety temperatures and the note that this site does not
          give medical advice.
        </p>
        <p>
          You may cook from the recipes at home and share a link to a page.
          You may not copy the collection onto another website, sell the text,
          or present the pages as your own publication.
        </p>

        <h2>Accounts and the meal planner</h2>
        <p>
          The site does not offer user accounts. The weekly meal planner keeps
          choices in the browser while that page is open. Closing the page can
          clear the list. {site.name} is not responsible for a grocery list
          that was not copied before the page was closed.
        </p>

        <h2>Messages you send</h2>
        <p>
          The <Link href="/contact">contact form</Link> checks your name,
          email, topic, and message, then opens your email app addressed to{" "}
          {site.contactEmail} or {site.privacyEmail}. You are responsible for
          the information you choose to send. Do not include passwords,
          payment card numbers, or another person&apos;s private information.
          We may keep the email long enough to reply and to document a
          correction or a privacy request, as described in the privacy policy.
        </p>

        <h2>Acceptable use</h2>
        <ul>
          <li>Do not attempt to break, scan, or overload the site.</li>
          <li>Do not send unlawful, misleading, or abusive messages to the inboxes above.</li>
          <li>Do not scrape the site in a way that degrades it for other readers.</li>
          <li>Do not use the recipes or the site to mislead a reader about who published them.</li>
        </ul>

        <h2>Intellectual property</h2>
        <p>
          The text, recipe methods, page design, and {site.name} name are
          owned by the publisher except where a page says otherwise. Recipe
          photographs are used under the Unsplash License and remain subject
          to that license. Trademarks of grocery brands mentioned in an
          ingredient list belong to their owners. A mention is not an
          endorsement.
        </p>

        <h2>Advertising and other sites</h2>
        <p>
          Display ads, sponsored posts, and affiliate links are not currently
          on this site. If advertising is added, it will be identified and the
          privacy policy will name the provider. Links to USDA pages, Unsplash,
          and other websites leave {site.url}. Those sites have their own
          terms.
        </p>

        <h2>Disclaimer of warranties</h2>
        <p>
          The site and the recipes are provided as published. {site.name} does
          not warrant that a page is free of error, that a cooking time will
          match every kitchen, or that the site will be available without
          interruption. Nutrition facts are approximate estimates and are not
          a warranty of a calorie, nutrient, or allergen count.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent allowed by law, {site.name} is not liable for
          indirect, incidental, or consequential damages arising from use of
          the site or from cooking a recipe, including a grocery cost, a
          spoiled dish, or an allergic reaction. Nothing in these terms limits
          a right that cannot be limited under the law where you live.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms when the site changes. The date at the top
          will change when we do. Continued use of the site after that date
          means you accept the updated terms. These terms are governed by the
          laws of the United States, without regard to conflict-of-law rules,
          except where the law where you live requires otherwise.
        </p>
      </div>
      <div className="container">
        <ContactDirectory />
      </div>
    </section>
  );
}
