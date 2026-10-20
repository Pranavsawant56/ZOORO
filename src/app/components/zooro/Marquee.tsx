"use client";

const items = ["Diwali", "Eid", "Christmas", "New Year", "Annual Day", "Team Lunches"];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-b-4 border-black bg-[var(--leaf-green)] py-5">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex items-center">
            {items.map((item) => (
              <span
                key={item}
                className="ff-archivo flex items-center text-[25px] uppercase tracking-[0.05em] text-black"
              >
                {item}
                <span className="mx-3 tracking-normal">🌿</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
