import { batch2Guides } from "./batch2Guides.js";
import { batch3Guides } from "./batch3Guides.js";
import { batch4Guides } from "./batch4Guides.js";

export const guides = [
  {
    slug: "how-to-plan-five-weeknight-dinners",
    title: "How to plan five weeknight dinners",
    description:
      "A practical way to choose five dinners, leave room for leftovers, and avoid cooking a different cuisine every night.",
    keywords: [
      "easy weekly dinner plan",
      "weeknight dinner ideas",
      "meal planning for beginners",
    ],
    minutes: 8,
    sections: [
      {
        heading: "Start with nights you are actually home",
        paragraphs: [
          "Write Monday through Friday before you open a recipe. Mark any night you will be out, eating leftovers on purpose, or cooking for a different number of people. A five-dinner plan fails when it assumes every night looks the same.",
          "Pick three cooking nights and two repeat or leftover nights if your week is crowded. The meal planner on this site lets you leave a day open for that reason.",
        ],
      },
      {
        heading: "Choose recipes that share a shopping trip",
        paragraphs: [
          "Build the week from two or three anchors: a chicken dinner, a pan of soup or chili, and a meatless skillet or pasta. Then add a breakfast you can reheat. Recipes that all need a long list of fresh herbs and a different protein will spoil before you use them.",
          "Look at the ingredient list and ask what else that onion, cilantro, or bag of spinach can do before Friday. The grocery helper dedupes lines, but you still add quantities together yourself.",
        ],
      },
      {
        heading: "Put the longest recipe on the calmest night",
        paragraphs: [
          "Sheet-pan dinners and soups fit nights when you can heat the oven and walk away. Stir-fries and tacos fit nights when you are home late and want dinner in about 20 minutes. Do not stack two new, long recipes on a Tuesday.",
        ],
      },
      {
        heading: "Write the plan where you will see it",
        paragraphs: [
          "Choose the recipes in the meal planner, then copy the grocery list into your notes app before you shop. A plan that stays in your head gets replaced by whatever is closest to the checkout line.",
          "If a recipe serves more than you will eat, plan the leftover into the next lunch or a later dinner instead of cooking a sixth meal.",
        ],
      },
    ],
  },
  {
    slug: "turn-a-meal-plan-into-a-grocery-list",
    title: "Turn a meal plan into a grocery list",
    description:
      "How to merge ingredient lines from several recipes, check the pantry, and shop once without buying the same item twice.",
    keywords: [
      "weekly grocery list",
      "dinner grocery list",
      "how to make a grocery list from recipes",
    ],
    minutes: 7,
    sections: [
      {
        heading: "Collect recipes before you list food",
        paragraphs: [
          "Finish the week's meals first. A grocery list written while you are still browsing will miss ingredients and duplicate others. On this site, the planner builds a combined list from the recipes you select.",
        ],
      },
      {
        heading: "Add quantities by hand",
        paragraphs: [
          "The planner removes a leading number so similar lines can sit together, but it does not add cups of broth from one recipe to cups of broth from another. Read the checked recipes and write a single line such as 'chicken broth, 6 cups' when two soups both need it.",
          "Keep spices, oil, and salt in a pantry section. Buy them only when you are actually out.",
        ],
      },
      {
        heading: "Shop in the order of the store",
        paragraphs: [
          "Rewrite the copied list into produce, dairy, meat, bakery, and dry goods before you walk in. That takes a few minutes at the kitchen table and saves backtracking.",
          "Buy fragile herbs and salad greens for the early part of the week, or plan those recipes for the day you shop.",
        ],
      },
      {
        heading: "Check the list against what you already opened",
        paragraphs: [
          "Open the refrigerator and the grain shelf before you leave. Half-used tortillas, cooked rice, and an open can of tomatoes are how weeknight plans stay cheap. Cross those lines off.",
        ],
      },
    ],
  },
  {
    slug: "chicken-temperature-and-leftover-safety",
    title: "Chicken temperature and leftover safety",
    description:
      "The temperatures and storage times to use when you cook chicken for dinner and save the rest for tomorrow.",
    keywords: [
      "safe chicken temperature",
      "leftover chicken storage",
      "food safety weeknight cooking",
    ],
    minutes: 7,
    sections: [
      {
        heading: "Cook poultry to 165°F (74°C)",
        paragraphs: [
          "Check the thickest part of the chicken, not the pan juices and not a spot touching bone. A breast and a thigh in the same pan can finish at different times. Pull each piece when it reaches 165°F (74°C), or confirm the coolest piece has reached that temperature before you serve the pan.",
          "Color is not a test. Chicken can look done and still be under temperature, especially near the center of a thick breast.",
        ],
      },
      {
        heading: "Cool it, then refrigerate it",
        paragraphs: [
          "Do not leave cooked chicken on the counter to 'finish cooling' for the rest of the evening. Refrigerate it within two hours of cooking, or within one hour if the kitchen is very warm. Spread it in a shallow container so it chills faster.",
          "Use refrigerated cooked chicken within three to four days. Freeze it if you will not eat it in that window.",
        ],
      },
      {
        heading: "Reheat until it is hot all the way through",
        paragraphs: [
          "Reheat leftovers to 165°F (74°C). Add a splash of broth or water to soups and saucy skillets so they do not dry out. If a leftover smells sour or the texture is slimy, throw it out. Do not taste it to decide.",
        ],
      },
    ],
  },
  {
    slug: "how-to-store-soup-rice-and-pasta",
    title: "How to Store Leftover Soup, Rice, and Pasta Safely",
    description:
      "How long leftover soup lasts in the fridge, how to store cooked rice safely, and how to keep pasta from turning mushy—plus freezer tips.",
    keywords: [
      "how to store leftover soup",
      "how long does leftover soup last",
      "how to store soup",
      "leftover rice safety",
      "storing cooked pasta",
      "freeze leftover soup",
    ],
    minutes: 8,
    faqs: [
      {
        question: "How long does leftover soup last in the fridge?",
        answer:
          "Most vegetable, chicken, and bean soups keep three to four days in the refrigerator when cooled in a shallow container within two hours of cooking.",
      },
      {
        question: "Should I freeze soup with the noodles in it?",
        answer:
          "Noodles keep drinking broth and turn soft. Freeze the broth and add fresh or separately stored noodles when you reheat.",
      },
      {
        question: "Is it safe to leave cooked rice out overnight?",
        answer:
          "No. Cool cooked rice quickly and refrigerate within two hours. Reheat until steaming hot before you eat leftovers.",
      },
    ],
    sections: [
      {
        heading: "Soup",
        paragraphs: [
          "Cool soup in a wide container, not a deep pot left on the stove. Refrigerate within two hours. Most vegetable, chicken, and bean soups keep for three to four days in the refrigerator. Leave a little headspace if you freeze a portion, and thaw it in the refrigerator.",
          "Noodles in chicken noodle soup keep drinking the broth. If you can, store the noodles apart and add them when you reheat a bowl.",
        ],
      },
      {
        heading: "Cooked rice",
        paragraphs: [
          "Cool cooked rice quickly and refrigerate it within two hours. Do not leave a pot of rice on the counter overnight. Use refrigerated rice within three to four days, and reheat it until it is steaming. Fried rice is a good next-day use because the rice must be cold before it hits the pan.",
        ],
      },
      {
        heading: "Pasta",
        paragraphs: [
          "Sauced pasta keeps for three to four days in the refrigerator. It thickens as it sits. Loosen it with a splash of water or broth when you reheat it in a skillet over medium heat. Baked pasta such as a frittata's neighbor, a cheesy skillet, or stuffed shells can be portioned and reheated covered so the edges do not dry out.",
        ],
      },
    ],
  },
  {
    slug: "weeknight-ingredient-substitutions",
    title: "Weeknight ingredient substitutions",
    description:
      "Straightforward swaps for broth, greens, dairy, herbs, and noodles when the recipe and the refrigerator do not match.",
    keywords: [
      "cooking substitutions",
      "ingredient swaps for weeknight dinners",
      "recipe substitutions",
    ],
    minutes: 8,
    sections: [
      {
        heading: "Broth and aromatics",
        paragraphs: [
          "Low-sodium chicken broth and vegetable broth can stand in for each other in soups and skillet pasta. Water plus an extra pinch of salt works in a tomato pasta if you have no broth, though the sauce will taste less round. Onion and shallot swap by volume. A clove of garlic can stand in for a teaspoon of garlic powder, using less powder than fresh because it is concentrated.",
        ],
      },
      {
        heading: "Greens and vegetables",
        paragraphs: [
          "Baby spinach, chopped kale, and Swiss chard all wilt into soups and orzo. Kale needs a few extra minutes. Broccoli, green beans, and asparagus can share a sheet pan with chicken if they are cut to a similar size. Sweet potato and butternut squash both roast well, but squash cooks a little faster.",
        ],
      },
      {
        heading: "Dairy and cheese",
        paragraphs: [
          "Half-and-half can replace heavy cream in a skillet sauce if you simmer it gently and do not boil it hard. Greek yogurt should be stirred in off the heat. Parmesan, pecorino, and a firm cheddar are not the same flavor, but any one of them can finish a pasta if that is what you have. Use a cheese you like to eat plain.",
        ],
      },
      {
        heading: "Noodles and grains",
        paragraphs: [
          "Any long pasta can replace linguine in the one-pot tomato recipe. Add a splash more liquid if the shape is thick. Rice noodles and egg noodles do not share a cook time. Follow the package, and add delicate noodles near the end of a soup.",
        ],
      },
    ],
  },
  {
    slug: "sheet-pan-dinner-method",
    title: "The sheet-pan dinner method",
    description:
      "How to roast chicken and vegetables on one pan so the vegetables brown and the chicken reaches a safe temperature.",
    keywords: [
      "sheet pan dinner method",
      "sheet pan chicken dinner",
      "how to roast vegetables and chicken",
    ],
    minutes: 7,
    sections: [
      {
        heading: "Heat the oven before you season",
        paragraphs: [
          "Set the oven to 425°F (220°C) and let it heat fully. A crowded, cool oven steams food instead of browning it. Use a large rimmed sheet pan. If the food is stacked, split it across two pans.",
        ],
      },
      {
        heading: "Cut vegetables to one size",
        paragraphs: [
          "Sweet potato cubes, onion wedges, and broccoli florets that are about the same thickness finish together. Very thin pieces burn before chicken is done. Toss vegetables with oil and salt so they roast instead of dry out.",
        ],
      },
      {
        heading: "Give chicken a head start or a head wait",
        paragraphs: [
          "Dense vegetables such as potato and carrot often need 10 minutes alone before chicken goes on the pan. Quick vegetables such as bell pepper and zucchini should be added with the chicken or even later. Check chicken at the thickest point and cook it to 165°F (74°C).",
        ],
      },
      {
        heading: "Rest, then finish",
        paragraphs: [
          "Let chicken rest for about five minutes so the juices settle. Add a fresh finish the oven would dull: lemon juice, herbs, or a spoon of salsa. Those last ingredients are what make a sheet-pan dinner taste cooked on purpose, not just heated.",
        ],
      },
    ],
  },
  {
    slug: "make-ahead-breakfasts",
    title: "Make-ahead breakfasts for workday mornings",
    description:
      "Which breakfasts can be baked, rolled, or packed the night before, and how to reheat them without drying them out.",
    keywords: [
      "make ahead breakfast ideas",
      "easy breakfast meal prep",
      "healthy fall breakfast",
    ],
    minutes: 7,
    sections: [
      {
        heading: "Bake once, portion the pan",
        paragraphs: [
          "Baked oatmeal and a frittata are the most forgiving make-ahead breakfasts on this site. Cool them, cut them into portions, and refrigerate them in a covered container for up to four days. Reheat oatmeal with a splash of milk so it softens. Reheat egg dishes covered, just until warm, so they do not weep.",
        ],
      },
      {
        heading: "Use the refrigerator for oats",
        paragraphs: [
          "Overnight oats need no morning cooking. Stir oats, milk, and fruit at night, and eat them cold or warmed. They keep for about three days. If you add banana, expect it to brown. Berries and apple hold their color better.",
        ],
      },
      {
        heading: "Wrap breakfasts you can hold",
        paragraphs: [
          "A breakfast burrito wrapped in foil refrigerates well and can be reheated in a skillet or a low oven. Freeze extra burritos if you will not eat them within three days. Thaw overnight in the refrigerator before reheating.",
        ],
      },
      {
        heading: "Leave pancakes for the morning you have time",
        paragraphs: [
          "Pancakes are better cooked to order. If you do cook extra, cool them on a rack, then refrigerate and reheat in a toaster or a dry skillet. Do not stack them hot in a closed container or they steam and turn gummy.",
        ],
      },
    ],
  },
  {
    slug: "vegetarian-weeknight-plates",
    title: "How to build a vegetarian weeknight plate",
    description:
      "A simple way to make meatless dinners filling: beans or eggs, a starch, vegetables, and a sauce with some fat.",
    keywords: [
      "easy vegetarian dinner ideas",
      "vegetarian weeknight meals",
      "meatless monday dinner",
    ],
    minutes: 7,
    sections: [
      {
        heading: "Put protein on the plate on purpose",
        paragraphs: [
          "A pile of roasted vegetables is not a dinner for most people unless you add beans, lentils, eggs, tofu, or cheese. The vegetarian recipes here use black beans, chickpeas, eggs, or ricotta so the meal holds you until later.",
        ],
      },
      {
        heading: "Add a starch you already know how to cook",
        paragraphs: [
          "Rice, pasta, tortillas, and sweet potato are the starches these recipes rely on. Cook the starch while the skillet sauce simmers. That overlap is what keeps a vegetarian dinner inside half an hour.",
        ],
      },
      {
        heading: "Use fat and acid so the plate is not flat",
        paragraphs: [
          "Olive oil, coconut milk, cheese, or avocado makes the meal satisfying. Lemon, lime, or vinegar keeps bean dishes from tasting heavy. Add the acid at the end so it stays bright.",
        ],
      },
      {
        heading: "Repeat components, not entire meals",
        paragraphs: [
          "A can of beans can become tacos one night and a sweet-potato bowl two nights later if the sauce changes. That is easier than inventing a new vegetarian cuisine every Wednesday.",
        ],
      },
    ],
  },
  {
    slug: "reheating-leftovers-safely",
    title: "Reheating leftovers safely",
    description:
      "How long home-cooked leftovers keep, how to reheat them, and when to throw them away.",
    keywords: [
      "reheating leftovers",
      "leftover food safety",
      "how long do leftovers last",
    ],
    minutes: 6,
    sections: [
      {
        heading: "The two-hour rule",
        paragraphs: [
          "Refrigerate cooked food within two hours. In a hot kitchen or at a picnic, make that one hour. Divide a big pot of soup or chili into shallow containers so the center cools. A deep container left covered on the counter stays warm in the middle for too long.",
        ],
      },
      {
        heading: "Three to four days in the refrigerator",
        paragraphs: [
          "Most cooked meat, soup, pasta, and cooked vegetables are best within three to four days. Write the day you cooked on the container if you cannot remember. When you are unsure how old it is, do not serve it.",
        ],
      },
      {
        heading: "Reheat to 165°F (74°C)",
        paragraphs: [
          "Stir soups and saucy dishes halfway through reheating so cold spots disappear. A splash of water brings dried pasta and rice back. Eggs and baked oatmeal only need to be warmed through. Do not reheat the same leftover more than once. Reheat the portion you will eat.",
        ],
      },
    ],
  },
  {
    slug: "stocking-a-weeknight-pantry",
    title: "Stocking a weeknight pantry",
    description:
      "The shelf, refrigerator, and freezer items that make the recipes on this site possible on a Tuesday.",
    keywords: [
      "weeknight pantry list",
      "simple meal prep ideas",
      "grocery staples for easy dinners",
    ],
    minutes: 8,
    sections: [
      {
        heading: "Dry goods worth keeping",
        paragraphs: [
          "Keep long pasta, orzo or rice, rolled oats, canned tomatoes, chicken or vegetable broth, black beans, chickpeas, lentils, and tortillas. Those ingredients cover most of the dinners and breakfasts here. Buy broth in a size you will finish within a few days of opening, or freeze extra portions in a marked container.",
        ],
      },
      {
        heading: "A short refrigerator list",
        paragraphs: [
          "Eggs, milk, butter, a hard cheese, plain yogurt, lemons or limes, and one sturdy green such as spinach cover the fresh side of these recipes. Onions and garlic can live on the counter. Replace herbs when you know which recipe you are cooking, because a bunch of cilantro rarely survives an unplanned week.",
        ],
      },
      {
        heading: "Freezer backups",
        paragraphs: [
          "Frozen shrimp, a bag of vegetables, and leftover cooked rice or beans make a late dinner possible when the fresh plan falls through. Thaw shrimp in the refrigerator. Do not thaw meat on the counter.",
        ],
      },
      {
        heading: "Seasonings that do the most work",
        paragraphs: [
          "Salt, black pepper, olive oil, smoked paprika, cumin, chili powder, dried thyme or Italian seasoning, and cinnamon or pumpkin pie spice will season every recipe currently on the site. Add soy sauce and a vinegar you like if you cook the stir-fry or fried rice often.",
        ],
      },
    ],
  },
  {
    slug: "how-to-make-creamy-orzo-without-drying-out",
    title: "How to make creamy orzo without drying out",
    description:
      "Liquid ratios, heat control, and reheating tips so orzo dishes stay saucy from the first bowl to the leftovers.",
    keywords: [
      "creamy orzo",
      "orzo not dry",
      "one pot orzo",
      "creamy tuscan chicken orzo",
      "reheat orzo",
    ],
    minutes: 7,
    sections: [
      {
        heading: "Why orzo dries out",
        paragraphs: [
          "Orzo is small pasta that keeps absorbing liquid after the heat is off. A pot that looks perfectly saucy at the stove can turn thick and sticky by the time everyone sits down. The fix is not more cooking time. It is stopping the pot while it still looks a little looser than you want.",
        ],
      },
      {
        heading: "Set the liquid before you start",
        paragraphs: [
          "For a one-pot dish like creamy tuscan chicken orzo, a good starting point is about 3 cups of broth for 1 cup of dry orzo, plus any cream or milk added at the end. Stir often, especially in the last five minutes, because orzo settles and scorches on the bottom of the pot.",
          "Keep the heat at a steady simmer rather than a hard boil. A hard boil reduces the liquid before the pasta is tender, and you end up adding water at the last minute, which dilutes the flavor.",
        ],
      },
      {
        heading: "Finish with cream, cheese, and a splash",
        paragraphs: [
          "Take the pot off the heat before stirring in cream, grated Parmesan, and spinach. Cheese added over high heat can turn grainy. If the dish looks tight, stir in a few tablespoons of warm broth or milk until it loosens. It should flow slowly when you drag a spoon through it.",
        ],
      },
      {
        heading: "Storing and reheating",
        paragraphs: [
          "Cool leftovers within two hours and refrigerate in a shallow container. Orzo will firm up overnight. Reheat in a skillet or saucepan with a splash of broth or milk per serving, stirring until it reaches 165 degrees F. Microwave reheating works too if you cover the bowl and stir halfway through.",
        ],
      },
    ],
  },
  {
    slug: "what-to-cook-with-black-beans-and-sweet-potatoes",
    title: "What to cook with black beans and sweet potatoes",
    description:
      "A flexible pair for tacos, bowls, skillets, and soups, with seasoning and timing notes for weeknights.",
    keywords: [
      "black beans and sweet potatoes",
      "black bean tacos",
      "sweet potato dinner ideas",
      "vegetarian weeknight meals",
      "pantry beans",
    ],
    minutes: 7,
    sections: [
      {
        heading: "Why the pair works",
        paragraphs: [
          "Sweet potatoes bring sweetness and body. Black beans bring salt, earthiness, and protein. Together they fill a tortilla or a bowl without any meat, and both are cheap and easy to keep around. Canned black beans save time. Rinse them well to cut the extra salt from the can.",
        ],
      },
      {
        heading: "Roast or sauté the sweet potato",
        paragraphs: [
          "Cut sweet potatoes into half-inch cubes so they cook in about 25 minutes at 425 degrees F. Toss them with oil, salt, cumin, and chili powder, then spread them in a single layer. If the pan is crowded they will steam instead of browning. On a tighter schedule, cook smaller cubes in a covered skillet with a little water, then uncover to brown.",
        ],
      },
      {
        heading: "Three easy ways to serve them",
        paragraphs: [
          "Fill warm tortillas for black bean tacos and top with lime, cilantro, and a spoonful of yogurt or sour cream. Pile both over rice with a fried egg for a bowl. Or simmer them in broth with tomatoes and chili powder for a thick soup that holds up well in the refrigerator.",
        ],
      },
      {
        heading: "Seasoning and balance",
        paragraphs: [
          "Because sweet potatoes lean sweet, add acid and heat. Lime juice, pickled onions, hot sauce, or a pinch of cayenne bring the dish back into balance. Taste before serving and add salt a little at a time.",
        ],
      },
    ],
  },
  {
    slug: "quick-soup-recipes-for-busy-nights",
    title: "Quick soup recipes for busy nights",
    description:
      "How to get a pot of soup on the table in about 30 minutes, using chicken noodle soup as a model.",
    keywords: [
      "quick soup recipes",
      "30 minute soup",
      "chicken noodle soup",
      "easy weeknight soup",
      "soup with pantry ingredients",
    ],
    minutes: 6,
    sections: [
      {
        heading: "Start with a fast flavor base",
        paragraphs: [
          "Most soups taste better when you cook onion, carrot, and celery in oil for five to seven minutes before adding liquid. Dice them small so they soften quickly. Add garlic for the last 30 seconds so it does not burn. This short step does more for flavor than long simmering does.",
        ],
      },
      {
        heading: "Use shortcuts that work",
        paragraphs: [
          "Store-bought broth, canned beans, rotisserie chicken, and frozen vegetables all shorten the timeline. Chicken noodle soup comes together fast if you use boneless chicken breast or thighs cut into small pieces, which cook through in about 10 minutes of simmering. Check that the chicken reaches 165 degrees F before you add noodles.",
        ],
      },
      {
        heading: "Cook noodles and grains with care",
        paragraphs: [
          "Pasta and rice keep swelling in hot broth. If you want leftovers, cook the noodles separately and add them to each bowl, or cook them just until tender and expect the soup to thicken overnight. Thin it with broth or water when you reheat.",
        ],
      },
      {
        heading: "Finish with brightness",
        paragraphs: [
          "A squeeze of lemon, a handful of chopped parsley, or a small spoonful of grated Parmesan wakes up a soup that tastes flat. Add salt at the end, because broth reduces and can become salty if seasoned early.",
        ],
      },
    ],
  },
  {
    slug: "building-a-quick-vegetarian-dinner",
    title: "Building a quick vegetarian dinner",
    description:
      "A simple formula of protein, vegetable, starch, and sauce for meatless dinners that feel complete.",
    keywords: [
      "quick vegetarian dinner",
      "meatless weeknight meals",
      "vegetarian dinner formula",
      "easy vegetarian recipes",
      "beans and vegetables",
    ],
    minutes: 6,
    sections: [
      {
        heading: "Start with a protein",
        paragraphs: [
          "Eggs, canned beans, chickpeas, lentils, tofu, and cheese are the fastest options. Canned beans need only a rinse and a few minutes in a hot pan. Red lentils cook in about 15 minutes with no soaking. Press and pat tofu dry before browning so it crisps instead of steaming.",
        ],
      },
      {
        heading: "Add a vegetable and a starch",
        paragraphs: [
          "Choose a vegetable that cooks in the same window as your starch. Spinach wilts in two minutes. Broccoli roasts in 20. Rice, tortillas, pasta, and potatoes round out the plate. If you already have leftover rice, you can have a bowl ready in the time it takes to sauté the vegetables.",
        ],
      },
      {
        heading: "Do not skip the sauce",
        paragraphs: [
          "Meatless dinners need seasoning and moisture to avoid tasting plain. A lime-yogurt sauce, a spoonful of salsa, a simple garlic and olive oil dressing, or a little soy sauce with ginger turns basic ingredients into dinner. Try black bean tacos with a quick crema or any of the vegetarian plates in our recipe collection.",
        ],
      },
    ],
  },
  {
    slug: "sheet-pan-timing-for-chicken-and-vegetables",
    title: "Sheet pan timing for chicken and vegetables",
    description:
      "How to cut, stagger, and pull each ingredient so chicken and vegetables finish together on one pan.",
    keywords: [
      "sheet pan chicken and vegetables",
      "sheet pan timing",
      "roasted vegetables with chicken",
      "chicken thighs sheet pan",
      "sheet pan dinner",
    ],
    minutes: 8,
    sections: [
      {
        heading: "Match cut size to cook time",
        paragraphs: [
          "Dense vegetables like potatoes and carrots take 30 to 35 minutes at 425 degrees F when cut into three-quarter-inch pieces. Broccoli and green beans need about 15 to 20. Bone-in chicken thighs take 35 to 45 minutes, and boneless breasts about 20 to 25. Cut harder vegetables smaller and softer ones larger so they land in the same window.",
        ],
      },
      {
        heading: "Stagger when needed",
        paragraphs: [
          "Start potatoes and carrots first, then add the chicken and, later, quick vegetables such as broccoli. This keeps nothing mushy and nothing raw. If your oven runs hot, use the middle rack and rotate the pan once.",
        ],
      },
      {
        heading: "Do not crowd the pan",
        paragraphs: [
          "Overlapping pieces steam and stay pale. Use two pans if the food does not fit in one layer. Pat the chicken dry and keep the pieces a little apart so heat can reach the surface.",
        ],
      },
      {
        heading: "Check doneness",
        paragraphs: [
          "Chicken is safe at 165 degrees F in the thickest part. Thighs taste better closer to 175 degrees F. Rest the chicken five minutes before slicing. For the full method, see our sheet pan dinner method guide and recipes like sheet pan chicken and vegetables.",
        ],
      },
    ],
  },
  {
    slug: "taco-skillet-sauce-basics",
    title: "How to Make Taco Skillet Sauce (One-Pan Method)",
    description:
      "Build a taco skillet sauce with salsa, spices, and a splash of liquid so ground turkey or beef coats evenly without getting soupy or dry.",
    keywords: [
      "taco skillet sauce",
      "taco skillet",
      "how to make taco skillet sauce",
      "one pan taco dinner",
      "ground turkey taco skillet",
      "taco seasoning",
    ],
    minutes: 6,
    faqs: [
      {
        question: "What is taco skillet sauce made of?",
        answer:
          "Usually salsa or tomato sauce, chili powder, cumin, garlic powder, and a splash of broth or water. Brown the meat first, toast the spices, then simmer the liquid until it coats.",
      },
      {
        question: "How do I thicken a watery taco skillet?",
        answer:
          "Simmer uncovered for three to five minutes. Beans, corn, or rice will drink liquid, so loosen the sauce a little before adding them.",
      },
    ],
    sections: [
      {
        heading: "Brown first, sauce second",
        paragraphs: [
          "Cook ground beef or turkey until no pink remains and the meat has some browned bits on the pan. Drain excess fat if the pan looks greasy, then add chopped onion and cook until soft. Browned bits dissolve into the sauce and give it depth.",
        ],
      },
      {
        heading: "Choose a liquid and a seasoning",
        paragraphs: [
          "Use about a half cup of tomato sauce, salsa, or broth per pound of meat. Add chili powder, cumin, garlic powder, paprika, and salt. Homemade seasoning gives you control over salt, which packets often overdo. Stir in the spices before the liquid so they toast for 30 seconds.",
        ],
      },
      {
        heading: "Adjust the thickness",
        paragraphs: [
          "If the skillet looks watery, simmer uncovered for three to five minutes. If it looks dry, add a splash of broth or water. Beans, corn, or cooked rice added at this stage will drink up extra liquid, so loosen the sauce a bit more before adding them.",
        ],
      },
      {
        heading: "Finish with fresh toppings",
        paragraphs: [
          "Lime juice, cilantro, shredded cheese, and sliced avocado lift a skillet that tastes heavy. Serve over rice, with tortilla chips, or in warm tortillas, in the same spirit as black bean tacos.",
        ],
      },
    ],
  },
  {
    slug: "freezer-soups-that-reheat-well",
    title: "Freezer soups that reheat well",
    description:
      "Which soups freeze cleanly, which ingredients to hold back, and how to thaw and reheat safely.",
    keywords: [
      "freezer soup",
      "freeze soup",
      "soups that freeze well",
      "reheat frozen soup",
      "chicken noodle soup freezer",
    ],
    minutes: 7,
    sections: [
      {
        heading: "Soups that freeze best",
        paragraphs: [
          "Broth-based soups, bean soups, lentil soups, and tomato soups hold up well in the freezer for about three months. Chicken noodle soup freezes well if you leave out the noodles, or undercook them slightly. Pureed vegetable soups also freeze easily.",
        ],
      },
      {
        heading: "What to hold back",
        paragraphs: [
          "Cream, milk, and cheese can separate when frozen, so add them when reheating. Pasta and rice turn soft and mushy, so cook and add them fresh. Potatoes can get grainy, so mash a few into the soup or leave them out.",
        ],
      },
      {
        heading: "Cool, portion, and label",
        paragraphs: [
          "Cool soup quickly in shallow containers and refrigerate before freezing. Leave about an inch of space at the top for expansion. Freeze in single-serving portions for quick lunches. Write the date and the name on each container so nothing gets lost.",
        ],
      },
      {
        heading: "Thaw and reheat",
        paragraphs: [
          "Thaw overnight in the refrigerator, then reheat on the stove until steaming and 165 degrees F. In a hurry, warm a frozen block in a covered pot over low heat with a splash of water. Do not thaw soup on the counter.",
        ],
      },
    ],
  },
  {
    slug: "30-minute-chicken-dinners-that-actually-finish-on-time",
    title: "30-minute chicken dinners that actually finish on time",
    description:
      "Realistic prep and cooking habits that keep chicken dinners close to 30 minutes, including what the clock usually forgets.",
    keywords: [
      "30 minute chicken dinner",
      "quick chicken recipes",
      "weeknight chicken",
      "creamy tuscan chicken orzo",
      "fast chicken dinner",
    ],
    minutes: 7,
    sections: [
      {
        heading: "Count the prep, not just the cooking",
        paragraphs: [
          "Many recipes list only the time on the heat. Chopping, trimming, and preheating add 10 to 15 minutes. Read the full recipe before starting, put the oven or a pot of water on first, and set out everything you need so you are not hunting for the cumin mid-sauté.",
        ],
      },
      {
        heading: "Choose cuts that cook quickly",
        paragraphs: [
          "Thin-sliced chicken breast, boneless thighs cut into pieces, and cutlets pounded to an even half inch cook in 6 to 12 minutes. Whole bone-in pieces do not belong in a 30-minute plan. Cut chicken into even pieces so none finish early or stay raw in the center.",
        ],
      },
      {
        heading: "Cook in a hot, uncrowded pan",
        paragraphs: [
          "Pat the chicken dry, season, and let the pan get hot before adding oil. Do not move the pieces for the first few minutes so they brown. Cook in batches if needed. Check the thickest piece with a thermometer for 165 degrees F.",
        ],
      },
      {
        heading: "Pick recipes with built-in sides",
        paragraphs: [
          "One-pan dishes such as creamy tuscan chicken orzo cook the starch in the same pot, which saves both time and cleanup. Pair a quick chicken with a bagged salad or frozen vegetables you can microwave while the chicken rests.",
        ],
      },
    ],
  },
  ...batch2Guides,
  ...batch3Guides,
  ...batch4Guides,
];

export function findGuide(slug) {
  return guides.find((guide) => guide.slug === slug);
}
