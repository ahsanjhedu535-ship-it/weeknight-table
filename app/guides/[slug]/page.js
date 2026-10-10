import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, findGuide } from "@/lib/guides";

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
      }
    : { title: "Guide not found" };
}

export default function GuidePage({ params }) {
  const guide = findGuide(params.slug);
  if (!guide) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / <Link href="/guides">Guides</Link> /{" "}
            {guide.title}
          </div>
          <div className="eyebrow">{guide.minutes} minute read</div>
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
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
