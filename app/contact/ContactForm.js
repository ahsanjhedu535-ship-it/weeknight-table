"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { contactTopics } from "@/lib/contactMessage";

function inboxFor(topic) {
  return topic === "privacy" ? site.privacyEmail : site.contactEmail;
}

export default function ContactForm({ initialTopic = "recipe" }) {
  const topics = contactTopics();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(initialTopic);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sentInbox, setSentInbox] = useState("");

  const destination = inboxFor(topic);

  async function onSubmit(event) {
    event.preventDefault();
    setFormError("");
    setSentInbox("");
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, message }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setErrors(data.errors || {});
        setFormError(data.error || (data.errors ? "" : "The message could not be saved."));
        return;
      }
      setErrors({});
      setName("");
      setEmail("");
      setMessage("");
      setSentInbox(data.inbox || destination);
    } catch {
      setFormError("The message could not be saved. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
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
          onChange={(event) => setTopic(event.target.value)}
        >
          {topics.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <p id="topic-hint" className="field-hint">
        Replies for this topic go to {destination}.
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
        disabled={submitting}
        style={{ border: 0, cursor: "pointer", justifySelf: "start" }}
      >
        {submitting ? "Sending…" : "Submit message"}
      </button>
      {formError && (
        <p className="field-error" role="alert">
          {formError}
        </p>
      )}
      {sentInbox && (
        <p role="status" className="notice">
          Message saved. We will reply at the email address you entered. This
          topic is handled at {sentInbox}.
        </p>
      )}
    </form>
  );
}
