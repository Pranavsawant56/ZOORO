const services = [
  { title: "Corporate\nCanteen", text: "Breakfast, lunch & snacks inside your office.", emoji: "🍛", bg: "bg-[var(--tomato)]" },
  { title: "Industrial\nCatering", text: "High-volume, multi-shift meals for factories.", emoji: "🍱", bg: "bg-[var(--lime)]" },
  { title: "Events & Buffets", text: "Premium menus for conferences & celebrations.", emoji: "🥪", bg: "bg-[var(--sky)]" },
  { title: "Healthy Plans", text: "Nutrition-tracked options for your teams.", emoji: "🥑", bg: "bg-[var(--saffron)]" },
];

export default function Services() {
  return (
    <section className="border-b-[2px] border-black px-6 pb-[100px] pt-20 lg:px-16">
      <h2 className="ff-archivo mx-auto max-w-5xl text-center text-4xl uppercase leading-[1.05] sm:text-6xl">
        One kitchen partner for every meal
      </h2>
      <div className="mx-auto mt-14 grid max-w-[1320px] gap-8 sm:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.title}
            className={`brutal-hover brutal-shadow relative flex min-h-[300px] flex-col justify-center border-2 border-black px-11 py-12 text-[var(--espresso)] ${s.bg}`}
          >
            <h3 className="ff-archivo whitespace-pre-line text-[32px] uppercase leading-[1.1]">{s.title}</h3>
            <p className="mt-3 max-w-[370px] text-lg font-[600] leading-normal">{s.text}</p>
            <span
              aria-hidden
              className="absolute bottom-6 right-7 rotate-[-8deg] text-[96px] leading-none"
              style={{ filter: "drop-shadow(8px 8px 0 rgba(0,0,0,0.12))" }}
            >
              {s.emoji}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
