// src/components/SiteConsentBanner.jsx
import { useState, useEffect } from "react";
import { initAnalytics, sendEvent } from "../lib/analytics";

/**
 * SiteConsentBanner
 * - Avoid showing on legal pages (/privacy, /terms)
 * - Adds #ms-consent-banner and #ms-consent-preferences ids
 * - Keeps give/revoke flow and analytics init
 */
export default function SiteConsentBanner() {
  // If we are on the legal pages, do not render the banner at all
  if (typeof window !== "undefined") {
    const p = window.location && window.location.pathname;
    if (p === "/privacy" || p === "/terms") return null;
  }

  const STORAGE_KEY = "ms_consent_v1";
  const [showBanner, setShowBanner] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [consentData, setConsentData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setShowBanner(true), 300);
      return () => clearTimeout(timer);
    } else {
      try {
        setConsentData(JSON.parse(stored));
      } catch {
        setConsentData({ v: 1, t: Date.now() });
      }
      initAnalytics().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (!showBanner) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowBanner(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showBanner]);

  const giveConsent = async () => {
    try {
      const payload = { v: 1, t: Date.now() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      setConsentData(payload);
      await initAnalytics();
      sendEvent("consent_given", { method: "banner" });
    } catch (err) {
      if (import.meta.env.DEV) console.error("consent flow error:", err);
    } finally {
      setShowBanner(false);
    }
  };

  const revokeConsent = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };

  return (
    <>
      {showBanner && (
        <div
          id="ms-consent-banner"
          className="fixed bottom-4 left-0 right-0 flex justify-center z-50 px-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white text-gray-900 p-4 sm:p-5 rounded-lg shadow-lg w-full max-w-2xl border border-gray-200 animate-slideUp">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm leading-relaxed">
                We use basic site preferences to enhance your browsing experience.
                By continuing to use this site, you acknowledge and accept our{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-700"
                >
                  Privacy Policy
                </a>
                .
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={giveConsent}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                  aria-label="Accept site preferences"
                >
                  Okay
                </button>

                <button
                  onClick={() => setShowBanner(false)}
                  className="px-3 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 text-sm"
                  aria-label="Dismiss preferences banner"
                >
                  Dismiss
                </button>

                <button
                  onClick={() => setShowPrefs(true)}
                  className="text-xs text-gray-500 underline hover:text-gray-700"
                  aria-label="Manage site preferences"
                  title="Manage site preferences"
                >
                  Manage
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPrefs && (
        <div
          id="ms-consent-preferences"
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowPrefs(false);
          }}
        >
          <div className="bg-white rounded-lg shadow-xl max-w-xl w-full p-6">
            <h3 className="text-lg font-semibold mb-3">Site Preferences</h3>

            <div className="mb-4 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Consent status:</strong> {consentData ? "Given" : "Not given"}
              </p>
              {consentData && (
                <p className="text-xs text-gray-500">
                  Given at: {new Date(consentData.t).toLocaleString()}
                </p>
              )}

              <p className="mt-3">
                You can revoke consent below. Revoking will remove stored preferences
                and reload the page to ensure tracking is disabled.
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPrefs(false)}
                className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
              >
                Close
              </button>

              <button
                onClick={revokeConsent}
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
              >
                Revoke Consent
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.35s ease-out; }
      `}</style>
    </>
  );
}
