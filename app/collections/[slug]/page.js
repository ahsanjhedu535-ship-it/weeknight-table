import Link from "next/link";
import { notFound } from "next/navigation";
import RecipeCard from "@/components/RecipeCard";
import FaqAccordion from "@/components/FaqAccordion";
import { collections, findCollection } from "@/lib/collections";
import { findRecipe } from "@/lib/recipes";
import { site } from "@/lib/site";
import { breadcrumbList, pageUrl, socialPageMeta } from "@/lib/schema";

const collectionFaqs = {
  "30-minute-chicken": [
    {
      question: "Do these chicken dinners really finish in 30 minutes?",
      answer:
        "Most do when the chicken is cut small or pounded thin and prep is done before the pan heats. Check poultry to 165°F (74°C). Sheet-pan recipes may need a little more oven time after a short prep.",
    },
    {
      question: "What cut of chicken works best for weeknights?",
      answer:
        "Boneless thighs and thin cutlets cook evenly in a skillet. Whole bone-in pieces belong on a longer sheet-pan night, not a 30-minute plan.",
    },
  ],
  "one-pot-pasta": [
    {
      question: "How do I keep one-pan pasta from sticking?",
      answer:
        "Use enough broth at the start, stir early, then cover so steam cooks the noodles. Add a splash of liquid if the pan looks dry before the pasta is tender.",
    },
    {
      question: "Can I reheat creamy pasta leftovers?",
      answer:
        "Yes. Reheat gently with a splash of broth or milk. Cream sauces thicken in the fridge and do not freeze well.",
    },
  ],
  "quick-soup-recipes": [
    {
      question: "Which soups freeze well?",
      answer:
        "Bean, lentil, tomato, and broth-based chicken soups freeze cleanly. Hold noodles, rice, and dairy until reheating when you can.",
    },
    {
      question: "How should I store leftover soup?",
      answer:
        "Cool in a wide container and refrigerate within two hours. Store noodles apart from broth when possible, and reheat until steaming.",
    },
  ],
  "quick-vegetarian-meals": [
    {
      question: "Are these vegetarian meals filling enough for dinner?",
      answer:
        "Yes. Beans, eggs, tofu, cheese, or coconut milk carry the plate. Pair with rice, tortillas, or pasta if you need more volume.",
    },
    {
      question: "What pantry staples show up most?",
      answer:
        "Canned beans, chickpeas, tortillas, rice, pesto, and frozen vegetables. Season beans in the pan so they taste cooked, not straight from the can.",
    },
  ],
  "sheet-pan-dinners": [
    {
      question: "Why do some vegetables start alone on the pan?",
      answer:
        "Dense potatoes and sweet potatoes need a head start so they soften before quicker proteins and broccoli finish. Crowding the pan steams food instead of browning it.",
    },
    {
      question: "What temperature should sheet-pan chicken reach?",
      answer:
        "165°F (74°C) in the thickest part. Rest a few minutes before slicing so juices stay in the meat.",
    },
  ],
};

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }) {
  const collection = findCollection(params.slug);
  if (!collection) return { title: "Collection not found" };
  const hero = findRecipe(collection.recipeSlugs[0]);
  return socialPageMeta({
    title: collection.title,
    description: collection.description,
    path: `/collections/${params.slug}`,
    keywords: collection.keywords,
    image: hero
      ? { url: hero.image, alt: hero.imageAlt || collection.title }
      : undefined,
  });
}

export default function CollectionPage({ params }) {
  const collection = findCollection(params.slug);
  if (!collection) notFound();

  const matches = collection.recipeSlugs
    .map((slug) => findRecipe(slug))
    .filter(Boolean);
  const faqs = collectionFaqs[collection.slug] || [];
  const url = pageUrl(`/collections/${collection.slug}`);
  const crumbs = breadcrumbList([
    { name: "Home", url: site.url },
    { name: collection.title, url },
  ]);
  const itemList = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: collection.title,
    description: collection.description,
    url,
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListUnordered",
      numberOfItems: matches.length,
      itemListElement: matches.map((recipe, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: pageUrl(`/recipes/${recipe.slug}`),
        name: recipe.title,
      })),
    },
  };
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
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
            <Link href="/">Home</Link> / {collection.title}
          </div>
          <div className="eyebrow">Recipe collection</div>
          <h1>{collection.title}</h1>
          <p>{collection.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>
                {matches.length} recipes in this collection
              </h2>
              <p>{collection.description}</p>
            </div>
            <Link className="text-link" href="/meal-planner">
              Add several to the planner
            </Link>
          </div>
          {matches.length ? (
            <div className="recipe-grid">
              {matches.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
            </div>
          ) : (
            <p>Recipes for this collection are still being published.</p>
          )}
          {faqs.length > 0 && (
            <div style={{ marginTop: 48 }}>
              <h2>Common questions</h2>
              <FaqAccordion items={faqs} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
