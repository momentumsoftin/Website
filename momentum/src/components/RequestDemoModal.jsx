import React, { useEffect } from "react";

const RequestDemoModal = ({ open, onClose }) => {
  // If modal closed, do not render
  if (!open) return null;

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Close modal only when clicking the backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
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
        <p className="text-gray-700 mb-6">
          Fill your details and we will reach out within 24 hours.
        </p>

        {/* FORM USING FORMSPREE */}
        <form
          action="https://formspree.io/f/xovglvvy"
          method="POST"
          className="space-y-4"
        >
          {/* Hidden fields for tracking and subject */}
          <input type="hidden" name="source" value="MomentumSoft Website Modal" />
          <input type="hidden" name="_subject" value="New Demo Request from MomentumSoft Website" />
          {/* Optional: redirect to a thank-you page after successful submit.
              Replace with your full URL if you want (e.g. https://momentumsoft.in/thank-you) */}
          <input type="hidden" name="_next" value="/thank-you" />

          {/* 🔥 Honeypot field to reduce spam */}
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
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            {/* IMPORTANT: _replyto tells Formspree which address is the sender,
                so your team notification will have Reply-To set to the user's email */}
            <input
              type="email"
              name="_replyto"
              required
              className="w-full border border-gray-300 rounded p-2"
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
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
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
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.25s ease-out; }
      `}</style>
    </div>
  );
};

export default RequestDemoModal;
