"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const topics = [
  { value: "recipe", label: "A recipe question" },
  { value: "correction", label: "A correction to a recipe or guide" },
  { value: "general", label: "A general question about the site" },
  { value: "privacy", label: "Privacy, cookies, CCPA, or GDPR" },
];

function inboxFor(topic) {
  return topic === "privacy" ? site.privacyEmail : site.contactEmail;
}

function validate(fields) {
  const errors = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();

  if (name.length < 2) {
    errors.name = "Enter your name.";
  } else if (name.length > 80) {
    errors.name = "Use a name under 80 characters.";
  }

  if (!email) {
    errors.email = "Enter the email address where you want a reply.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /example\./i.test(email)) {
    errors.email = "Enter a real email address so the reply can reach you.";
  }

  if (!topics.some((topic) => topic.value === fields.topic)) {
    errors.topic = "Choose what this message is about.";
  }

  if (message.length < 20) {
    errors.message = "Write at least a short note, about 20 characters.";
  } else if (message.length > 4000) {
    errors.message = "Keep the message under 4,000 characters.";
  }

  return errors;
}

export default function ContactForm({ initialTopic = "recipe" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(initialTopic);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [mailtoHref, setMailtoHref] = useState("");

  const destination = inboxFor(topic);
  const topicLabel = topics.find((item) => item.value === topic)?.label || "Quick Dinners note";

  function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate({ name, email, topic, message });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setMailtoHref("");
      return;
    }

    const inbox = inboxFor(topic);
    const subject = encodeURIComponent(`Quick Dinners: ${topicLabel}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nReply-to: ${email.trim()}\nTopic: ${topicLabel}\n\n${message.trim()}`
    );
    const href = `mailto:${inbox}?subject=${subject}&body=${body}`;
    setMailtoHref(href);
    window.location.href = href;
  }

  return (
    <form className="form-stack" onSubmit={onSubmit} noValidate>
      <label>
        Your name
        <input
          name="name"
          autoComplete="name"
          value={name}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      {errors.name && (
        <p id="name-error" className="field-error" role="alert">
          {errors.name}
        </p>
      )}

      <label>
        Email address
        <input
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          value={email}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      {errors.email && (
        <p id="email-error" className="field-error" role="alert">
          {errors.email}
        </p>
      )}

      <label>
        What is this about?
        <select
          name="topic"
          value={topic}
          aria-invalid={errors.topic ? "true" : "false"}
          aria-describedby={errors.topic ? "topic-error" : "topic-hint"}
          onChange={(event) => {
            setTopic(event.target.value);
            setMailtoHref("");
          }}
        >
          {topics.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <p id="topic-hint" className="field-hint">
        This message is addressed to {destination}.
      </p>
      {errors.topic && (
        <p id="topic-error" className="field-error" role="alert">
          {errors.topic}
        </p>
      )}

      <label>
        How can we help?
        <textarea
          name="message"
          value={message}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      {errors.message && (
        <p id="message-error" className="field-error" role="alert">
          {errors.message}
        </p>
      )}

      <button
        className="button-primary"
        type="submit"
        style={{ border: 0, cursor: "pointer", justifySelf: "start" }}
      >
        Submit message
      </button>
      {mailtoHref && (
        <p role="status" className="notice">
          The fields checked out. This message is addressed to{" "}
          <a href={mailtoHref}>{destination}</a>. Your email app should open so
          you can send it. If it does not, use that address. Replies go to the
          email you entered. This site does not store the form.
        </p>
      )}
    </form>
  );
}
