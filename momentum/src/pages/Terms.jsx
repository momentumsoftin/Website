// src/pages/Terms.jsx
import React, { useEffect } from "react";

export default function Terms() {
  const effectiveDate = "2025-12-04";

  useEffect(() => {
    const banner = document.getElementById("ms-consent-banner");
    const prefs = document.getElementById("ms-consent-preferences");
    if (banner) banner.style.display = "none";
    if (prefs) prefs.style.display = "none";
    document.body.style.overflow = "auto";
  }, []);

  return (
    <main className="min-h-screen bg-primary text-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/5 rounded-lg p-8">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Terms & Conditions</h1>
          <p className="mt-2 text-sm text-gray-300">
            Effective date: <span className="text-gray-200">{effectiveDate}</span>
          </p>
        </header>

        <section className="prose prose-invert text-sm leading-relaxed space-y-4">
          <p>
            These Terms and Conditions ("Terms") govern your use of the MomentumSoft website
            and related services, including the BizCon mobile platform. By accessing or using
            our services you agree to be bound by these Terms.
          </p>

          <h2>1. Use of the Service</h2>
          <p>
            You may use our website and services for lawful purposes only. You agree not to use
            the services in a way that violates laws, infringes rights, or interferes with the
            operation of the services.
          </p>

          <h2>2. Accounts & Access</h2>
          <p>
            Where we provide account access (for demo or trial accounts), you are responsible
            for maintaining the confidentiality of credentials and for all activity that occurs
            under your account.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            MomentumSoft and its licensors retain all intellectual property rights in the services,
            content, trademarks and software provided. You are granted a limited, non-exclusive,
            non-transferable license to use the services as provided in these Terms.
          </p>

          <h2>4. Data & Privacy</h2>
          <p>
            Our handling of personal data is described in the Privacy Policy. By using our services,
            you acknowledge you have read and accept the Privacy Policy.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            We may integrate third-party services (for example, form processors or analytics providers).
            Use of third-party services may be subject to the third party’s own terms and privacy policies.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, MomentumSoft will not be liable for indirect,
            incidental, special, consequential or punitive damages arising from your use of the services.
          </p>

          <h2>7. Warranties</h2>
          <p>
            Services are provided "as is". MomentumSoft disclaims all warranties to the maximum extent
            permitted by law. Where local law does not allow exclusion of implied warranties, such
            warranties are limited to the minimum permitted.
          </p>

          <h2>8. Termination</h2>
          <p>
            We may suspend or terminate access where there is a breach of Terms or for other legitimate reasons.
            Upon termination, you must stop using the services and may lose access to data.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. When material changes occur, we will provide notice
            or update the effective date at the top of the page.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the jurisdiction where MomentumSoft is incorporated or
            as otherwise required by applicable law.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these Terms, contact: <a href="mailto:support@momentumsoft.in" className="underline text-blue-300">support@momentumsoft.in</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
