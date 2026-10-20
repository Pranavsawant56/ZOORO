"use client";

import { useState } from "react";

export default function Contact() {
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
      const json = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
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
    "w-full rounded-full border-[3px] border-black bg-[var(--vanilla)] px-8 py-[18px] text-[15px] font-[800] uppercase tracking-[0.03em] placeholder:text-[#8B8180] zh-input focus:outline-none";

  return (
    <section className="border-b-[2px] border-black bg-[var(--saffron)] px-6 pb-[120px] pt-24">
      <h2 className="ff-archivo mx-auto max-w-5xl text-center text-4xl uppercase leading-[0.95] sm:text-[76px]">
        Plan your next corporate meal!
      </h2>

      <form onSubmit={onSubmit} noValidate className="mx-auto mt-16 grid max-w-[760px] gap-x-6 gap-y-6 sm:grid-cols-2">
        <input name="name" placeholder="Name" className={field} />
        <input name="company" placeholder="Company" className={field} />
        <input name="email" type="email" placeholder="Email" className={field} />
        <input name="phone" type="tel" placeholder="Phone" className={field} />

        <select name="service" defaultValue="" className={`brutal-select ${field} sm:col-span-2`}>
          <option value="" disabled>
            Service Type
          </option>
          <option>Corporate canteen</option>
          <option>Industrial catering</option>
          <option>Events &amp; buffets</option>
          <option>Healthy plans</option>
        </select>

        {error && (
          <p role="alert" className="sm:col-span-2 text-sm font-[800] text-[var(--tomato)]">
            {error}
          </p>
        )}
        {sent && !error && (
          <p role="status" className="sm:col-span-2 text-sm font-[800] text-[var(--dark-green)]">
            Thanks! We&apos;ve received your enquiry.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="ff-archivo zh-send brutal-shadow sm:col-span-2 rounded-full border-[3px] border-black bg-[var(--tomato)] px-8 py-6 text-[20.5px] uppercase tracking-[0.08em] text-black disabled:opacity-70"
        >
          {loading ? "Sending…" : "Send Enquiry ->"}
        </button>
      </form>
    </section>
  );
}
