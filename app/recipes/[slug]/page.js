import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes, findRecipe, categories } from "@/lib/recipes";
import { site, publishedLabel } from "@/lib/site";
import { breadcrumbList, pageUrl, publisher } from "@/lib/schema";
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
        alternates: { canonical: `/recipes/${params.slug}` },
        openGraph: {
          title: recipe.title,
          description: recipe.description,
          url: pageUrl(`/recipes/${params.slug}`),
          images: [{ url: recipe.image, alt: recipe.imageAlt || recipe.title }],
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

  const url = pageUrl(`/recipes/${recipe.slug}`);
  const crumbs = breadcrumbList([
    { name: "Home", url: site.url },
    {
      name: recipe.category,
      url: pageUrl(`/category/${categorySlug(recipe.category)}`),
    },
    { name: recipe.title, url },
  ]);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    image: [recipe.image],
    url,
    mainEntityOfPage: url,
    datePublished: site.published,
    dateModified: site.published,
    author: publisher,
    publisher,
    description: recipe.description,
    prepTime: `PT${recipe.prepMinutes}M`,
    ...(recipe.cookMinutes > 0
      ? { cookTime: `PT${recipe.cookMinutes}M` }
      : {}),
    totalTime: `PT${recipe.prepMinutes + recipe.cookMinutes}M`,
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: recipe.category,
    recipeCuisine: cuisineBySlug[recipe.slug] || "American",
    ...(recipe.category === "Vegetarian"
      ? { suitableForDiet: "https://schema.org/VegetarianDiet" }
      : {}),
    inLanguage: "en-US",
    keywords: recipe.keywords.join(", "),
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.steps.map((step) => ({
      "@type": "HowToStep",
      text: step,
    })),
  };
  const related = relatedReading(recipe);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
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
          <p className="byline">
            Published {publishedLabel()} by{" "}
            <Link href="/about">{site.name}</Link>. Read the{" "}
            <Link href="/editorial-standards">editorial standards</Link>.
            Nutrition facts are approximate estimates. See the{" "}
            <Link href="/disclaimer">recipe disclaimer</Link>.
          </p>
        </div>
      </section>
      <RecipeInteractive recipe={recipe} />
      <section className="section related-reading">
        <div className="container prose">
          <h2>Related reading</h2>
          <ul>
            {related.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function relatedReading(recipe) {
  const blob = `${recipe.title} ${recipe.category} ${recipe.ingredients.join(" ")}`.toLowerCase();
  const links = [
    { href: "/editorial-standards", label: "How these recipes are written" },
    { href: "/disclaimer", label: "Recipe and nutrition disclaimer" },
  ];
  if (/chicken|turkey/.test(blob)) {
    links.push({
      href: "/guides/chicken-temperature-and-leftover-safety",
      label: "Chicken temperature and leftover safety",
    });
  } else if (/beef|pork|shrimp|salmon|sausage|meatball/.test(blob)) {
    links.push({
      href: "/guides/reheating-leftovers-safely",
      label: "Reheating leftovers safely",
    });
  }
  if (/soup|rice|pasta|orzo|noodle/.test(blob)) {
    links.push({
      href: "/guides/how-to-store-soup-rice-and-pasta",
      label: "How to store soup, rice, and pasta",
    });
  }
  if (recipe.slug.includes("sheet-pan")) {
    links.push({
      href: "/guides/sheet-pan-dinner-method",
      label: "Sheet-pan dinner method",
    });
  }
  links.push({ href: "/meal-planner", label: "Add this recipe to the weekly planner" });
  return links;
}
