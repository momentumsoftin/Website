import { useState, useEffect } from "react";

export default function SiteConsentBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("ms_cookie")) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white p-4 shadow-lg rounded z-50">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="text-sm">
          We use cookies to improve site experience. By continuing, you accept our cookies.
          <a href="/privacy" className="underline ml-2">Privacy</a>
        </div>
        <div>
          <button
            onClick={() => {
              localStorage.setItem("ms_cookie", "1");
              setShow(false);
            }}
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
