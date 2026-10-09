"use client";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header"> <div className="header-inner"> <Link href="/" className="brand"> <span className="brand-mark">W</span> <span> weeknight<span className="brand-light">table</span> <small>GOOD FOOD. REAL LIFE.</small> </span> </Link> <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" > ☰ </button> <nav className={open ? "nav open" : "nav"}> <Link href="/category/dinner">Dinner</Link> <Link href="/category/breakfast">Breakfast</Link> <Link href="/category/soups">Soups</Link> <Link href="/category/vegetarian">Vegetarian</Link> <Link href="/meal-planner" className="nav-cta"> Meal planner ↗ </Link> </nav> </div> </header>
  );
}
