// src/pages/Privacy.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  const effectiveDate = "2025-12-04";
  const topCardRef = useRef(null);

  useEffect(() => {
    // Hide site consent/banner elements if present so the legal view is clean
    const banner = document.getElementById("ms-consent-banner");
    const prefs = document.getElementById("ms-consent-preferences");
    if (banner) banner.style.display = "none";
    if (prefs) prefs.style.display = "none";
    document.body.style.overflow = "auto";

    // Ensure the user sees the top of the legal card and focus it for accessibility
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
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              Effective date: <span className="text-gray-200">{effectiveDate}</span>
            </p>
          </div>

          <div className="ml-4">
            <Link
              to="/"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              aria-label="Close privacy and return to homepage"
            >
              OK
            </Link>
          </div>
        </div>

        {/* CONTENT */}
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
            <li>
              Contact:{" "}
              <a href="mailto:support@momentumsoft.in" className="underline text-blue-300">
                support@momentumsoft.in
              </a>
            </li>
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
            site preferences banner.
          </p>

          <h2>Analytics & third-party services</h2>
          <p>
            With your consent we may load analytics tools such as Google Analytics to measure and
            improve site performance. We also use third-party services (such as Formspree) to process
            demo requests.
          </p>

          <h2>Sharing and disclosure</h2>
          <p>
            We do not sell your personal information. We may disclose information to service providers,
            legal authorities, or during business transactions.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain personal information as long as needed for operational and legal purposes.
          </p>

          <h2>Your rights</h2>
          <p>
            You may have rights to access, correct, delete, or restrict the processing of your data.
            Contact us to exercise these rights.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable measures to protect your information. However, no system is completely secure.
          </p>

          <h2>Children</h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect data from them.
          </p>

          <h2>Links to other websites</h2>
          <p>
            Our site may contain links to external sites. Their privacy practices are not covered by this policy.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy from time to time. The revised date above reflects the latest update.
          </p>

          <h2>Contact us</h2>
          <p>
            Email:{" "}
            <a href="mailto:support@momentumsoft.in" className="underline text-blue-300">
              support@momentumsoft.in
            </a>
          </p>

          <hr className="border-gray-700 my-6" />

          <p className="text-xs text-gray-400">
            For BizCon mobile app privacy details, see{" "}
            <a
              href="https://privacy.momentumsoft.in/"
              className="underline text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://privacy.momentumsoft.in/
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
