"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">Q</span>
          <span>
            quick<span className="brand-light">dinners</span>
            <small>30-MINUTE DINNERS</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <nav className={open ? "nav open" : "nav"}>
          <Link href="/category/dinner">Dinner</Link>
          <Link href="/category/breakfast">Breakfast</Link>
          <Link href="/category/soups">Soups</Link>
          <Link href="/category/vegetarian">Vegetarian</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/meal-planner" className="nav-cta">
            Meal planner ↗
          </Link>
        </nav>
      </div>
    </header>
  );
}
