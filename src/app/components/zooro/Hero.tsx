"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      setOffset({
        x: (window.innerWidth / 2 - e.pageX) / 50,
        y: (window.innerHeight / 2 - e.pageY) / 50,
      });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const drift = (base: string) => ({
    transform: `translate(${offset.x}px, ${offset.y}px) rotate(${offset.x}deg) ${base}`,
  });

  return (
    <section className="zh-hero">
      <div className="zh-hero-left">
        <span className="zh-badge">Corporate &amp; Events</span>
        <h1 className="zh-headline">
          Good food,
          <br />
          better people,
          <br />
          brighter workplaces.
        </h1>
        <p className="zh-sub">
          Fresh, hygienic canteens inside offices and factories. Festival meals for companies of every size.
        </p>
        <div className="zh-btns">
          <Link href="/services" className="zh-btn zh-btn-red">Explore Menus</Link>
          <Link href="/about" className="zh-btn zh-btn-green">Our Canteens</Link>
        </div>
      </div>

      <div className="zh-hero-right">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200"
          alt="Fresh healthy food bowl"
          className="zh-food"
        />
        <svg className="zh-doodle zh-star" style={drift("")} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <svg className="zh-doodle zh-leaf" style={drift("rotate(-15deg)")} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M5 19C5 10 10 4 21 3C21 13 15 19 5 19Z" />
          <path d="M2 22L6 18M6 18L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 17L16 8" stroke="#FFFDF5" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        </svg>
        <svg
          className="zh-doodle zh-arrow"
          style={drift("rotate(15deg)")}
          viewBox="0 0 100 100"
          fill="none"
          stroke="#000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M10 50C10 50 30 10 90 40" />
          <path d="M82 25L90 40L74 43" />
        </svg>
      </div>
    </section>
  );
}
