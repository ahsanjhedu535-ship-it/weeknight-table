import { batch2Notes } from "./batch2Notes.js";
import { batch3Notes } from "./batch3Notes.js";
import { batch4Notes } from "./batch4Notes.js";

export const recipeNotes = {
  "creamy-tuscan-chicken-orzo": {
    equipment: [
      "A large deep skillet with a lid, about 12 inches",
      "An instant-read thermometer",
      "A wooden spoon for stirring the orzo",
    ],
    prepFirst:
      "Cut the chicken and mince the garlic before the pan is hot. Wash the spinach and grate the Parmesan so the last two minutes are only stirring.",
    serveWith:
      "The orzo is the starch, so skip a second pasta or a pile of bread. A simple green salad is enough if you want something cold on the plate.",
    leftovers:
      "Pack a shallow container for lunch and keep a little extra broth aside. At work, loosen the orzo with that broth and reheat it until the chicken is 165°F (74°C).",
    fix:
      "If the sauce looks like paste before the orzo is tender, add a splash of broth and keep the lid on. If it is thin after the cream goes in, simmer uncovered for another minute.",
  },
  "sheet-pan-maple-chicken-sweet-potatoes": {
    equipment: [
      "A large rimmed sheet pan",
      "Parchment paper",
      "An instant-read thermometer",
    ],
    prepFirst:
      "Heat the oven and cut the sweet potatoes to the same size before you mix the glaze. The potatoes need a head start, so they should be on the pan as soon as the oven is ready.",
    serveWith:
      "The pan already has potato and onion. Add a handful of spinach or a few pickle slices if you want something bright, not another roasted side.",
    leftovers:
      "Slice the cold chicken over a lunch salad, or reheat a thigh and potatoes covered at 350°F (175°C) until the chicken is 165°F (74°C).",
    fix:
      "Pale potatoes mean they were crowded or cut too large. Spread them in one layer next time and start them alone for the full 10 minutes. If the glaze tastes sharp, the mustard was heavy. A few drops of maple on the plate fixes one serving.",
  },
  "easy-chicken-noodle-soup": {
    equipment: [
      "A large pot",
      "A ladle",
      "A second container if you plan to store noodles apart from the broth",
    ],
    prepFirst:
      "Dice the onion, carrots, and celery before the oil goes in the pot. If the chicken is still warm from earlier cooking, shred it while the vegetables soften.",
    serveWith:
      "The noodles are in the bowl. Crackers or a piece of toast are plenty. A squeeze of lemon at the table brightens a salty broth.",
    leftovers:
      "Keep noodles in one container and broth in another when you can. Combine them only when you reheat, so tomorrow's lunch is still soup and not a noodle casserole.",
    fix:
      "If the noodles drank the broth, add water or more broth and bring it back to a simmer. If the vegetables are still firm, they went in too late. Simmer them longer before the noodles next time.",
  },
  "apple-cinnamon-baked-oatmeal": {
    equipment: [
      "An 8-inch square baking dish",
      "A mixing bowl",
      "An oven set to 350°F (175°C)",
    ],
    prepFirst:
      "Dice the apple small so it softens in the same time as the oats. Grease the dish before you mix the batter, or the corners stick.",
    serveWith:
      "A spoon of yogurt or a splash of milk on a warm square is enough. Maple syrup is already in the custard, so taste a bite before you add more.",
    leftovers:
      "Cut the pan into squares and refrigerate them. In the morning, add a splash of milk and reheat one piece covered until it is hot in the center.",
    fix:
      "A dry center means the dish was underbaked or the oven ran cool. Give it a few more minutes and cover the top with foil if the edges are already dark. A soggy square usually means too much milk. Serve it in a bowl rather than trying to unmold it.",
  },
  "crispy-black-bean-tacos": {
    equipment: [
      "A skillet for the beans and a second pass for crisping the tortillas",
      "A spatula",
      "Tongs",
    ],
    prepFirst:
      "Drain and rinse the beans, and slice the avocado, before you heat the pan. The tacos cook quickly once the tortillas are in the skillet.",
    serveWith:
      "The filling is the meal. Add salsa, lime, and shredded lettuce at the table. Rice on the side is optional if two tacos are not enough.",
    leftovers:
      "Store the bean filling, not the crisped tortillas. Warm the beans and fold fresh tortillas the next day so the shells stay crisp.",
    fix:
      "Soggy tortillas were overcrowded or filled too full. Cook one or two at a time and use a thin layer of beans and cheese. If the beans taste flat, they need salt and a squeeze of lime, not more cumin.",
  },
  "one-pot-tomato-basil-pasta": {
    equipment: [
      "A wide pot or deep skillet so the linguine can lie mostly flat",
      "Tongs for stirring",
    ],
    prepFirst:
      "Halve the tomatoes and slice the garlic before the pasta goes in. Once the liquid is simmering you will be stirring, not chopping.",
    serveWith:
      "This is already a pasta dinner. A salad with a sharp vinaigrette balances the tomatoes. Extra Parmesan at the table is the only garnish it needs.",
    leftovers:
      "The noodles keep absorbing sauce. Pack lunch with a spoon of water in the container, then reheat in a skillet until the pasta is hot.",
    fix:
      "A dry pot before the pasta is tender needs a splash of water and a lower flame. A watery pot at the end needs a minute uncovered so the starch can thicken. Different pasta shapes drink different amounts of liquid, so start checking at 8 minutes.",
  },
  "pumpkin-spice-pancakes": {
    equipment: [
      "A mixing bowl",
      "A skillet or griddle",
      "A 1/4-cup measure for portioning",
    ],
    prepFirst:
      "Whisk the wet ingredients, including the pumpkin, before the flour goes in. Stop stirring as soon as the flour disappears.",
    serveWith:
      "Butter and maple syrup. The pancakes are already spiced, so skip cinnamon sugar on top unless you want them sweeter.",
    leftovers:
      "Cool them on a rack, then refrigerate or freeze with parchment between pancakes. A toaster or a dry skillet reheats them better than a microwave, which makes them rubbery.",
    fix:
      "Batter that will not pour needs milk, one tablespoon at a time. A pale pancake means the skillet is too cool. A dark outside and raw middle means the heat is too high.",
  },
  "lemon-garlic-salmon-and-broccoli": {
    equipment: [
      "A rimmed sheet pan",
      "An instant-read thermometer",
      "Foil, in case the broccoli browns early",
    ],
    prepFirst:
      "Cut the broccoli small and pat the salmon dry. The broccoli roasts alone first, so it should be on the pan when the oven hits 425°F (220°C).",
    serveWith:
      "Rice or a baked potato if you want a starch. Lemon wedges on the side matter more than a second vegetable.",
    leftovers:
      "Flake cold salmon over rice or a salad. Reheat fish gently, just until warm, so it does not dry out. Eat it within two days.",
    fix:
      "Broccoli that is black at the edges was too close to the broiler side of the oven. Tent that half with foil while the salmon finishes. Salmon past 145°F (63°C) turns dry. Pull it as soon as the thickest part hits that temperature.",
  },
  "beef-and-broccoli-stir-fry": {
    equipment: [
      "A 12-inch skillet, or a smaller pan used in batches",
      "A pot for the rice",
      "A sharp knife for thin slices",
    ],
    prepFirst:
      "Start the rice, slice the beef, and mix the sauce before the skillet gets hot. A stir-fry moves too fast to stop and chop.",
    serveWith:
      "Steamed rice is the right base. The broccoli is already in the pan, so you do not need another vegetable.",
    leftovers:
      "Rice and beef together reheat well in a skillet with a spoon of water until the meat is steaming, 165°F (74°C). Add the broccoli at the end so it does not go olive-gray.",
    fix:
      "Gray beef means the pan was crowded and the meat steamed. Sear it in a single layer, in two batches if the skillet is under 12 inches. A thick sauce needs a splash of water. A thin sauce needs another minute on the heat after the beef comes out.",
  },
  "turkey-taco-skillet": {
    equipment: [
      "A large skillet",
      "A spoon for breaking up the turkey",
      "An instant-read thermometer if you are unsure the turkey is done",
    ],
    prepFirst:
      "Dice the onion and pepper, and open the tomatoes, before you brown the meat. The filling reduces while you warm tortillas.",
    serveWith:
      "Warm corn or flour tortillas, or a scoop of rice. Lettuce, cheese, and lime go on at the table so the skillet stays hot.",
    leftovers:
      "The filling keeps better than assembled tacos. Reheat it in a skillet until steaming and fold it into fresh tortillas for lunch.",
    fix:
      "Watery filling means the turkey liquid was not cooked off before the tomatoes went in. Spoon some liquid out and simmer uncovered. If the turkey is still pink, keep cooking until no pink remains.",
  },
  "honey-garlic-chicken-thighs": {
    equipment: [
      "A skillet that can hold the thighs in one layer",
      "An instant-read thermometer",
      "Tongs",
    ],
    prepFirst:
      "Pat the thighs dry and mix the honey, garlic, and soy before the pan is hot. Dry meat browns. Wet meat steams.",
    serveWith:
      "Rice or mashed potatoes catch the sauce. A quick cucumber salad keeps the plate from being only sweet and salty.",
    leftovers:
      "Slice the cold thighs over rice and warm the sauce separately, or reheat both in a covered skillet until the chicken is 165°F (74°C).",
    fix:
      "Sauce that vanishes was reduced too fast. Add a splash of water. Sauce that is thin needs another minute of simmering after the chicken comes out. Chicken under 165°F (74°C) goes back in the pan, covered, for a few minutes.",
  },
  "sheet-pan-chicken-fajitas": {
    equipment: [
      "A large rimmed sheet pan, or two pans if the food would overlap",
      "An instant-read thermometer",
      "Tongs",
    ],
    prepFirst:
      "Slice the chicken and peppers to a similar thickness. Heat the oven fully to 425°F (220°C) before the pan goes in.",
    serveWith:
      "Warm tortillas, lime, and a spoon of salsa or sour cream. The peppers are the vegetable, so you do not need a second side.",
    leftovers:
      "Store the chicken and peppers without the tortillas. Reheat them in a skillet to 165°F (74°C) and wrap them in fresh tortillas.",
    fix:
      "Soggy onions mean the pan was piled. Spread the food in one layer, using a second pan if you have to. Pale chicken needs more time, checked with a thermometer, not a higher pile of food.",
  },
  "skillet-turkey-meatballs": {
    equipment: [
      "A mixing bowl",
      "A large skillet with a lid",
      "An instant-read thermometer",
    ],
    prepFirst:
      "Mix and roll the meatballs, and start the sauce ingredients, before the skillet is hot. Wet hands keep the mixture from sticking. Do not pack the balls hard.",
    serveWith:
      "Pasta, rice, or a chunk of bread for the sauce. A green salad is the easiest extra if the meal feels heavy.",
    leftovers:
      "Meatballs and sauce reheat well. Warm them covered with a splash of water until the center of a meatball is 165°F (74°C). Toss with freshly boiled pasta if last night's noodles are soft.",
    fix:
      "Meatballs that fall apart were handled too much or the pan was not hot enough to set the outside. Give them a few undisturbed minutes. Dense meatballs were compacted. Roll the next batch more loosely.",
  },
  "sausage-pepper-and-onion-pasta": {
    equipment: [
      "A pot for the pasta",
      "A large skillet for the sausage and peppers",
      "An instant-read thermometer for the sausage",
    ],
    prepFirst:
      "Slice the peppers and onion, and put the pasta water on to boil, before the sausage hits the skillet. The two pans should finish together.",
    serveWith:
      "The peppers are in the sauce. A handful of arugula on top, or a side salad, is plenty. Pass Parmesan if you like.",
    leftovers:
      "This keeps for a few days. Reheat in a skillet with a splash of the pasta water or plain water so the noodles loosen.",
    fix:
      "If the sausage is browned outside and under 160°F (71°C) in the center, cover the skillet and cook it through before the peppers go in. Watery peppers were crowded. Cook them in a hotter pan, in one layer.",
  },
  "baked-pork-chops-with-apples": {
    equipment: [
      "An oven-safe skillet",
      "An instant-read thermometer",
      "The oven at 400°F (200°C)",
    ],
    prepFirst:
      "Season the chops and slice the apples and onion before you sear. Once the skillet goes into the oven you are mostly waiting.",
    serveWith:
      "The apples stand in for a sweet side. Mashed potatoes or buttered noodles fit if you want something more filling. A sharp green salad cuts the maple.",
    leftovers:
      "Slice the chop and reheat it gently with the apples, covered, just until the pork is hot. It dries out if you blast it. Eat it within three days.",
    fix:
      "Chops over 145°F (63°C) by a lot were left in too long. Thin chops need an early check. Thick chops need the longer end of the time. Apples that are still crunchy were cut too thick or added too late.",
  },
  "shrimp-garlic-pasta": {
    equipment: [
      "A large skillet",
      "A pot for the pasta",
      "Tongs",
    ],
    prepFirst:
      "Thaw frozen shrimp in the refrigerator and pat them very dry. Mince the garlic and start the pasta water before the skillet is hot. Shrimp overcook in about two extra minutes.",
    serveWith:
      "The pasta is the meal. Lemon wedges and a little parsley are the right finish. A salad is optional.",
    leftovers:
      "Shrimp turn rubbery when boiled again. Reheat gently in a skillet with a splash of water, just until warm, and eat within two days.",
    fix:
      "Steamed, pale shrimp were wet or crowded. Pat them dry and cook them in one layer. If the garlic smells bitter, the heat was too high. Start the next batch on medium and add the garlic after the shrimp come out.",
  },
  "spinach-mushroom-frittata": {
    equipment: [
      "A 10-inch oven-safe skillet",
      "Foil if the handle is not oven-safe",
      "A mixing bowl for the eggs",
    ],
    prepFirst:
      "Whisk the eggs with milk, salt, and pepper, and slice the mushrooms, before the skillet heats. Mushrooms need time to release their liquid.",
    serveWith:
      "Toast, fruit, or a few roasted potatoes. The frittata already has spinach, so you do not need a cooked vegetable.",
    leftovers:
      "Cold wedges are good as they are, or reheat one covered so the eggs do not dry out. It keeps for a few days in the refrigerator.",
    fix:
      "A wet frittata usually means the mushrooms were not cooked until their liquid evaporated. Give them more time before the eggs go in. A burnt bottom and raw top means the skillet was too hot. Finish it in the oven, not on a roaring burner.",
  },
  "veggie-breakfast-burritos": {
    equipment: [
      "A skillet",
      "Foil or parchment if you are freezing burritos",
      "A spatula",
    ],
    prepFirst:
      "Warm the tortillas so they roll without cracking. Cook the pepper and beans first, then the eggs, so the eggs are the last thing and stay tender.",
    serveWith:
      "Salsa, hot sauce, or a slice of avocado. The burrito is already a full breakfast, so a piece of fruit is a better side than another starch.",
    leftovers:
      "Refrigerate for a few days or freeze wrapped burritos. Thaw overnight in the refrigerator and reheat covered in a skillet or a 350°F (175°C) oven until the center is hot, about 165°F (74°C).",
    fix:
      "A burrito that tears was overfilled or the tortilla was cold. Use less filling and warm the tortilla. Watery eggs were cooked too hot. Scramble them on medium-low and take them off while they still look slightly soft.",
  },
  "berry-overnight-oats": {
    equipment: [
      "A jar or container with a lid, one per serving if you like",
      "A spoon",
      "No oven and no skillet",
    ],
    prepFirst:
      "Stir oats, milk, and berries the night before and put the jar in the refrigerator. There is nothing to prep in the morning except a topping.",
    serveWith:
      "More berries, a spoon of yogurt, or a few nuts. The oats are the breakfast. You do not need toast unless you are especially hungry.",
    leftovers:
      "A jar keeps for a few days in the refrigerator. Stir in a splash of milk in the morning if the oats drank everything overnight.",
    fix:
      "Stiff oats need more milk, added in the morning rather than the night before if you want them softer tomorrow. Sour oats were left too long. Start a fresh jar. A 1:1 ratio of oats to milk is only a starting point.",
  },
  "potato-and-egg-skillet": {
    equipment: [
      "A large skillet with a lid",
      "A spatula that can scrape the bottom",
    ],
    prepFirst:
      "Dice the potatoes small and even. They take the longest. Peppers can be cut while the first side of the potatoes browns.",
    serveWith:
      "Toast or a tortilla. Hot sauce or salsa on the eggs is enough. The skillet already has potato and pepper.",
    leftovers:
      "This is best the morning you cook it. Fully set eggs and potatoes keep for two days and can be reheated in a skillet. Do not save eggs with runny yolks.",
    fix:
      "Firm potatoes at the 10-minute mark need a tablespoon of water and a lid for 2 minutes, then the lid comes off so they crisp again. Burnt potatoes and raw centers were cut too big or the heat was too high.",
  },
  "banana-oat-pancakes": {
    equipment: [
      "A mixing bowl",
      "A skillet or griddle",
      "A spatula",
    ],
    prepFirst:
      "Mash a ripe banana until it is almost smooth, then mix the batter. A green banana will not mash and the pancakes will taste starchy.",
    serveWith:
      "A few banana slices and maple syrup. Peanut butter is a good extra if you want the breakfast to last until lunch.",
    leftovers:
      "Cool them on a rack. Refrigerate for a few days and reheat in a toaster or a dry skillet. Freeze with parchment between pancakes.",
    fix:
      "The first pancake is the test. Pale means raise the heat a little. Scorched outside and wet inside means lower the heat. Batter that is too thick gets a spoon of milk.",
  },
  "creamy-tomato-soup": {
    equipment: [
      "A pot",
      "A blender, or an immersion blender",
      "A ladle",
    ],
    prepFirst:
      "Dice the onion before the oil is hot. Open the tomatoes and measure the cream so the pot is not waiting while you search the refrigerator.",
    serveWith:
      "A grilled cheese or a piece of toast. The soup is smooth, so the bread is the texture. A side salad turns it into dinner.",
    leftovers:
      "Cool it in a wide container and refrigerate within two hours. Reheat gently so the cream does not separate. It keeps for several days.",
    fix:
      "A sharp, acidic soup usually needs salt before it needs more sugar. Taste, then add a pinch of sugar only if the canned tomatoes still taste harsh. A curdled look means the cream boiled. Keep the next pot at a bare simmer after the cream goes in.",
  },
  "white-bean-kale-soup": {
    equipment: [
      "A large pot",
      "A wooden spoon",
      "A ladle",
    ],
    prepFirst:
      "Dice the onion and carrots, and rinse the beans, before the pot heats. Kale stems take longer than the leaves, so strip them if they are thick.",
    serveWith:
      "Crusty bread or a scoop of cooked rice in the bowl. A spoon of Parmesan and a thread of olive oil finish it.",
    leftovers:
      "This soup gets thicker as the beans sit. Loosen a lunch portion with broth or water and reheat until steaming. It is a good next-day meal.",
    fix:
      "A thin broth is fine, or mash a spoonful of beans against the side of the pot to thicken it. Tough kale went in too late or the stems were left on. Simmer it a few minutes more.",
  },
  "lentil-vegetable-soup": {
    equipment: [
      "A large pot",
      "A lid",
      "A wooden spoon",
    ],
    prepFirst:
      "Rinse the lentils and check them for small stones. Dice the onion, carrots, and celery before the oil goes in, because the simmer is long enough that you should not be chopping halfway through.",
    serveWith:
      "Bread, or a spoon of yogurt if you want it richer. The lentils are the protein and the starch, so a second side is optional.",
    leftovers:
      "Lentil soup keeps well for several days and often tastes better the next day. Add a splash of water when you reheat it. The lentils keep drinking liquid.",
    fix:
      "Crunchy lentils are undercooked, often because the package was old. Add broth and keep simmering until they are tender. Mushy lentils were boiled hard for too long. A gentler simmer next time keeps their shape.",
  },
  "chicken-tortilla-soup": {
    equipment: [
      "A pot for the soup",
      "A sheet pan for the tortilla strips",
      "The oven at 400°F (200°C)",
    ],
    prepFirst:
      "Cut the tortilla strips and start them in the oven before the onion hits the pot. They should be crisp and set aside by the time the soup is ready to serve.",
    serveWith:
      "The toppings are the point: crisp strips, avocado, lime, and a little cheese. Put them on each bowl, not in the pot.",
    leftovers:
      "Store the soup without the strips or the avocado. Reheat the soup until steaming and add fresh strips so they stay crisp.",
    fix:
      "Soft strips were left in the soup or piled on the pan. Bake them in one layer and add them when you eat. A flat broth needs salt and lime before it needs more chili powder.",
  },
  "chickpea-coconut-curry": {
    equipment: [
      "A pot with a lid",
      "A wooden spoon",
      "A pot or rice cooker for the rice",
    ],
    prepFirst:
      "Start the rice first. Dice the onion and open the chickpeas and coconut milk before the curry pot is hot. The simmer itself is short.",
    serveWith:
      "Rice is the right base. A spoon of yogurt and a handful of cilantro cool the bowl down. Naan is optional.",
    leftovers:
      "Curry and rice reheat well. Warm the curry on the stove with a splash of water if it thickened in the refrigerator, and heat the rice in a covered dish.",
    fix:
      "A sharp curry usually needs salt before it needs more spice. A broken, oily sauce was boiled too hard after the coconut milk went in. Keep it at a simmer. If it is too thick, add water a spoon at a time.",
  },
  "vegetable-fried-rice": {
    equipment: [
      "A large skillet or wok",
      "Cold, already-cooked rice",
      "A spatula that can scrape the pan",
    ],
    prepFirst:
      "The rice has to be cold and dry, cooked earlier and cooled in the refrigerator, not left on the counter overnight. Chop the vegetables and crack the eggs before the pan is ripping hot.",
    serveWith:
      "This is a full plate. A few slices of cucumber or a splash of chili oil is enough on the side.",
    leftovers:
      "Refrigerate within two hours and eat within three days. Reheat in a skillet until the rice is steaming hot, not just warm.",
    fix:
      "Clumpy, steamy rice was warm or wet when it hit the pan. Spread cold rice in a hot skillet and leave it alone long enough to fry. Scrambled eggs that disappeared were overmixed. Cook them first and add them back at the end.",
  },
  "mushroom-stroganoff": {
    equipment: [
      "A large skillet",
      "A pot for the noodles",
      "A wooden spoon",
    ],
    prepFirst:
      "Slice the mushrooms and start the noodle water before the butter melts. Mushrooms need several minutes to brown, and the noodles should finish with them.",
    serveWith:
      "Egg noodles or mashed potatoes. A parsley sprinkle and black pepper are the garnish. A salad keeps the meal from being only cream.",
    leftovers:
      "The sauce thickens in the refrigerator. Reheat it gently with a splash of water and toss with fresh noodles if the old ones are soft. Do not boil it.",
    fix:
      "A curdled sauce boiled after the sour cream went in. Take the skillet off the heat, stir the sour cream in, and warm it only until it is hot. Watery mushrooms were not cooked long enough to brown. Give them the full time before the liquid goes in.",
  },
  "sweet-potato-black-bean-bowls": {
    equipment: [
      "A sheet pan",
      "A small saucepan for the beans",
      "A pot for the rice",
      "The oven at 425°F (220°C)",
    ],
    prepFirst:
      "Start the rice and cut the sweet potatoes smaller than 1 inch so they roast in the same window. The beans only need warming at the end.",
    serveWith:
      "The bowl is rice, potato, and beans. Lime, cilantro, and a spoon of salsa or yogurt are the extras. You do not need a separate side.",
    leftovers:
      "Keep the parts in one container or separate ones. Reheat the potatoes and beans until hot, and add cold salsa or yogurt after, so it stays fresh.",
    fix:
      "Hard potatoes were cut too big or the pan was crowded. Cut them smaller and roast them in one layer, stirring once. Bland beans need salt and cumin, tasted before they go in the bowl.",
  },
  "spinach-ricotta-pasta": {
    equipment: [
      "A pot large enough for the pasta",
      "A colander, unless you are saving a cup of pasta water",
      "Tongs",
    ],
    prepFirst:
      "Salt the pasta water and get it boiling before you deal with the spinach. Ricotta, Parmesan, and spinach should be ready when the noodles come out, because the sauce is mostly heat from the pasta.",
    serveWith:
      "This is a creamy pasta. A lemony salad or a few sliced tomatoes on the side keep it from feeling heavy. Extra pepper at the table helps.",
    leftovers:
      "The sauce tightens as it sits. Reheat in a skillet over medium-low heat with a splash of water. Eat it within three days.",
    fix:
      "Grainy ricotta was boiled. Take the pot off the heat before the cheese goes in and stir until it just melts. A dry sauce needs some of the pasta water, added a splash at a time, until it coats the noodles.",
  },
  "lemon-chicken-orzo-skillet": {
    equipment: [
      "A deep 12-inch skillet with a lid and 3-inch sides",
      "An instant-read thermometer",
      "A microplane for the lemon zest",
    ],
    prepFirst:
      "Zest the lemon before you juice it, then mince the garlic and grate the Parmesan. Pat the chicken dry so it sears instead of steams.",
    serveWith:
      "The orzo is the starch, so you do not need bread. A crisp arugula salad with extra lemon is enough.",
    leftovers:
      "Orzo keeps drinking broth in the refrigerator. Reheat a portion covered with a splash of broth or water until the chicken is 165°F (74°C). Skip the freezer, since the orzo goes soft.",
    fix:
      "If the orzo sticks or looks dry before it is tender, add a splash of broth and stir the bottom. If the sauce is soupy at the end, leave the lid off for a minute or two. Bitter lemon flavor usually means too much zest, so go lighter next time.",
  },
  "chicken-orzo-soup": {
    equipment: [
      "A large pot with a lid",
      "Two forks for shredding",
      "A small pot for cooking the orzo separately if you want leftovers",
    ],
    prepFirst:
      "Dice the onion, slice the carrots into coins, and slice the celery before the oil goes in. Squeeze the lemon at the end so the juice is fresh.",
    serveWith:
      "Crusty bread or buttered toast. Fresh dill or parsley on top is enough green.",
    leftovers:
      "Orzo swells overnight and the broth disappears. Cook it separately and add it to each bowl, or loosen leftovers with water. Freeze the soup without the orzo.",
    fix:
      "If the soup turned into a stew, add broth and a squeeze of lemon. Flat flavor needs salt before anything else. Pasty orzo was simmered too long, so pull the pot a minute early next time.",
  },
  "20-minute-tomato-soup": {
    equipment: [
      "A medium pot",
      "An immersion blender, or a standing blender with a vented lid",
      "A wooden spoon for breaking up the tomatoes",
    ],
    prepFirst:
      "Chop the onion and open the can before you melt the butter. The soup is mostly a quick simmer, so you will not have time to chop later.",
    serveWith:
      "Grilled cheese is the obvious partner. Toast with a smear of butter works if you do not want to use a second pan.",
    leftovers:
      "Cool it and refrigerate within two hours. It freezes well for a few months. Reheat gently and stir, then taste for salt again.",
    fix:
      "If it tastes sharp, add a pinch of sugar or a small knob of butter and simmer a few more minutes. If it is too thick, add a splash of broth. If the blender lid pops, you filled it too full. Work in batches next time.",
  },
  "creamy-potato-soup": {
    equipment: [
      "A large heavy pot",
      "A potato masher",
      "A slotted spoon for moving the bacon",
    ],
    prepFirst:
      "Peel and cube the potatoes to the same 3/4-inch size, and shred the cheddar from a block. Chop the bacon before it goes in the pot.",
    serveWith:
      "A green salad or crusty bread. Put bacon, extra cheddar, and chives on the table so everyone tops their own bowl.",
    leftovers:
      "The soup thickens as it sits. Reheat over low heat with a splash of milk or broth and do not let it boil. Freezing can leave the potatoes grainy.",
    fix:
      "Gluey soup means the potatoes were over-blended, so mash by hand next time. If it is too thick, add milk a few spoonfuls at a time. Grainy cheese went in over high heat. Take the pot off the burner before the cheddar goes in.",
  },
  "black-bean-sweet-potato-tacos": {
    equipment: [
      "A large rimmed sheet pan",
      "Parchment paper",
      "A small skillet for the beans",
    ],
    prepFirst:
      "Peel and cube the sweet potatoes to about 1/2 inch so they are done together. Mix the lime crema first and leave it in the refrigerator while the potatoes roast.",
    serveWith:
      "Lime wedges, avocado, and cilantro are on the taco. A little rice or a cabbage slaw on the side rounds out the meal.",
    leftovers:
      "Store the potatoes, beans, and crema in separate containers. Reheat the potatoes in a hot skillet or a 400°F (200°C) oven and build fresh tacos.",
    fix:
      "Soft, pale potatoes mean the pan was crowded or the cubes were uneven. Spread them in one layer and flip halfway. Dry beans need the water splash and a good mash. Bland tacos usually need more salt and lime in the crema.",
  },
  "skillet-eggplant-parmesan": {
    equipment: [
      "A 12-inch oven-safe skillet",
      "Paper towels or a wire rack for the salted eggplant",
      "A small bowl for the panko topping",
    ],
    prepFirst:
      "Slice the eggplant and salt it first, since it needs 20 minutes to sweat. Blot the slices dry, then mix the panko topping while the oven heats.",
    serveWith:
      "Spaghetti with plain marinara or a sharp green salad. Crusty bread catches the sauce.",
    leftovers:
      "Reheat covered in a 350°F (175°C) oven for 15 to 20 minutes so the topping stays crisp. The microwave works for lunch but makes the panko soft.",
    fix:
      "Greasy eggplant means the pan was too cool. Wait until the oil shimmers and sear in batches. Watery sauce means the slices were not blotted dry. Bake it a few more minutes. If the topping is pale, broil for 1 to 2 minutes and watch it.",
  },
  "peanut-tofu-bowl": {
    equipment: [
      "A large nonstick skillet",
      "A clean kitchen towel and a heavy pan for pressing the tofu",
      "A whisk and a small bowl for the sauce",
    ],
    prepFirst:
      "Press the tofu first, since it needs 15 minutes. Start the rice, then shred the cabbage and carrots while the tofu browns.",
    serveWith:
      "The bowl is complete. Lime wedges, extra cilantro, and chili crisp are optional extras. Edamame is easy to add for more protein.",
    leftovers:
      "Pack the tofu, rice, vegetables, and sauce in separate containers. Re-crisp the tofu in a skillet or hot oven and loosen the sauce with warm water.",
    fix:
      "Tofu that sticks needs a hotter pan and a little more patience before turning. If it is pale, it still has too much water. Press it longer next time. If the sauce is too thick, whisk in warm water a tablespoon at a time.",
  },
  "sheet-pan-sausage-and-broccoli": {
    equipment: [
      "A large rimmed sheet pan, or two if the food crowds",
      "A spatula for flipping the potatoes",
      "A cutting board for the sausage and broccoli",
    ],
    prepFirst:
      "Put the empty pan in the oven while it heats, then halve the potatoes. Cut the sausage and broccoli while the potatoes get their head start.",
    serveWith:
      "Lemon wedges and whole-grain mustard are the sides. A simple apple slaw is a good cold contrast.",
    leftovers:
      "Reheat on a sheet pan at 400°F (200°C) for 8 to 10 minutes to bring back crisp edges. Do not freeze it, because the broccoli turns soft.",
    fix:
      "Steamed, pale vegetables mean the pan was crowded. Use two pans next time. Dark broccoli tips mean the pan sat too close to the top element. Move the rack lower or tent those spots with foil.",
  },
  "garlic-butter-chicken-bites": {
    equipment: [
      "A large skillet",
      "An instant-read thermometer",
      "A spatula or tongs",
    ],
    prepFirst:
      "Cut the chicken into pieces of the same size and pat them very dry. Mince the garlic and chop the parsley before the pan is hot, because the butter step takes under a minute.",
    serveWith:
      "Rice, buttered noodles, or a bed of greens. Roasted broccoli goes well if the oven is already on.",
    leftovers:
      "Reheat in a skillet with a splash of broth or water until warm. Cold bites are good on a salad. Small pieces dry out fast, so do not microwave them for long.",
    fix:
      "Pale, wet chicken means the pan was crowded. Cook in two batches. Bitter garlic was added over high heat, so turn the burner down first. Dry bites were cooked past 165°F (74°C), so pull them as soon as they hit it.",
  },
  "white-chicken-chili": {
    equipment: [
      "A large pot with a lid",
      "Two forks for shredding",
      "A potato masher or the back of a spoon for the beans",
    ],
    prepFirst:
      "Dice the onion and jalapeno, drain and rinse the beans, and cube the cream cheese before you start. The soup moves fast once it simmers.",
    serveWith:
      "Tortilla chips, avocado, and shredded Monterey Jack on top. Cornbread is good if you want a heavier dinner.",
    leftovers:
      "The chili thickens in the refrigerator. Loosen it with broth and reheat on medium-low until steaming. It freezes well for a few months.",
    fix:
      "Thin chili needs a few more beans mashed against the side of the pot. Lumpy cream cheese went in over a boil, so lower the heat and stir until it melts. Flat flavor needs salt and lime before more cumin.",
  },
  "pesto-chicken-orzo": {
    equipment: [
      "A large deep skillet or Dutch oven",
      "An instant-read thermometer",
      "A wooden spoon for the orzo",
    ],
    prepFirst:
      "Cut the chicken into 3/4-inch pieces and halve the tomatoes before the pan heats. Open the pesto jar so it is ready when the heat goes off.",
    serveWith:
      "The orzo is the starch. A simple cucumber salad or a few slices of crusty bread is plenty.",
    leftovers:
      "Eat the leftovers cold as a pasta salad, or reheat with a splash of broth. The orzo drinks the pesto, so add a little olive oil if it looks dry.",
    fix:
      "Dull, brown pesto means it went in over high heat. Take the pan off the burner first. Dry orzo needs a splash of broth. If the dish tastes flat, add lemon juice and a little more Parmesan.",
  },
  "chickpea-tomato-skillet": {
    equipment: [
      "A large deep skillet",
      "A wooden spoon for mashing a few chickpeas",
      "A can opener, since this is nearly all pantry",
    ],
    prepFirst:
      "Dice the onion and mince the garlic, then open and drain the chickpeas. Measure the spices into one small dish so they go in together.",
    serveWith:
      "Warm pita, crusty bread, or rice. A fried egg on top turns it into a bigger dinner.",
    leftovers:
      "This tastes better the next day. Reheat on the stove with a splash of water. Freeze it without the feta.",
    fix:
      "A thin sauce needs a few more minutes uncovered, plus a few mashed chickpeas. A sharp sauce needs the pinch of sugar. If the spinach is stringy, it cooked too long, so add it right at the end.",
  },
  "freezer-friendly-chicken-tortilla-soup": {
    equipment: [
      "A large pot, at least 6 quarts",
      "Freezer-safe containers or zip-top bags",
      "A ladle and two forks for shredding",
    ],
    prepFirst:
      "Dice the onion and bell pepper and rinse the beans before you heat the oil. Set out the containers and chill a shallow dish, so the soup can cool quickly when it is done.",
    serveWith:
      "Tortilla chips, avocado, cheese, sour cream, and lime go in the bowl, not the pot. A quesadilla works for a bigger dinner.",
    leftovers:
      "Cool the soup quickly, then freeze it in portions of 2 to 4 servings. Thaw overnight in the refrigerator and reheat until it is steaming and at least 165°F (74°C). Add the toppings fresh.",
    fix:
      "A thick soup needs a splash of broth after thawing. Flat flavor needs salt and lime before more chili powder. Do not add the toppings or dairy before freezing, since they turn soggy or separate.",
  },
  "creamy-mushroom-soup": {
    equipment: [
      "A large heavy pot",
      "An immersion blender, or a standing blender with a vented lid",
      "A wooden spoon for scraping the browned bits",
    ],
    prepFirst:
      "Slice the mushrooms and dice the onion before the pot heats. Pull out the thyme and measure the flour so you are not searching in the middle of browning.",
    serveWith:
      "Crusty bread or a grilled cheese. A salad with a sharp vinaigrette cuts through the cream.",
    leftovers:
      "Reheat gently and whisk, because the cream can separate. Freeze for up to two months if you do not mind a slightly broken texture.",
    fix:
      "Gray, watery mushrooms need more time in an uncrowded pan. Cook in two batches next time. Flat flavor needs the soy sauce and lemon. If the soup is thin, simmer a few more minutes before the cream goes in.",
  },
  "minestrone-soup": {
    equipment: [
      "A large pot, at least 6 quarts",
      "A wooden spoon",
      "A small pot if you plan to cook the pasta separately",
    ],
    prepFirst:
      "Dice the onion, carrots, celery, and zucchini and keep the zucchini apart from the rest. Drain the beans and take the Parmesan rind from the freezer.",
    serveWith:
      "Crusty bread with olive oil. A little grated Parmesan and torn basil on top is enough.",
    leftovers:
      "Pasta soaks up the broth. Cook it on its own if you want leftovers, or add water when you reheat. Freeze the soup without the pasta.",
    fix:
      "Mushy vegetables went in too early, so add the zucchini and pasta in the last 10 minutes. A bland broth needs salt and a spoonful of tomato paste, or a longer simmer with the Parmesan rind.",
  },
  "broccoli-cheddar-soup": {
    equipment: [
      "A large heavy pot",
      "A box grater for the cheddar",
      "A whisk for the flour and milk",
    ],
    prepFirst:
      "Shred the cheddar from a block and chop the broccoli florets fine. Peel and dice the stems, because they are tender and sweet. Shred the carrots too.",
    serveWith:
      "Crusty bread or crackers. A bread bowl is fun for company, but toast is easier.",
    leftovers:
      "Reheat slowly over low heat, stirring, with a splash of milk. Do not freeze it, because the cheese will break.",
    fix:
      "A grainy soup came from pre-shredded cheese or from boiling after the cheddar went in. Keep the heat low and add the cheese a handful at a time. Lumpy flour means the broth went in too fast. Whisk and blend a few ladles.",
  },
  "greek-lemon-chicken-soup": {
    equipment: [
      "A large pot",
      "A medium bowl and a whisk for the egg mixture",
      "A ladle, for adding the hot broth slowly",
    ],
    prepFirst:
      "Take the eggs out of the refrigerator before you start so they are at room temperature. Juice the lemons and dice the vegetables while the broth heats.",
    serveWith:
      "Warm pita or crusty bread. A cucumber and tomato salad with olive oil suits the lemon.",
    leftovers:
      "Reheat gently over low heat and never let it boil. The rice soaks up broth, so loosen it with a splash. Do not freeze it.",
    fix:
      "Scrambled bits in the soup mean the eggs went in too fast or the pot was boiling. Lower the heat and pour the hot broth in a ladleful at a time. If the soup is too tart, add a little salt. If it is too thick, add broth.",
  },
  "roasted-cauliflower-tacos": {
    equipment: [
      "A large rimmed sheet pan, or two",
      "Parchment paper",
      "A dry skillet for warming tortillas",
    ],
    prepFirst:
      "Cut the cauliflower into 1-inch florets so they roast evenly. Make the slaw and the lime crema while the oven does the work.",
    serveWith:
      "Pickled red onions, hot sauce, and lime wedges. Rice or black beans on the side make it a bigger dinner.",
    leftovers:
      "Store the cauliflower, slaw, and crema separately. Reheat the cauliflower in a hot skillet or 400°F (200°C) oven and assemble fresh tacos.",
    fix:
      "Soft cauliflower means the pan was crowded or the oven ran cool. Use two pans and let the oven fully heat to 450°F (230°C). Bland tacos need more salt in the slaw and more lime in the crema.",
  },
  "lentil-shepherd-pie-skillet": {
    equipment: [
      "A 12-inch oven-safe skillet",
      "A pot for the potatoes",
      "A potato masher",
    ],
    prepFirst:
      "Get the potatoes boiling first, since they cook while you build the filling. Rinse the lentils and chop the vegetables and mushrooms small.",
    serveWith:
      "A sharp green salad or steamed green beans. A spoon of ketchup or HP sauce is a good table extra.",
    leftovers:
      "Reheat covered at 350°F (175°C) for about 20 minutes. The microwave works for single servings. Freeze baked or unbaked portions.",
    fix:
      "A wet filling makes the potatoes sink, so simmer it uncovered until thick. Hard lentils need more broth and more time. Pale topping needs 2 minutes under the broiler, with someone watching.",
  },
  "coconut-lime-rice-bowl": {
    equipment: [
      "A medium saucepan with a tight lid",
      "A skillet for the beans",
      "A fine-mesh strainer for rinsing the rice",
    ],
    prepFirst:
      "Rinse the rice until the water is mostly clear and start it first. Dice the mango, bell pepper, and cabbage while it cooks. Cut the avocado at the last minute.",
    serveWith:
      "The bowl is a full meal. Hot sauce and extra lime on the table are enough. Grilled shrimp or tofu make it heartier.",
    leftovers:
      "Store the rice, beans, and fresh toppings in separate containers. The rice firms up cold, so reheat it with a splash of water. Add fresh avocado.",
    fix:
      "Gummy rice was stirred too much or not rinsed. Gentle fluffing after the rest is enough. Bland rice needs salt and more lime. If the coconut milk separated in the can, whisk it before it goes in.",
  },
  "baked-falafel-bowls": {
    equipment: [
      "A food processor",
      "A baking sheet and parchment",
      "A whisk and small bowl for the tahini sauce",
    ],
    prepFirst:
      "Dry the chickpeas very well on towels. Wash and dry the herbs too, because wet herbs make a mushy mix. Start the quinoa or rice, then chill the falafel mixture while you make the sauce.",
    serveWith:
      "Warm pita, extra hummus, and pickled turnips or red onions. The bowl already has the salad and the grain.",
    leftovers:
      "Keep the falafel, salad, and sauce separate. Re-crisp the falafel at 375°F (190°C) for 8 to 10 minutes. Loosen the tahini sauce with a little water.",
    fix:
      "Patties that crumble need another tablespoon of flour and a longer chill. A mixture that is too wet means the chickpeas were not dry enough. Pale falafel need a few extra minutes and a flip.",
  },
  "sheet-pan-honey-mustard-chicken": {
    equipment: [
      "A large rimmed sheet pan",
      "Parchment paper or foil",
      "An instant-read thermometer",
    ],
    prepFirst:
      "Halve the potatoes and trim the green beans first. Whisk the glaze and set aside a few tablespoons for serving before the raw chicken touches the rest.",
    serveWith:
      "The pan already has potatoes and beans. A spoonful of the reserved sauce and a simple green salad finish it.",
    leftovers:
      "Reheat at 375°F (190°C) for 15 minutes, until the chicken is 165°F (74°C). Pull the meat off the bone for sandwiches or rice bowls.",
    fix:
      "Pale skin needs a few extra minutes and a hot top rack. Burning glaze means the honey touched the pan edges, so lower the rack. Hard potatoes were cut too big, so halve them again next time.",
  },
  "one-pan-creamy-sausage-pasta": {
    equipment: [
      "A large deep skillet or Dutch oven",
      "A wooden spoon for breaking up the sausage",
      "An instant-read thermometer",
    ],
    prepFirst:
      "Remove the sausage casings and dice the onion before the pan heats. Measure the broth and open the tomatoes so the pasta can go in right after the garlic.",
    serveWith:
      "A crisp green salad with a sharp vinaigrette. Garlic bread is a good extra if you want a big dinner.",
    leftovers:
      "The sauce thickens as it sits. Reheat with a splash of water or broth. Do not freeze it, because the cream sauce and pasta both change.",
    fix:
      "Stuck pasta needs more stirring and a splash of broth. Thin sauce at the end needs 1 to 2 more minutes of simmering before the cream goes in. Soft pasta was cooked too long, so check it a couple of minutes early.",
  },
  "teriyaki-chicken-stir-fry": {
    equipment: [
      "A large skillet or wok",
      "A small bowl for the sauce and another for the cornstarch slurry",
      "A pot or rice cooker for the rice",
    ],
    prepFirst:
      "Start the rice, cut the chicken and vegetables, and mix the sauce and slurry before the pan is hot. A stir-fry moves too fast to chop in the middle.",
    serveWith:
      "Steamed rice is the base. The vegetables are in the pan, so cucumber slices or a spoon of kimchi are plenty.",
    leftovers:
      "Reheat in a skillet with a splash of water until the chicken is 165°F (74°C). The vegetables soften, so eat them within a few days.",
    fix:
      "Watery sauce needs another minute of simmering and a fresh stir of the slurry. Gluey sauce needs a splash of water. Gray chicken means the pan was crowded. Sear it in one layer, in two batches if needed.",
  },
  "breakfast-egg-muffins": {
    equipment: [
      "A 12-cup standard muffin tin",
      "A large measuring cup with a spout",
      "A thin knife for loosening the muffins",
    ],
    prepFirst:
      "Grease the tin generously and dice the vegetables small. Pat the spinach and peppers dry, and cook any raw mushrooms or onions first.",
    serveWith:
      "Fruit and toast, or tuck two muffins into a tortilla with salsa. A handful of berries is the easiest side.",
    leftovers:
      "Refrigerate for up to 4 days. Reheat for 30 to 45 seconds from the refrigerator, or about 1 minute from frozen, until hot (165°F or 74°C). Freeze them on a tray before bagging.",
    fix:
      "Sticking muffins need more grease or silicone liners next time. Soggy muffins came from wet vegetables. Rubbery eggs were baked too long, so check at 18 minutes.",
  },
  "savory-oat-bowls": {
    equipment: [
      "A medium saucepan",
      "A nonstick skillet for the eggs",
      "A wooden spoon",
    ],
    prepFirst:
      "Slice the avocado and scallions and grate the Parmesan before the broth boils. The oats take only about 7 minutes, so the eggs need to go in the pan right away.",
    serveWith:
      "A piece of toast or a bit of fruit. The bowl already has egg, avocado, and greens.",
    leftovers:
      "Cook the oats ahead and refrigerate them for up to 4 days. Reheat with a splash of broth and add a fresh egg and toppings.",
    fix:
      "Gummy oats were instant or cooked too long. Use rolled oats and stir often. Thick oats need a splash of broth. Bland oats need more salt and Parmesan, and a bit of chili crisp helps.",
  },
  "blueberry-baked-french-toast": {
    equipment: [
      "A 9x13-inch baking dish",
      "A large bowl and a whisk for the custard",
      "Foil, in case the top browns early",
    ],
    prepFirst:
      "Cube the bread and dry it in a low oven if it is very fresh. Butter the dish and assemble the casserole the night before. Let it sit on the counter for 20 minutes before baking.",
    serveWith:
      "Maple syrup, extra blueberries, and a side of bacon or sausage. A bowl of yogurt makes it feel lighter.",
    leftovers:
      "Refrigerate for up to 4 days. Reheat a portion for 45 to 60 seconds in the microwave, or 10 to 15 minutes at 350°F (175°C). Freeze baked portions.",
    fix:
      "A soggy center means the bread was too soft or the casserole needs more baking time. Cover the top with foil if it browns first. Purple streaks come from thawed berries, so use them frozen straight from the bag.",
  },
  ...batch2Notes,
  ...batch3Notes,
  ...batch4Notes,
};

export function findRecipeNotes(slug) {
  return recipeNotes[slug] || null;
}
