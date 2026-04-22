import HomeNavbar from "../../components/HomeNavbar";
import HomeFooter from "../../components/HomeFooter";

export default function DocumentaryPage() {
  return (
    <>
      <HomeNavbar />
      <main className="pt-24 space-y-24 bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        {/* Hero Section: Cinematic Video Preview */}
        <section className="px-6 max-w-screen-2xl mx-auto">
          <div className="relative w-full h-[707px] rounded-xl overflow-hidden group">
            <img
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              alt="Cinematic wide shot of a misty mountain range with a lone explorer standing on a peak at dawn, epic atmospheric lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzakB-UbXpKB765-Q4nqzCvJAoFLVVAtHFRd1B9s0DZfK44VkFyjZDbfC2v6KAZXqOf5Ejn2DAypqoVDqHDeIhK7YyMprJvK6cpVi1aUsWJ59yRq9ZCtQ8CkiAn13fadtUUfm4OBMHnCd959jb36vWX4EIQrkYWmZcuAQfwzgr8lXA4fDIMBt0q44qCW-f7Vp6RcN8H4PmSwLjtQJO_5-TiS1bu1EstZIhUz6ANSE06j7jhJ7otQjWz-E7iOSCkjZxdnp84lOo5SE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 w-full md:w-2/3">
              <span className="bg-primary/20 text-primary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block backdrop-blur-md">
                Feature Presentation
              </span>
              <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
                The Silent Current: A Nile Anthology
              </h1>
              <p className="text-surface-variant text-lg md:text-xl font-medium mb-8 max-w-xl leading-relaxed">
                An immersive journey through the forgotten tributaries of human history, captured with surgical precision and cinematic grace.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-on-surface px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-transform active:scale-95">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  Watch Trailer
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-white/20 active:scale-95">
                  Read Synopsis
                </button>
              </div>
            </div>
            {/* Playback Info Overlay */}
            <div className="absolute top-8 right-8 flex gap-4">
              <div className="glass-panel px-4 py-2 rounded-lg text-on-surface text-sm font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                4K ULTRA HD
              </div>
            </div>
          </div>
        </section>
        {/* About Section: Asymmetric Content */}
        <section className="max-w-screen-2xl mx-auto px-8 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8">
            <div className="inline-block px-4 py-1 bg-surface-container-high rounded-full text-primary font-bold text-xs tracking-widest uppercase">The Philosophy</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface leading-tight">Crafting visual poetry from raw data and human spirit.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-on-surface-variant leading-relaxed">Our approach blends ethnographic research with avant-garde cinematography. We don't just film; we observe the invisible threads that connect modern civilization to its ancient roots.</p>
              </div>
              <div className="space-y-4">
                <p className="text-on-surface-variant leading-relaxed">Using the latest RED digital sensors and customized vintage optics, the Nile team achieves a texture that feels both futuristic and timelessly organic.</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <img className="w-full h-full object-cover" alt="Close up of a professional cinema camera lens reflecting a sunset landscape, highly detailed photography equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbeAjNXqHzFAt5MsGBMVrkD17t6GTQq0uFx_qzG_KJmgOMauLpN3_tjJzkkZqBwf-y8Hs5d2uKerKts0X8Y8iOROc1g1P50fa2TB_2HdjqBgXP5GtzBQ7eA43WFnNnCAIQVzqnOoYA8q_Dt0Guc8iMwjVipZOSyRShsQlh71uSeijiYa3coZD60_Ait-lheQ4_alk-emAYYBwrlqyYoehT9rv74dCrw73a5LjSCYsSq3zQ3H_YiUK2rZn958E_yVFc_hr7cUmBxD0" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-xl shadow-xl border border-white/20 max-w-[200px]">
              <div className="text-3xl font-black text-primary leading-none mb-1">12K</div>
              <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Resolution Standard</div>
            </div>
          </div>
        </section>
        {/* Impact Section: Bento Grid */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">Global Footprint</h2>
                <p className="text-on-surface-variant text-lg">Beyond the screen, our narratives drive real-world change through awareness and digital advocacy.</p>
              </div>
              <button className="text-primary font-bold text-lg border-b-4 border-primary-container pb-1 hover:border-primary transition-all">Explore the Impact Map</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Impact Card 1 */}
              <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between group hover:shadow-2xl transition-all border border-outline-variant/10">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-primary text-4xl">eco</span>
                  <span className="text-primary font-bold text-xs tracking-widest uppercase">Ecology</span>
                </div>
                <div className="mt-20">
                  <div className="text-6xl font-black tracking-tighter text-on-surface mb-2">42%</div>
                  <p className="text-on-surface-variant font-medium">Increase in wetland conservation funding following "The Azure Delta" release.</p>
                </div>
              </div>
              {/* Impact Card 2 */}
              <div className="bg-primary p-8 rounded-xl flex flex-col justify-between text-white group hover:scale-[1.02] transition-all">
                <span className="material-symbols-outlined text-3xl">public</span>
                <div>
                  <div className="text-4xl font-black tracking-tighter mb-1">180+</div>
                  <p className="text-primary-fixed-dim text-sm font-medium">Countries Reached</p>
                </div>
              </div>
              {/* Impact Card 3 */}
              <div className="bg-surface-container-highest p-8 rounded-xl flex flex-col justify-between group hover:bg-primary-container/10 transition-all">
                <span className="material-symbols-outlined text-on-primary-fixed-variant text-3xl">diversity_3</span>
                <div>
                  <div className="text-4xl font-black tracking-tighter text-on-primary-fixed-variant mb-1">2.4M</div>
                  <p className="text-on-secondary-container text-sm font-medium">Active Advocates</p>
                </div>
              </div>
              {/* Impact Card 4 (Large) */}
              <div className="md:col-span-4 h-64 relative rounded-xl overflow-hidden group">
                <img className="w-full h-full object-cover" alt="A diverse group of documentary filmmakers and community leaders shaking hands in a remote village at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4pm-k7wg3PFeDpNBXOQ1xGJeIsJsjhVe-19JMgzq7QAiOVxMnnF9tgfF63eU0kgFkFAOvuVbLhcnau65UGnNJo4ojKztQP8yfKLt59av4cocMl0KLvGzPvyygxoMPt4uSlktJn4z5qAX6Td5RhGgsHy3uG5C-6Gvgn9-nlpi1qeHoCBMkgEmxQDbI4cMPBq7PoVrxZ6VQfkpVP1wneLhyUaI5pfdTim-0HQnN7iqGwqUPqKJkDN8wzLt90vZlT7wh-N407yGbtYc" />
                <div className="absolute inset-0 bg-gradient-to-r from-on-surface/80 to-transparent flex items-center p-12">
                  <div className="max-w-md">
                    <h3 className="text-white text-3xl font-black tracking-tight mb-4">Empowering Local Voices</h3>
                    <p className="text-surface-variant font-medium">We provide gear and training to local storytellers in every region we film, ensuring authentic narratives.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Gallery: Visual Rhythms */}
        <section className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface">The Still Narrative</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">Selected frames captured during the making of our upcoming 2024 season.</p>
          </div>
          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            <div className="rounded-xl overflow-hidden break-inside-avoid">
              <img className="w-full hover:scale-105 transition-transform duration-700" alt="High contrast black and white shot of a cinematographer looking through a view finder in a foggy forest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApRRekxgtVIlVTZA0QdTL3PYqBOXykl2QVcmcC8IjtLLvyPUrb7H6b6CIdxT-p_ZfbJmIAX36vwpbXbHlp5XXB8skGvwz0nyrmBruaOzTd78r4UIViqyIxBcNaNBoAjDRLQbiyQh2EBU8VZVBL5gwNIL8fYH-w-ajFRzBZIPKqt_nD6Oh3bav6kzXDgcNEGm3QDXSijO6aww2n-m_5d_Y9k0gcyhgr79jLLmuO4dy6B5MvltJJUV0no_PoHncXpZf_6aTW3G1rNWA" />
            </div>
            <div className="rounded-xl overflow-hidden break-inside-avoid aspect-square">
              <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Interior of a dark cinema with red velvet seats and a glowing screen reflecting on the floor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoeutEnwFwmbWyVH6z3Fi8noppHeYBFeb8wQiMIqMXtden4DNJlTxkJQYF1RypODm1HI_M42K-S0TI1afEzQ86EqFPc7aidLWQo0aGhEyZQO8uvYYUhpdhZkprOCReZBABHdVhWUJhz15uBVZPJixsLGSEPvfVbR47oxkZKADooU4UbhaosacSNlLBmWFfwzRk1TSa7iUyOGPV_aCVTPAbyswcSTPW8UbRRUwMX8YxFY8phAdWvoWnjHhzRfdzLJSpPMeIUoLuse0" />
            </div>
            <div className="rounded-xl overflow-hidden break-inside-avoid">
              <img className="w-full hover:scale-105 transition-transform duration-700" alt="Bright neon city lights reflecting in a puddle on a rainy street at night, vibrant blue and purple tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ59hBbu3trrUcnJovgih60jozTkVkIHH0wCZPeFQdssOA2GiEe4fvLM_vg0gCJOWuzaqhXnxUd3XmbXfuO3cguejZMoqvLLjhyaHrTR4WkNLBYGHSGLfDAWi_DqBHsxQpmLXyod_z_j4UOiCxkQ5Eq1UFcfeRgLN0bfE7LQIdJr4gAC9G5DNZtjHA8iBmhb4DVOY57v-cGL4Ed7hFT-OAou3mgTahdXJz8eXKsnvqj8spr9JPLSj2wMEy3hrohrPXoPw6dKMgXjE" />
            </div>
            <div className="rounded-xl overflow-hidden break-inside-avoid">
              <img className="w-full hover:scale-105 transition-transform duration-700" alt="Close up of film reel spinning on a vintage projector, warm glowing light and dust particles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYuz92lb7ap6iYx-2aTbrfUu8cCIqxcMHPjdWVSFTJp6JOl2rbFmmOTqX2aXWoqg4S3KDp5tJoEgzFmLSt8kV9erlYx78bgk8MVbHwbTukYQYTC7oPOYu-_4WypcKO6j996TXlpXMy6ixBElKnky2jBm7Wqz583KtV4TeNIqrNKJY19QH50L1Lny0dEFxF1jDJndzmeRGgBL9ASLJwl9qrJ4gprfWYbpa-rJxIv7kzkNn4holMkum2sKJFoAeNVRkbwwLaxGCO3-A" />
            </div>
            <div className="rounded-xl overflow-hidden break-inside-avoid aspect-video">
              <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Aerial view of a dramatic winding desert road at golden hour, deep shadows and orange sand" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHw5fv2lQOK43PyfS9dwp44HXuy-TeCHsBvndy50d-6yVYJnCJOo97DEr5XR0Eg_1mdDWHD4vcpdBNgSaNRVlV6VSivp8m71F27cDnSFlY1deheCCK5ReKHpc-vD__yLTnMq3yF2-N4mARpak2vj0vEJgN5mLuHQqrsVTTwjLDKoNfbQDdf4n75fIxfckwf-yvo4O41LhQGKAPZceW7nZKo-IQ54toJv2HrPQThsSgz06qLHfQPn3tuS6XjzG-a_ypWQj1xGWy34A" />
            </div>
            <div className="rounded-xl overflow-hidden break-inside-avoid">
              <img className="w-full hover:scale-105 transition-transform duration-700" alt="Portrait of an elderly fisherman with a weathered face looking out at a stormy sea" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiUAN-VL3y7YGaRJfijBeDI_FEmgwK0QhYPEcahgsK20wddOXmP8tVvxL1og7XCEpnvulHSNJQzT4uw1ugNkBRJqKphN46SakC_OmjnTw6iQq06aMLnp8MqqV6w_w582quzCiqG92uCrMIVPi0LEz3YWLxgHz44hJO2DvBeW62jlgcKkoT9cf0yEPoEWtjw9J4CJyTDp2P3cCB4cNTyGYNj04FEmnlPu59S7QOMJF2L0uSxGAxIv_G4JTHXUttpV4iux4zOGA1au4" />
            </div>
          </div>
        </section>
        {/* Crew Section: Personal Profiles */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-24">
          <div className="bg-surface-container rounded-xl p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <svg className="w-full h-full text-primary fill-current" viewBox="0 0 100 100">
                <circle cx="100" cy="0" r="80"></circle>
              </svg>
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">The Crew</h2>
                <p className="text-on-surface-variant text-lg max-w-md">Our directors, editors, and visionaries are the architects of the Nile experience.</p>
                <div className="space-y-6 pt-8">
                  <div className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/50 transition-all cursor-pointer group">
                    <img className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Professional headshot of a middle-aged man with glasses and a thoughtful expression, creative director style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUPjo0W6dgy5bZVLDitDOYwsFpZy3QlOhcW6zg4WvP70TE90duhq0RT6TSwr--b9YEpk2PvfMFxkftst988KFtpTEzx0IEm_LtWZFuzT2rhuGbtidQYu22Q8CwQH4DyW_jqQ7_lYBP9r2oym8dsz-GFxud8ImJ2DU4wlabYledzDElgs7EzBwODxhVvn7srHrvTuxXgFj_A0H5oNLOSnMf3pc29PVTNNhpkFklB9wqkukW7tf4qRWiMj_FJFVmHT-oNRhNWhkXi6A" />
                    <div>
                      <h4 className="font-bold text-on-surface">Elias Thorne</h4>
                      <p className="text-sm text-primary font-bold uppercase tracking-widest">Executive Producer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/50 transition-all cursor-pointer group">
                    <img className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Professional headshot of a young woman with a warm smile, photography director style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZSmF_EM-BeH4J1oBY9iXMcjRNNpEhqSwcyRV4umTB2hd4dUkO_u-4AFJnjhKqQhZxKvrbw7KscsUcyABKmFtUSXlneVUiTCa1iKm6O0E8YCrr2Absy5eVD1bdoTLP1lcQEvTrmycNXk4P4EDX6UMn5QfVfz-HeM7Clf9GyXMnEvWGV14jW0Am8YdJZ6e0RcqulwqErhNhyTegO6AI8tgmmuvzuKqNTCK9mY4hJgcoyAf32KKHr6h03Op4mS-GyoaFKCJ-JsDrBAg" />
                    <div>
                      <h4 className="font-bold text-on-surface">Sana Rivera</h4>
                      <p className="text-sm text-primary font-bold uppercase tracking-widest">Director of Photography</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/50 transition-all cursor-pointer group">
                    <img className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Professional headshot of a man with a beard, film editor style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdh8TkR_MCBvgL5_jm43j4xYsKRhJuFX--JatQa1M5mEihfEfkI2wZ6u0zBO5SBJmRoO_sQbM1AmcgFI5VaH0BAbWuNCiK2oKPcRKcZnLK5xlWa02hWa5cR-QzAaTzcrPXfnpvx0Pkfts3xhz6ad__DOBcT9JBbjZ3SrZtduHMx0IssVVsHlPdvy4KADGzO0nEJCJRkDbMqcmpj5lTQX39YGXl-qQ9BFD4eUmiKIkdfeH4XCNTTNpASISz5gWzpo83fXEmvQ0yLX0" />
                    <div>
                      <h4 className="font-bold text-on-surface">Marcus Chen</h4>
                      <p className="text-sm text-primary font-bold uppercase tracking-widest">Lead Editor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-2xl space-y-6">
                <div className="flex gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-xl font-medium text-on-surface italic leading-relaxed">
                  "Nile doesn't just make documentaries; they make icons. Every frame is a masterclass in visual storytelling and emotional resonance."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-1px bg-outline-variant"></div>
                  <span className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">The Narrative Weekly</span>
                </div>
                <button className="w-full py-4 border-2 border-primary text-primary font-black rounded-full hover:bg-primary hover:text-white transition-all active:scale-95">
                  Join the Crew
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <HomeFooter />
    </>
  );
}
