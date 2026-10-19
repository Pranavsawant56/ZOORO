import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us | ZOORO Hospitality",
  description:
    "Get in touch with ZOORO Hospitality for corporate canteens, industrial catering, festival and occasion meals, events and healthy meals.",
};

const helpWith = [
  "Corporate canteen",
  "Industrial catering",
  "Festival & occasion meals",
  "Events & buffets",
  "Healthy meals",
];

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("ZOORO Hospitality, Maruti Nagar, Wadgaonsheri, Pune 411014");

export default function ContactPage() {
  return (
    <div className="bg-brand-cream text-brand-ink">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-gold/30 blur-3xl" />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-brand-leaf/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Let’s plan your next meal
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-brand-ink/75">
              Tell us about your team or your occasion and we will reply with a menu and quotation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Details + form */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <Reveal>
            <div className="rounded-3xl bg-brand-red p-7 text-white">
              <h2 className="text-lg font-extrabold">Email</h2>
              <a
                href="mailto:sagar@zoorohospitality.com"
                className="mt-2 inline-block break-all text-lg font-semibold text-brand-gold hover:underline"
              >
                sagar@zoorohospitality.com
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-ink/10">
              <h2 className="text-lg font-extrabold">Head office</h2>
              <p className="mt-2 text-brand-ink/75">
                ZOORO Hospitality Pvt. Ltd.
                <br />
                S.No. 52-3/1, Maruti Nagar, Lane No. 4,
                <br />
                Wadgaonsheri, Pune 411014
              </p>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-bold text-brand-red hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-ink/10">
              <h2 className="text-lg font-extrabold">Website</h2>
              <a
                href="https://www.zoorohospitality.com"
                className="mt-2 inline-block font-semibold text-brand-red hover:underline"
              >
                www.zoorohospitality.com
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="rounded-3xl bg-brand-ink p-7 text-white">
              <h2 className="text-lg font-extrabold">We can help with</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {helpWith.map((h, i) => (
                  <li
                    key={h}
                    className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                      i % 3 === 0
                        ? "bg-brand-red text-white"
                        : i % 3 === 1
                          ? "bg-brand-gold text-brand-ink"
                          : "bg-brand-leaf text-white"
                    }`}
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </div>
  );
}