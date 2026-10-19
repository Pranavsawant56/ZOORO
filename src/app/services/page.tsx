"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const reasons = [
  {
    title: "Made for your operation",
    description:
      "From daily office canteens to multi-shift plants and one-day events, menus and service are planned around your team.",
    marker: "01",
  },
  {
    title: "Quality you can count on",
    description:
      "Standardised recipes and consistent kitchen routines help keep every meal reliable across people, shifts and sites.",
    marker: "02",
  },
  {
    title: "Clear from planning to billing",
    description:
      "Know what is on the menu, what service includes and how meals are counted before the invoice arrives.",
    marker: "03",
  },
  {
    title: "Food for different needs",
    description:
      "Choose from vegetarian, Jain, non-vegetarian and health-focused options, with nutrition and allergen details where needed.",
    marker: "04",
  },
];

const services = [
  {
    id: "canteen",
    title: "Corporate canteen",
    summary: "A full canteen inside your office, run by our team.",
    panel: "bg-brand-red text-white",
    accent: "text-brand-gold",
    chip: "bg-white/15",
    points: [
      "Breakfast, lunch, snacks and dinner",
      "Weekly or 4-week cyclic menus with veg, non-veg, Jain and egg options",
      "Employees pre-book or opt out on their phone before a cut-off time",
      "QR meal pass scanned at the counter, with live booked and served counts",
      "Company and employee subsidy splits handled automatically",
    ],
    tags: ["Pre-booking", "QR meal pass", "Subsidy rules"],
  },
  {
    id: "industrial",
    title: "Industrial catering",
    summary: "High-volume meals for factories, plants and shift teams.",
    panel: "bg-brand-ink text-white",
    accent: "text-brand-gold",
    chip: "bg-white/15",
    points: [
      "Breakfast, lunch, snacks, dinner and night-shift meals",
      "Large kitchens with strict quality and hygiene routines",
      "Fast counters that keep serving even when the internet drops",
      "Every meal recorded, so monthly billing is accurate and undisputed",
      "Rate cards per site and meal type",
    ],
    tags: ["Multi-shift", "Night shift", "Offline-safe counter"],
  },
  {
    id: "festival",
    title: "Festival and occasion meals",
    summary: "Corporate meals for festivals and every special day.",
    panel: "bg-brand-gold text-brand-ink",
    accent: "text-brand-red",
    chip: "bg-brand-ink/10",
    points: [
      "Festive menus for Diwali, Eid, Christmas, Pongal, Sankranti and New Year",
      "National days, annual days, birthdays, farewells and client meets",
      "Special menus and paid add-ons such as sweets and beverages",
      "From a thali for 50 to a buffet for thousands",
      "Any corporate meal requirement, big or small",
    ],
    tags: ["Festival menus", "Annual days", "Any occasion"],
  },
  {
    id: "events",
    title: "Events and buffets",
    summary: "Conferences, trainings, launches and celebrations.",
    panel: "bg-white text-brand-ink ring-1 ring-brand-ink/10",
    accent: "text-brand-red",
    chip: "bg-brand-cream",
    points: [
      "Per-plate packages in Silver, Gold and Platinum, with add-ons",
      "Clear quotation with GST and terms, plus revisions if your plan changes",
      "Booking confirmation with an advance and a payment link",
      "A job sheet covering menu, staff, equipment, transport and timeline",
      "Final guest count locked in before the day",
    ],
    tags: ["Menu packages", "Quotation", "Advance booking"],
  },
  {
    id: "healthy",
    title: "Healthy meal plans",
    summary: "Balanced meals designed around wellbeing.",
    panel: "bg-brand-leaf text-white",
    accent: "text-brand-gold",
    chip: "bg-white/15",
    points: [
      "Calories, protein, carbs and fat shown for every portion",
      "Allergen tags and a Healthy badge on suitable dishes",
      "Diet, high-protein and diabetic-friendly options",
      "Subscription plans for teams and individuals",
      "Recipes standardised across sites for consistent quality",
    ],
    tags: ["Nutrition info", "Allergen tags", "Subscriptions"],
  },
];

