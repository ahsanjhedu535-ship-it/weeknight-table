import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes, findRecipe } from "@/lib/recipes";
import RecipeInteractive from "./RecipeInteractive";
export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
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
export default function RecipePage({ params }) {
  const recipe = findRecipe(params.slug);
  if (!recipe) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    image: [recipe.image],
    author: { "@type": "Organization", name: "Weeknight Table" },
    description: recipe.description,
    prepTime: "PT10M",
    cookTime: `PT${Math.max(10, recipe.time - 10)}M`,
    totalTime: `PT${recipe.time}M`,
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: recipe.category,
    keywords: recipe.keywords.join(", "),
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.steps.map((s) => ({
      "@type": "HowToStep",
      text: s,
    })),
  };
  return (
    <> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> <section className="page-hero"> <div className="container"> <div className="breadcrumbs"> <Link href="/">Home</Link> /{" "} <Link href={`/category/${recipe.category.toLowerCase()}`}> {recipe.category} </Link>{" "} / {recipe.title} </div> <div className="eyebrow">{recipe.tag}</div> <h1>{recipe.title}</h1> <p>{recipe.description}</p> <div className="card-meta"> {recipe.category} <span>·</span> {recipe.time} minutes{" "} <span>·</span> {recipe.difficulty} </div> </div> </section> <RecipeInteractive recipe={recipe} /> </>
  );
}
