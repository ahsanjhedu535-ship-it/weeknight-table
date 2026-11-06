export const site = {
  name: "Quick Dinners",
  url: "https://www.quickdinners.online",
  email: "contact@quickdinners.online",
  contactEmail: "contact@quickdinners.online",
  privacyEmail: "privacy@quickdinners.online",
  analyticsId: "G-GWR571LK4V",
  published: "2026-10-10",
  updated: "2026-11-07",
  description:
    "Quick dinner ideas for US weeknights: 30-minute chicken, quick soup recipes, and quick vegetarian meals with US cups, Fahrenheit, and a grocery list.",
};

export function publishedLabel(iso = site.published) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
