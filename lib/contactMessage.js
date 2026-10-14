const topics = [
  { value: "recipe", label: "A recipe question" },
  { value: "correction", label: "A correction to a recipe or guide" },
  { value: "general", label: "A general question about the site" },
  { value: "privacy", label: "Privacy, cookies, CCPA, or GDPR" },
];

export function contactTopics() {
  return topics;
}

export function validateContactMessage(fields) {
  const errors = {};
  const name = String(fields?.name || "").trim();
  const email = String(fields?.email || "").trim();
  const topic = String(fields?.topic || "");
  const message = String(fields?.message || "").trim();

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

  if (!topics.some((item) => item.value === topic)) {
    errors.topic = "Choose what this message is about.";
  }

  if (message.length < 20) {
    errors.message = "Write at least a short note, about 20 characters.";
  } else if (message.length > 4000) {
    errors.message = "Keep the message under 4,000 characters.";
  }

  return errors;
}
