import Link from "next/link";
import ContactDirectory from "@/components/ContactDirectory";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Quick Dinners handles email, hosting logs, Google Fonts, cookies, and CCPA and GDPR requests. Privacy contact: privacy@quickdinners.online.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Privacy() {
  return (
    <section className="section">
      <div className="container prose">
        <div className="eyebrow">Site information</div>
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last updated: October 10, 2026</strong>
        </p>
        <p>
          This policy explains how {site.name}, the publisher of {site.url},
          handles information when you read the site or email us. It covers
          cookies, advertising, and the privacy rights described by the
          California Consumer Privacy Act (CCPA), as amended by the California
          Privacy Rights Act, and by the EU and UK General Data Protection
          Regulation (GDPR).
        </p>
        <p>
          Privacy questions and requests go to{" "}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
          Recipe questions go to{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. You
          can also start a privacy message from the{" "}
          <Link href="/contact?topic=privacy">contact form</Link>, which
          addresses that topic to the privacy inbox.
        </p>

        <h2>Who this policy applies to</h2>
        <p>
          This policy applies to visitors of {site.url}, including visitors in
          the United States, California, the European Economic Area, and the
          United Kingdom. The site is written for adults who cook at home. It
          is not directed at children under 13, and we do not knowingly collect
          personal information from children.
        </p>

        <h2>Information you send by email</h2>
        <p>
          The contact form does not store messages in a database on this
          website. It checks that your name, email address, topic, and message
          are usable, then opens your own email app. Recipe topics are
          addressed to {site.contactEmail}. Privacy topics are addressed to{" "}
          {site.privacyEmail}. If you send that email, we receive what you
          chose to include, such as your name, your email address, and your
          message. We use it to reply, to correct a recipe, or to handle a
          privacy request. We do not sell that correspondence.
        </p>

        <h2>Information collected automatically</h2>
        <p>
          The site is hosted on Vercel. Like most hosts, Vercel processes
          technical request data such as IP address, browser type, date and
          time, and the page requested so the site can be delivered and
          protected from abuse. That processing is described in Vercel&apos;s
          own privacy terms. {site.name} does not run a separate analytics
          product and does not build a visitor profile from those logs.
        </p>

        <h2>Google Fonts</h2>
        <p>
          Pages load Playfair Display and DM Sans from Google Fonts. Your
          browser requests those font files from Google, and Google may receive
          your IP address as part of that request. The font request is what
          lets the pages use those typefaces.
        </p>

        <h2>Cookies</h2>
        <p>
          A cookie is a small text file a site or another service can store on
          your browser. Here is what this site does with cookies today:
        </p>
        <ul>
          <li>
            <strong>No advertising cookies.</strong> Display ads are not
            installed, so an ad network is not setting cookies on these pages.
          </li>
          <li>
            <strong>No analytics cookies.</strong> There is no analytics tag
            writing a visitor cookie.
          </li>
          <li>
            <strong>No account cookie.</strong> The site does not ask you to
            create an account.
          </li>
          <li>
            <strong>Meal planner.</strong> The weekly planner and the
            ingredient checkboxes keep choices in memory while the page is
            open. They do not write a tracking cookie and they do not save the
            grocery list on a server.
          </li>
        </ul>
        <p>
          If Google AdSense or another ad network is added later, that provider
          may set or read cookies to show ads, limit how often you see an ad,
          measure whether an ad was viewed, and, where the law allows, tailor
          ads. Before that happens, this policy will name the provider. You
          can control personalized Google ads at{" "}
          <a href="https://adssettings.google.com/">Google&apos;s ad settings</a>{" "}
          and industry opt-out tools such as the{" "}
          <a href="https://optout.aboutads.info/">
            Digital Advertising Alliance
          </a>{" "}
          and{" "}
          <a href="https://www.youronlinechoices.eu/">Your Online Choices</a>{" "}
          for Europe. Browser settings can also block or delete cookies.
        </p>

        <h2>How information is used</h2>
        <ul>
          <li>To deliver the pages you request.</li>
          <li>To reply to email you send us.</li>
          <li>To correct a recipe, guide, or page when you report an error.</li>
          <li>To respond to access, correction, and deletion requests.</li>
          <li>To protect the site from abuse and to keep host logs.</li>
        </ul>
        <p>
          We do not sell personal information. We do not share personal
          information for cross-context behavioral advertising. We do not use
          email you send us for an unrelated mailing list.
        </p>

        <h2>California privacy rights (CCPA / CPRA)</h2>
        <p>
          If you are a California resident, you can ask {site.name} to:
        </p>
        <ul>
          <li>Tell you the categories and specific pieces of personal information we hold about you.</li>
          <li>Correct inaccurate personal information.</li>
          <li>Delete personal information, subject to records we must keep to complete a request you made or to document a legal claim.</li>
          <li>Opt out of the sale or sharing of personal information.</li>
        </ul>
        <p>
          {site.name} does not sell personal information and does not share it
          as the CCPA defines “share.” You can still send an opt-out or any
          other California request to{" "}
          <a href={`mailto:${site.privacyEmail}?subject=California%20privacy%20request`}>
            {site.privacyEmail}
          </a>
          . Use the subject line “California privacy request.” We will not
          discriminate against you for exercising these rights. We will ask
          only for what we need to find the email you already sent us. An
          authorized agent may submit a request if you give that agent written
          permission and we can verify it.
        </p>
        <p>
          In the past 12 months, the personal information this site receives
          directly is the content of emails visitors choose to send, plus
          technical hosting logs processed by the host. We do not collect
          government ID numbers, precise geolocation, or financial account
          numbers through the website.
        </p>

        <h2>EEA and UK privacy rights (GDPR)</h2>
        <p>
          If you are in the European Economic Area or the United Kingdom, you
          can ask to access, correct, delete, or restrict personal data, to
          object to processing based on legitimate interests, and to receive a
          portable copy of data you provided. You can also complain to your
          local data protection authority. In the United Kingdom, that is the
          Information Commissioner&apos;s Office.
        </p>
        <p>
          The legal bases we rely on are: your request, when you email us and
          we reply; legitimate interests, when the host processes technical
          logs to deliver and protect the site; and consent, if a non-essential
          cookie is ever added. Consent would be asked before that cookie is
          set, and you could withdraw it later by emailing{" "}
          {site.privacyEmail}.
        </p>
        <p>
          Hosting and font delivery may process an IP address outside your
          country, including in the United States, under the host&apos;s and
          Google&apos;s own transfer terms. Send GDPR requests to{" "}
          <a href={`mailto:${site.privacyEmail}?subject=GDPR%20privacy%20request`}>
            {site.privacyEmail}
          </a>
          .
        </p>

        <h2>External links and images</h2>
        <p>
          Some recipe photos are loaded from Unsplash under the Unsplash
          License. Pages may also link to USDA food-safety pages and to other
          websites. Those services have their own privacy practices, which we
          do not control.
        </p>

        <h2>Retention</h2>
        <p>
          Email you send is kept long enough to answer you, to keep a record
          of a correction, and to show how a privacy request was handled. You
          can ask us to delete that correspondence by emailing{" "}
          {site.privacyEmail}. Hosting logs follow the host&apos;s retention
          schedule.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy when the site changes, including if
          advertising cookies are added. The date at the top will change when
          we do. The <Link href="/terms">terms of use</Link> and the{" "}
          <Link href="/disclaimer">recipe disclaimer</Link> sit beside this
          policy.
        </p>
      </div>
      <div className="container">
        <ContactDirectory />
      </div>
    </section>
  );
}
