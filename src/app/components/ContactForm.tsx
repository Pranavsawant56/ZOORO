"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Spinner from "@/components/Spinner";

const services = [
  "Corporate canteen",
  "Industrial catering",
  "Festival & occasion meals",
  "Events & buffets",
  "Healthy meals",
  "Other corporate meals",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!d.name?.trim() || !d.phone?.trim() || !/^\S+@\S+\.\S+$/.test(d.email ?? "")) {
      setError("Enter your name, phone number and a valid email.");
      setSent(false);
      return;
    }

    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(d),
      });
      const json = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!res.ok || !json?.ok) {
        setError(json?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSent(true);
      form.reset();
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  const field =
    "mt-1 w-full rounded-xl border border-brand-ink/15 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/30";
  const label = "block text-sm font-semibold text-brand-ink";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl bg-white p-6 shadow-xl shadow-brand-red/10 sm:p-8"
    >
      <h2 className="font-display text-2xl font-extrabold text-brand-ink">Send us an enquiry</h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className={label}>
          Your name
          <input name="name" autoComplete="name" className={field} />
        </label>
        <label className={label}>
          Company
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className={label}>
          Phone
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className={label}>
          Email
          <input name="email" type="email" autoComplete="email" className={field} />
        </label>
        <label className={label}>
          What do you need?
          <select name="service" className={field}>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className={label}>
          People per day (approx.)
          <input name="people" inputMode="numeric" className={field} />
        </label>
      </div>

      <label className={`${label} mt-4`}>
        Message
        <textarea
          name="message"
          rows={4}
          className={field}
          placeholder="Location, dates, occasion, anything else we should know"
        />
      </label>

      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            key="error"
            role="alert"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-sm font-medium text-brand-red"
          >
            {error}
          </motion.p>
        )}
        {sent && !error && (
          <motion.p
            key="sent"
            role="status"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="mt-4 rounded-xl bg-brand-leaf/10 p-3 text-sm font-medium text-brand-leaf"
          >
            Thanks! We&apos;ve received your enquiry and will get back to you soon.
          </motion.p>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={loading ? undefined : { scale: 1.02 }}
        whileTap={loading ? undefined : { scale: 0.97 }}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3.5 font-bold text-white transition-colors hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading && <Spinner tone="white" label="Sending enquiry" />}
        {loading ? "Sending…" : "Send enquiry"}
      </motion.button>
    </form>
  );
}
