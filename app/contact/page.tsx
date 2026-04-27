import HomeNavbar from "../../components/HomeNavbar";
import HomeFooter from "../../components/HomeFooter";

export default function ContactPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <HomeNavbar />

      <main>
        <section className="relative pt-24 pb-16 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-body">
              Let’s architect the future of indigo-tech together. Whether it’s a global partnership or a simple question,
              we’re ready to grow with you.
            </p>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-primary-container blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[50%] bg-surface-container-highest blur-[100px] rounded-full" />
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-8 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section className="lg:col-span-7 bg-surface-container-low rounded-2xl p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Partnership Proposal</h2>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Organization Name</label>
                  <input
                    className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary-container transition-all placeholder:text-outline-variant"
                    placeholder="Global Tech Corp"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Proposal Type</label>
                  <select className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary-container transition-all appearance-none cursor-pointer">
                    <option>Ecosystem Integration</option>
                    <option>Venture Investment</option>
                    <option>Technical Research</option>
                    <option>Strategic Alliance</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Proposal Details</label>
                <textarea
                  className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary-container transition-all placeholder:text-outline-variant resize-none"
                  placeholder="Describe your vision for our collaboration..."
                  rows={6}
                />
              </div>
              <button
                className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold rounded-full hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-primary/20"
                type="submit"
              >
                Submit Proposal
              </button>
            </form>
          </section>

          <div className="lg:col-span-5 space-y-8">
            <section className="bg-surface-container rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                General Inquiries
              </h3>
              <div className="space-y-4">
                <input
                  className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-container transition-all placeholder:text-outline-variant"
                  placeholder="Full Name"
                  type="text"
                />
                <input
                  className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-container transition-all placeholder:text-outline-variant"
                  placeholder="Email Address"
                  type="email"
                />
                <textarea
                  className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-container transition-all placeholder:text-outline-variant resize-none"
                  placeholder="How can we help?"
                  rows={3}
                />
                <button className="w-full py-3 bg-surface-container-high text-primary font-bold rounded-xl hover:bg-white transition-colors">
                  Send Message
                </button>
              </div>
            </section>

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant px-2">Partner Feedback</h3>
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 hover:scale-[1.01] transition-transform cursor-default">
                <div className="flex gap-1 text-primary mb-3">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-sm italic text-on-surface mb-4">
                  "Nile Indigo's approach to technical partnership is refreshing. They don't just provide tools; they provide an ecosystem."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    alt="Professional male executive"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMLyfOct-OKoJVlH6A9dK3azrxP7HHEjreqEiMt35tAkN5LZGwV9ZGstkAgmo0qiZu9s3x1QV4_AQZhUeKxSZD1GyZLr3HuNlA8WH-6BqFEpFYeWi7Lu2zw_AL2q5Otuq4G_NWv8IMhdUPRC8pE0SecRBOn9U8srJsJkKKh0xxhz8VEy9mxkh2I5-qn8jCUBHIREfRWyotBDDbnNCFJRv1-UsSiyzRdAB2SPajy-j1DDhGpfHXE5ZdksCjd9TyUhgQMPjwATEAkx4"
                  />
                  <div>
                    <p className="text-xs font-bold">Marcus Thorne</p>
                    <p className="text-[10px] text-on-surface-variant">CTO, Vertex Solutions</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 hover:scale-[1.01] transition-transform cursor-default">
                <p className="text-sm italic text-on-surface mb-4">
                  "Working with the Nile incubation team has accelerated our growth by 300%. The precision in their growth model is unmatched."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    alt="Successful woman entrepreneur"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNNWuVc1_kuWUsGSVnsDyOarsWI6CQas0rQQ6QQgnc4ae3P6T4XFRnyxTsqpN4x0iyY96wSGQuCKKWdhRSnuyOEMkd611olUvb4Y5Srbxlx55VIHsRH5l_gfwN0wHRci9wBnbRW5fgr8BO7QcT3lVPVVnDyO6KFQLJN2jYv4av_Y6IZLQc1hJCp1P2eTrS2l8UYaK0RQcByTh139U71b4KkTVUWJDha2mUPv5cUd36ZkJSXcXUR5VJMewKHnsX13_nMewGsTvm7cs"
                  />
                  <div>
                    <p className="text-xs font-bold">Elena Rodriguez</p>
                    <p className="text-[10px] text-on-surface-variant">Founder, Bloom AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-primary py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-2">Ready to start the journey?</h2>
              <p className="opacity-80">Join 500+ organizations building on Nile Indigo.</p>
            </div>
            <button className="bg-white text-primary px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-surface transition-colors flex items-center gap-2">
              Review Ecosystem Docs
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
