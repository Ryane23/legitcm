"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroPhone() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const screenRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (rootRef.current) {
        tl.from(rootRef.current, { y: 40, opacity: 0, scale: 0.98, duration: 0.8 });
        tl.to(rootRef.current, { y: -10, duration: 2.6, repeat: -1, yoyo: true, ease: "sine.inOut" }, "+=0.2");
      }
      if (screenRef.current) {
        gsap.to(screenRef.current, { scale: 1.02, duration: 3.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative w-[300px] h-[600px] sm:w-[320px] sm:h-[640px] bg-[#1c1c1e] rounded-[3rem] p-3 shadow-[0_20px_50px_rgba(0,62,199,0.15)] border-4 border-gray-900">
      <div ref={screenRef} className="w-full h-full bg-gray-800 rounded-[2.25rem] overflow-hidden relative">
        <img alt="Video preview of startup founder pitch" className="w-full h-full object-cover brightness-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB91GqZjFlw8V94tiSJ_pX4MVheaQyrN2SydqABxpTbkvxrHOYfJmhV78TpNYD3I5wSP9inG-z4jl8Ga8oGCe2C7hdSWDNaLdiJvRIl7I6-syjgKt9Y8TWZaLSLBUEXzYACx3QtswtznPX1BN2QnMQGCVOBMbwZzFEEHeDuRx6iKdfleDTS8zqXieOuVxfubh34s3Y_-hP-M0LUOsZ0QAGtokPWlIt3ne5EIvZzmptQOF-BTBbI4CRj9_FrT3lahYIy4uEIXSYAui8" />

        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <button className="w-16 h-12 sm:w-20 sm:h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center hover:scale-105 transition-transform shadow-lg group">
            <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">play_arrow</span>
          </button>
        </div>

        <div className="absolute top-6 left-4 right-4 flex items-center gap-3 bg-gradient-to-b from-black/50 to-transparent p-2 rounded-xl">
          <img alt="Profile photo of founder" className="w-10 h-10 rounded-full border border-white/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHytl3s6TzmtBnuLN8OiFv3YAVWzCPgLYUMxdyS0URnHNaU3l1nJAoqOhdBrMgcc2Xt2qp0BNT7tMv2wz5YXF3MHnDWbmUj_fhS83q__g4_zb2JWJZSAmKvOr1XPJjUJDMC0igAuGaH32Mg9qWTw8nWgM3dRzmO2yFGQ1FWP3QUeVeem8U9thnw72-T1Nc360wjK4D3I__o2A1vm-ymFdvhjz51-28po2oco_sRCw7I4kP_3e3cAgn_rRdSWIUN6gBSfQ6cRigD7c" />
          <div className="text-white drop-shadow-md">
            <p className="text-sm font-bold leading-tight">Multiply 2026 Sales.</p>
            <p className="text-xs text-white/80">Winner Oyebanjo</p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
        <div className="w-1/3 h-5 bg-[#1c1c1e] rounded-b-2xl"></div>
      </div>
    </div>
  );
}
