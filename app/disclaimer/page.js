import Link from "next/link";
import ContactDirectory from "@/components/ContactDirectory";
import { site } from "@/lib/site";

export const metadata = {
  title: "Recipe Disclaimer",
  description:
    "Food-safety, nutrition, and advertising notes for Quick Dinners. Nutrition facts are approximate estimates.",
  alternates: { canonical: "/disclaimer" },
};

export default function Disclaimer() {
  return (
    <section className="section">
      <div className="container prose">
        <div className="eyebrow">Please read</div>
        <h1>Recipe and nutrition disclaimer</h1>
        <p>
          Quick Dinners publishes general cooking and meal-planning information
          for home cooks in the United States. Results change with ingredients,
          equipment, altitude, and how your oven runs. Read each method all the
          way through before you start.
        </p>

        <h2>Nutrition facts are approximate estimates</h2>
        <p>
          <strong>Nutrition facts are approximate estimates.</strong> A
          different brand of broth, a heavier pour of oil, a larger egg, or a
          different serving size changes the numbers. {site.name} does not
          publish a laboratory nutrition label on each recipe, and a figure
          mentioned anywhere on this site is not a chemical analysis. It is an
          estimate for a home kitchen. It is not medical advice, not a
          treatment, and not a promise that a dish is suitable for diabetes,
          kidney disease, pregnancy, or any other health need.
        </p>
        <p>
          Allergen information is only as complete as the ingredient line you
          are reading. Packaged foods can change formulas, and a shared pan can
          carry milk, egg, wheat, soy, peanuts, tree nuts, fish, shellfish, or
          sesame. Read the label on what you buy, and talk with a qualified
          clinician about a medical diet. Do not use these pages to diagnose or
          treat a condition.
        </p>

        <h2>Food safety</h2>
        <p>
          Keep raw meat, poultry, and seafood separate from food you will eat
          raw. Refrigerate leftovers within two hours, or within one hour if
          the room is above 90°F (32°C). Poultry should reach 165°F (74°C) in
          the thickest part. Reheat leftovers until they are steaming hot,
          about 165°F (74°C). Use a food thermometer. Color and juices are not
          a reliable doneness test. Those temperatures and the refrigeration
          window come from the{" "}
          <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart">
            USDA safe temperature chart
          </a>{" "}
          and the{" "}
          <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety">
            USDA leftovers page
          </a>
          . Read the{" "}
          <Link href="/editorial-standards">editorial standards</Link> for how
          this site uses them.
        </p>
        <p>
          Ground meat, leftovers, and stuffed foods need the temperatures on
          that USDA chart, not a guess from the outside of the pan. When a
          recipe on this site gives a temperature, follow the higher of the
          recipe and the USDA chart if they ever differ. Wash hands, boards,
          and knives after they touch raw poultry or meat.
        </p>

        <h2>Photos and measurements</h2>
        <p>
          Photos are licensed images. The alt text describes the picture. When
          a photo shows a similar meal rather than the exact plated recipe, the
          ingredient list and the steps are the recipe. Measurements are US
          cups and spoons unless a line says otherwise. A packed cup and a
          level cup are not the same, so follow the wording on that line.
        </p>

        <h2>Advertising</h2>
        <p>
          This site does not currently run display ads, sponsored posts, or
          affiliate links. If advertising is added, it will be identified, and
          the <Link href="/privacy-policy">privacy policy</Link> will name the
          provider and the cookies that come with it. An ad, if one appears
          later, is not an endorsement of the product by {site.name}.
        </p>

        <h2>Corrections</h2>
        <p>
          If a quantity, temperature, or step looks wrong, email{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> or
          use the <Link href="/contact">contact form</Link>. Privacy questions
          about this page go to{" "}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. The{" "}
          <Link href="/terms">terms of use</Link> explain how the recipes may
          be used.
        </p>
      </div>
      <div className="container">
        <ContactDirectory />
      </div>
    </section>
  );
}
