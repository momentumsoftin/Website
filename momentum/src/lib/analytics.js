// src/lib/analytics.js
const GA_ID = "G-PT1X5X528M"; // later set in Vercel/Netlify/Cloudflare env

function loadGtagScript() {
  if (!GA_ID) return Promise.reject(new Error("VITE_GA_ID not set"));

  // don't load twice
  if (window.dataLayer && window.gtag) return Promise.resolve();

  return new Promise((resolve, reject) => {
    try {
      // load script tag
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      s.onload = () => {
        // initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = window.gtag || gtag;
        window.gtag("js", new Date());
        window.gtag("config", GA_ID, { send_page_view: true });
        resolve();
      };
      s.onerror = (e) => reject(new Error("Failed to load gtag script"));
      document.head.appendChild(s);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Public: initialize analytics (returns a promise)
 */
export function initAnalytics() {
  return loadGtagScript().catch((err) => {
    // swallow errors in production but log during dev
    if (import.meta.env.DEV) console.error("Analytics init failed:", err);
  });
}

/**
 * Helper to send event (no-op if gtag missing)
 */
export function sendEvent(name, params = {}) {
  try {
    if (window.gtag) {
      window.gtag("event", name, params);
    } else {
      // optionally buffer or ignore
      if (import.meta.env.DEV) console.debug("gtag not initialized, event skipped:", name, params);
    }
  } catch (e) {
    if (import.meta.env.DEV) console.error(e);
  }
}
