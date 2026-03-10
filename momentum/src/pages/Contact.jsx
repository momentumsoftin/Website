import React from "react";

export default function Contact() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto bg-neutral-900 p-8 rounded shadow-lg border border-neutral-800">
        <h1 className="text-2xl font-semibold mb-4 text-white">Request Demo</h1>
        <p className="mb-4 text-gray-300">Fill this form and we'll get back to you.</p>

        <form
          action="mailto:support@momentumsoft.in"
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              name="name"
              className="w-full rounded p-2 bg-neutral-800 text-white placeholder-gray-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full rounded p-2 bg-neutral-800 text-white placeholder-gray-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@company.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Company / Notes</label>
            <textarea
              name="notes"
              rows="6"
              className="w-full rounded p-3 bg-neutral-800 text-white placeholder-gray-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your use case..."
            />
          </div>

          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded shadow"
            >
              Submit Mail
            </button>
            <button
                type="button"
                onClick={() => window.history.back()}
                className="ml-4 px-4 py-2 bg-neutral-700 text-white rounded shadow"
                >
                Cancel
            </button>

          </div>
        </form>

        <p className="mt-4 text-sm text-gray-400">
          Or email us at{" "}
          <a href="mailto:support@momentumsoft.in" className="underline">
            support@momentumsoft.in
          </a>
        </p>
      </div>
    </section>
  );
}
