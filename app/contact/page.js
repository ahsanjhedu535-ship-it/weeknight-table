import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Quick Dinners",
  description:
    "Email Quick Dinners about a recipe question, a correction, or a dinner idea.",
};

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="prose">
          <div className="eyebrow">We would like to hear from you</div>
          <h1>Contact Quick Dinners</h1>
          <p>
            Recipe question, typo, or an idea for a guide? Email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>, or use the form.
            The form opens your email app with the message filled in and
            addressed to that inbox.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
