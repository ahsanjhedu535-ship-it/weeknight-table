import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section"> <div className="container"> <div className="eyebrow">A little detour</div> <h1>We couldn't find that page.</h1> <p> Try browsing the recipe collections or head back to the home page. </p> <Link className="button-primary" href="/"> Back home ↗ </Link> </div> </section>
  );
}
