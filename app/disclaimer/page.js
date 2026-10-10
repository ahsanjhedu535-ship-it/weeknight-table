import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Recipe Disclaimer",
  description:
    "Food-safety, nutrition, and advertising notes for recipes published by Quick Dinners.",
};

export default function Disclaimer() {
  return (
    <section className="section">
      <div className="container prose">
        <div className="eyebrow">Please read</div>
        <h1>Recipe and website disclaimer</h1>
        <p>
          Quick Dinners publishes general cooking and meal-planning
          information for home cooks. Results change with ingredients,
          equipment, altitude, and how your oven runs. Read each method all the
          way through before you start.
        </p>
        <h2>Food safety</h2>
        <p>
          Keep raw meat, poultry, and seafood separate from food you will eat
          raw. Refrigerate leftovers within two hours. Poultry should reach
          165°F (74°C) in the thickest part. Reheat leftovers until they are
          steaming hot, about 165°F (74°C). Use a food thermometer. Color and
          juices are not a reliable doneness test.
        </p>
        <h2>Nutrition</h2>
        <p>
          These pages do not provide medical or personalized nutrition advice.
          If a nutrition estimate is added later, treat it as approximate,
          because brands and portions differ. Talk with a qualified
          professional about allergies, medical diets, or other health needs.
        </p>
        <h2>Advertising</h2>
        <p>
          This site does not currently run display ads, sponsored posts, or
          affiliate links. If advertising is added, it will be identified, and
          the <Link href="/privacy-policy">privacy policy</Link> will name the
          provider.
        </p>
        <h2>Corrections</h2>
        <p>
          If a quantity, temperature, or step looks wrong, email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> and we will review
          it.
        </p>
      </div>
    </section>
  );
}
