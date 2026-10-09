import Link from "next/link";
export default function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card"> <Link href={`/recipes/${recipe.slug}`} className="card-image-wrap"> <img src={recipe.image} alt={recipe.title} className="card-image" /> <span className="card-tag">{recipe.tag}</span> </Link> <div className="card-content"> <div className="card-meta"> {recipe.category} <span>·</span> {recipe.time} min </div> <h3> <Link href={`/recipes/${recipe.slug}`}>{recipe.title}</Link> </h3> <p>{recipe.description}</p> <Link className="text-link" href={`/recipes/${recipe.slug}`}> Get the recipe <span>↗</span> </Link> </div> </article>
  );
}
