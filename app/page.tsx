import Image from "next/image";
import AnimatedCtaSlider from "../components/AnimatedCtaSlider";

import HomeNavbar from "../components/HomeNavbar";
import HomeFooter from "../components/HomeFooter";
import HeroAnimatedText from "../components/HeroAnimatedText";
import HeroPhone from "../components/HeroPhone";

export default function Home() {
  return (
    <>
      <HomeNavbar />
      
<main className="min-h-screen bg-surface">
{/**/}
<section className="px-6 md:px-12 py-16 md:py-24 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
<div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
        <HeroAnimatedText />
{/**/}
<div className="lg:w-1/2 flex justify-center w-full mt-10 lg:mt-0">
  <HeroPhone />
</div>
</div>
</section>
{/**/}
<section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_40px_rgb(19,27,46,0.03)] border border-outline-variant/10">
<span className="text-4xl font-black text-primary mb-2 block tracking-tighter">124+</span>
<span className="text-on-surface-variant font-medium">Startups Incubated</span>
</div>
<div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-end">
<span className="text-4xl font-black text-on-surface mb-2 block tracking-tighter">892+</span>
<span className="text-on-surface-variant font-medium">Founders Mentored</span>
</div>
<div className="bg-primary p-8 rounded-xl flex flex-col justify-between text-white">
<span className="material-symbols-outlined text-3xl">celebration</span>
<div>
<span className="text-4xl font-black mb-2 block tracking-tighter">42+</span>
<span className="text-white/80 font-medium">Global Events</span>
</div>
</div>
</div>
</section>
{/**/}
<section className="px-6 md:px-12 py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-extrabold tracking-tight mb-2">Upcoming Events</h2>
<p className="text-on-surface-variant">Secure your spot at our next high-impact gathering.</p>
</div>
<button className="text-primary font-bold flex items-center gap-2 group">
                        View Calendar
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/**/}
<div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="vibrant technology conference hall with blue stage lighting and a large digital screen displaying data patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB91GqZjFlw8V94tiSJ_pX4MVheaQyrN2SydqABxpTbkvxrHOYfJmhV78TpNYD3I5wSP9inG-z4jl8Ga8oGCe2C7hdSWDNaLdiJvRIl7I6-syjgKt9Y8TWZaLSLBUEXzYACx3QtswtznPX1BN2QnMQGCVOBMbwZzFEEHeDuRx6iKdfleDTS8zqXieOuVxfubh34s3Y_-hP-M0LUOsZ0QAGtokPWlIt3ne5EIvZzmptQOF-BTBbI4CRj9_FrT3lahYIy4uEIXSYAui8"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary">DEC 14</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Legit Demo Day 2024</h3>
<p className="text-on-surface-variant text-sm mb-6 line-clamp-2">The premier showcase for the next generation of African unicorns. Join 500+ investors and industry leaders.</p>
<button className="w-full py-3 bg-surface-container text-primary rounded-full font-bold group-hover:bg-primary group-hover:text-white transition-all">Register Now</button>
</div>
</div>
{/**/}
<div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="group of creative young professionals collaborating around a large table with laptops and sketches in a bright modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbE7Tq1nSWz8VL-NsdYGQZiNiuY25L0j7V0IW0INcQf3-0O9dnVwy_w_3CYNltFy0RFc1-Iz-f6LDMDwwp9Gd3hkc1pV-R-rdEUOb-1oYfDh9TV2kc6Bcoou9P4Tu16nklxZcMHvyYUDoNVA8NpoNnKooh6n6whtW-12ZF2rObi_3wXGq0BACuyifj72s1ZuKv1ez8BvtNmkTCOzIYTV1AmoW7c-1lPGdf3pgwk_eLVi-8rVbPvEOIKDgC8PYJYTsHVpurtsIKqPs"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary">JAN 08</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Founders' Mixer: AI Edition</h3>
<p className="text-on-surface-variant text-sm mb-6 line-clamp-2">An exclusive networking evening for founders exploring the frontiers of artificial intelligence in emerging markets.</p>
<button className="w-full py-3 bg-surface-container text-primary rounded-full font-bold group-hover:bg-primary group-hover:text-white transition-all">Request Invite</button>
</div>
</div>
{/**/}
<div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="modern office meeting room with glass walls and professional atmosphere where people are engaged in strategic discussion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoPpSZPuX_YvDzOICe0Kq0je_7EIUF1ma8o0Sxmw5lYbD5IcPPRAHTff7lwbQTHYg6SGnzhXKB1e3zK-nSOhZ6_weFx-lFVBNLooL1HEaHLQ0eT0zz-ZLQb-L4_OHlPXAvC-IbSZYvvUMUGwP3Qkdlm3XQB-GI4aySbg3_4CDg-RUMbUxbGCoJg5sKjLfr2GIr-Y96uE4rg8Ak96VYBMbdYGGz3EjQnHvjLPEfVaP8lC74DvTw_DKUGhkW_EC_CXjDMKeBGxGFbC4"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary">JAN 22</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Scale-Up Workshop</h3>
<p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Hands-on session with Series B founders on operations, talent acquisition, and market expansion strategies.</p>
<button className="w-full py-3 bg-surface-container text-primary rounded-full font-bold group-hover:bg-primary group-hover:text-white transition-all">Secure Seat</button>
</div>
</div>
</div>
</div>
</section>
{/**/}
<section className="px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
<div className="lg:w-1/3">
<span className="text-primary font-bold tracking-widest text-xs uppercase block mb-4">Our Ecosystem in Action</span>
<h2 className="text-4xl font-extrabold tracking-tight mb-6">Launch your dream with Legit Hub.</h2>
<p className="text-on-surface-variant mb-8 leading-relaxed">
                    We're not just a workspace. We're a launchpad providing strategic advisory, technical support, and direct access to seed funding for high-potential ventures.
                </p>
