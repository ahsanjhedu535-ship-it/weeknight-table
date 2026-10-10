"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Quick Dinners note from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nReply-to: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <form className="form-stack" onSubmit={onSubmit}>
      <label>
        Your name
        <input
          required
          name="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email address
        <input
          required
          type="email"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        How can we help?
        <textarea
          required
          name="message"
          placeholder="Write your message..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <button
        className="button-primary"
        type="submit"
        style={{ border: 0, cursor: "pointer", justifySelf: "start" }}
      >
        Email this message
      </button>
      {opened && (
        <p role="status" className="notice">
          Your email app should be open with this message addressed to{" "}
          {site.email}. Send it from there so it reaches the inbox.
        </p>
      )}
    </form>
  );
}
