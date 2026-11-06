"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { recipes } from "@/lib/recipes";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const defaultPlan = {
  Monday: "creamy-tuscan-chicken-orzo",
  Tuesday: "crispy-black-bean-tacos",
  Wednesday: "",
  Thursday: "one-pot-tomato-basil-pasta",
  Friday: "sheet-pan-maple-chicken-sweet-potatoes",
  Saturday: "",
  Sunday: "easy-chicken-noodle-soup",
};

export default function MealPlanner() {
  const [plan, setPlan] = useState(defaultPlan);
  const [copied, setCopied] = useState(false);
  const [shareNote, setShareNote] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const add = params.get("add");
    if (!add || !recipes.some((recipe) => recipe.slug === add)) return;
    setPlan((current) => {
      const emptyDay = days.find((day) => !current[day]);
      const target = emptyDay || "Monday";
      return { ...current, [target]: add };
    });
  }, []);

  const chosen = useMemo(
    () =>
      days.map((day) => recipes.find((recipe) => recipe.slug === plan[day])).filter(Boolean),
    [plan]
  );

  const grocery = useMemo(
    () =>
      Array.from(
        new Set(
          chosen.flatMap((recipe) =>
            recipe.ingredients.map((line) =>
              line.replace(/^\d+[½¼¾⅓⅔.]?\s*/, "").trim()
            )
          )
        )
      ),
    [chosen]
  );

  function copyList() {
    const text =
      "WEEKLY GROCERY LIST\n\n" + grocery.map((item) => `[ ] ${item}`).join("\n");
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => setCopied(true))
        .catch(() => setCopied(false));
    } else setCopied(false);
  }

  function sharePlan() {
    const filled = days
      .filter((day) => plan[day])
      .map((day) => `${day}: ${recipes.find((recipe) => recipe.slug === plan[day])?.title}`)
      .join("\n");
    const text = `Weekly dinner plan\n\n${filled}\n\nGrocery list\n${grocery
      .map((item) => `- ${item}`)
      .join("\n")}`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => setShareNote("Plan copied. Paste it into a note or message."))
        .catch(() => setShareNote("Could not copy. Select the list manually."));
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Your week, made easier</div>
          <h1>Weekly dinner planner and grocery list</h1>
          <p>
            Pick an easy weeknight dinner for each day and copy a combined
            grocery list before you shop. Your choices stay in this browser tab
            while the page is open. Nothing is saved to an account.
          </p>
          <div className="hero-actions" style={{ marginTop: 18 }}>
            <Link className="text-link" href="/category/dinner">
              Browse dinners
            </Link>
            <Link className="text-link" href="/collections/quick-soup-recipes">
              Quick soups
            </Link>
            <Link className="text-link" href="/collections/quick-vegetarian-meals">
              Vegetarian meals
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="planner-app">
            <div>
              <div className="section-heading">
                <div>
                  <h2>Plan your dinners</h2>
                  <p>Choose a recipe or leave a day open for leftovers.</p>
                </div>
              </div>
              {days.map((day) => (
                <div className="planner-day" key={day}>
                  <h3>{day}</h3>
                  <select
                    value={plan[day]}
                    onChange={(event) =>
                      setPlan((current) => ({
                        ...current,
                        [day]: event.target.value,
                      }))
                    }
                    aria-label={`${day} dinner`}
                  >
                    <option value="">Open night / leftovers</option>
                    {recipes.map((recipe) => (
                      <option key={recipe.slug} value={recipe.slug}>
                        {recipe.title} · {recipe.time} min
                      </option>
                    ))}
                  </select>
                  {plan[day] && (
                    <p className="planner-day-copy">
                      {recipes.find((recipe) => recipe.slug === plan[day])?.description}{" "}
                      <Link href={`/recipes/${plan[day]}`}>Open recipe</Link>
                    </p>
                  )}
                </div>
              ))}
            </div>
            <aside className="grocery-list">
              <div className="eyebrow">Your shopping helper</div>
              <h3>Grocery list</h3>
              <p className="planner-meta">
                {chosen.length} meal{chosen.length === 1 ? "" : "s"} selected ·{" "}
                {grocery.length} ingredient lines before pantry checks
              </p>
              {grocery.length ? (
                <ul>
                  {grocery.map((item, index) => (
                    <li key={`${item}-${index}`}>
                      <label>
                        <input type="checkbox" /> {item}
                      </label>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Select a recipe to begin building your list.</p>
              )}
              <button type="button" onClick={copyList}>
                Copy grocery list
              </button>
              <button type="button" className="button-secondary" onClick={sharePlan}>
                Copy full plan
              </button>
              {copied && (
                <p className="planner-success">Copied. Paste it into your notes app.</p>
              )}
              {shareNote && <p className="planner-success">{shareNote}</p>}
              <p className="planner-tip">
                Tip: combine duplicate ingredients and check your pantry before
                shopping. Quantities from different recipes may need to be added
                together manually.
              </p>
              <Link className="text-link" href="/category/dinner">
                Find more dinner ideas
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
