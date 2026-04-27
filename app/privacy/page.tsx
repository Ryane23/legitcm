import HomeNavbar from "../../components/HomeNavbar";
import HomeFooter from "../../components/HomeFooter";

export default function PrivacyPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <HomeNavbar />
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Privacy Policy</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Your privacy matters to Legit.cm</h1>
        <p className="text-on-surface-variant leading-relaxed mb-10">
          This Privacy Policy explains what information we collect, how we use it, and the choices you have. This is a
          default draft intended for internal review and should be replaced with counsel-approved language before launch.
        </p>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold">Information we collect</h2>
          <p className="text-on-surface-variant leading-relaxed">
            We may collect information you provide directly (such as name, email, company information) and information
            collected automatically (such as device identifiers, usage data, and cookies).
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold">How we use information</h2>
          <p className="text-on-surface-variant leading-relaxed">
            We use information to provide and improve our services, communicate with you, process applications, and
            protect the security and integrity of our platform.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold">Sharing and disclosure</h2>
          <p className="text-on-surface-variant leading-relaxed">
            We do not sell personal data. We may share information with service providers who help us operate our
            platform, or when required by law.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold">Your choices</h2>
          <p className="text-on-surface-variant leading-relaxed">
            You may request access, correction, or deletion of your data. Contact us at privacy@legit.cm to make a
            request.
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
