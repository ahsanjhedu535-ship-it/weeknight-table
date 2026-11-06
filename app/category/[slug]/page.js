import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, recipes } from "@/lib/recipes";
import RecipeCard from "@/components/RecipeCard";
import FaqAccordion from "@/components/FaqAccordion";
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
      "garlic-butter-chicken-bites",
      "honey-garlic-chicken-thighs",
      "turkey-taco-skillet",
      "beef-and-broccoli-stir-fry",
    ],
  },
  breakfast: {
    heading: "When these breakfasts fit the week",
    body: "Bake or roll a batch on Sunday if weekday mornings are short. The oatmeal, burritos, overnight oats, egg muffins, and frittata keep in the refrigerator. Cook the pancakes on a morning when you can stand at the skillet.",
    starters: [
      "apple-cinnamon-baked-oatmeal",
      "veggie-breakfast-burritos",
      "berry-overnight-oats",
      "breakfast-egg-muffins",
      "savory-oat-bowls",
      "blueberry-baked-french-toast",
    ],
  },
  soups: {
    heading: "When a pot of soup is the right dinner",
    body: "Soup covers more than one meal from one pot. Make it when you want leftovers for lunch, or when the oven is already busy. Cool it in a wide container and refrigerate it within two hours.",
    starters: [
      "easy-chicken-noodle-soup",
      "20-minute-tomato-soup",
      "chicken-orzo-soup",
      "white-chicken-chili",
      "lentil-vegetable-soup",
      "creamy-tomato-soup",
    ],
  },
  vegetarian: {
    heading: "When a meatless plate fits",
    body: "These dinners are for a night without meat, not a night of only salad. Beans, eggs, cheese, or coconut milk do the filling work. They shop from the same pantry as the chicken and pasta recipes.",
    starters: [
      "crispy-black-bean-tacos",
      "black-bean-sweet-potato-tacos",
      "chickpea-coconut-curry",
      "chickpea-tomato-skillet",
      "peanut-tofu-bowl",
      "spinach-ricotta-pasta",
    ],
  },
};

const categorySeo = {
  dinner: {
    title: "Easy Dinner Recipes (30-Minute Weeknight Meals)",
    description:
      "Easy dinner recipes for busy US weeknights: 30-minute chicken, creamy chicken orzo, sheet-pan meals, one-pot pasta, and turkey taco skillet.",
  },
  breakfast: {
    title: "Easy Breakfast Recipes",
    description:
      "Make-ahead breakfast recipes with US measurements: baked oatmeal, breakfast burritos, overnight oats, egg muffins, and pancakes.",
  },
  soups: {
    title: "Quick Soup Recipes for Weeknight Dinner",
    description:
      "Quick soup recipes for dinner: chicken noodle, creamy tomato, lentil vegetable, chicken orzo, white chili, and tortilla soup.",
  },
  vegetarian: {
    title: "Quick Vegetarian Meals and Easy Meatless Dinners",
    description:
      "Quick vegetarian meals: black bean tacos, chickpea curry, spinach ricotta pasta, tofu bowls, and a black beans and sweet potatoes recipe.",
  },
};

const categoryFaqs = {
  dinner: [
    {
      question: "How long do these dinners take?",
      answer:
        "Each recipe lists prep and cook time separately. Many skillets finish in about 30 minutes. Sheet-pan dinners often need more oven time after a short prep.",
    },
    {
      question: "Do the chicken recipes include a safe temperature?",
      answer:
        "Yes. Poultry methods call for 165°F (74°C) in the thickest part. Use an instant-read thermometer instead of guessing from color alone.",
    },
  ],
  breakfast: [
    {
      question: "Which breakfasts keep for the week?",
      answer:
        "Baked oatmeal, egg muffins, overnight oats, breakfast burritos, and the frittata keep in the refrigerator. Reheat egg dishes covered.",
    },
  ],
  soups: [
    {
      question: "What counts as a quick soup recipe here?",
      answer:
        "Soups that start from broth, canned tomatoes, beans, or cooked chicken and finish in about 20 to 50 minutes. Several freeze well if you leave noodles out until serving.",
    },
    {
      question: "How should I store leftover soup?",
      answer:
        "Cool in a wide container and refrigerate within two hours. Store noodles apart from broth when you can. Reheat until steaming, 165°F (74°C) for chicken soups.",
    },
  ],
  vegetarian: [
    {
      question: "Are these filling enough for dinner?",
      answer:
        "Yes. The plates use beans, eggs, cheese, tofu, or coconut milk so they are not only vegetables. Pair with rice, tortillas, or pasta if you need more volume.",
    },
    {
      question: "Where do I start for black beans and sweet potatoes?",
      answer:
        "Try the sweet potato and black bean bowls or the black bean sweet potato tacos. Both roast the potatoes while the beans warm.",
    },
  ],
};

export async function generateMetadata({ params }) {
  const seo = categorySeo[params.slug];
  return {
    title: seo?.title || "Recipe Category",
    description: seo?.description,
    alternates: { canonical: `/category/${params.slug}` },
    openGraph: {
      title: seo?.title,
      description: seo?.description,
      url: pageUrl(`/category/${params.slug}`),
    },
  };
}

export default function CategoryPage({ params }) {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) notFound();
  const seo = categorySeo[params.slug];

  const matches = recipes.filter(
    (recipe) => recipe.category === categoryNames[category.slug]
  );
  const url = pageUrl(`/category/${category.slug}`);
  const crumbs = breadcrumbList([
    { name: "Home", url: site.url },
    { name: category.name, url },
  ]);
  const faqs = categoryFaqs[params.slug] || [];
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: seo?.title || category.name,
    description: seo?.description || category.intro,
    url,
  };
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }}
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
            <Link href="/">Home</Link> / {category.name}
          </div>
          <div className="eyebrow">Browse by category</div>
          <h1>{seo?.title || category.name}</h1>
          <p>{category.intro}</p>
          <div className="hero-actions" style={{ marginTop: 20 }}>
            <Link className="button-primary" href="/meal-planner">
              Plan a week from these
            </Link>
            <Link className="text-link" href="/guides">
              Related guides
            </Link>
          </div>
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
            <h2>Start with these</h2>
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
            {faqs.length > 0 && (
              <>
                <h2>Questions about this collection</h2>
                <FaqAccordion items={faqs} />
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
}
