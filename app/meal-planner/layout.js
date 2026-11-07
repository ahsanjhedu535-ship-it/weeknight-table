import { socialPageMeta } from "@/lib/schema";

export const metadata = socialPageMeta({
  title: "Weekly Dinner Planner and Grocery List",
  description:
    "Plan easy weeknight dinners for Monday through Sunday, build a weekly grocery list from your picks, and copy it before you shop.",
  path: "/meal-planner",
  keywords: [
    "weekly dinner planner",
    "weekly grocery list",
    "easy weekly dinner plan",
  ],
});

export default function MealPlannerLayout({ children }) {
  return children;
}
