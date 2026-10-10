import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";
import { recipes, categories } from "@/lib/recipes";
import { guides } from "@/lib/guides";

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

  return (
    <>
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
            <div className="hero-note">
              <div className="avatar-stack">
                <span>D</span>
                <span>B</span>
                <span>S</span>
              </div>
              <span>
                Simple ingredients, thoughtful recipes
                <br /> and less stress around dinner.
              </span>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img
              className="hero-photo"
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1400&q=90"
              alt="A grain bowl with egg, avocado, and vegetables on a wooden table"
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
