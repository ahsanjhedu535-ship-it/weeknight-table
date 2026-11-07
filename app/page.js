import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";
import FaqAccordion from "@/components/FaqAccordion";
import { recipes, categories } from "@/lib/recipes";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";
import { socialPageMeta } from "@/lib/schema";

const homeTitle =
  "Quick Dinner Ideas: 30-Minute Meals, Soups & Vegetarian Recipes";

export const metadata = {
  ...socialPageMeta({
    title: homeTitle,
    description: site.description,
    path: "/",
  }),
  title: { absolute: homeTitle },
};

const faqs = [
  {
    question: "Where are the quick soup recipes?",
    answer:
      "Open Quick Soup Recipes for quick chicken noodle soup, creamy tomato, lentil vegetable, white bean and kale, chicken tortilla soup, and black bean soup. Each pot lists prep time, cook time, and leftover storage.",
  },
  {
    question: "Do you have quick vegetarian meals?",
    answer:
      "Yes. Quick Vegetarian Meals covers fast easy vegetarian dinners: black bean tacos, chickpea coconut curry, spinach ricotta pasta, vegetable fried rice, and a black beans and sweet potatoes recipe. Most finish in about 20 to 40 minutes.",
  },
  {
    question: "Do you have a creamy chicken orzo recipe?",
    answer:
      "Yes. The creamy Tuscan chicken orzo is a quick orzo chicken recipe in one skillet with spinach, sun-dried tomatoes, and Parmesan in about 30 minutes. Lemon chicken orzo and pesto chicken orzo are in the same collection.",
  },
  {
    question: "Which measurements do the recipes use?",
    answer:
      "US cups, tablespoons, teaspoons, and ounces. Temperatures in the methods are Fahrenheit. A food-safety temperature also shows the Celsius figure.",
  },
  {
    question: "How long do the dinners take?",
    answer:
      "Each recipe lists prep time and cook time separately. Many weeknight skillets are about 30 minutes from start to plate. Sheet-pan dinners can spend longer in the oven after a short prep.",
  },
  {
    question: "Does the meal planner save my grocery list?",
    answer:
      "The planner keeps your choices while that page is open. It does not create an account and it does not store the list on a server. Copy the list before you close the page.",
  },
];

const featuredSlugs = [
  "creamy-tuscan-chicken-orzo",
  "easy-chicken-noodle-soup",
  "crispy-black-bean-tacos",
  "sweet-potato-black-bean-bowls",
  "turkey-taco-skillet",
  "chickpea-coconut-curry",
];

