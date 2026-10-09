import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer"> <div className="footer-main"> <div> <Link href="/" className="brand footer-brand"> <span className="brand-mark">W</span> <span> weeknight<span className="brand-light">table</span> <small>GOOD FOOD. REAL LIFE.</small> </span> </Link> <p> Approachable recipes and practical meal ideas for real-life kitchens. </p> </div> <div> <strong>Explore</strong> <Link href="/category/dinner">Easy dinners</Link> <Link href="/category/breakfast">Breakfast</Link> <Link href="/category/soups">Soups & stews</Link> <Link href="/meal-planner">Meal planner</Link> </div> <div> <strong>About</strong> <Link href="/about">Our story</Link> <Link href="/contact">Contact</Link> <Link href="/privacy-policy">Privacy policy</Link> <Link href="/disclaimer">Disclaimer</Link> </div> </div> <div className="footer-bottom"> <span> © {new Date().getFullYear()} Weeknight Table. All rights reserved. </span> <span>Made for the everyday home cook.</span> </div> </footer>
  );
}
