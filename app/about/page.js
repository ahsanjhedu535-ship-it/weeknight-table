import Link from "next/link";
import ContactDirectory from "@/components/ContactDirectory";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Quick Dinners",
  description:
    "Quick Dinners publishes easy weeknight meals, breakfasts, soups, and meal plans for busy American families, using US cups and Fahrenheit.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <section className="section">
      <div className="container prose">
        <div className="eyebrow">About us</div>
        <h1>About Quick Dinners</h1>
        <p>
          Welcome to QuickDinners.online — your go-to source for simple, fast,
          and delicious weeknight meals for busy American families.
        </p>
        <p>
          {site.name} is the publisher of {site.url}. The recipes are written
          for a home kitchen in the United States: a regular grocery store, one
          or two pans, and a clock that still leaves time to eat. You will not
          find a restaurant tasting menu here. You will find chicken, sheet-pan
          dinners, one-pot pasta, soups, breakfasts, and vegetarian plates with
          the quantities written out.
        </p>
        <h2>Who the recipes are for</h2>
        <p>
          The site is for adults cooking at home, including parents feeding a
          family on a weeknight. Measurements are US cups, tablespoons,
          teaspoons, and ounces. Oven and food-safety temperatures are
          Fahrenheit. A safety temperature also shows the Celsius figure so a
          thermometer with either scale can be used.
        </p>
        <h2>What you will find here</h2>
        <ul>
          <li>Weeknight dinners with an ingredient list, prep time, and cook time.</li>
          <li>Breakfasts that can be baked, packed, or cooked in one skillet.</li>
          <li>Soups and vegetarian meals with storage notes and substitutions.</li>
          <li>
            Guides on planning five dinners, building a grocery list, and
            reheating leftovers safely.
          </li>
          <li>
            A weekly meal planner that stays in the browser while the page is
            open. It does not create an account.
          </li>
        </ul>
        <h2>How the recipes are written</h2>
        <p>
          Each method is written as a sequence a home cook can follow. Ovens,
          burners, and ingredient brands differ, so a recipe includes a
          doneness temperature where food safety depends on it. Use a
          thermometer for poultry, and adjust salt and heat to the people at
          the table. The{" "}
          <Link href="/editorial-standards">editorial standards</Link> page
          lists the measurement rules, the USDA temperature sources, and how
          photos are labeled. Nutrition facts are approximate estimates. The{" "}
          <Link href="/disclaimer">recipe disclaimer</Link> explains what that
          means, along with food-safety limits.
        </p>
        <h2>Who to contact</h2>
        <p>
          Recipe questions and corrections go to{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          Privacy, cookie, CCPA, and GDPR requests go to{" "}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. The{" "}
          <Link href="/contact">contact form</Link> checks your name, email,
          topic, and message, then opens your email app addressed to the
          matching inbox. It does not store the message on this website.
        </p>
        <p>
          Read the <Link href="/privacy-policy">privacy policy</Link>, the{" "}
          <Link href="/terms">terms of use</Link>, and the{" "}
          <Link href="/disclaimer">disclaimer</Link> before you rely on a
          recipe for a medical diet or send personal information.
        </p>
      </div>
      <div className="container">
        <ContactDirectory />
      </div>
    </section>
  );
}
