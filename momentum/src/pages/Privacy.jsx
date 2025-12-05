// src/pages/Privacy.jsx
import React, { useEffect } from "react";

export default function Privacy() {
  const effectiveDate = "2025-12-04";

  useEffect(() => {
    // Hide consent banner/prefs if they are currently present so the page is fully readable
    const banner = document.getElementById("ms-consent-banner");
    const prefs = document.getElementById("ms-consent-preferences");

    if (banner) banner.style.display = "none";
    if (prefs) prefs.style.display = "none";

    // Ensure body scroll is enabled (if a modal previously disabled scrolling)
    document.body.style.overflow = "auto";

    // cleanup not required here (we're intentionally hiding on this page)
  }, []);

  return (
    <main className="min-h-screen bg-primary text-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/5 rounded-lg p-8">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-300">
            Effective date: <span className="text-gray-200">{effectiveDate}</span>
          </p>
        </header>

        <section className="prose prose-invert text-sm leading-relaxed space-y-4">
          <p>
            MomentumSoft (“we”, “us”, or “our”) operates the BizCon mobile platform and the
            MomentumSoft website. This Privacy Policy explains how we collect, use, disclose,
            and protect personal information when you visit our website or use BizCon.
          </p>

          <h2>Quick links</h2>
          <ul>
            <li>
              BizCon (mobile app) privacy:{" "}
              <a
                href="https://privacy.momentumsoft.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-300"
              >
                https://privacy.momentumsoft.in/
              </a>
            </li>
            <li>Contact: <a href="mailto:support@momentumsoft.in" className="underline text-blue-300">support@momentumsoft.in</a></li>
          </ul>

          <h2>Information we collect</h2>
          <p>
            We collect information you provide directly to us (for example, when you request a demo,
            register for an account, or contact support). This may include your name, email address,
            phone number, company name, and any other information you choose to provide.
          </p>
          <p>
            We also collect certain technical data automatically when you interact with our services,
            such as IP address, browser and device type, pages visited, and usage statistics.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>To provide, operate and improve our products and services (including BizCon).</li>
            <li>To respond to requests, support inquiries, or demo requests.</li>
            <li>To communicate important updates and notifications when necessary.</li>
            <li>To analyze usage and trends so we can improve user experience and product features.</li>
          </ul>

          <h2>Cookies & local storage</h2>
          <p>
            We use browser storage and small preference tokens (localStorage) to remember your consent
            and site preferences. We do not set tracking cookies until you explicitly consent via our
            site preferences banner. The banner allows you to accept, dismiss, or manage your preferences.
          </p>

          <h2>Analytics & third-party services</h2>
          <p>
            With your consent we may load analytics tools such as Google Analytics to measure and
            improve site performance and user experience. We also use third-party services to process
            contact and demo requests (for example, Formspree). When you submit data through such forms,
            the form provider will process that data according to their privacy policy.
          </p>

          <h2>Sharing and disclosure</h2>
          <p>
            We do not sell your personal information. We may disclose information to:
          </p>
          <ul>
            <li>Vendors and service providers that perform services on our behalf (e.g., email providers, form processors).</li>
            <li>When required by law, legal process, or to protect our rights and property.</li>
            <li>In connection with a business transaction (e.g., merger or sale of assets), subject to confidentiality and privacy protections.</li>
          </ul>

          <h2>Data retention</h2>
          <p>
            We retain personal information for as long as necessary to fulfill the purposes described
            in this policy, or to comply with legal obligations. Consent records and demo requests are kept
            for operational and audit purposes.
          </p>

          <h2>Your rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict
            the processing of your personal information. To exercise these rights, please contact us at{" "}
            <a href="mailto:support@momentumsoft.in" className="underline text-blue-300">support@momentumsoft.in</a>.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable administrative, technical and physical measures to protect personal information
            against unauthorized access, disclosure, or alteration. No method of transmission or storage is 100% secure;
            while we work to protect your information, we cannot guarantee total security.
          </p>

          <h2>Children</h2>
          <p>
            Our services are not directed to children under 13 (or higher minimum age required by local law).
            We do not knowingly collect personal information from children without parental consent.
          </p>

          <h2>Links to other websites</h2>
          <p>
            Our website and app may contain links to third-party sites. This Privacy Policy does not apply
            to those sites. We encourage you to review the privacy statements of any third-party sites you visit.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this Privacy Policy periodically. The “Effective date” at the top of this page will
            reflect the most recent revision. Material changes will be communicated where required by law.
          </p>

          <h2>Contact us</h2>
          <p className="mb-0">
            If you have any questions or requests regarding this Privacy Policy or your data, please contact:
          </p>
          <ul>
            <li>Email: <a href="mailto:support@momentumsoft.in" className="underline text-blue-300">support@momentumsoft.in</a></li>
            <li>Website: <a href="https://momentumsoft.in" className="underline text-blue-300" target="_blank" rel="noopener noreferrer">momentumsoft.in</a></li>
          </ul>

          <hr className="border-gray-700 my-6" />

          <p className="text-xs text-gray-400">
            This page summarizes the key elements of our privacy practices. For the BizCon mobile app
            privacy details, please visit the official app privacy page at{" "}
            <a
              href="https://privacy.momentumsoft.in/"
              className="underline text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://privacy.momentumsoft.in/
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
