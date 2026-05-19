import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Get Fixed Online",
  description: "Privacy policy for Get Fixed Online — how we collect, use, and protect your personal data.",
  alternates: { canonical: "https://getfixedonline.uk/privacy" },
  robots: { index: true, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-2xl mx-auto px-5 sm:px-6">
        <h1 className="text-3xl font-black text-navy mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-10">Last updated: May 2026</p>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-8">

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">Who we are</h2>
            <p className="text-slate-600">
              Get Fixed Online (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a web design agency that builds websites for plumbing businesses.
              Our website is <a href="https://getfixedonline.uk" className="text-teal hover:underline">getfixedonline.uk</a>.
              You can contact us at <a href="mailto:hello@getfixedonline.uk" className="text-teal hover:underline">hello@getfixedonline.uk</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">What data we collect</h2>
            <p className="text-slate-600">
              When you fill in our contact form, we collect:
            </p>
            <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
              <li>Your name</li>
              <li>Your business name</li>
              <li>Your email address</li>
              <li>Your phone number (optional)</li>
              <li>Any message you choose to send us</li>
            </ul>
            <p className="text-slate-600 mt-3">
              We do not collect any other personal data, and we do not use cookies for tracking or advertising.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">Why we collect it</h2>
            <p className="text-slate-600">
              We collect your contact details solely to respond to your enquiry about our website design service.
              Our lawful basis under UK GDPR is <strong>legitimate interests</strong> — specifically, to respond to a direct request you have made to us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">How we store and protect it</h2>
            <p className="text-slate-600">
              Your data is stored securely in Supabase (EU region) and transmitted via encrypted connections (HTTPS/TLS).
              We do not sell, rent, or share your personal data with any third parties for marketing purposes.
              The only third-party service that processes your data is our email provider (Resend), which delivers your enquiry to our inbox.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">How long we keep it</h2>
            <p className="text-slate-600">
              We retain contact form submissions for up to 12 months after the last communication between us.
              If you do not become a client, we delete your data within 90 days of your initial enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">Your rights</h2>
            <p className="text-slate-600">Under UK GDPR you have the right to:</p>
            <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (&ldquo;right to be forgotten&rdquo;)</li>
              <li>Object to processing</li>
              <li>Lodge a complaint with the ICO (ico.org.uk)</li>
            </ul>
            <p className="text-slate-600 mt-3">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:hello@getfixedonline.uk" className="text-teal hover:underline">hello@getfixedonline.uk</a>.
              We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">Changes to this policy</h2>
            <p className="text-slate-600">
              We may update this policy from time to time. The date at the top of the page will always reflect when it was last changed.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
