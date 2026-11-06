import { site } from "@/lib/site";
import { recipes, categories } from "@/lib/recipes";
import { guides } from "@/lib/guides";
import { collections } from "@/lib/collections";

export default function sitemap() {
  const base = site.url;
  const lastModified = new Date(`${site.updated}T00:00:00Z`);
  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/disclaimer`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/editorial-standards`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/meal-planner`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guides`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    ...categories.map((category) => ({
      url: `${base}/category/${category.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    })),
    ...collections.map((collection) => ({
      url: `${base}/collections/${collection.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    })),
    ...recipes.map((recipe) => ({
      url: `${base}/recipes/${recipe.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    })),
    ...guides.map((guide) => ({
      url: `${base}/guides/${guide.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
