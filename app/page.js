import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";
import FaqAccordion from "@/components/FaqAccordion";
import { recipes, categories } from "@/lib/recipes";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: site.url },
};

const faqs = [
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
  {
    question: "Are the photos of the exact plated recipe?",
    answer:
      "Photos are licensed Unsplash images. The alt text describes what is in the picture. When the photo shows a similar meal rather than the exact dish, the ingredient list and the steps are the recipe.",
  },
  {
    question: "How do I report a wrong quantity or temperature?",
    answer: `Email ${site.contactEmail} with the recipe name and the line you noticed, or use the contact form. Privacy requests go to ${site.privacyEmail}. The form checks the fields, then opens your email app. It does not store the message on this site.`,
  },
];

const featuredSlugs = [
  "creamy-tuscan-chicken-orzo",
  "sheet-pan-maple-chicken-sweet-potatoes",
  "easy-chicken-noodle-soup",
  "apple-cinnamon-baked-oatmeal",
  "crispy-black-bean-tacos",
  "pumpkin-spice-pancakes",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Easy dinners for US weeknights</div>
            <h1>
              Quick dinner <br /> <em>ideas.</em>
            </h1>
            <p className="hero-copy">
              30-minute chicken, sheet-pan meals, and one-pot pasta with US
              cups, Fahrenheit, and a grocery list you can copy before you shop.
            </p>
            <div className="hero-actions">
              <Link className="button-primary" href="/category/dinner">
                Browse easy dinners →
              </Link>
              <Link className="text-link" href="/meal-planner">
                Plan this week →
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
            />
            <div className="photo-note">
              <strong>Make tonight delicious.</strong>
              <span>Everyday recipes, made a little easier.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Fresh from our kitchen</div>
              <h2>Easy 30-minute dinner recipes</h2>
              <p>
                Chicken, pasta, tacos, and soups you can start after work. Each
                recipe lists prep time, cook time, and a temperature when food
                safety depends on it.
              </p>
            </div>
            <Link className="text-link" href="/category/dinner">
              Browse all recipes →
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
                  <Link href="/recipes/creamy-tuscan-chicken-orzo">Creamy Tuscan chicken orzo</Link>
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
            <div className="eyebrow">Keep these on hand</div>
            <h2>A short US pantry for weeknights</h2>
            <p>
              These are the staples the recipes draw from. Amounts on each
              recipe are in US cups, tablespoons, and ounces.
            </p>
          </div>
          <div className="pantry-grid">
            <article className="pantry-card">
              <h3>Oil, salt, pepper</h3>
              <p>Olive oil for the skillet, plus kosher salt and black pepper. Most recipes season to taste instead of listing a fixed salt amount.</p>
            </article>
            <article className="pantry-card">
              <h3>Onion and garlic</h3>
              <p>Yellow onions and a head of garlic cover the soups, skillets, and pasta. Buy them every week. They show up more often than fresh herbs.</p>
            </article>
            <article className="pantry-card">
              <h3>Broth and tomatoes</h3>
              <p>Low-sodium chicken broth and a can of tomatoes. Low-sodium leaves room to salt the pot yourself.</p>
            </article>
            <article className="pantry-card">
              <h3>A starch</h3>
              <p>Rice, a box of pasta, and a pack of tortillas. Cook extra rice once if you want fried rice later in the week. Cool it in the refrigerator, not on the counter.</p>
            </article>
            <article className="pantry-card">
              <h3>Eggs and dairy</h3>
              <p>Eggs, butter, and milk for breakfasts. Parmesan and a small carton of cream or half-and-half cover the creamy skillets.</p>
            </article>
            <article className="pantry-card">
              <h3>A few spices</h3>
              <p>Cumin, chili powder, Italian seasoning, and Dijon mustard. That set seasons the tacos, the sheet-pan chicken, and the pasta.</p>
            </article>
          </div>
          <div className="section-heading">
            <div>
              <div className="eyebrow">Find your kind of delicious</div>
              <h2>What sounds good today?</h2>
            </div>
            <p>
              Browse by the meal you need, the mood you are in, or what is
              already in your kitchen.
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
              All guides →
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
                  Read the guide <span>→</span>
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
              Read the editorial standards →
            </Link>
          </p>
          <div className="planner-banner">
            <div>
              <div className="eyebrow" style={{ color: "#d8e6d6" }}>
                Your week, a little easier
              </div>
              <h2>Make a plan. Shop once. Enjoy dinner.</h2>
              <p>
                Choose recipes for the week and build a simple grocery list
                from your picks. Less last-minute guessing, more time around
                the table.
              </p>
            </div>
            <Link href="/meal-planner" className="button-light">
              Open the meal planner →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
