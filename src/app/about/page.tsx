import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal"; // adjust the path to where you save Reveal.tsx

export const metadata: Metadata = {
  title: "About Us | ZOORO Hospitality",
  description:
    "ZOORO Hospitality runs corporate canteens, industrial catering, events and healthy meals from Pune. Good food, better people, brighter workplaces.",
};

const pillars = [
  {
    title: "Our mission",
    description:
      "To serve fresh, hygienic and healthy food at the workplace, cooked to real demand so nothing is wasted.",
    className: "bg-brand-red text-white",
  },
  {
    title: "Our vision",
    description:
      "Workplaces where a good meal is something people look forward to every day.",
    className: "bg-brand-gold text-brand-ink",
  },
  {
    title: "Our values",
    description:
      "Hygiene, honesty and care for people, in the kitchen, at the counter and on every invoice.",
    className: "bg-brand-leaf text-white",
  },
];

const whatWeDo = [
  {
    title: "Corporate canteens",
    text: "We run the canteen inside your office, with daily menus, trained staff and a quick counter.",
  },
  {
    title: "Industrial catering",
    text: "Large-scale, multi-shift meals for factories and plants, night shift included.",
  },
  {
    title: "Festival and occasion meals",
    text: "Special menus for festivals, annual days, client meets and any corporate occasion.",
  },
  {
    title: "Events and buffets",
    text: "Menu packages, quotation and service for conferences, trainings and celebrations.",
  },
  {
    title: "Healthy meal plans",
    text: "Balanced meals with nutrition and allergen information on every dish.",
  },
];

const approach = [
  { c: "bg-brand-red", t: "We cook to real demand", d: "Employees pre-book or opt out before a cut-off, so we prepare the right amount." },
  { c: "bg-brand-gold", t: "We keep kitchens audit-ready", d: "Daily hygiene checklists, temperature logs, food sample records and licence tracking." },
  { c: "bg-brand-leaf", t: "We standardise quality", d: "Every dish follows a recipe, so the food tastes the same at every site." },
  { c: "bg-brand-ink", t: "We bill transparently", d: "Invoices come from meals actually served, with date-wise and employee-wise counts." },
];

export default function AboutPage() {
  return (
    <div className="bg-brand-cream text-brand-ink">
      {/* Page hero */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-gold/30 blur-3xl" />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-brand-red/15 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Reveal>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Food for a better tomorrow
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-brand-ink/75">
              ZOORO Hospitality is a Pune-based food service company. We feed the people who work in offices and
              factories, and we cater the occasions that bring them together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Who we are</h2>
          <p className="mt-5 max-w-xl text-lg text-brand-ink/75">
            We run kitchens and canteens inside our clients’ premises, so the food is cooked fresh, close to the
            people who eat it. Our work spans corporate canteens, industrial catering, events and buffets, and
            healthy meal plans.
          </p>
          <p className="mt-4 max-w-xl text-lg text-brand-ink/75">
            Good food makes better people, and better people build brighter workplaces. That belief shapes how we
            plan menus, how we run our kitchens and how we serve every plate.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-brand-red/10">
            <p className="font-display text-2xl font-extrabold text-brand-red">
              “Good food, better people, brighter workplaces.”
            </p>
            <div className="mt-6 h-1 w-16 rounded bg-brand-gold" />
            <p className="mt-6 text-sm font-bold">Head office</p>
            <p className="mt-1 text-brand-ink/75">
              ZOORO Hospitality Pvt. Ltd.
              <br />
              S.No. 52-3/1, Maruti Nagar, Lane No. 4,
              <br />
              Wadgaonsheri, Pune 411014
            </p>
          </div>
        </Reveal>
      </section>

      {/* Mission / vision / values */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className={`h-full rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1.5 ${p.className}`}>
                <h3 className="font-display text-2xl font-extrabold">{p.title}</h3>
                <p className="mt-3 opacity-90">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="bg-brand-ink py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-extrabold sm:text-5xl">What we do</h2>
          </Reveal>
          <ul className="mt-12 divide-y divide-white/10">
            {whatWeDo.map((w, i) => (
              <li key={w.title}>
                <Reveal delay={i * 0.05}>
                  <div className="grid gap-2 py-6 sm:grid-cols-[1fr_1.5fr] sm:gap-10">
                    <h3 className="font-display text-xl font-extrabold text-brand-gold">{w.title}</h3>
                    <p className="text-white/75">{w.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-extrabold sm:text-5xl">How we work</h2>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {approach.map((a, i) => (
            <Reveal key={a.t} delay={(i % 2) * 0.1}>
              <div className="flex gap-5">
                <span className={`mt-1 h-14 w-2 shrink-0 rounded-full ${a.c}`} />
                <div>
                  <h3 className="text-xl font-extrabold">{a.t}</h3>
                  <p className="mt-1 text-brand-ink/70">{a.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-red to-brand-red-dark py-20">
        <Reveal className="mx-auto max-w-3xl px-6 text-center text-white">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Want ZOORO in your workplace?</h2>
          <p className="mt-4 text-lg text-white/85">Tell us about your team or your occasion and we will reply with a menu and quotation.</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand-gold px-8 py-3.5 font-bold text-brand-ink transition-colors hover:bg-white"
          >
            Contact us
          </Link>
        </Reveal>
      </section>
    </div>
  );
}