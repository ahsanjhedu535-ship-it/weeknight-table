import { notFound } from "next/navigation";
import { categories, recipes } from "@/lib/recipes";
import RecipeCard from "@/components/RecipeCard";
export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({ params }) {
  const cat = categories.find((c) => c.slug === params.slug);
  return {
    title: cat ? `${cat.name} Recipes` : "Recipe Category",
    description: cat?.desc,
  };
}
export default function CategoryPage({ params }) {
  const cat = categories.find((c) => c.slug === params.slug);
  if (!cat) notFound();
  const matches = recipes.filter(
    (r) =>
      r.category.toLowerCase() ===
        cat.name.toLowerCase().replace("easy ", "").replace(" & stews", "s") ||
      (cat.slug === "dinner" && r.category === "Dinner") ||
      (cat.slug === "soups" && r.category === "Soups") ||
      (cat.slug === "breakfast" && r.category === "Breakfast") ||
      (cat.slug === "vegetarian" && r.category === "Vegetarian")
  );
  return (
    <> <section className="page-hero"> <div className="container"> <div className="breadcrumbs"> <a href="/">Home</a> / {cat.name} </div> <div className="eyebrow">Browse by category</div> <h1>{cat.name}</h1> <p> {cat.desc} Every recipe includes straightforward instructions, practical tips, and ingredients you can find at a regular grocery store. </p> </div> </section> <section className="section"> <div className="container"> <div className="section-heading"> <div> <h2> {matches.length ? `Our ${cat.name.toLowerCase()} picks` : "More recipes coming soon"} </h2> <p> Tested-style home cooking inspiration for your everyday table. </p> </div> </div> {matches.length ? ( <div className="recipe-grid"> {matches.map((r) => ( <RecipeCard key={r.slug} recipe={r} /> ))} </div> ) : ( <p> We’re adding more recipes to this collection. Explore all recipes for more ideas. </p> )} </div> </section> </>
  );
}
