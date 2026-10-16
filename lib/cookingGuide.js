const UNIT_SECONDS = {
  second: 1,
  seconds: 1,
  minute: 60,
  minutes: 60,
};

function isOnlySeasoning(line) {
  const text = line.trim();
  if (/^(salt and (black )?pepper|salt|black pepper)(,|\s|$)/i.test(text)) {
    return !/\b(cup|tbsp|tsp|tablespoon|teaspoon|lb|pound|ounce|oz)\b/i.test(text);
  }
  return false;
}

export function ingredientRole(line) {
  const text = line.toLowerCase();
  if (/\boptional\b/.test(text)) return "skippable";
  if (/to finish|for serving|to garnish|\bgarnish\b/.test(text)) return "skippable";
  if (isOnlySeasoning(line)) return "skippable";
  return "needed";
}

export function stepTimer(step) {
  const ranges = [...step.matchAll(/(\d+)\s+to\s+(\d+)\s+(seconds?|minutes?)/gi)];
  const occupied = ranges.map((match) => [match.index, match.index + match[0].length]);
  const singles = [...step.matchAll(/(?<!to\s)(\d+)\s+(seconds?|minutes?)/gi)].filter(
    (match) => !occupied.some(([start, end]) => match.index >= start && match.index < end)
  );
  const durations = [
    ...ranges.map((match) => ({
      seconds: Math.max(Number(match[1]), Number(match[2])) * UNIT_SECONDS[match[3].toLowerCase()],
      label: match[0],
    })),
    ...singles.map((match) => ({
      seconds: Number(match[1]) * UNIT_SECONDS[match[2].toLowerCase()],
      label: match[0],
    })),
  ];
  if (!durations.length) return null;
  const chosen = durations.reduce((best, item) => (item.seconds > best.seconds ? item : best));
  return {
    seconds: chosen.seconds,
    label: chosen.label,
    needsTemperature: /\d+\s*°/.test(step),
  };
}

export function cookingPlan(recipe, notes) {
  const ingredients = recipe.ingredients.map((line) => ({
    line,
    role: ingredientRole(line),
  }));
  return {
    ingredients,
    steps: recipe.steps.map((text, index) => ({
      index,
      text,
      timer: stepTimer(text),
    })),
    swaps: recipe.substitutions || [],
    serveWith: notes?.serveWith || "",
  };
}
