import Link from "next/link";
import { notFound } from "next/navigation";
import RecipeCard from "@/components/RecipeCard";
import { recipes, findRecipe, categories, relatedRecipes, recipeSeoTitle } from "@/lib/recipes";
import { collectionsForRecipe } from "@/lib/collections";
import { site, publishedLabel } from "@/lib/site";
import { breadcrumbList, howToSteps, pageUrl, pinMeta, publisher, recipeNutrition } from "@/lib/schema";
import RecipeInteractive from "./RecipeInteractive";
import EchoProductReviews from "./EchoProductReviews";

const cuisineBySlug = {
  "creamy-tuscan-chicken-orzo": "Italian",
  "one-pot-tomato-basil-pasta": "Italian",
  "shrimp-garlic-pasta": "Italian",
  "spinach-ricotta-pasta": "Italian",
  "skillet-turkey-meatballs": "Italian",
  "sausage-pepper-and-onion-pasta": "Italian",
  "one-pan-creamy-sausage-pasta": "Italian",
  "creamy-mushroom-pasta": "Italian",
  "one-pan-tomato-gnocchi": "Italian",
  "pesto-pasta-primavera": "Italian",
  "weeknight-cacio-e-pepe": "Italian",
  "sun-dried-tomato-chicken-pasta": "Italian",
  "creamy-tortellini-soup": "Italian",
  "minestrone-soup": "Italian",
  "skillet-eggplant-parmesan": "Italian",
  "pesto-chicken-orzo": "Italian",
  "lemon-chicken-orzo-skillet": "Italian",
  "crispy-black-bean-tacos": "Mexican",
  "turkey-taco-skillet": "Mexican",
  "sheet-pan-chicken-fajitas": "Mexican",
  "chicken-tortilla-soup": "Mexican",
  "black-bean-sweet-potato-tacos": "Mexican",
  "roasted-cauliflower-tacos": "Mexican",
  "turkey-burrito-bowls": "Mexican",
  "turkey-taco-soup": "Mexican",
  "crispy-veggie-quesadillas": "Mexican",
  "beef-and-broccoli-stir-fry": "Asian",
  "vegetable-fried-rice": "Asian",
  "teriyaki-chicken-stir-fry": "Asian",
  "chicken-fried-rice": "Asian",
  "peanut-tofu-bowl": "Asian",
  "miso-ginger-tofu-bowls": "Asian",
  "thai-coconut-chicken-soup": "Thai",
  "coconut-curry-chicken": "Thai",
  "chickpea-coconut-curry": "Indian",
  "baked-falafel-bowls": "Mediterranean",
  "mediterranean-chickpea-bowls": "Mediterranean",
  "greek-lemon-chicken-soup": "Greek",
  "weeknight-shakshuka": "Middle Eastern",
  "skillet-chicken-piccata": "Italian",
};

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }) {
  const recipe = findRecipe(params.slug);
  if (!recipe) return { title: "Recipe not found" };
  const pin = pinMeta(recipe);
  const title = recipeSeoTitle(recipe);
  const description = recipe.seoDescription || recipe.description;
  return {
    title,
    description,
    keywords: recipe.keywords,
    alternates: { canonical: `/recipes/${params.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: pageUrl(`/recipes/${params.slug}`),
      images: [{ url: recipe.image, alt: recipe.imageAlt || recipe.title }],
      modifiedTime: site.updated,
      publishedTime: site.published,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [recipe.image],
    },
    other: {
      "og:image:alt": recipe.imageAlt || recipe.title,
      "pinterest:description": pin.description,
    },
  };
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
    dateModified: site.updated,
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
    recipeInstructions: howToSteps(recipe, url),
    nutrition: recipeNutrition(recipe),
  };
  const related = relatedReading(recipe);
  const moreRecipes = relatedRecipes(recipe);

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
            Published {publishedLabel()} · Updated {publishedLabel(site.updated)} by{" "}
            <Link href="/about">{site.name}</Link>. Read the{" "}
            <Link href="/editorial-standards">editorial standards</Link>.
            Nutrition facts are approximate estimates. See the{" "}
            <Link href="/disclaimer">recipe disclaimer</Link>.
          </p>
        </div>
      </section>
      <RecipeInteractive recipe={recipe} />
      <section className="section recipe-reviews" id="reader-reviews">
        <div className="container">
          <h2>Reader reviews</h2>
          <p className="recipe-intro">
            Reviews here are for {recipe.title} only. Nothing appears until a
            reader sends one.
          </p>
          <EchoProductReviews
            productHandle={recipe.slug}
            productTitle={recipe.title}
          />
        </div>
      </section>
      <section className="section related-reading">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Keep cooking</div>
              <h2>More {recipe.category.toLowerCase()} recipes</h2>
            </div>
          </div>
          <div className="recipe-grid">
            {moreRecipes.map((item) => (
              <RecipeCard key={item.slug} recipe={item} />
            ))}
          </div>
          <div className="prose" style={{ marginTop: 36 }}>
            <h2>Related reading</h2>
            <ul>
              {related.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
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
  for (const collection of collectionsForRecipe(recipe.slug)) {
    links.push({
      href: `/collections/${collection.slug}`,
      label: `More in ${collection.title}`,
    });
  }
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
  if (/bowl|burrito|chickpea|tofu|cauliflower/.test(blob)) {
    links.push({
      href: "/guides/how-to-build-a-weeknight-bowl",
      label: "How to build a weeknight bowl",
    });
  }
  links.push({ href: "/meal-planner", label: "Add this recipe to the weekly planner" });
  return links;
}
