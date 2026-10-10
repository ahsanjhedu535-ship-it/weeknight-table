import Link from "next/link";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";
import { breadcrumbList, pageUrl } from "@/lib/schema";

export const metadata = {
  title: "Cooking Guides",
  description:
    "Guides for planning easy weeknight dinners, building a grocery list, and storing leftovers safely.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  const crumbs = breadcrumbList([
    { name: "Home", url: site.url },
    { name: "Guides", url: pageUrl("/guides") },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Guides
          </div>
          <div className="eyebrow">Kitchen notes</div>
          <h1>Guides for the week you actually have</h1>
          <p>
            Planning, shopping, food safety, and substitutions. These are the
            notes that sit next to the recipes, not a second copy of them.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container guide-grid">
          {guides.map((guide) => (
            <article className="guide-card" key={guide.slug}>
              <div className="card-meta">{guide.minutes} min read</div>
              <h2>
                <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
              </h2>
              <p>{guide.description}</p>
              <Link className="text-link" href={`/guides/${guide.slug}`}>
                Read the guide <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
