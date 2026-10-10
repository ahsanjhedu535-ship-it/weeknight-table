import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes, findRecipe, categories } from "@/lib/recipes";
import { site } from "@/lib/site";
import RecipeInteractive from "./RecipeInteractive";

const cuisineBySlug = {
  "creamy-tuscan-chicken-orzo": "Italian",
  "one-pot-tomato-basil-pasta": "Italian",
  "shrimp-garlic-pasta": "Italian",
  "spinach-ricotta-pasta": "Italian",
  "skillet-turkey-meatballs": "Italian",
  "sausage-pepper-and-onion-pasta": "Italian",
  "crispy-black-bean-tacos": "Mexican",
  "turkey-taco-skillet": "Mexican",
  "sheet-pan-chicken-fajitas": "Mexican",
  "chicken-tortilla-soup": "Mexican",
  "beef-and-broccoli-stir-fry": "Asian",
  "vegetable-fried-rice": "Asian",
  "chickpea-coconut-curry": "Indian",
};

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }) {
  const recipe = findRecipe(params.slug);
  return recipe
    ? {
        title: recipe.title,
        description: recipe.description,
        keywords: recipe.keywords,
        openGraph: {
          title: recipe.title,
          description: recipe.description,
          images: [recipe.image],
        },
      }
    : { title: "Recipe not found" };
}

function categorySlug(categoryName) {
  return (
    categories.find((category) =>
      category.name.toLowerCase().includes(categoryName.toLowerCase().replace(/s$/, ""))
    )?.slug || categoryName.toLowerCase()
  );
}

export default function RecipePage({ params }) {
  const recipe = findRecipe(params.slug);
  if (!recipe) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    image: [recipe.image],
    author: { "@type": "Organization", name: site.name },
    description: recipe.description,
    prepTime: `PT${recipe.prepMinutes}M`,
    cookTime: `PT${recipe.cookMinutes}M`,
    totalTime: `PT${recipe.prepMinutes + recipe.cookMinutes}M`,
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: recipe.category,
    recipeCuisine: cuisineBySlug[recipe.slug] || "American",
    inLanguage: "en-US",
    keywords: recipe.keywords.join(", "),
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.steps.map((step) => ({
      "@type": "HowToStep",
      text: step,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> /{" "}
            <Link href={`/category/${categorySlug(recipe.category)}`}>
              {recipe.category}
            </Link>{" "}
            / {recipe.title}
          </div>
          <div className="eyebrow">{recipe.tag}</div>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <div className="card-meta">
            {recipe.category} <span>·</span> {recipe.prepMinutes} min prep{" "}
            <span>·</span> {recipe.cookMinutes} min cook <span>·</span>{" "}
            {recipe.difficulty}
          </div>
        </div>
      </section>
      <RecipeInteractive recipe={recipe} />
    </>
  );
}