export default function Home() {
  const featured = featuredSlugs
    .map((slug) => recipes.find((recipe) => recipe.slug === slug))
    .filter(Boolean);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured quick dinner recipes",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: featured.length,
    itemListElement: featured.map((recipe, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.url}/recipes/${recipe.slug}`,
      name: recipe.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Easy weeknight dinners for US kitchens</div>
            <h1>
              Quick dinner ideas for <em>busy nights.</em>
            </h1>
            <p className="hero-copy">
              30-minute chicken, quick soup recipes, and quick vegetarian meals
              with US cups, Fahrenheit, and a grocery list you can copy before
              you shop.
            </p>
            <div className="hero-actions">
              <Link className="button-primary" href="/category/dinner">
                Browse easy dinners
              </Link>
              <Link className="text-link" href="/category/soups">
                Quick soup recipes
              </Link>
              <Link className="text-link" href="/category/vegetarian">
                Vegetarian meals
              </Link>
            </div>
            <div className="measure-note">
              <span>US cups</span>
              <span>Fahrenheit</span>
              <span>Prep and cook times</span>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img
              className="hero-photo"
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1400&q=90"
              alt="A grain bowl with egg, avocado, and vegetables on a wooden table"
              width="1400"
              height="900"
              fetchPriority="high"
            />
            <div className="photo-note">
              <strong>Cook tonight, shop once.</strong>
              <span>30-minute skillets, soups, and meatless plates.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Start with these</div>
              <h2>Easy 30-minute dinner recipes</h2>
              <p>
                Creamy chicken orzo, a pot of soup, and fast easy vegetarian
                meals you can start after work. Each recipe lists prep time,
                cook time, and a temperature when food safety depends on it.
              </p>
            </div>
            <Link className="text-link" href="/category/dinner">
              Browse all dinners
            </Link>
          </div>
          <div className="recipe-grid">
            {featured.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="plan-block">
            <div className="eyebrow">Use the clock</div>
            <h2>Pick dinner by the time you have</h2>
            <p>
              Match the recipe to the hour, not the other way around. Each
              group uses the prep time plus cook time printed on that recipe.
            </p>
          </div>
          <div className="time-grid">
            <article className="time-card">
              <h3>About 25 minutes</h3>
              <p>A hot skillet and almost no oven time.</p>
              <ul>
                <li>
                  <Link href="/recipes/shrimp-garlic-pasta">Shrimp garlic pasta</Link>
                </li>
                <li>
                  <Link href="/recipes/crispy-black-bean-tacos">Crispy black bean tacos</Link>
                </li>
                <li>
                  <Link href="/recipes/vegetable-fried-rice">Vegetable fried rice</Link>
                </li>
              </ul>
            </article>
            <article className="time-card">
              <h3>About 30 to 35 minutes</h3>
              <p>One pan, started after work.</p>
              <ul>
                <li>
                  <Link href="/recipes/creamy-tuscan-chicken-orzo">Creamy chicken orzo</Link>
                </li>
                <li>
                  <Link href="/recipes/honey-garlic-chicken-thighs">Honey garlic chicken thighs</Link>
                </li>
                <li>
                  <Link href="/recipes/turkey-taco-skillet">Turkey taco skillet</Link>
                </li>
              </ul>
            </article>
            <article className="time-card">
              <h3>40 minutes or more</h3>
              <p>The oven or a soup pot does the longer part.</p>
              <ul>
                <li>
                  <Link href="/recipes/easy-chicken-noodle-soup">Chicken noodle soup</Link>
                </li>
                <li>
                  <Link href="/recipes/sheet-pan-maple-chicken-sweet-potatoes">
                    Sheet-pan maple chicken
                  </Link>
                </li>
                <li>
                  <Link href="/recipes/lentil-vegetable-soup">Lentil vegetable soup</Link>
                </li>
              </ul>
            </article>
          </div>
          <div className="plan-block">
            <div className="eyebrow">What people search for</div>
            <h2>Quick soups and vegetarian dinners</h2>
            <p>
              If you searched for a fast soup or a meatless plate, start here.
              Those collections are the shortest path into the recipes.
            </p>
          </div>
          <div className="pantry-grid">
            <article className="pantry-card">
              <h3>
                <Link href="/category/soups">Quick soup recipes</Link>
              </h3>
              <p>
                Chicken noodle, creamy tomato, lentil, white bean and kale, and
                tortilla soup. One pot, leftover lunch the next day.
              </p>
            </article>
            <article className="pantry-card">
              <h3>
                <Link href="/category/vegetarian">Quick vegetarian meals</Link>
              </h3>
              <p>
                Black bean tacos, chickpea curry, spinach ricotta pasta, and a
                black beans and sweet potatoes bowl.
              </p>
            </article>
            <article className="pantry-card">
              <h3>
                <Link href="/recipes/creamy-tuscan-chicken-orzo">Creamy chicken orzo</Link>
              </h3>
              <p>
                A 30-minute skillet: chicken, orzo, sun-dried tomatoes, spinach,
                and Parmesan cream.
              </p>
            </article>
            <article className="pantry-card">
              <h3>
                <Link href="/meal-planner">Weekly grocery list</Link>
              </h3>
              <p>
                Pick dinners for the week and copy a combined list before you
                shop. The list stays in this browser tab only.
              </p>
            </article>
            <article className="pantry-card">
              <h3>Oil, salt, pepper</h3>
              <p>Olive oil for the skillet, plus kosher salt and black pepper. Most recipes season to taste instead of listing a fixed salt amount.</p>
            </article>
            <article className="pantry-card">
              <h3>Onion, garlic, broth</h3>
              <p>Yellow onions, a head of garlic, and low-sodium chicken or vegetable broth cover the soups, skillets, and pasta.</p>
            </article>
          </div>
          <div className="section-heading">
            <div>
              <div className="eyebrow">Find your kind of dinner</div>
              <h2>Browse by meal</h2>
            </div>
            <p>
              Dinners, breakfasts, quick soup recipes, and quick vegetarian
              meals, plus guides and a planner.
            </p>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <Link
                href={`/category/${category.slug}`}
                className="category-tile"
                key={category.slug}
              >
                <img src={category.image} alt={category.imageAlt} />
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="plan-block" style={{ marginTop: 42 }}>
            <div className="eyebrow">Collections</div>
            <h2>Browse by method</h2>
            <p>
              Shorter paths into the recipes Google already associates with this
              site: soups, vegetarian plates, 30-minute chicken, and sheet pans.
            </p>
          </div>
          <div className="time-grid">
            <article className="time-card">
              <h3>
                <Link href="/collections/quick-soup-recipes">Quick soup recipes</Link>
              </h3>
              <p>Chicken noodle, orzo soup, tomato, chili, and freezer pots.</p>
            </article>
            <article className="time-card">
              <h3>
                <Link href="/collections/30-minute-chicken">30-minute chicken</Link>
              </h3>
              <p>Orzo skillets, garlic butter bites, fajitas, and stir-fry.</p>
            </article>
            <article className="time-card">
              <h3>
                <Link href="/collections/quick-vegetarian-meals">Vegetarian meals</Link>
              </h3>
              <p>Bean tacos, chickpea skillets, bowls, and meatless pasta.</p>
            </article>
            <article className="time-card">
              <h3>
                <Link href="/collections/one-pot-pasta">One-pot pasta</Link>
              </h3>
              <p>Orzo, tomato basil, sausage pasta, gnocchi, and creamy mushroom.</p>
            </article>
            <article className="time-card">
              <h3>
                <Link href="/collections/sheet-pan-dinners">Sheet-pan dinners</Link>
              </h3>
              <p>Maple chicken, fajitas, ranch chicken, and lemon pepper trays.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Notes from the kitchen</div>
              <h2>Guides for planning and leftovers</h2>
              <p>
                How to choose a week of dinners, turn it into a grocery list,
                and store what you do not finish.
              </p>
            </div>
            <Link className="text-link" href="/guides">
              All guides
            </Link>
          </div>
          <div className="guide-grid">
            {guides.slice(0, 4).map((guide) => (
              <article className="guide-card" key={guide.slug}>
                <div className="card-meta">{guide.minutes} min read</div>
                <h3>
                  <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                </h3>
                <p>{guide.description}</p>
                <Link className="text-link" href={`/guides/${guide.slug}`}>
                  Read the guide
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Before you cook</div>
              <h2>Questions about these recipes</h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
          <p className="faq-more">
            <Link className="text-link" href="/editorial-standards">
              Read the editorial standards
            </Link>
          </p>
          <div className="planner-banner">
            <div>
              <div className="eyebrow" style={{ color: "#d8e6d6" }}>
                Your week, a little easier
              </div>
              <h2>Make a plan. Shop once.</h2>
              <p>
                Choose recipes for the week and build a simple grocery list
                from your picks. Less last-minute guessing, more time around
                the table.
              </p>
            </div>
            <Link href="/meal-planner" className="button-light">
              Open the meal planner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
