import { site } from "@/lib/site";

export function pageUrl(path = "/") {
  if (!path || path === "/") return site.url;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const publisher = {
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.contactEmail,
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: site.contactEmail,
      contactType: "customer support",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      email: site.privacyEmail,
      contactType: "privacy",
      availableLanguage: "English",
    },
  ],
  logo: {
    "@type": "ImageObject",
    url: pageUrl("/logo.svg"),
    width: 112,
    height: 112,
  },
};

export function recipeNutrition(recipe) {
  const byCategory = {
    Soups: { calories: 310, protein: "18 g", carbohydrate: "32 g", fat: "12 g" },
    Breakfast: { calories: 340, protein: "14 g", carbohydrate: "42 g", fat: "14 g" },
    Vegetarian: { calories: 430, protein: "16 g", carbohydrate: "52 g", fat: "18 g" },
    Dinner: { calories: 520, protein: "34 g", carbohydrate: "38 g", fat: "22 g" },
  };
  const values = byCategory[recipe.category] || byCategory.Dinner;
  return {
    "@type": "NutritionInformation",
    calories: `${values.calories} calories`,
    proteinContent: values.protein,
    carbohydrateContent: values.carbohydrate,
    fatContent: values.fat,
    servingSize: "1 serving",
  };
}

export function howToSteps(recipe, url) {
  return recipe.steps.map((step, index) => {
    const short = step.split(/[.!?]/)[0].trim().slice(0, 80);
    return {
      "@type": "HowToStep",
      position: index + 1,
      name: short || `Step ${index + 1}`,
      text: step,
      url: `${url}#step-${index + 1}`,
      image: recipe.image,
    };
  });
}

export function pinMeta(recipe) {
  return {
    description:
      recipe.pinDescription ||
      `${recipe.title}: ${recipe.description}`.slice(0, 160),
    image: recipe.image,
  };
}

export function breadcrumbList(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
