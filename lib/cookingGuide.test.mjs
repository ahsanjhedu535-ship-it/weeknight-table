import assert from "node:assert/strict";
import test from "node:test";
import { cookingPlan, ingredientRole, stepTimer } from "./cookingGuide.js";
import { findRecipe } from "./recipes.js";
import { findRecipeNotes } from "./recipeNotes.js";
import { recipes } from "./recipes.js";

test("seasoning and optional lines can be skipped, measured ingredients cannot", () => {
  assert.equal(ingredientRole("Salt and black pepper, to taste"), "skippable");
  assert.equal(ingredientRole("Salt and black pepper"), "skippable");
  assert.equal(ingredientRole("Fresh parsley, to finish"), "skippable");
  assert.equal(ingredientRole("1/4 cup chopped walnuts, optional"), "skippable");
  assert.equal(ingredientRole("1/2 tsp red pepper flakes, optional"), "skippable");
  assert.equal(ingredientRole("1/2 tsp salt, plus more to taste"), "needed");
  assert.equal(
    ingredientRole("1 lb boneless, skinless chicken breast, cut into bite-size pieces"),
    "needed"
  );
});

test("a step timer uses the longer written time and does not invent one", () => {
  assert.equal(stepTimer("Pat the chicken dry and season with salt."), null);

  const browned = stepTimer(
    "Cook the chicken for 4 to 5 minutes, until lightly golden, then transfer it to a plate."
  );
  assert.equal(browned.seconds, 5 * 60);
  assert.equal(browned.label, "4 to 5 minutes");
  assert.equal(browned.needsTemperature, false);

  const garlic = stepTimer("Stir for 30 seconds, then add the orzo and broth.");
  assert.equal(garlic.seconds, 30);
  assert.equal(garlic.label, "30 seconds");

  const simmer = stepTimer(
    "Simmer 2 to 3 minutes, until the thickest piece of chicken reaches 165°F (74°C)."
  );
  assert.equal(simmer.seconds, 3 * 60);
  assert.equal(simmer.needsTemperature, true);
});

test("the Tuscan chicken plan matches the written method", () => {
  const recipe = findRecipe("creamy-tuscan-chicken-orzo");
  const plan = cookingPlan(recipe, findRecipeNotes(recipe.slug));

  assert.equal(
    plan.ingredients.find((item) => item.line.startsWith("Salt")).role,
    "skippable"
  );
  assert.equal(
    plan.ingredients.find((item) => item.line.startsWith("1 lb")).role,
    "needed"
  );
  assert.equal(plan.steps[0].timer, null);
  assert.equal(plan.steps[1].timer.seconds, 5 * 60);
  assert.equal(plan.steps[2].timer.seconds, 30);
  assert.equal(plan.steps[3].timer.seconds, 10 * 60);
  assert.equal(plan.steps[4].timer.needsTemperature, true);
  assert.equal(plan.steps[5].timer, null);
  assert.equal(plan.swaps.length, 3);
  assert.match(plan.serveWith, /green salad/);
});

test("every recipe gets a plan from its own steps", () => {
  for (const recipe of recipes) {
    const plan = cookingPlan(recipe, findRecipeNotes(recipe.slug));
    assert.equal(plan.steps.length, recipe.steps.length, recipe.slug);
    assert.equal(plan.ingredients.length, recipe.ingredients.length, recipe.slug);
    for (const item of plan.ingredients) {
      assert.ok(item.role === "needed" || item.role === "skippable", recipe.slug);
    }
    for (const step of plan.steps) {
      if (!step.timer) continue;
      assert.ok(Number.isInteger(step.timer.seconds) && step.timer.seconds > 0, recipe.slug);
      assert.ok(step.text.toLowerCase().includes(step.timer.label.toLowerCase()), recipe.slug);
      if (step.timer.needsTemperature) {
        assert.match(step.text, /\d+\s*°/);
      }
    }
  }
});
