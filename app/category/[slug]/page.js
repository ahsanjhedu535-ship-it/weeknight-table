import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, recipes } from "@/lib/recipes";
import RecipeCard from "@/components/RecipeCard";

const categoryNames = {
  dinner: "Dinner",
  breakfast: "Breakfast",
  soups: "Soups",
  vegetarian: "Vegetarian",
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

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
  };
}

export default function CategoryPage({ params }) {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) notFound();

  const matches = recipes.filter(
    (recipe) => recipe.category === categoryNames[category.slug]
  );

  return (
    <>
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
    </>
  );
}
