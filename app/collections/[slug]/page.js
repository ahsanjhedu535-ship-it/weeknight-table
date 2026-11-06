import Link from "next/link";
import { notFound } from "next/navigation";
import RecipeCard from "@/components/RecipeCard";
import { collections, findCollection } from "@/lib/collections";
import { findRecipe } from "@/lib/recipes";
import { site } from "@/lib/site";
import { breadcrumbList, pageUrl } from "@/lib/schema";

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }) {
  const collection = findCollection(params.slug);
  if (!collection) return { title: "Collection not found" };
  return {
    title: collection.title,
    description: collection.description,
    keywords: collection.keywords,
    alternates: { canonical: `/collections/${params.slug}` },
    openGraph: {
      title: collection.title,
      description: collection.description,
      url: pageUrl(`/collections/${params.slug}`),
    },
  };
}

export default function CollectionPage({ params }) {
  const collection = findCollection(params.slug);
  if (!collection) notFound();

  const matches = collection.recipeSlugs
    .map((slug) => findRecipe(slug))
    .filter(Boolean);
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
        </div>
      </section>
    </>
  );
}
