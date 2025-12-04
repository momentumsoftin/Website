import React, { useEffect, useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xovglvvy";

const RequestDemoModal = ({ open, onClose }) => {
  // hooks MUST run unconditionally (always at the top)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect still declared unconditionally, but it only attaches listeners when `open` is true
  useEffect(() => {
    if (!open) return; // do nothing when modal is closed

    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  // If modal closed, do not render - this early return is fine because hooks already ran above
  if (!open) return null;

  // Close modal only when clicking the backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Client-side submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const form = e.target;
    const formData = new FormData(form);

    // Honeypot check (if filled by bot, abort)
    if (formData.get("_gotcha")) {
      setError("Spam detected.");
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
        // redirect client-side (you can change to react-router navigate if preferred)
        window.location.href = "/thank-you";
      } else {
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
          aria-label="Close dialog"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Request a Demo</h2>
        <p className="text-gray-700 mb-4">
          Fill your details and we will reach out within 24 hours.
        </p>

        {/* Display error if any */}
        {error && (
          <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-100 p-2 rounded">
            {error}
          </div>
        )}

        {/* Client-side form */}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Hidden fields */}
          <input type="hidden" name="source" value="MomentumSoft Website Modal" />
          <input
            type="hidden"
            name="_subject"
            value="New Demo Request from MomentumSoft Website"
          />

          {/* Honeypot anti-spam */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          <div>
            <label className="block text-sm text-gray-700 mb-1">Name</label>
            <input
              name="name"
              required
              className="w-full border border-gray-300 rounded p-2"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="_replyto"
              required
              className="w-full border border-gray-300 rounded p-2"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Company / Notes
            </label>
            <textarea
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded p-2"
              disabled={loading}
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.18s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.22s ease-out; }
      `}</style>
    </div>
  );
};

export default RequestDemoModal;
