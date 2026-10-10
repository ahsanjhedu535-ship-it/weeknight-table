import Link from "next/link";
import { site, publishedLabel } from "@/lib/site";

export const metadata = {
  title: "Editorial Standards",
  description:
    "How Quick Dinners writes recipes, checks temperatures, labels photos, and handles corrections.",
  alternates: { canonical: "/editorial-standards" },
};

export default function EditorialStandards() {
  return (
    <section className="section">
      <div className="container prose">
        <div className="eyebrow">How this site is edited</div>
        <h1>Editorial standards</h1>
        <p>
          {site.name} publishes weeknight recipes and kitchen guides for home
          cooks in the United States. This page explains how a recipe gets onto
          the site, what the photos show, and how to ask for a correction. The
          current collection was published on {publishedLabel()}.
        </p>
        <h2>Who publishes the site</h2>
        <p>
          The publisher is {site.name}. There is no separate staff byline on
          each recipe.           Questions and corrections go to{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          Privacy requests go to{" "}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. The{" "}
          <Link href="/about">about page</Link> describes who the recipes are
          written for.
        </p>
        <h2>Measurements and time</h2>
        <p>
          Ingredient lines use US cups, tablespoons, teaspoons, and ounces.
          Temperatures in the methods are Fahrenheit, with Celsius beside a
          food-safety temperature. Each recipe lists prep time and cook time
          separately. The total is those two numbers added together. Ovens and
          burners vary, so treat the clock as a guide and the thermometer as
          the check when a step gives a temperature.
        </p>
        <h2>Food safety</h2>
        <p>
          Poultry methods on this site call for 165°F (74°C) in the thickest
          part. That figure comes from the{" "}
          <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart">
            USDA Food Safety and Inspection Service safe temperature chart
          </a>
          . Leftover guidance follows the same agency&apos;s note to refrigerate
          food within two hours and reheat leftovers to 165°F (74°C), described
          on the{" "}
          <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety">
            USDA leftovers and food safety page
          </a>
          . The <Link href="/disclaimer">disclaimer</Link> repeats those limits
          in plain language. This site does not give medical or allergy advice.
        </p>
        <h2>Photos</h2>
        <p>
          Photographs come from Unsplash and are used under the Unsplash
          License. The text in each image&apos;s alt attribute describes the
          picture itself. When a photo shows a similar meal rather than the
          exact plated recipe, the alt text says what is in the frame. The
          ingredient list and the steps are the recipe.
        </p>
        <h2>What these pages do not include</h2>
        <ul>
          <li>Star ratings or reader reviews. None are collected on this site.</li>
          <li>
            Laboratory nutrition labels. Nutrition facts are approximate
            estimates. A number would change with the brand and the portion,
            so a lab panel is left off. The{" "}
            <Link href="/disclaimer">disclaimer</Link> states that limit.
          </li>
          <li>
            Display ads, sponsored recipes, or affiliate links. If advertising
            is added later, the{" "}
            <Link href="/privacy-policy">privacy policy</Link> and the{" "}
            <Link href="/disclaimer">disclaimer</Link> will name the provider.
          </li>
        </ul>
        <h2>The meal planner</h2>
        <p>
          The <Link href="/meal-planner">weekly planner</Link> keeps your day
          picks in the browser only while that page is open. It does not create
          an account and it does not store the grocery list on a server.
        </p>
        <h2>Corrections</h2>
        <p>
          If a quantity, a temperature, or a step looks wrong, email{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> with the recipe
          name and the line you noticed. The{" "}
          <Link href="/contact">contact form</Link> checks the fields, then
          opens your email app addressed to that inbox. It does not save the
          message on this website.
        </p>
      </div>
    </section>
  );
}
