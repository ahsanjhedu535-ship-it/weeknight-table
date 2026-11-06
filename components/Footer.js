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
            Quick dinner ideas, soup recipes, and vegetarian meals in US cups
            and Fahrenheit, written for a weeknight grocery run.
          </p>
        </div>
        <div>
          <strong>Explore</strong>
          <Link href="/category/dinner">Easy dinners</Link>
          <Link href="/category/breakfast">Breakfast</Link>
          <Link href="/category/soups">Quick soup recipes</Link>
          <Link href="/category/vegetarian">Vegetarian meals</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/meal-planner">Meal planner</Link>
        </div>
        <div>
          <strong>Collections</strong>
          <Link href="/collections/30-minute-chicken">30-minute chicken</Link>
          <Link href="/collections/one-pot-pasta">One-pot pasta</Link>
          <Link href="/collections/sheet-pan-dinners">Sheet-pan dinners</Link>
          <Link href="/collections/quick-soup-recipes">Soup collection</Link>
          <Link href="/collections/quick-vegetarian-meals">Vegetarian collection</Link>
          <Link href="/about">Our story</Link>
          <Link href="/editorial-standards">Editorial standards</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/terms">Terms of use</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </span>
        <span>
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          {" · "}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>
        </span>
      </div>
    </footer>
  );
}
