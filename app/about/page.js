import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Quick Dinners",
  description:
    "Quick Dinners publishes easy 30-minute dinner recipes, breakfasts, soups, and meal plans for home cooks in the United States.",
};

export default function About() {
  return (
    <section className="section">
      <div className="container prose">
        <div className="eyebrow">Our kitchen philosophy</div>
        <h1>Good food should fit real life.</h1>
        <p>
          Quick Dinners is a recipe site for home cooks in the United States who
          want dinner on the table in about 30 minutes. Recipes use US cups and
          spoons, Fahrenheit temperatures, and ingredients from a regular
          grocery store.
        </p>
        <h2>What you will find here</h2>
        <ul>
          <li>Weeknight dinners with ingredient lists, prep time, and cook time.</li>
          <li>Breakfasts that can be baked, packed, or cooked in one skillet.</li>
          <li>Soups and vegetarian meals with storage notes and substitutions.</li>
          <li>
            Guides on planning a week, building a grocery list, and reheating
            leftovers safely.
          </li>
        </ul>
        <h2>How the recipes are written</h2>
        <p>
          Each method is written for a home kitchen. Ovens, burners, and
          ingredient brands differ, so the recipes include doneness
          temperatures where food safety depends on them. Use a thermometer for
          poultry, and adjust salt and heat to your own taste.
        </p>
        <h2>Who to contact</h2>
        <p>
          Questions about a recipe, a correction, or this website go to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>. You can also use
          the form on the <Link href="/contact">contact page</Link>, which opens
          your email app with the message addressed to that inbox.
        </p>
      </div>
    </section>
  );
}