export default function ServiceExplorer() {
  const [active, setActive] = useState(services[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduce = useReducedMotion();
  const current = services.find((s) => s.id === active)!;

  function select(index: number, focus = false) {
    setActive(services[index].id);
    const el = tabRefs.current[index];
    if (focus) el?.focus();
    // keep the chosen tab visible in the scrolling row on small screens
    el?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % services.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (index - 1 + services.length) % services.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = services.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    select(nextIndex, true);
  }

  return (
    <div className="bg-brand-cream py-14 text-brand-ink sm:py-20">
      <div className="mx-auto max-w-6xl space-y-16 px-6 sm:space-y-20">
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr]">
      {/* Tabs: scrolling row on small screens, stacked list on desktop */}
      <div
        role="tablist"
        aria-label="Our services"
        className="-mx-6 flex snap-x snap-mandatory gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:snap-none lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {services.map((s, index) => {
          const isActive = s.id === active;
          return (
            <button
              key={s.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${s.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => select(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              className="relative shrink-0 snap-start whitespace-nowrap rounded-2xl px-4 py-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-brand-red sm:px-5 sm:py-4 lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:whitespace-normal"
            >
              {isActive && (
                <motion.span
                  layoutId="service-tab"
                  className="absolute inset-0 rounded-2xl bg-brand-ink"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 block font-display text-base font-extrabold sm:text-lg ${
                  isActive ? "text-white" : "text-brand-ink"
                }`}
              >
                {s.title}
              </span>
              <span
                className={`relative z-10 mt-1 hidden text-sm lg:block ${
                  isActive ? "text-white/75" : "text-brand-ink/60"
                }`}
              >
                {s.summary}
              </span>
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div className="flex min-w-0 lg:min-h-[480px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease }}
            className={`flex w-full min-w-0 flex-1 flex-col rounded-3xl p-6 sm:p-8 lg:p-10 ${current.panel}`}
          >
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              {current.title}
            </h3>
            <p className="mt-3 max-w-xl text-base opacity-85 sm:text-lg">{current.summary}</p>

            <ul className="mt-6 space-y-3 text-[15px] sm:mt-8 sm:space-y-4 sm:text-base">
              {current.points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease }}
                  className="flex gap-3"
                >
                  <span
                    className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-current ${current.accent}`}
                  />
                  <span className="min-w-0 break-words">{p}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
              {current.tags.map((t) => (
                <span
                  key={t}
                  className={`rounded-full px-3 py-1 text-xs font-semibold sm:px-4 sm:py-1.5 sm:text-sm ${current.chip}`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* pinned to the bottom so top and bottom spacing stay equal */}
            <motion.div
              className="mt-auto pt-8 sm:self-start sm:pt-10"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="block rounded-full bg-brand-ink px-7 py-3 text-center font-bold text-white transition-colors hover:bg-brand-red sm:inline-block"
              >
                Get a quote for this
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      </div>

      <section aria-labelledby="why-zooro-heading" className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-red">
            The ZOORO difference
          </p>
          <h2
            id="why-zooro-heading"
            className="mt-3 font-display text-3xl font-extrabold sm:text-4xl"
          >
            A meal service that works for your people
          </h2>
          <p className="mt-4 text-base text-brand-ink/70 sm:text-lg">
            Good food is only part of the job. We make planning, service and follow-through easier too.
          </p>
        </div>

        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
          }}
        >
          {reasons.map((reason) => (
            <motion.article
              key={reason.marker}
              variants={{
                hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ duration: reduce ? 0 : 0.3, ease }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-ink/10 sm:p-7"
            >
              <span className="font-display text-sm font-extrabold tracking-widest text-brand-gold">
                {reason.marker}
              </span>
              <h3 className="mt-3 text-lg font-extrabold sm:text-xl">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/70 sm:text-base">
                {reason.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>
      </div>
    </div>
  );
}