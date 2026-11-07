import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, findGuide } from "@/lib/guides";
import { site, publishedLabel } from "@/lib/site";
import FaqAccordion from "@/components/FaqAccordion";
import { breadcrumbList, pageUrl, publisher, socialPageMeta } from "@/lib/schema";
import { findRecipe } from "@/lib/recipes";

const guideRecipeLinks = {
  "how-to-make-creamy-orzo-without-drying-out": [
    "creamy-tuscan-chicken-orzo",
    "lemon-chicken-orzo-skillet",
    "pesto-chicken-orzo",
  ],
  "what-to-cook-with-black-beans-and-sweet-potatoes": [
    "sweet-potato-black-bean-bowls",
    "black-bean-sweet-potato-tacos",
    "crispy-black-bean-tacos",
  ],
  "quick-soup-recipes-for-busy-nights": [
    "easy-chicken-noodle-soup",
    "20-minute-tomato-soup",
    "quick-black-bean-soup",
  ],
  "building-a-quick-vegetarian-dinner": [
    "spinach-white-bean-skillet",
    "mediterranean-chickpea-bowls",
    "weeknight-shakshuka",
  ],
  "sheet-pan-timing-for-chicken-and-vegetables": [
    "sheet-pan-maple-chicken-sweet-potatoes",
    "lemon-pepper-sheet-pan-chicken",
    "sheet-pan-ranch-chicken",
  ],
  "taco-skillet-sauce-basics": [
    "turkey-taco-skillet",
    "turkey-burrito-bowls",
    "turkey-taco-soup",
  ],
  "freezer-soups-that-reheat-well": [
    "freezer-friendly-chicken-tortilla-soup",
    "lentil-vegetable-soup",
    "turkey-taco-soup",
  ],
  "30-minute-chicken-dinners-that-actually-finish-on-time": [
    "garlic-butter-chicken-bites",
    "balsamic-chicken-skillet",
    "skillet-chicken-piccata",
  ],
  "leftover-rice-dinners": [
    "chicken-fried-rice",
    "turkey-burrito-bowls",
    "mediterranean-chickpea-bowls",
  ],
  "skillet-chicken-pan-sauce-basics": [
    "balsamic-chicken-skillet",
    "skillet-chicken-piccata",
    "honey-garlic-chicken-thighs",
  ],
  "vegetarian-protein-shortcuts": [
    "weeknight-shakshuka",
    "miso-ginger-tofu-bowls",
    "crispy-veggie-quesadillas",
  ],
  "one-pan-pasta-timing": [
    "creamy-mushroom-pasta",
    "one-pan-tomato-gnocchi",
    "sun-dried-tomato-chicken-pasta",
  ],
  "how-to-build-a-weeknight-bowl": [
    "mediterranean-chickpea-bowls",
    "buffalo-cauliflower-bowls",
    "turkey-burrito-bowls",
  ],
  "creamy-soup-without-heavy-cream": [
    "quick-black-bean-soup",
    "roasted-butternut-squash-soup",
    "thai-coconut-chicken-soup",
  ],
  "simple-cream-sauce-for-pasta": [
    "garlic-parmesan-cream-pasta",
    "creamy-mushroom-pasta",
    "one-pan-creamy-sausage-pasta",
  ],
  "how-long-leftover-soup-lasts": [
    "easy-chicken-noodle-soup",
    "easy-vegetable-minestrone",
    "freezer-friendly-chicken-tortilla-soup",
  ],
  "how-to-store-soup-rice-and-pasta": [
    "easy-chicken-noodle-soup",
    "creamy-tortellini-soup",
    "chicken-fried-rice",
  ],
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }) {
  const guide = findGuide(params.slug);
  if (!guide) return { title: "Guide not found" };
  return socialPageMeta({
    title: guide.title,
    description: guide.description,
    path: `/guides/${params.slug}`,
    keywords: guide.keywords,
    type: "article",
  });
}

export default function GuidePage({ params }) {
  const guide = findGuide(params.slug);
  if (!guide) notFound();
  const relatedRecipes = (guideRecipeLinks[guide.slug] || [])
    .map((slug) => findRecipe(slug))
    .filter(Boolean);
  const url = pageUrl(`/guides/${guide.slug}`);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: site.published,
    dateModified: site.updated,
    inLanguage: "en-US",
    mainEntityOfPage: url,
    author: publisher,
    publisher,
  };
  const crumbs = breadcrumbList([
    { name: "Home", url: site.url },
    { name: "Guides", url: pageUrl("/guides") },
    { name: guide.title, url },
  ]);
  const faqs = guide.faqs || [];
  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / <Link href="/guides">Guides</Link> /{" "}
            {guide.title}
          </div>
          <div className="eyebrow">{guide.minutes} minute read</div>
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
          <p className="byline">
            Published {publishedLabel()} by{" "}
            <Link href="/about">{site.name}</Link>.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container prose">
          {guide.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
          {faqs.length > 0 && (
            <>
              <h2>Common questions</h2>
              <FaqAccordion items={faqs} />
            </>
          )}
          {relatedRecipes.length > 0 && (
            <>
              <h2>Recipes that pair with this guide</h2>
              <ul>
                {relatedRecipes.map((recipe) => (
                  <li key={recipe.slug}>
                    <Link href={`/recipes/${recipe.slug}`}>{recipe.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          <p>
            <Link className="text-link" href="/meal-planner">
              Open the meal planner <span>→</span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