<div className="space-y-6 mb-10">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined">payments</span>
</div>
<div>
<h4 className="font-bold">Equity-Free Funding</h4>
<p className="text-sm text-on-surface-variant">Up to $50k in initial grant funding for top performers.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined">lightbulb</span>
</div>
<div>
<h4 className="font-bold">Expert Mentorship</h4>
<p className="text-sm text-on-surface-variant">1-on-1 access to industry veterans from Google, Stripe, and Flutterwave.</p>
</div>
</div>
</div>
<button className="px-10 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">Apply to Pitch</button>
</div>
<div className="lg:w-2/3">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
{/**/}
<a className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 min-h-[240px] flex flex-col justify-end" href="#">
<img alt="Legit Retail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHytl3s6TzmtBnuLN8OiFv3YAVWzCPgLYUMxdyS0URnHNaU3l1nJAoqOhdBrMgcc2Xt2qp0BNT7tMv2wz5YXF3MHnDWbmUj_fhS83q__g4_zb2JWJZSAmKvOr1XPJjUJDMC0igAuGaH32Mg9qWTw8nWgM3dRzmO2yFGQ1FWP3QUeVeem8U9thnw72-T1Nc360wjK4D3I__o2A1vm-ymFdvhjz51-28po2oco_sRCw7I4kP_3e3cAgn_rRdSWIUN6gBSfQ6cRigD7c"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent"></div>
<div className="relative p-6 z-10">
<h3 className="text-xl font-bold text-white mb-2">Legit Retail</h3>
<div className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                                Learn more
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</a>
{/**/}
<a className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 min-h-[240px] flex flex-col justify-end" href="#">
<img alt="LegitPay" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ7KqOSpe3EFoHxxYHWgUtZuJskicUozwnshM4UGd-Osd8R7ZE8RkRaiVkcs6YH4BaExz2tvwS2EPh69tkvIEoRobozERwfeflLYgy_CvtbH9OVv93Mu6Q5jcJWMYVJgzi-OPSpo5y7qS8KfxDX2ETsW35j2Fk44S1dYCirmh3AKHmasQstCB2naiEqDRQjSAZ4cJL2m9Kfcs_DCqetO2KA6lFR3qUV5n5NQhCBvIja65X8f61eJPOPoTl_gQ_LVa9Kaxi0C6SC_g"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent"></div>
<div className="relative p-6 z-10">
<h3 className="text-xl font-bold text-white mb-2">LegitPay</h3>
<div className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                                Learn more
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</a>
{/**/}
<a className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 min-h-[240px] flex flex-col justify-end" href="#">
<img alt="Shipco" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ5EPJjl_WpOMWv6wvGT2QghBKrd8YcAN6MG-US3IQjuClTzYNzXKiIAB4fx0UYhKSnP0cUQu4vD6SbOLt9vofzOBzQdrAANJ8egjOG923Pe6B-L_5SQmpFotL7cNpYVxfVebpieU6Vu94fAI4bT1KtxpmRH63BOSOdZ2ONHzKRwLMEjWX2R5APUOE5faxah-W4r2Ci7aZEpeP-OoC43UQzaWgfmEAXAwZ2Q7A-5raH4o6yQ66Pm4or5A2Wir8Dx1WV9YKPjOsQCk"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent"></div>
<div className="relative p-6 z-10">
<h3 className="text-xl font-bold text-white mb-2">Shipco</h3>
<div className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                                Learn more
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</a>
{/**/}
<a className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 min-h-[240px] flex flex-col justify-end" href="#">
<img alt="Legit For Startups" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbE7Tq1nSWz8VL-NsdYGQZiNiuY25L0j7V0IW0INcQf3-0O9dnVwy_w_3CYNltFy0RFc1-Iz-f6LDMDwwp9Gd3hkc1pV-R-rdEUOb-1oYfDh9TV2kc6Bcoou9P4Tu16nklxZcMHvyYUDoNVA8NpoNnKooh6n6whtW-12ZF2rObi_3wXGq0BACuyifj72s1ZuKv1ez8BvtNmkTCOzIYTV1AmoW7c-1lPGdf3pgwk_eLVi-8rVbPvEOIKDgC8PYJYTsHVpurtsIKqPs"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent"></div>
<div className="relative p-6 z-10">
<h3 className="text-xl font-bold text-white mb-2">Legit For Startups</h3>
<div className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                                Learn more
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</a>
</div>
</div>
</section>
{/**/}
<section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
<h2 className="text-3xl font-extrabold tracking-tight mb-12 text-center">Meet the Founders</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center group">
<div className="relative mb-6 inline-block">
<div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<img className="w-32 h-32 rounded-full object-cover relative z-10 mx-auto grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="portrait of startup founder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi0HTd-EPZdcFaOa3La_nd_9o-VN7zFX7IOcxJ7oFY5HJtVS9w6mH8vACGki3m5joC7dXGFPL8HO14s9yBkXINb0L3WGS--Z0S09sGLK6scZ--3v-ahpfbZRxM6n--r77y33o5EOFwjoUu0jTTZlGbkcbgBpPMWOELumxFHhQ-AmBu-ucqM1dhtYxoUGVq2REBYoAoGudo3k72gNaJTPUwBY9QwHwrcCh3JvEeZOzyafmqHobp9q62swwLNhqEINuaD4FW-RuA1sI"/>
</div>
<h4 className="font-bold text-lg">Amara Okafor</h4>
<p className="text-sm text-primary mb-2">CEO, AgriFlow</p>
<div className="flex justify-center gap-3">
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-sm">link</span>
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-sm">share</span>
</div>
</div>
<div className="text-center group">
<div className="relative mb-6 inline-block">
<div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<img className="w-32 h-32 rounded-full object-cover relative z-10 mx-auto grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="young executive" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgGJIRTshO1DsrsdqWsEX5zP7sQcsQeV1fcSoVqBToSIEB-Tc92ndgV50Y_P_j-JYA-DD00k3EUz-tpb-EIQ3A0DEv3hHOtVt5GoiWcJqOl7zNuNGQZ9VhAt7dU1lIBslOLzOqUv8VaO3sOhjlfFJNvc8XDwsR3l4BT_2Q2SxhmpP_NE1TsKrPXqQmb5BF8lQxTC2wR1tJmdmKKeCIkqKorEWl7cjKbTWi75dEbdFhmQwFHNQ75Ap23FNuBTomA-WdfIi7l2RFcjA"/>
</div>
<h4 className="font-bold text-lg">David Mensah</h4>
<p className="text-sm text-primary mb-2">CTO, HealthEase</p>
<div className="flex justify-center gap-3">
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-sm">link</span>
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-sm">share</span>
</div>
</div>
<div className="text-center group">
<div className="relative mb-6 inline-block">
<div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<img className="w-32 h-32 rounded-full object-cover relative z-10 mx-auto grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="confident professional woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATr0E0oGI_C_Weu-_VstjIpkowEqqXkzP6L80issi5Af7OYTxUdWlg2vO6PbyydJ6xIu2DQY1q9sViXvUJ9QVIquXqGaQ2mmgXe8qj_6fgeMo5nT_TN09skEg0myPUEY9KyGea8GEONH3CnsmSXdyamemKFemFqBL_4jHGadIRLy1Ng2VZsOrqJylmYFgkKvsxxszDez2UfAuM-0ucsRiI7c7BLv7s63_ZDw-p0QiVgow3fWaKy2N6hSe-qgvkgA-Q78RE-TctH4U"/>
</div>
<h4 className="font-bold text-lg">Fatima Bello</h4>
<p className="text-sm text-primary mb-2">Founder, EduSpark</p>
<div className="flex justify-center gap-3">
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-sm">link</span>
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-sm">share</span>
</div>
</div>
<div className="text-center group">
<div className="relative mb-6 inline-block">
<div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<img className="w-32 h-32 rounded-full object-cover relative z-10 mx-auto grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="entrepreneur smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSV8uovneEaDf1toBfgTjy9LmWkqiSkLnzfGFvlvkwlEMXoj93YVNJsPCLnwvmMN0NQMMd3kdcQGaLlxoYby5SptCbYxDuAK2HyIM2alwsjQ9y9CdORU4Afy1UJg57YPTiwaQtbnOloezkcbSn9QCfTBlTWnt3E-5m7TWdDQZPPTbcCv7qndFhTnhu7bWSsWBTP3oJsTi636z862ezuOvurr2e3nXv-KCHf9X_3zeRaS-e0NbC2ZsOcijXHh7B8P3liqZLpQuYKyo"/>
</div>
<h4 className="font-bold text-lg">Kofi Appiah</h4>
<p className="text-sm text-primary mb-2">COO, VoltMobility</p>
<div className="flex justify-center gap-3">
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-sm">link</span>
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-sm">share</span>
</div>
</div>
</div>
</section>
{/**/}
<section className="px-6 md:px-12 py-20 bg-surface-container-low border-y border-outline-variant/10">
<p className="text-center text-on-surface-variant text-xs font-bold uppercase tracking-[0.2em] mb-12">Backed by industry giants</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40">
<span className="text-2xl font-black italic tracking-tighter">Google</span>
<span className="text-2xl font-black italic tracking-tighter">STRIPE</span>
<span className="text-2xl font-black italic tracking-tighter">Y Combinator</span>
<span className="text-2xl font-black italic tracking-tighter">Flutterwave</span>
<span className="text-2xl font-black italic tracking-tighter">AWS</span>
</div>
</section>
{/**/}
<section className="px-6 md:px-12 py-24">
  <div className="max-w-7xl mx-auto">
    <AnimatedCtaSlider />
  </div>
</section>
</main>


      <HomeFooter />
    </>
  );
}
