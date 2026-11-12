"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <meta name="profiton-domain-verification" content="3d5d80ca78d078ce9fcb9a4d69ac588ac15368fa6a80b8cb951f06801985a2dc" />
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
          aria-expanded={open}
          aria-controls="site-nav"
        >
          {open ? "✕" : "☰"}
        </button>
        <nav id="site-nav" className={open ? "nav open" : "nav"}>
          <Link href="/category/dinner" onClick={() => setOpen(false)}>Dinner</Link>
          <Link href="/category/breakfast" onClick={() => setOpen(false)}>Breakfast</Link>
          <Link href="/category/soups" onClick={() => setOpen(false)}>Soups</Link>
          <Link href="/category/vegetarian" onClick={() => setOpen(false)}>Vegetarian</Link>
          <Link href="/guides" onClick={() => setOpen(false)}>Guides</Link>
          <Link href="/meal-planner" className="nav-cta" onClick={() => setOpen(false)}>
            Meal planner
          </Link>
        </nav>
      </div>
    </header>
  );
}
