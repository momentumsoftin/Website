// src/components/SiteConsentBanner.jsx
import { useState, useEffect } from "react";
// analytics helpers
import { initAnalytics, sendEvent } from "../lib/analytics";

export default function SiteConsentBanner() {
  const STORAGE_KEY = "ms_consent_v1"; // versioned key
  const [show, setShow] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setShow(true), 300);
      return () => clearTimeout(timer);
    } else {
      // returning visitor: initialize analytics immediately (if consent was given)
      try {
        initAnalytics();
      } catch (e) {
        // swallow - initAnalytics already logs in dev
      }
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setShow(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [show]);

  if (!show) return null;

  const giveConsent = async () => {
    try {
      // store a small JSON so we can extend later
      const payload = JSON.stringify({ v: 1, t: Date.now() });
      localStorage.setItem(STORAGE_KEY, payload);

      // initialize analytics and send a lightweight event
      await initAnalytics();
      // send event if analytics loaded (sendEvent is safe no-op otherwise)
      sendEvent("consent_given", { method: "banner" });
    } catch (err) {
      // ignore errors in production; dev logs if needed
      if (import.meta.env.DEV) console.error("consent flow error:", err);
    } finally {
      setShow(false);
    }
  };

  const revokeConsent = () => {
    localStorage.removeItem(STORAGE_KEY);
    // reload to ensure all tracking that might be in-memory is reset
    window.location.reload();
  };

  return (
    <div
      className="fixed bottom-4 left-0 right-0 flex justify-center z-50 px-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Site preferences"
    >
      <div className="bg-white text-gray-900 p-4 sm:p-5 rounded-lg shadow-lg w-full max-w-2xl border border-gray-200 animate-slideUp">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm leading-relaxed">
            We use basic site preferences to enhance your browsing experience.
            By continuing to use this site, you acknowledge and accept our{" "}
            <a href="/privacy" className="underline text-blue-700">
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
              onClick={() => setShow(false)}
              className="px-3 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 text-sm"
              aria-label="Dismiss preferences banner"
            >
              Dismiss
            </button>

            {/* Small manage link for revoking consent */}
            <button
              onClick={revokeConsent}
              className="text-xs text-gray-500 underline hover:text-gray-700"
              aria-label="Manage site preferences"
              title="Remove consent and reload"
            >
              Manage
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.35s ease-out; }
      `}</style>
    </div>
  );
}
