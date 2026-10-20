import Image from "next/image";

const left = [
  { emoji: "🛡️", title: "Hygiene First", text: "Strict FSSAI compliance and digital checklists for every kitchen." },
  { emoji: "🌿", title: "Healthy by Design", text: "Nutrition tracked and standardized across all sites." },
];

const right = [
  { emoji: "🔥", title: "Cooked to Demand", text: "Pre-booking reduces wastage and ensures exact, fresh portions." },
  { emoji: "💰", title: "Clear Billing", text: "Automated, consumption-based invoices with zero disputes." },
];

function Feature({ emoji, title, text }: { emoji: string; title: string; text: string }) {
  return (
    <div>
      <p className="text-5xl leading-none">{emoji}</p>
      <h3 className="ff-archivo mt-6 text-2xl uppercase">{title}</h3>
      <p className="mt-4 max-w-[320px] text-[17px] leading-relaxed text-[var(--espresso)]">{text}</p>
    </div>
  );
}

export default function WhyZooro() {
  return (
    <section className="border-b-[2px] border-black bg-[var(--cream2)] px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <span className="zh-badge mx-auto block">Trust &amp; Quality</span>
        <h2 className="ff-fraunces text-4xl uppercase leading-[1.05] !tracking-normal sm:text-[68px]">
          Why top companies choose Zooro.
        </h2>
      </div>

      <div className="mx-auto mt-[72px] grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
        <div className="space-y-16">
          {left.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-[425px]">
          <svg
            aria-hidden
            className="absolute -right-[27.5px] -top-[24.4px] z-10 h-14 w-14 rotate-[16deg]"
            viewBox="0 0 24 24"
            fill="var(--tomato)"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          <Image
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
            alt="A fresh salad bowl prepared in a Zooro kitchen"
            width={850}
            height={1120}
            className="aspect-[3/4] w-full rounded-[32px] border-2 border-black object-cover"
            style={{ boxShadow: "12px 12px 0 var(--saffron)" }}
          />
        </div>

        <div className="space-y-16 lg:pl-8">
          {right.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
