import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-primary text-white px-6">
      <div className="bg-black/20 border border-white/10 rounded-xl p-10 max-w-lg text-center shadow-lg">
        
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />

        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-dimWhite mb-6">
          Your demo request has been submitted successfully.  
          Our team will reach out to you within 24 hours.
        </p>

        <Link
          to="/"
          className="px-5 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-teal-600 transition"
        >
          Back to Home
        </Link>

        <p className="mt-6 text-sm text-gray-400">
          Need help? Email us at{" "}
          <a href="mailto:support@momentumsoft.in" className="underline">
            support@momentumsoft.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
