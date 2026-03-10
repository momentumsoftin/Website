// src/pages/Terms.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Terms() {
  const effectiveDate = "2025-12-04";
  const topCardRef = useRef(null);

  useEffect(() => {
    // Hide site consent/banner elements if present so the legal view is clean
    const banner = document.getElementById("ms-consent-banner");
    const prefs = document.getElementById("ms-consent-preferences");
    if (banner) banner.style.display = "none";
    if (prefs) prefs.style.display = "none";
    document.body.style.overflow = "auto";

    // Scroll to top and focus heading so user notices the legal page
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setTimeout(() => {
      if (topCardRef.current) topCardRef.current.focus();
    }, 20);
  }, []);

  return (
    <main className="min-h-screen bg-primary text-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/5 rounded-lg p-8">

        {/* HEADER + OK BUTTON (top-right) */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1
              ref={topCardRef}
              tabIndex={-1}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Terms & Conditions
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              Effective date: <span className="text-gray-200">{effectiveDate}</span>
            </p>
          </div>

          <div className="ml-4">
            <Link
              to="/"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              aria-label="Close terms and return to homepage"
            >
              OK
            </Link>
          </div>
        </div>

        {/* CONTENT */}
        <section className="prose prose-invert text-sm leading-relaxed space-y-4">
          <p>
            These Terms and Conditions ("Terms") govern your use of the MomentumSoft website
            and related services, including the BizCon mobile platform. By accessing or using
            our services you agree to be bound by these Terms.
          </p>

          <h2>1. Use of the Service</h2>
          <p>
            You may use our website and services for lawful purposes only. You agree not to use
            the services in a way that violates laws or interferes with system operation.
          </p>

          <h2>2. Accounts & Access</h2>
          <p>
            You are responsible for safeguarding any account credentials provided to you. Any
            activity under your account is your responsibility.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content, logos, and software are owned by MomentumSoft or its licensors. You are
            granted a limited license to use the services as described in these Terms.
          </p>

          <h2>4. Data & Privacy</h2>
          <p>
            Your use of our services is also governed by our Privacy Policy. By using the website
            or BizCon, you agree to the handling of your data as described there.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            We may rely on third-party tools (analytics, form processors, hosting). Your use of
            those services is subject to their respective policies.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            MomentumSoft is not liable for indirect or consequential damages arising from use of
            our services, to the extent permitted by law.
          </p>

          <h2>7. Warranties</h2>
          <p>
            Services are provided “as is”. We disclaim implied warranties to the fullest extent
            permitted by applicable law.
          </p>

          <h2>8. Termination</h2>
          <p>
            We may suspend or terminate access if you breach these Terms or misuse the services.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We may revise these Terms periodically. The effective date reflects the latest update.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by applicable laws in India unless otherwise required by
            jurisdictional rules.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these Terms, contact:{" "}
            <a href="mailto:support@momentumsoft.in" className="underline text-blue-300">
              support@momentumsoft.in
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
