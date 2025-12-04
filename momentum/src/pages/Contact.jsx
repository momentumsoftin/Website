import React from "react";

export default function Contact() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white/5 p-8 rounded">
        <h1 className="text-2xl font-semibold mb-4">Request Demo</h1>
        <p className="mb-4">Fill this form and we'll get back to you.</p>

        <form action="mailto:hello@momentumsoft.in" method="POST" encType="text/plain" className="space-y-4">
          <div>
            <label className="block text-sm">Name</label>
            <input name="name" className="w-full rounded p-2 bg-black/10" required />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input name="email" type="email" className="w-full rounded p-2 bg-black/10" required />
          </div>
          <div>
            <label className="block text-sm">Company / Notes</label>
            <textarea name="notes" rows="4" className="w-full rounded p-2 bg-black/10" />
          </div>
          <div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Submit (mailto)
            </button>
          </div>
        </form>

        <p className="mt-4 text-sm text-gray-400">Or email us at <a href="mailto:support@momentumsoft.in" className="underline">support@momentumsoft.in</a></p>
      </div>
    </section>
  );
}
