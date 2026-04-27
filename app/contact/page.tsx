import HomeNavbar from "../../components/HomeNavbar";
import HomeFooter from "../../components/HomeFooter";

export default function ContactPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <HomeNavbar />
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Contact</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Partner with Legit.cm</h1>
        <p className="text-on-surface-variant leading-relaxed mb-10">
          Tell us about your company, program, or partnership idea. We will follow up within 2 business days.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/10">
            <h2 className="text-xl font-bold mb-3">General inquiries</h2>
            <p className="text-on-surface-variant mb-4">Email us for partnerships, media, or press.</p>
            <a className="text-primary font-semibold hover:underline" href="mailto:hello@legit.cm">hello@legit.cm</a>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/10">
            <h2 className="text-xl font-bold mb-3">Pitch and programs</h2>
            <p className="text-on-surface-variant mb-4">Questions about cohorts, funding, or events.</p>
            <a className="text-primary font-semibold hover:underline" href="mailto:programs@legit.cm">programs@legit.cm</a>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Visit us</h2>
          <p className="text-on-surface-variant">Legit.cm Incubation, Lagos, Nigeria</p>
        </section>
      </main>
      <HomeFooter />
    </div>
  );
}
