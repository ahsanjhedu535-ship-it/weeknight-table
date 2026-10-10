import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, recipes } from "@/lib/recipes";
import RecipeCard from "@/components/RecipeCard";
import { site } from "@/lib/site";
import { breadcrumbList, pageUrl } from "@/lib/schema";

const categoryNames = {
  dinner: "Dinner",
  breakfast: "Breakfast",
  soups: "Soups",
  vegetarian: "Vegetarian",
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

const categoryGuides = {
  dinner: {
    heading: "When a dinner from this list fits",
    body: "Use this collection on nights you are home and cooking for the people who live there. A 20-minute skillet fits a late evening. A sheet-pan recipe fits a night when the oven can run while you unpack. Leave one night for leftovers instead of cooking all seven days.",
    starters: [
      "sheet-pan-maple-chicken-sweet-potatoes",
      "creamy-tuscan-chicken-orzo",
      "beef-and-broccoli-stir-fry",
    ],
  },
  breakfast: {
    heading: "When these breakfasts fit the week",
    body: "Bake or roll a batch on Sunday if weekday mornings are short. The oatmeal, burritos, overnight oats, and frittata keep in the refrigerator. Cook the pancakes on a morning when you can stand at the skillet.",
    starters: [
      "apple-cinnamon-baked-oatmeal",
      "veggie-breakfast-burritos",
      "berry-overnight-oats",
    ],
  },
  soups: {
    heading: "When a pot of soup is the right dinner",
    body: "Soup covers more than one meal from one pot. Make it when you want leftovers for lunch, or when the oven is already busy. Cool it in a wide container and refrigerate it within two hours.",
    starters: [
      "easy-chicken-noodle-soup",
      "creamy-tomato-soup",
      "lentil-vegetable-soup",
    ],
  },
  vegetarian: {
    heading: "When a meatless plate fits",
    body: "These dinners are for a night without meat, not a night of only salad. Beans, eggs, cheese, or coconut milk do the filling work. They shop from the same pantry as the chicken and pasta recipes.",
    starters: [
      "crispy-black-bean-tacos",
      "chickpea-coconut-curry",
      "spinach-ricotta-pasta",
    ],
  },
};

const categorySeo = {
  dinner: {
    title: "Easy Dinner Recipes",
    description:
      "Easy dinner recipes for busy US weeknights: 30-minute chicken, sheet-pan meals, one-pot pasta, and ground turkey skillets.",
  },
  breakfast: {
    title: "Easy Breakfast Recipes",
    description:
      "Make-ahead breakfast recipes with US measurements: baked oatmeal, breakfast burritos, overnight oats, and pancakes.",
  },
  soups: {
    title: "Easy Soup Recipes",
    description:
      "Easy soup recipes for dinner: chicken noodle, tomato, lentil, white bean, and chicken tortilla soup.",
  },
  vegetarian: {
    title: "Easy Vegetarian Dinner Recipes",
    description:
      "Easy vegetarian dinner recipes: black bean tacos, chickpea curry, fried rice, and 30-minute pasta.",
  },
};

export async function generateMetadata({ params }) {
  const seo = categorySeo[params.slug];
  return {
    title: seo?.title || "Recipe Category",
    description: seo?.description,
    alternates: { canonical: `/category/${params.slug}` },
  };
}

export default function CategoryPage({ params }) {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) notFound();

  const matches = recipes.filter(
    (recipe) => recipe.category === categoryNames[category.slug]
  );
  const url = pageUrl(`/category/${category.slug}`);
  const crumbs = breadcrumbList([
    { name: "Home", url: site.url },
    { name: category.name, url },
  ]);
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.name,
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: matches.length,
    itemListElement: matches.map((recipe, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: pageUrl(`/recipes/${recipe.slug}`),
      name: recipe.title,
    })),
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
            <Link href="/">Home</Link> / {category.name}
          </div>
          <div className="eyebrow">Browse by category</div>
          <h1>{category.name}</h1>
          <p>{category.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>
                {matches.length
                  ? `${matches.length} recipes in this collection`
                  : "More recipes coming soon"}
              </h2>
              <p>{category.body}</p>
            </div>
          </div>
          {matches.length ? (
            <div className="recipe-grid">
              {matches.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
            </div>
          ) : (
            <p>Check back after the next recipe update, or browse another category.</p>
          )}
        </div>
      </section>
      {categoryGuides[category.slug] && (
        <section className="section section-soft">
          <div className="container prose">
            <h2>{categoryGuides[category.slug].heading}</h2>
            <p>{categoryGuides[category.slug].body}</p>
            <h2>Start with these three</h2>
            <ul>
              {categoryGuides[category.slug].starters.map((slug) => {
                const recipe = recipes.find((item) => item.slug === slug);
                if (!recipe) return null;
                return (
                  <li key={slug}>
                    <Link href={`/recipes/${recipe.slug}`}>{recipe.title}</Link>
                    {". "}
                    {recipe.description}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
