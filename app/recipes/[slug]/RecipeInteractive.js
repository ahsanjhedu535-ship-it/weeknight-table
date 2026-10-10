"use client";

import { useState } from "react";
import Link from "next/link";
import { findRecipeNotes } from "@/lib/recipeNotes";

export default function RecipeInteractive({ recipe }) {
  const [servings, setServings] = useState(recipe.servings);
  const [checked, setChecked] = useState({});
  const multiplier = servings / recipe.servings;
  const notes = findRecipeNotes(recipe.slug);
  const scaled = (line) => {
    if (multiplier === 1) return line;
    return line.replace(/^(\d+(?:\.\d+)?)(?=\s)(?!\s+\d+\/\d+)/, (match, amount) =>
      String(Math.round(Number(amount) * multiplier * 100) / 100)
    );
  };

  return (
    <section className="section">
      <div className="container recipe-layout">
        <article className="recipe-body">
          <img
            className="recipe-main-image"
            src={recipe.image}
            alt={recipe.imageAlt || recipe.title}
            width="1200"
            height="800"
          />
          <p className="recipe-intro">{recipe.intro}</p>
          <div className="recipe-stats">
            <div className="recipe-stat">
              <span>Prep</span>
              <strong>{recipe.prepMinutes} min</strong>
            </div>
            <div className="recipe-stat">
              <span>Cook</span>
              <strong>{recipe.cookMinutes} min</strong>
            </div>
            <div className="recipe-stat">
              <span>Servings</span>
              <strong>{servings}</strong>
            </div>
            <div className="recipe-stat">
              <span>Difficulty</span>
              <strong>{recipe.difficulty}</strong>
            </div>
          </div>
          <h2>Ingredients</h2>
          <p>
            Check off ingredients as you get them ready. Adjust servings using
            the control beside the recipe. Amounts that start with a whole
            number scale with the serving size. Fractions such as 1/2 cup stay
            as written, so adjust those by eye.
          </p>
          <ul className="ingredient-list">
            {recipe.ingredients.map((item, index) => (
              <li key={item}>
                <input
                  type="checkbox"
                  checked={!!checked[index]}
                  onChange={(event) =>
                    setChecked((current) => ({
                      ...current,
                      [index]: event.target.checked,
                    }))
                  }
                  aria-label={`Mark ${item} complete`}
                />
                <span>{scaled(item)}</span>
              </li>
            ))}
          </ul>
          <h2>How to make it</h2>
          <ol className="steps-list">
            {recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="tip-box">
            <strong>Kitchen note</strong>
            <p>{recipe.tips}</p>
          </div>
          <h2>Substitutions</h2>
          <ul>
            {recipe.substitutions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>Storage</h2>
          <p>{recipe.storage}</p>
          {notes && (
            <>
              <h2>Pan and tools</h2>
              <ul>
                {notes.equipment.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2>What to prep first</h2>
              <p>{notes.prepFirst}</p>
              <h2>What to serve with it</h2>
              <p>{notes.serveWith}</p>
              <h2>Leftovers for lunch</h2>
              <p>{notes.leftovers}</p>
              <h2>If it goes wrong</h2>
              <p>{notes.fix}</p>
            </>
          )}
          <h2>Make it part of your week</h2>
          <p>
            Save this recipe in the weekly planner so the grocery list is ready
            before you shop.
          </p>
          <Link href="/meal-planner" className="button-primary">
            Open meal planner →
          </Link>
          <div className="notice" style={{ marginTop: 28 }}>
            Food safety note: cooking times vary by appliance and ingredient
            size. Use a food thermometer where the method gives a temperature,
            and refrigerate leftovers within two hours.
          </div>
        </article>
        <aside className="recipe-sidebar">
          <div className="sidebar-box">
            <div className="eyebrow">Quick recipe guide</div>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div className="serving-control">
              <span>Servings</span>
              <button
                onClick={() => setServings((current) => Math.max(1, current - 1))}
                aria-label="Decrease servings"
              >
                −
              </button>
              <strong>{servings}</strong>
              <button
                onClick={() => setServings((current) => Math.min(16, current + 1))}
                aria-label="Increase servings"
              >
                +
              </button>
            </div>
            <p>
              Ingredient quantities may need a little judgment when scaled. Use
              your best kitchen sense for seasoning and liquid.
            </p>
          </div>
          <div className="sidebar-box">
            <h3>Recipe details</h3>
            <ul>
              <li>{recipe.prepMinutes} minutes of prep</li>
              <li>{recipe.cookMinutes} minutes of cooking</li>
              <li>{recipe.category}</li>
              <li>{recipe.season}</li>
            </ul>
          </div>
          <div className="sidebar-box">
            <h3>Plan more meals</h3>
            <p>Choose several recipes and make a grocery list for your week.</p>
            <Link className="text-link" href="/meal-planner">
              Open meal planner →
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
