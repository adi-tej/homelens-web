"use client";
import React, { useState } from "react";

// Contact/feedback form that opens mailto with prefilled content
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "feedback",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    const typeLabels: Record<string, string> = {
      feedback: "Feedback",
      feature: "Feature Request",
      contact: "General Inquiry",
    };

    const subject = encodeURIComponent(`HomeLens ${typeLabels[formData.type]}`);
    const body = encodeURIComponent(
      `Name: ${formData.name || "Not provided"}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:hello@homelens.app?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold mb-2">Thanks for reaching out!</h4>
        <p className="text-on-surface-variant">Your email client should open shortly. We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your name (optional)"
          className="h-12 px-4 rounded-md border outline-none bg-surface text-on-surface border-outline/40 focus:border-primary/60 transition-colors"
          aria-label="Name"
        />
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Your email *"
          className="h-12 px-4 rounded-md border outline-none bg-surface text-on-surface border-outline/40 focus:border-primary/60 transition-colors"
          aria-label="Email"
        />
      </div>
      <select
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        className="w-full h-12 px-4 rounded-md border outline-none bg-surface text-on-surface border-outline/40 focus:border-primary/60 transition-colors"
        aria-label="Message type"
      >
        <option value="feedback">Share Feedback</option>
        <option value="feature">Request a Feature</option>
        <option value="contact">General Contact</option>
      </select>
      <textarea
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="Your message *"
        rows={5}
        className="w-full px-4 py-3 rounded-md border outline-none bg-surface text-on-surface border-outline/40 focus:border-primary/60 transition-colors resize-none"
        aria-label="Message"
      />
      <button
        type="submit"
        className="w-full h-12 px-5 rounded-md bg-primary text-on-primary font-medium hover:opacity-95 active:opacity-90 shadow-sm transition-opacity"
      >
        Send Message
      </button>
    </form>
  );
}

