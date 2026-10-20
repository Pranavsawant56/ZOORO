const process = [
  { n: "1", color: "text-[var(--tomato)]", tape: "#FFD166", side: "left", tilt: "-rotate-[2.5deg]", title: "TELL US YOUR NEED.", text: "Share headcount, location, meal timings." },
  { n: "2", color: "text-[var(--leaf-green)]", tape: "#A8DADC", side: "right", tilt: "rotate-[2.5deg]", title: "WE PLAN THE MENU.", text: "Weekly cycles with nutrition tags." },
  { n: "3", color: "text-[var(--blue)]", tape: "#F7A1C4", side: "left", tilt: "-rotate-[2.5deg]", title: "WE COOK & SERVE.", text: "Hygienic kitchens & fast scan counters." },
  { n: "4", color: "text-[var(--orange)]", tape: "#B4E33D", side: "right", tilt: "rotate-[2.5deg]", title: "YOU REVIEW.", text: "Feedback & clear monthly invoices." },
];

const pathEmojis = [
  { e: "🌶️", pos: "left-[60%] top-[10%] rotate-[12deg] !text-[36px]" },
  { e: "🌿", pos: "left-[29.5%] top-[22.5%]" },
  { e: "🍴", pos: "left-[81%] top-[59%] !text-[38px]" },
  { e: "🌰", pos: "left-[56%] top-[74.5%]" },
  { e: "🌿", pos: "left-[31%] top-[88.5%]" },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden border-b-[2px] border-black bg-[var(--beige)] px-6 py-24">
      <h2 className="ff-archivo mx-auto max-w-4xl text-center text-4xl uppercase text-black sm:text-[60px] sm:leading-none">
        The Zooro Process
      </h2>

      <div className="relative mx-auto mt-24 max-w-[890px]">
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M500 12 C 650 40, 780 70, 780 127 C 780 240, 220 225, 220 355 C 220 470, 780 490, 780 612 S 220 730, 220 857 C 220 925, 330 962, 500 990"
            stroke="#FFD166"
            strokeWidth="12.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {pathEmojis.map((p, i) => (
          <span key={i} aria-hidden className={`pointer-events-none absolute hidden text-[32px] lg:block ${p.pos}`}>
            {p.e}
          </span>
        ))}

        <div className="relative flex flex-col gap-24">
          {process.map((p) => (
            <div
              key={p.n}
              className={`relative w-[90%] sm:w-[70%] lg:w-[48%] ${p.side === "left" ? "mr-auto" : "ml-auto"}`}
            >
              <div className={`ticket-card relative border-[3px] border-black bg-white pb-9 pl-10 pr-10 pt-[52px] ${p.tilt}`}>
                <span aria-hidden className="washi" style={{ backgroundColor: p.tape }} />
                <span className={`ff-archivo block text-[96px] leading-[0.8] ${p.color}`}>{p.n}</span>
                <h3 className="ff-archivo mt-4 text-[27px] uppercase leading-none text-black">{p.title}</h3>
                <p className="mt-3 text-[16.5px] font-[600] text-[var(--espresso)]">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
