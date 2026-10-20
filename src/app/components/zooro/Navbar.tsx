import Link from "next/link";

export default function Navbar() {
  return (
    <header className="zh-nav">
      <Link href="/" className="zh-logo">
        Zooro Hospitality
      </Link>
      <ul className="zh-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <Link href="/contact" className="zh-cta">
        Get a Quote
      </Link>
    </header>
  );
}
