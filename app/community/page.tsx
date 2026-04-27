"use client";

import { useState } from "react";
import HomeNavbar from "../../components/HomeNavbar";
import HomeFooter from "../../components/HomeFooter";

export default function Community() {
  const [reviewRating, setReviewRating] = useState(0);

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <HomeNavbar />

      <main className="pt-24 pb-32 max-w-7xl mx-auto px-6">
        <section className="mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-primary min-h-[320px] flex flex-col justify-center p-8 md:p-16">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img
                alt="Pattern"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKuLHdfpS69lJnDT8YOTBZov631lRjbkO0qFDd4wqfWRM8t9fFr1RtEjhm8e8D3_clJE4rRrRt_sabmzYgYO4CiMeHi8w17SUlf-PdMzGHDXyPBvM_w4dpWhAL2t_7LiDiRTnigDjPYZv_s7oDk8e_E7pWoaHdkgkrOVcZB5dyU2ORf2qD5pLTu-t0fXZZEkZcsgiZvg0qlQ3Ww5tT-xB99ZI73tRMmpHMirjeLVZDJlMHOxBvU8XYzfP5DqkrMJAj4ZXwV0HcStw"
              />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">Ecosystem Hub</h1>
              <p className="text-primary-fixed-dim text-lg md:text-xl font-medium leading-relaxed">
                Stay updated with the pulse of our growing network. Connect with visionaries, share insights, and build the future of Nile together.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <section className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Ecosystem Pulse</h2>
              <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-surface-container-high rounded-full">Live Updates</span>
            </div>
            <div className="bg-surface-container-low rounded-3xl p-6 space-y-4">
              <div className="bg-surface-container-lowest p-5 rounded-2xl flex items-start gap-4 transition-all hover:scale-[1.01] cursor-pointer group">
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">person_add</span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-on-surface group-hover:text-primary transition-colors">New Founder joined</h3>
                    <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary-fixed rounded-md uppercase">New</span>
                  </div>
                  <p className="text-sm text-secondary mt-1">Elena Vance from Spark AI just entered the ecosystem. Connect now!</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-2xl flex items-start gap-4 transition-all hover:scale-[1.01] cursor-pointer group">
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-tertiary">campaign</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-on-surface group-hover:text-primary transition-colors">Upcoming Workshop announced</h3>
                  <p className="text-sm text-secondary mt-1">Join our session on "Scaling Global Logistics" this Thursday at 4 PM GMT.</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-2xl flex items-start gap-4 transition-all hover:scale-[1.01] cursor-pointer group">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">verified</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-on-surface group-hover:text-primary transition-colors">Nile Platform Update v2.4</h3>
                  <p className="text-sm text-secondary mt-1">Enhanced analytics dashboard is now live for all Enterprise members.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Connect</h2>
            <div className="space-y-4">
              <div className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/15 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center">
                  <img alt="WhatsApp" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmEVFYBvA0WReL2R9CPfMm67gsXk9PlFsO_2hs1tDHTQx2H0ekR2dFgXIsf0MxPiXbf1j-FzEeUN3XR1kwczUaOv3qWz1q_Tp4cW1NEDcnv0xZXfVliTchmrBky0TJBl2lIv86_dHrtaECiBvQGa22PXIb7e_0_8qYrrHlP0-L0_ms7QArfrPI_wQvH8NjvRd5hZBkmvCQziZoxJyb7xSXgjToJL5aXY-wNoSdeJNE8jW9KkpgL5ELlXMzRC-soQDMYKf7YNIbuC0" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">WhatsApp Channel</h3>
                  <p className="text-sm text-secondary mb-4">Instant alerts and private community chats.</p>
                </div>
                <button className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-primary-container transition-all duration-300">Join Now</button>
              </div>
              <div className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/15 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1877F2]/10 flex items-center justify-center">
                  <img alt="Facebook" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKQzJ5sigaevgyXg-ymyCrP1maOHghc1MQctedApDl2aeCQgCSmyPsvQTpCMmO7GKVd10OCmmiKPJ8M8Ljvl7NIdmk5XZt6uPoaTftzd_Zdt51rLygmzNuuO0ShKXmXBbJYkaqW66Jyw3PetnPHZGCzTSgeBRy8EXft6lAdr2PUOaPl6sgtvMPkwY81gSbf8spUAonoVxJ9QDnEw4YSv_3_GABzfA0iy2WOttPka4OrYhy2NVNEDsYCNA8PajnxfYc4MrrYXgJBhs" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Facebook Group</h3>
                  <p className="text-sm text-secondary mb-4">Long-form discussions and event galleries.</p>
                </div>
                <button className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-primary-container transition-all duration-300">Join Now</button>
              </div>
            </div>
          </section>
        </div>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Founders Directory</h2>
            <button className="text-primary font-bold flex items-center gap-1 group">
              View Full Directory
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-surface-container-lowest rounded-3xl p-6 transition-all hover:shadow-[0_20px_50px_rgba(19,27,46,0.08)]">
              <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img alt="Founder" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi0I8P75ZV6JP9xMpbkE2BohRw4bdEYO8iyMsKrsqRi4n75wXy1sDvtSW7539TP5NA52vTzSOVeshgZEGdod6Haig3YRiW3ZBUPnrTnSAPG94HH2ZxdZL4685GxUFGB7KJ8VnPbV95CVL0hLkuMYe9Hg25JfKZR240qJYZpkrQdd9xkq1v3EWn4xcSf2Al0ZgSkRKSa4Sk-YjTi-M4HO03j3jn7zUhfkJGCca3FZtfZ0bKxvbxjxD4xvaCkK2CycFo1fsRadmgIDk" />
              </div>
              <h3 className="font-bold text-lg mb-1">Marcus Thorne</h3>
              <p className="text-sm text-primary font-semibold mb-3">CEO, Apex Systems</p>
              <div className="flex gap-2">
                <span className="bg-surface-container-low text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Tech</span>
                <span className="bg-surface-container-low text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Series B</span>
              </div>
            </div>
            <div className="group bg-surface-container-lowest rounded-3xl p-6 transition-all hover:shadow-[0_20px_50px_rgba(19,27,46,0.08)]">
              <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img alt="Founder" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAVj7WyLHByO6eohC6AxfiX84WkRmE_cedqoE0CmTn0RoftAqqTjlAQkK3Luwf-_YTbD8Rw-0kWs6ht1QHQ15Gwy-3f25BV18NM2FePR-O8xABjHplXK2sSX0hTjzOKkY7oME02IJz4IuLU1WiQ9smrZrb1lchOQO7TIs_jLtXe-sjQ-PcjupKsV9hvzqjIqBMFckb8X1v2RAEVVhfiGeVYTmrcLaWCvxELf7UKG-Oi9uqglUZlvDFzrj9uXwNU_GgJA-_Vv4I220" />
              </div>
              <h3 className="font-bold text-lg mb-1">Amara Okafor</h3>
              <p className="text-sm text-primary font-semibold mb-3">Founder, GreenRoot</p>
              <div className="flex gap-2">
                <span className="bg-surface-container-low text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Agri-tech</span>
                <span className="bg-surface-container-low text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Impact</span>
              </div>
            </div>
            <div className="group bg-surface-container-lowest rounded-3xl p-6 transition-all hover:shadow-[0_20px_50px_rgba(19,27,46,0.08)]">
              <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img alt="Founder" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQADh0DzU8uFVgkxD4bDmi_rUecZSiZ17qdE8fRJxBQNCQZWOb7ZhUCsUaRk__EIKR7IgIWD2EwZ7p8NbXYQ0DWx6AkSrrZawaHsQ2wZ001hrqDT2E4IOGu8cbZFMqeNFiQEmEUXky9eDQRVMasfUpen32z-WvWcG0brUuC03o-NKJ13ewrmgDeFCpCUMfLqxxOPMC4hLdacwJp-YE43tmhGy6vDv6cekRA0on4Ll8p29wUsHZ3eAjJuntbtBK8oETa9Oj18XWF_Q" />
              </div>
              <h3 className="font-bold text-lg mb-1">Julian Harth</h3>
              <p className="text-sm text-primary font-semibold mb-3">CTO, Veloci-Pay</p>
              <div className="flex gap-2">
                <span className="bg-surface-container-low text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Fintech</span>
                <span className="bg-surface-container-low text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Security</span>
              </div>
            </div>
            <div className="group bg-surface-container-lowest rounded-3xl p-6 transition-all hover:shadow-[0_20px_50px_rgba(19,27,46,0.08)]">
              <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img alt="Founder" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM7ZzPG6A1t5tlYbF_tV5qnZru_4DDN66Sl-uq0nO76xFEkDTJBr5yS4ekb7tXD0nYueeSVKyzCzfolb66ZvtYv57J0mD9lVIJnjUhGS2TU33QvnLXHxQNkn36hr-N79FE-bOneiAOqdvq1Yn4-Mhy1xwgullqB84YCfSkZf36aWY65Ju3VO2eYmbgf5vyGxKnRFwz5EPR0OaCmTGYorqOCbERmqv3Dg-LsgeFx4Q8J0fhtRjNujY5BvNG2N9VEXdgOWKz-h9HTq0" />
              </div>
              <h3 className="font-bold text-lg mb-1">Sarah Chen</h3>
              <p className="text-sm text-primary font-semibold mb-3">CPO, Urban Flow</p>
              <div className="flex gap-2">
                <span className="bg-surface-container-low text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Design</span>
                <span className="bg-surface-container-low text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Growth</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container rounded-[2.5rem] p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <span className="material-symbols-outlined text-[120px] text-primary">rate_review</span>
          </div>
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Ecosystem Voice</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl">
                <div className="flex items-center gap-1 mb-3">
                  <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-on-surface font-medium mb-3 italic">
                  "The Nile platform has completely streamlined how our startup handles regional logistics. The community aspect is the cherry on top."
                </p>
                <p className="text-xs font-bold text-primary">— David L., Founder of SwiftShip</p>
              </div>
              <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl">
                <div className="flex items-center gap-1 mb-3">
                  <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-slate-300 text-sm">star</span>
                </div>
                <p className="text-on-surface font-medium mb-3 italic">
                  "Incredible interface. I've found three new strategic partners through the directory in just one month."
                </p>
                <p className="text-xs font-bold text-primary">— Maria K., VP of Growth</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-xl shadow-primary/5">
              <h3 className="text-xl font-bold mb-6">Write a Review</h3>
              <div className="space-y-4">
                <div className="flex gap-2 mb-4" role="radiogroup" aria-label="Rate the ecosystem">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      className={`material-symbols-outlined cursor-pointer transition-colors ${
                        reviewRating >= value ? "text-primary" : "text-primary-container"
                      }`}
                      style={{ fontVariationSettings: reviewRating >= value ? "'FILL' 1" : "'FILL' 0" }}
                      aria-checked={reviewRating === value}
                      aria-label={`${value} star${value > 1 ? "s" : ""}`}
                      role="radio"
                      onClick={() => setReviewRating(value)}
                      onMouseEnter={() => setReviewRating(value)}
                    >
                      star
                    </button>
                  ))}
                </div>
                <textarea className="w-full bg-surface-container-low border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary h-32 placeholder:text-outline-variant" placeholder="Share your experience with the ecosystem..." />
                <button className="bg-primary text-white font-bold py-4 px-8 rounded-full w-full md:w-auto shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}