import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--espresso)] px-6 py-16 text-[var(--vanilla)]">
      <p className="ff-archivo text-center text-4xl uppercase tracking-[-0.03em] sm:text-[88px] sm:leading-none">
        Zooro Hospitality
      </p>
      <ul className="mt-14 flex flex-wrap items-center justify-center gap-12 text-[15px] font-[800] uppercase tracking-[0.1em]">
        <li><Link href="/" className="hover:text-[var(--saffron)]">Home</Link></li>
        <li><Link href="/services" className="hover:text-[var(--saffron)]">Services</Link></li>
        <li><Link href="/contact" className="hover:text-[var(--saffron)]">Contact</Link></li>
      </ul>
      <p className="mt-12 text-center text-[13px] font-[600] uppercase tracking-[0.08em] text-[var(--vanilla)]/60">
        &copy; 2026 Zooro Hospitality. All rights reserved.
      </p>
    </footer>
  );
}
