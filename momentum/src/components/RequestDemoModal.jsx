import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendEvent } from "../lib/analytics"; // safe no-op if analytics not initialized

// Your Formspree endpoint
const FORM_ENDPOINT = "https://formspree.io/f/xovglvvy";

const RequestDemoModal = ({ open, onClose }) => {
  // Hooks must be declared unconditionally
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Track modal opened for analytics (fire once when it becomes open)
  useEffect(() => {
    if (open) {
      try {
        sendEvent("demo_opened", { method: "modal" });
      } catch (e) {
        if (import.meta.env.DEV) console.error("sendEvent failed:", e);
      }
    }
  }, [open]);

  // Close on ESC when open
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  // If not open, don't render (hooks have already run)
  if (!open) return null;

  // Click backdrop to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Client-side submit to Formspree (prevents Formspree server redirect errors)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const form = e.target;
    const formData = new FormData(form);

    // Honeypot: abort if spider filled it
    if (formData.get("_gotcha")) {
      setError("Spam detection triggered.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        // Fire analytics event (safe no-op if not initialized)
        try {
          sendEvent("demo_submitted", { method: "formspree" });
        } catch (err) {
          if (import.meta.env.DEV) console.error("sendEvent error:", err);
        }

        // Close modal (optional) and navigate client-side to thank-you page
        onClose();
        navigate("/thank-you");
      } else {
        // parse JSON error if present
        const data = await res.json().catch(() => null);
        const message =
          (data && data.error) ||
          `Submission failed (status ${res.status}). Please try again.`;
        setError(message);
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[1000] px-4 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Request a Demo</h2>
        <p className="text-gray-700 mb-4">
          Fill your details and we will reach out within 24 hours.
        </p>

        {/* error */}
        {error && (
          <div className="mb-3 text-sm text-red-700 bg-red-50 border border-red-100 p-2 rounded">
            {error}
          </div>
        )}

        {/* Client-side form */}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Hidden fields */}
          <input type="hidden" name="source" value="MomentumSoft Website Modal" />
          <input type="hidden" name="_subject" value="New Demo Request from MomentumSoft Website" />

          {/* Honeypot anti-spam */}
          <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

          <div>
            <label className="block text-sm text-gray-700 mb-1">Name</label>
            <input name="name" required className="w-full border border-gray-300 rounded p-2" disabled={loading} />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input type="email" name="_replyto" required className="w-full border border-gray-300 rounded p-2" disabled={loading} />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Company / Notes</label>
            <textarea name="message" rows="4" className="w-full border border-gray-300 rounded p-2" disabled={loading}></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300" disabled={loading}>
              Cancel
            </button>

            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* Inline animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95) } to { opacity: 1; transform: scale(1) } }
        .animate-fadeIn { animation: fadeIn 0.18s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.22s ease-out; }
      `}</style>
    </div>
  );
};

export default RequestDemoModal;
