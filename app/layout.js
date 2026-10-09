import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata = {
  title: {
    default: "Weeknight Table | Easy Recipes for Real Life",
    template: "%s | Weeknight Table",
  },
  description:
    "Find reliable weeknight dinners, cozy seasonal recipes, easy breakfasts, and practical meal-planning ideas for real-life home cooks.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Weeknight Table",
    description: "Good food. Real life. Find your next favorite recipe.",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en-US"> <body> <Header /> <main>{children}</main> <Footer /> </body> </html>
  );
}
