import React, { Suspense, useEffect } from "react";
import styles from "./style";
import { Footer, Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { initAnalytics } from "./lib/analytics";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";


// Pages
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";

// 🔥 Lazy-load the consent banner
const SiteConsentBanner = React.lazy(() =>
  import("./components/SiteConsentBanner")
);

const App = () => {

  // Initialize analytics immediately for returning visitors
  useEffect(() => {
    if (localStorage.getItem("ms_consent_v1")) {
      initAnalytics();
    }
  }, []);

  return (
    <div className="bg-primary w-full">

      {/* NAVBAR */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} sticky top-0 z-50`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* PAGE CONTENT */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />


      </Routes>

      {/* CONSENT BANNER */}
      <Suspense fallback={null}>
        <SiteConsentBanner />
      </Suspense>

      {/* FOOTER */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

    </div>
  );
};

export default App;
