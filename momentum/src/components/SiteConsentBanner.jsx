import { useState, useEffect } from "react";

export default function SiteConsentBanner() {
  const STORAGE_KEY = "ms_consent"; // renamed to avoid adblock keyword patterns
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show banner only if user hasn't given consent
    if (!localStorage.getItem(STORAGE_KEY)) {
      // delay improves perceived UX and avoids adblock trigger during hydration
      const timer = setTimeout(() => setShow(true), 300);
      return () => clearTimeout(timer);
    }
  }, []);

  // Close banner on ESC key
  useEffect(() => {
    if (!show) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setShow(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 px-4 animate-fadeIn">
      <div className="bg-white text-gray-900 p-4 sm:p-5 rounded-lg shadow-lg w-full max-w-2xl border border-gray-200 animate-slideUp">

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm leading-relaxed">
            We use basic site preferences to enhance your browsing experience.
            By continuing to use this site, you acknowledge and accept our{" "}
            <a href="/privacy" className="underline text-blue-700">
              Privacy Policy
            </a>.
          </p>

          <button
            onClick={() => {
              localStorage.setItem(STORAGE_KEY, "1");
              setShow(false);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            Okay
          </button>
        </div>
      </div>

      {/* Local animation styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.35s ease-out; }
      `}</style>
    </div>
  );
}
