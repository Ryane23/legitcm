import HomeNavbar from "../../components/HomeNavbar";
import HomeFooter from "../../components/HomeFooter";

export default function TermsPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <HomeNavbar />
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Terms of Service</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Legit.cm Terms of Service</h1>
        <p className="text-on-surface-variant leading-relaxed mb-10">
          These Terms govern access to and use of Legit.cm. This is a default draft intended for internal review and
          should be replaced with counsel-approved language before launch.
        </p>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold">Use of the platform</h2>
          <p className="text-on-surface-variant leading-relaxed">
            You agree to use the platform lawfully, respect community guidelines, and avoid prohibited activities.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold">Accounts and applications</h2>
          <p className="text-on-surface-variant leading-relaxed">
            You are responsible for maintaining the confidentiality of your account and for the accuracy of any
            application or submission you provide.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold">Intellectual property</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Content on this platform belongs to Legit.cm or its licensors. You may not copy, distribute, or create
            derivative works without permission.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold">Disclaimers and limitation of liability</h2>
          <p className="text-on-surface-variant leading-relaxed">
            The platform is provided "as is" without warranties. Legit.cm is not liable for indirect or consequential
            damages to the maximum extent permitted by law.
          </p>
        </section>

        <section className="space-y-2">
          <p className="text-sm text-on-surface-variant">Last updated: April 27, 2026</p>
        </section>
      </main>
      <HomeFooter />
    </div>
  );
}
