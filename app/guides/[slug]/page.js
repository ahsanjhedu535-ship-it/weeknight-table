import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, findGuide } from "@/lib/guides";
import { site, publishedLabel } from "@/lib/site";
import { breadcrumbList, pageUrl, publisher } from "@/lib/schema";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }) {
  const guide = findGuide(params.slug);
  return guide
    ? {
        title: guide.title,
        description: guide.description,
        keywords: guide.keywords,
        alternates: { canonical: `/guides/${params.slug}` },
        openGraph: {
          title: guide.title,
          description: guide.description,
          type: "article",
          url: pageUrl(`/guides/${params.slug}`),
        },
      }
    : { title: "Guide not found" };
}

export default function GuidePage({ params }) {
  const guide = findGuide(params.slug);
  if (!guide) notFound();
  const url = pageUrl(`/guides/${guide.slug}`);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: site.published,
    dateModified: site.published,
    inLanguage: "en-US",
    mainEntityOfPage: url,
    author: publisher,
    publisher,
  };
  const crumbs = breadcrumbList([
    { name: "Home", url: site.url },
    { name: "Guides", url: pageUrl("/guides") },
    { name: guide.title, url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / <Link href="/guides">Guides</Link> /{" "}
            {guide.title}
          </div>
          <div className="eyebrow">{guide.minutes} minute read</div>
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
          <p className="byline">
            Published {publishedLabel()} by{" "}
            <Link href="/about">{site.name}</Link>.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container prose">
          {guide.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
          <p>
            <Link className="text-link" href="/meal-planner">
              Open the meal planner <span>→</span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
