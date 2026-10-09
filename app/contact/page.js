"use client";
import { useState } from "react";
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="section"> <div className="container"> <div className="prose"> <div className="eyebrow">We'd love to hear from you</div> <h1>Contact Weeknight Table</h1> <p> Have a recipe question, spotted a typo, or have an idea for a future guide? Send us a note using the form below. </p> <p className="notice"> Demo form: this starter website has no email service connected yet. Submissions are not sent to an inbox. Connect a form provider or backend before publishing this form for real use. </p> </div> <form className="form-stack" onSubmit={(e) => { e.preventDefault(); setSent(true); }} > <label> Your name <input required name="name" placeholder="Name" /> </label> <label> Email address <input required type="email" name="email" placeholder="you@example.com" /> </label> <label> How can we help? <textarea required name="message" placeholder="Write your message..." /> </label> <button className="button-primary" type="submit" style={{ border: 0, cursor: "pointer", justifySelf: "start" }} > Preview message </button> {sent && ( <p role="status" className="notice"> Your message passed the form check, but was not sent because an email service is not connected yet. </p> )} </form> </div> </section>
  );
}
