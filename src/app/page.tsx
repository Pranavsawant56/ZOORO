"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Reveal from "@/components/Reveal";
import Spinner from "@/components/Spinner";

const ease = [0.22, 1, 0.36, 1] as const;

/* ---------- data ---------- */

const ticker = [
  "Corporate canteen",
  "Industrial catering",
  "Diwali menus",
  "Events & buffets",
  "Healthy meals",
  "Eid & Christmas lunches",
  "Annual day catering",
  "Pongal & Sankranti thali",
];

const occasions = [
  "Diwali", "Eid", "Christmas", "Pongal", "Sankranti", "New Year",
  "Republic Day", "Independence Day", "Annual day", "Birthdays",
  "Client meets", "Trainings", "Team lunches", "Farewells",
];

const steps = [
  { t: "Tell us your need", d: "Share headcount, location, meal timings or the occasion." },
  { t: "We plan the menu", d: "Weekly cycles or a festival menu, with nutrition and allergen tags." },
  { t: "We cook and serve", d: "Trained staff, a hygienic kitchen and a fast scan-and-serve counter." },
  { t: "You review", d: "Ratings, feedback and clear monthly invoices keep everyone aligned." },
];

const why = [
  { c: "bg-brand-red", t: "Hygiene first", d: "Daily checklists, temperature logs, food sample retention and FSSAI-ready kitchens." },
  { c: "bg-brand-gold", t: "Cooked to real demand", d: "Employees pre-book or opt out, so we cook what is needed and waste less." },
  { c: "bg-brand-leaf", t: "Healthy by design", d: "Every dish has a recipe, calories and allergen tags." },
  { c: "bg-brand-ink", t: "Clear billing", d: "Monthly GST invoices built from meals actually served, with date-wise counts." },
];

/* ---------- helpers ---------- */

