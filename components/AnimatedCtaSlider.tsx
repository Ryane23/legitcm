"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    type: "video",
    src: "/videos/130646-747868367_medium.mp4",
    poster: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    alt: "Founders working together",
    heading: "Join the next generation <br /> of founders.",
    desc: "The window for our Q1 2025 cohort is closing. Secure your mentorship track and resource access today."
  },
  {
    type: "video",
    src: "/videos/92480-637690589_medium.mp4",
    poster: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    alt: "Startup team brainstorming",
    heading: "Build, Connect, Launch.",
    desc: "Legit is the premier ecosystem for African innovators. We provide mentorship, capital, and community."
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Modern workspace",
    heading: "Your Startup Journey Starts Here.",
    desc: "Apply now and join a vibrant community of founders and mentors."
  }
];

export default function AnimatedCtaSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const fadeTimeout = setTimeout(() => setFade(true), 100);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 400);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, [current]);

  const slide = slides[current];

  return (
    <div className="relative rounded-xl overflow-hidden bg-primary-container p-0 md:p-0 text-center min-h-[340px] md:min-h-[420px] flex items-center justify-center">
      {/* Background Slide */}
      {slide.type === "video" ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={slide.src}
          poster={slide.poster}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={slide.src}
          alt={slide.alt}
        />
      )}
      {/* Overlay - less opaque for clearer video */}
      <div className="absolute inset-0 bg-primary-container/40 md:bg-primary-container/30 backdrop-blur-sm z-10" />
      {/* CTA Content with fade animation */}
      <div className={`relative z-20 w-full flex flex-col items-center justify-center p-8 md:p-20 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8" dangerouslySetInnerHTML={{__html: slide.heading}} />
        <p className="text-on-primary-container max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          {slide.desc}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link className="px-10 py-5 bg-white text-primary rounded-full font-bold shadow-xl hover:scale-105 transition-transform" href="/pitch">
            Get Started Today
          </Link>
          <Link className="px-10 py-5 bg-primary border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors" href="/community">
            Talk to an Advisor
          </Link>
        </div>
      </div>
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${current === idx ? "bg-white/90 scale-110" : "bg-white/40"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
