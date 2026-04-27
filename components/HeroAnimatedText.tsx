"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function HeroAnimatedText() {
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const launchRef = useRef<HTMLSpanElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("HeroAnimatedText mounted");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (badgeRef.current) tl.from(badgeRef.current, { y: -10, opacity: 0, duration: 0.45 });
      if (headingRef.current) tl.from(headingRef.current, { y: 40, opacity: 0, duration: 0.8 });
      if (launchRef.current)
        tl.from(
          launchRef.current,
          { scale: 0.9, opacity: 0, duration: 0.6, transformOrigin: "50% 50%" },
          "-=0.45"
        );
      if (paraRef.current) tl.from(paraRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
      if (buttonsRef.current) {
        const btns = Array.from(buttonsRef.current.querySelectorAll("a, button"));
        if (btns.length) tl.from(btns, { y: 20, opacity: 0, stagger: 0.12, duration: 0.45 }, "-=0.3");
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="lg:w-1/2 text-center lg:text-left">
      <span
        ref={badgeRef}
        className="inline-block px-4 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-widest uppercase mb-6"
      >
        Incubating the Future
      </span>

      <h1
        ref={headingRef}
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] text-on-surface"
      >
        Build, Connect, <br className="hidden md:block" />
        <span ref={launchRef} className="hero-text-gradient">
          Launch
        </span>
      </h1>

      <p ref={paraRef} className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
        Legit is the premier ecosystem for African innovators. We provide the mentorship, capital, and community you need to turn your ambitious vision into a world-class startup.
      </p>

      <div ref={buttonsRef} className="flex flex-nowrap gap-4 justify-center lg:justify-start items-stretch">
        <Link
          href="/events"
          className="min-w-[170px] h-14 px-8 hero-gradient text-white rounded-full font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform inline-flex items-center justify-center"
        >
          Join Event
        </Link>
        <Link
          href="/pitch"
          className="min-w-[170px] h-14 px-8 bg-surface-container-high text-primary rounded-full font-bold hover:bg-surface-container-highest transition-colors inline-flex items-center justify-center"
        >
          Apply to Pitch
        </Link>
      </div>
    </div>
  );
}