/* Hero emblem: a plate ring, the gold-to-red Z, a leaf, fork and spoon */
function Emblem() {
  const reduce = useReducedMotion();
  const draw = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 1.4, delay, ease },
        };

  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[460px]"
      animate={reduce ? undefined : { y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="ZOORO emblem">
        <defs>
          <linearGradient id="zg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F0A81C" />
            <stop offset="0.55" stopColor="#D8322A" />
            <stop offset="1" stopColor="#8E0E15" />
          </linearGradient>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6DB544" />
            <stop offset="1" stopColor="#2C7A33" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="200" r="178" fill="#fff" />
        <motion.circle cx="200" cy="200" r="178" fill="none" stroke="#B3121B" strokeWidth="10" strokeLinecap="round" strokeDasharray="1 0" {...draw(0.1)} />
        <motion.circle cx="200" cy="200" r="150" fill="none" stroke="#F0A81C" strokeWidth="5" strokeLinecap="round" {...draw(0.4)} />

        {/* Z */}
        <motion.path d="M118 130 H270 L130 270 H282" fill="none" stroke="url(#zg)" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round" {...draw(0.7)} />

        {/* fork */}
        <motion.g stroke="#F0A81C" strokeWidth="6" strokeLinecap="round" fill="none" {...draw(1.3)}>
          <path d="M92 250 V210 M102 250 V210 M112 250 V210 M92 250 Q102 262 112 250 M102 262 V318" />
        </motion.g>
        {/* spoon */}
        <motion.g {...draw(1.4)} stroke="#B3121B" strokeWidth="6" strokeLinecap="round" fill="none">
          <ellipse cx="300" cy="218" rx="13" ry="20" />
          <path d="M300 238 V318" />
        </motion.g>

        {/* leaf */}
        <motion.path
          d="M268 78 C318 72 340 104 334 140 C292 142 262 118 268 78 Z"
          fill="url(#lg)"
          initial={reduce ? false : { scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          style={{ transformOrigin: "268px 140px" }}
          transition={{ duration: 0.9, delay: 1.7, ease }}
        />
        <path d="M274 130 C292 112 308 100 326 92" stroke="#E8F5E0" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

function Marquee() {
  const reduce = useReducedMotion();
  const items = [...ticker, ...ticker];
  return (
    <div className="overflow-hidden bg-brand-red py-4 text-white">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-lg font-semibold">
            {t}
            <span className="h-2 w-2 rounded-full bg-brand-gold" aria-hidden />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Steps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div ref={ref} className="relative mt-14">
      <div className="absolute left-0 right-0 top-5 hidden h-1 rounded bg-brand-ink/10 md:block" />
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="absolute left-0 right-0 top-5 hidden h-1 rounded bg-gradient-to-r from-brand-gold via-brand-red to-brand-leaf md:block"
      />
      <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
        {steps.map((s, i) => (
          <li key={s.t}>
            <Reveal delay={i * 0.08}>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-lg font-bold text-white ring-8 ring-brand-cream">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold text-brand-ink">{s.t}</h3>
              <p className="mt-2 text-brand-ink/70">{s.d}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

function EnquiryForm() {
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
    "mt-1 w-full min-w-0 rounded-xl border border-brand-ink/15 bg-white px-3 py-2.5 text-brand-ink outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/30";

  return (
    <form onSubmit={onSubmit} noValidate className="w-full min-w-0 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-brand-ink/10 sm:p-6">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-semibold text-brand-ink">Your name
          <input name="name" autoComplete="name" className={field} />
        </label>
        <label className="text-sm font-semibold text-brand-ink">Company
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="text-sm font-semibold text-brand-ink">Phone
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="text-sm font-semibold text-brand-ink">Email
          <input name="email" type="email" autoComplete="email" className={field} />
        </label>
      </div>
      <label className="mt-3 block text-sm font-semibold text-brand-ink">What do you need?
        <select name="service" className={field}>
          <option>Corporate canteen</option>
          <option>Industrial catering</option>
          <option>Festival & occasion meals</option>
          <option>Events & buffets</option>
          <option>Healthy meals</option>
        </select>
      </label>
      <label className="mt-3 block text-sm font-semibold text-brand-ink">Message
        <textarea name="message" rows={3} className={field} placeholder="Location, headcount, dates…" />
      </label>

      <AnimatePresence mode="wait">
        {error && (
          <motion.p key="e" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-3 text-sm font-medium text-brand-red">
            {error}
          </motion.p>
        )}
        {sent && !error && (
          <motion.p key="s" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="mt-3 rounded-xl bg-brand-leaf/10 p-3 text-sm font-medium text-brand-leaf">
            Thanks! We&apos;ve received your enquiry and will get back to you soon.
          </motion.p>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={loading ? undefined : { scale: 1.02 }}
        whileTap={loading ? undefined : { scale: 0.97 }}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 font-bold text-white transition-colors hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading && <Spinner tone="white" label="Sending enquiry" />}
        {loading ? "Sending…" : "Send enquiry"}
      </motion.button>
    </form>
  );
}

/* ---------- page ---------- */

export default function Home() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const emblemY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);

  const line = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  } as const);

  return (
    <div className="bg-brand-cream text-brand-ink">
      {/* HERO */}
      <section ref={heroRef} className="relative isolate overflow-hidden">
        <motion.div style={{ y: blobY }} aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand-gold/30 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-leaf/20 blur-3xl" />
        </motion.div>

        <div className="mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <motion.p {...line(0)} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-red shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand-leaf" />
              Corporate canteens, industrial catering and events
            </motion.p>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <motion.span className="block" {...line(0.1)}>Good food,</motion.span>
              <motion.span className="block text-brand-red" {...line(0.2)}>better people,</motion.span>
              <motion.span className="block" {...line(0.3)}>brighter workplaces.</motion.span>
            </h1>

            <motion.p {...line(0.45)} className="mt-6 max-w-xl text-lg text-brand-ink/75">
              ZOORO Hospitality runs fresh, hygienic canteens inside offices and factories, and serves
              festival and occasion meals for companies of every size.
            </motion.p>

            <motion.div {...line(0.6)} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="inline-block rounded-full bg-brand-red px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-red/30 transition-colors hover:bg-brand-red-dark">
                  Get a free quote
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link href="/services" className="inline-block rounded-full border-2 border-brand-ink/80 px-7 py-3 font-bold transition-colors hover:bg-brand-ink hover:text-white">
                  See our services
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div style={{ y: emblemY }}>
            <Emblem />
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-extrabold sm:text-5xl">
            One kitchen partner for every kind of meal
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          <Reveal className="md:row-span-2">
            <motion.div whileHover={{ y: -6 }} className="flex h-full flex-col justify-between rounded-3xl bg-brand-red p-8 text-white">
              <div>
                <h3 className="font-display text-3xl font-extrabold">Corporate canteen</h3>
                <p className="mt-3 text-white/85">
                  Breakfast, lunch, snacks and dinner inside your office. Employees pre-book on their phone and
                  scan a QR pass at the counter.
                </p>
              </div>
              <Link href="/services" className="mt-10 font-bold text-brand-gold hover:underline">Learn more &rarr;</Link>
            </motion.div>
          </Reveal>

          <Reveal delay={0.08}>
            <motion.div whileHover={{ y: -6 }} className="h-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-ink/10">
              <h3 className="text-xl font-extrabold">Industrial catering</h3>
              <p className="mt-2 text-brand-ink/70">High-volume, multi-shift meals for factories and plants, night shift included.</p>
            </motion.div>
          </Reveal>

          <Reveal delay={0.16}>
            <motion.div whileHover={{ y: -6 }} className="h-full rounded-3xl bg-brand-gold p-7">
              <h3 className="text-xl font-extrabold">Events & buffets</h3>
              <p className="mt-2 text-brand-ink/80">Silver, Gold and Platinum menu packages for conferences and celebrations.</p>
            </motion.div>
          </Reveal>

          <Reveal delay={0.24} className="md:col-span-2">
            <motion.div whileHover={{ y: -6 }} className="h-full rounded-3xl bg-brand-leaf p-7 text-white">
              <h3 className="text-xl font-extrabold">Healthy meal plans</h3>
              <p className="mt-2 max-w-lg text-white/90">Calories, protein and allergen info on every dish, with diet and high-protein options for teams.</p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* FESTIVALS AND OCCASIONS */}
      <section className="bg-brand-ink py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="max-w-3xl font-display text-3xl font-extrabold sm:text-5xl">
              Festival and occasion meals for your company
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              From a festive thali for 50 to a buffet for thousands, we plan the menu, cook, serve and clean up.
              Any corporate meal, any occasion.
            </p>
          </Reveal>

          <motion.ul
            className="mt-10 flex flex-wrap gap-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: reduce ? 0 : 0.05 } },
            }}
          >
            {occasions.map((o) => (
              <motion.li
                key={o}
                variants={{
                  hidden: reduce
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={reduce ? undefined : { y: -3, scale: 1.03 }}
                transition={{ duration: reduce ? 0 : 0.25, ease }}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-white/90 transition-colors hover:border-brand-gold/60 hover:bg-white/10"
              >
                {o}
              </motion.li>
            ))}
          </motion.ul>

          <Reveal className="mt-10">
            <Link href="/contact" className="inline-block rounded-full bg-white px-7 py-3.5 font-bold text-brand-ink transition-colors hover:bg-brand-gold">
              Plan your occasion
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-extrabold sm:text-5xl">Why companies choose ZOORO</h2>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {why.map((w, i) => (
            <Reveal key={w.t} delay={(i % 2) * 0.1}>
              <div className="flex gap-5">
                <span className={`mt-1 h-14 w-2 shrink-0 rounded-full ${w.c}`} />
                <div>
                  <h3 className="text-xl font-extrabold">{w.t}</h3>
                  <p className="mt-1 text-brand-ink/70">{w.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold sm:text-5xl">How it works</h2>
          </Reveal>
          <div className="[&_span.ring-brand-cream]:ring-white">
            <Steps />
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="enquiry" className="bg-brand-cream py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal className="min-w-0">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-red">Get in touch</p>
            <h2 className="max-w-md font-display text-3xl font-extrabold sm:text-4xl">Let’s plan your next meal</h2>
            <p className="mt-4 max-w-md text-base text-brand-ink/70 sm:text-lg">
              Tell us about your team or your occasion and we will reply with a menu and quotation.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-brand-ink/70 sm:text-base">
              ZOORO Hospitality Pvt. Ltd.<br />
              S.No. 52-3/1, Maruti Nagar, Lane No. 4,<br />
              Wadgaonsheri, Pune 411014<br />
              <a href="mailto:sagar@zoorohospitality.com" className="font-semibold text-brand-red hover:underline">sagar@zoorohospitality.com</a>
            </p>
          </Reveal>
          <Reveal delay={0.1} className="min-w-0">
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}