export const collections = [
  {
    slug: "30-minute-chicken",
    title: "30-Minute Chicken Dinners",
    description:
      "Chicken dinners that finish in about half an hour: skillets, bites, fajitas, and honey garlic thighs with US cups and Fahrenheit.",
    intro:
      "These chicken dinners are built for a night when you need protein on the table fast. Prefer boneless pieces or a hot skillet. Check poultry to 165°F (74°C) where the method says so.",
    keywords: [
      "30 minute chicken dinner",
      "easy chicken recipes",
      "quick chicken skillet",
    ],
    recipeSlugs: [
      "creamy-tuscan-chicken-orzo",
      "honey-garlic-chicken-thighs",
      "sheet-pan-chicken-fajitas",
      "garlic-butter-chicken-bites",
      "lemon-chicken-orzo-skillet",
      "pesto-chicken-orzo",
      "teriyaki-chicken-stir-fry",
    ],
  },
  {
    slug: "one-pot-pasta",
    title: "One-Pot and One-Pan Pasta",
    description:
      "Pasta dinners that share a skillet or pot with the sauce: orzo, tomato basil linguine, sausage pasta, and spinach ricotta.",
    intro:
      "These pasta recipes keep the starch and the sauce in the same pan so cleanup stays short. Stir as the pasta cooks so it does not stick, and save a splash of liquid for leftovers.",
    keywords: [
      "one pot pasta recipe",
      "easy skillet pasta",
      "30 minute pasta dinner",
    ],
    recipeSlugs: [
      "creamy-tuscan-chicken-orzo",
      "one-pot-tomato-basil-pasta",
      "shrimp-garlic-pasta",
      "spinach-ricotta-pasta",
      "sausage-pepper-and-onion-pasta",
      "pesto-chicken-orzo",
      "one-pan-creamy-sausage-pasta",
      "lemon-chicken-orzo-skillet",
    ],
  },
  {
    slug: "quick-soup-recipes",
    title: "Quick Soup Recipes",
    description:
      "Weeknight soup pots: chicken noodle, tomato, lentil, tortilla, orzo, white chili, and more with leftover storage notes.",
    intro:
      "A pot of soup covers dinner and tomorrow's lunch. Cool leftovers in a shallow container within two hours. Store noodles separately when you can so they do not drink the broth overnight.",
    keywords: [
      "quick soup recipes",
      "easy weeknight soup",
      "homemade soup recipes",
    ],
    recipeSlugs: [
      "easy-chicken-noodle-soup",
      "creamy-tomato-soup",
      "lentil-vegetable-soup",
      "white-bean-kale-soup",
      "chicken-tortilla-soup",
      "chicken-orzo-soup",
      "20-minute-tomato-soup",
      "creamy-potato-soup",
      "white-chicken-chili",
      "freezer-friendly-chicken-tortilla-soup",
      "creamy-mushroom-soup",
      "minestrone-soup",
      "broccoli-cheddar-soup",
      "greek-lemon-chicken-soup",
    ],
  },
  {
    slug: "quick-vegetarian-meals",
    title: "Quick Vegetarian Meals",
    description:
      "Meatless weeknight plates: black bean tacos, chickpea skillets, bowls, curry, and pasta with beans, eggs, or coconut milk.",
    intro:
      "These dinners skip the meat without turning into a side salad. Beans, eggs, cheese, or coconut milk do the filling work. Pair with rice, tortillas, or pasta already on your shelf.",
    keywords: [
      "quick vegetarian meals",
      "fast easy vegetarian meals",
      "easy meatless dinner",
    ],
    recipeSlugs: [
      "crispy-black-bean-tacos",
      "chickpea-coconut-curry",
      "vegetable-fried-rice",
      "mushroom-stroganoff",
      "sweet-potato-black-bean-bowls",
      "spinach-ricotta-pasta",
      "black-bean-sweet-potato-tacos",
      "skillet-eggplant-parmesan",
      "peanut-tofu-bowl",
      "chickpea-tomato-skillet",
      "roasted-cauliflower-tacos",
      "lentil-shepherd-pie-skillet",
      "coconut-lime-rice-bowl",
      "baked-falafel-bowls",
    ],
  },
  {
    slug: "sheet-pan-dinners",
    title: "Sheet-Pan Dinners",
    description:
      "Sheet-pan chicken, sausage, salmon, and fajitas that use the oven for the long part while you set the table.",
    intro:
      "Start denser vegetables alone when the method says so, then add the protein so nothing burns. Use a rimmed pan and leave space between pieces so food browns instead of steaming.",
    keywords: [
      "easy sheet pan dinner",
      "sheet pan chicken",
      "one pan oven dinner",
    ],
    recipeSlugs: [
      "sheet-pan-maple-chicken-sweet-potatoes",
      "sheet-pan-chicken-fajitas",
      "lemon-garlic-salmon-and-broccoli",
      "sheet-pan-sausage-and-broccoli",
      "sheet-pan-honey-mustard-chicken",
    ],
  },
];

export function findCollection(slug) {
  return collections.find((item) => item.slug === slug);
}
