export const metadata = {
  title: "Weekly Dinner Planner and Grocery List",
  description:
    "Plan easy weeknight dinners for Monday through Sunday, build a weekly grocery list from your picks, and copy it before you shop.",
  keywords: [
    "weekly dinner planner",
    "weekly grocery list",
    "easy weekly dinner plan",
  ],
  alternates: { canonical: "/meal-planner" },
  openGraph: {
    title: "Weekly Dinner Planner and Grocery List",
    description:
      "Plan easy weeknight dinners and copy a combined grocery list before you shop.",
  },
};

export default function MealPlannerLayout({ children }) {
  return children;
}
