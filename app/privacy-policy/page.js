import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Quick Dinners handles email you send us, hosting logs, Google Fonts, and advertising cookies if ads are added later.",
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
          This policy describes how {site.name} ({site.url}) handles
          information when you read the site or email us. The publisher is
          Quick Dinners. Privacy questions go to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <h2>Information you send by email</h2>
        <p>
          The contact form does not store messages in a database on this
          website. It opens your own email app and addresses the message to{" "}
          {site.email}. If you send that email, we receive whatever you chose
          to include, such as your name, your email address, and your message.
          We use it to reply and to fix recipe or site issues. We do not sell
          that correspondence.
        </p>
        <h2>Hosting</h2>
        <p>
          The site is hosted on Vercel. Like most hosts, Vercel processes
          technical request data such as IP address, browser type, and the page
          requested so the site can be delivered and protected from abuse. That
          processing is covered by Vercel&apos;s own privacy terms.
        </p>
        <h2>Google Fonts</h2>
        <p>
          Pages load Playfair Display and DM Sans from Google Fonts. Your
          browser requests those font files from Google, and Google may receive
          your IP address as part of that request. The font request is what
          lets the pages use those typefaces.
        </p>
        <h2>Cookies and on-page tools</h2>
        <p>
          The meal planner and the ingredient checkboxes keep their choices in
          memory while the page is open. They do not write a tracking cookie.
          This site does not currently run an analytics product.
        </p>
        <h2>Advertising</h2>
        <p>
          Advertising is not installed on this site today. If Google AdSense is
          added later, Google may set or read cookies to show ads, limit how
          often you see an ad, and measure ad performance. You can control
          personalized ads through{" "}
          <a href="https://adssettings.google.com/">Google&apos;s ad settings</a>.
          If ads are turned on, this section will be updated to name that
          provider.
        </p>
        <h2>External links and images</h2>
        <p>
          Some recipe photos are loaded from Unsplash under the Unsplash
          License. Pages may also link to other websites. Those services have
          their own privacy practices, which we do not control.
        </p>
        <h2>Children</h2>
        <p>
          This site is written for adults who cook at home. It is not directed
          at children under 13, and we do not knowingly collect personal
          information from children.
        </p>
        <h2>Retention and your requests</h2>
        <p>
          Email you send us is kept long enough to answer you and to keep a
          record of corrections. You can ask us to delete that correspondence
          by emailing {site.email}. We may update this policy when the site
          changes; the date at the top will change when we do.
        </p>
      </div>
    </section>
  );
}
