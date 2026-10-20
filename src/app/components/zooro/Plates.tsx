import Image from "next/image";

const plates = [
  {
    label: "Premium Thali",
    border: "border-[var(--tomato)]",
    offset: "lg:mt-0",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Healthy Bowl",
    border: "border-[var(--saffron)]",
    offset: "lg:mt-[18px]",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Executive Lunch",
    border: "border-[var(--blue)]",
    offset: "lg:mt-[5px]",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Fresh Noodles",
    border: "border-[var(--leaf-green)]",
    offset: "lg:mt-[22px]",
    img: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80",
  },
];

function Squiggle() {
  return (
    <svg aria-hidden className="mx-auto mt-4 h-8 w-[350px] -translate-x-[5.5px] max-w-full" viewBox="-7 0 347 32" fill="none">
      <path
        d="M-3 16Q34.5 2.5 72 16T138 16T204 16T270 16T334 16"
        stroke="var(--saffron)"
        strokeWidth="9.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Plates() {
  return (
    <section className="relative overflow-hidden border-b-[2px] border-black bg-[var(--deep-green)] px-6 py-24 text-[var(--vanilla)] lg:px-8">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="zh-drift-tall absolute left-[9%] top-[calc(13%+13px)] text-[41px] opacity-45">🌰</span>
        <span className="zh-drift-tall absolute left-[47%] top-[calc(10%+5.5px)] text-[26px] opacity-45" style={{ animationDelay: "-2s" }}>🧄</span>
        <span className="zh-drift absolute right-[11%] top-[20%] text-[33px] opacity-50" style={{ animationDelay: "-4s" }}>🌿</span>
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="ff-archivo text-4xl uppercase sm:text-[72px] sm:leading-none">Our Corporate Plates</h2>
        <Squiggle />
      </div>

      <div className="relative mx-auto mt-14 grid grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 lg:-mx-2 lg:flex lg:items-start lg:justify-between lg:gap-0">
        {plates.map((p) => (
          <div key={p.label} className={`flex flex-col items-center ${p.offset}`}>
            <Image
              src={p.img}
              alt={p.label}
              width={270}
              height={270}
              className={`h-[270px] w-[270px] rounded-full border-[12px] object-cover ${p.border}`}
              style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.45)" }}
            />
            <p className="ff-archivo mt-6 text-[15px] uppercase tracking-[0.06em]">{p.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
