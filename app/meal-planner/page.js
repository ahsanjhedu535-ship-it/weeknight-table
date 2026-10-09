"use client";
import { useMemo, useState } from "react";
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
export default function MealPlanner() {
  const [plan, setPlan] = useState({
    Monday: "creamy-tuscan-chicken-orzo",
    Tuesday: "crispy-black-bean-tacos",
    Wednesday: "",
    Thursday: "one-pot-tomato-basil-pasta",
    Friday: "sheet-pan-maple-chicken-sweet-potatoes",
    Saturday: "",
    Sunday: "easy-chicken-noodle-soup",
  });
  const [copied, setCopied] = useState(false);
  const chosen = useMemo(
    () =>
      days.map((d) => recipes.find((r) => r.slug === plan[d])).filter(Boolean),
    [plan]
  );
  const grocery = useMemo(
    () =>
      Array.from(
        new Set(
          chosen.flatMap((r) =>
            r.ingredients.map((i) => i.replace(/^\d+[½¼¾⅓⅔.]?\s*/, "").trim())
          )
        )
      ),
    [chosen]
  );
  function copyList() {
    const text =
      "WEEKLY GROCERY LIST\n\n" + grocery.map((i) => "[ ] " + i).join("\n");
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => setCopied(true))
        .catch(() => setCopied(false));
    } else setCopied(false);
  }
  return (
    <> <section className="page-hero"> <div className="container"> <div className="eyebrow">Your week, made easier</div> <h1>The simple meal planner</h1> <p> Pick a recipe for each day and build a handy grocery list from your selections. Your choices stay in this page while it is open. </p> </div> </section> <section className="section"> <div className="container"> <div className="planner-app"> <div> <div className="section-heading"> <div> <h2>Plan your dinners</h2> <p>Choose a recipe or leave a day open for leftovers.</p> </div> </div> {days.map((day) => ( <div className="planner-day" key={day}> <h3>{day}</h3> <select value={plan[day]} onChange={(e) => setPlan((p) => ({ ...p, [day]: e.target.value })) } aria-label={`${day} dinner`} > <option value="">Open night / leftovers</option> {recipes.map((r) => ( <option key={r.slug} value={r.slug}> {r.title} · {r.time} min </option> ))} </select> {plan[day] && ( <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 0, }} > {recipes.find((r) => r.slug === plan[day])?.description} </p> )} </div> ))} </div> <aside className="grocery-list"> <div className="eyebrow">Your shopping helper</div> <h3>Grocery list</h3> <p style={{ fontSize: 13, color: "var(--muted)" }}> {chosen.length} meal{chosen.length === 1 ? "" : "s"} selected ·{" "} {grocery.length} ingredient lines before pantry checks </p> {grocery.length ? ( <ul> {grocery.map((item, i) => ( <li key={i}> <label> <input type="checkbox" /> {item} </label> </li> ))} </ul> ) : ( <p>Select a recipe to begin building your list.</p> )} <button onClick={copyList}>Copy grocery list</button> {copied && ( <p style={{ color: "var(--green)", fontSize: 12 }}> Copied! Paste it into your notes app. </p> )} <p style={{ fontSize: 11 }}> Tip: combine duplicate ingredients and check your pantry before shopping. Quantities from different recipes may need to be added together manually. </p> <Link className="text-link" href="/category/dinner"> Find more dinner ideas ↗ </Link> </aside> </div> </div> </section> </>
  );
}
