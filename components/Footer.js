import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">Q</span>
            <span>
              quick<span className="brand-light">dinners</span>
              <small>30-MINUTE DINNERS</small>
            </span>
          </Link>
          <p>
            Easy dinner recipes in US cups and Fahrenheit, written for a
            weeknight grocery run.
          </p>
        </div>
        <div>
          <strong>Explore</strong>
          <Link href="/category/dinner">Easy dinners</Link>
          <Link href="/category/breakfast">Breakfast</Link>
          <Link href="/category/soups">Soups</Link>
          <Link href="/category/vegetarian">Vegetarian</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/meal-planner">Meal planner</Link>
        </div>
        <div>
          <strong>About</strong>
          <Link href="/about">Our story</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </span>
        <span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </span>
      </div>
    </footer>
  );
}
