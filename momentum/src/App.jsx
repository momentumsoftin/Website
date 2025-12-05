import React, { Suspense } from 'react';
import styles from "./style";
import { Footer, Navbar } from "./components";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";

// 🔥 Lazy-load the consent banner (A2)
const SiteConsentBanner = React.lazy(() =>
  import("./components/SiteConsentBanner")
);

const App = () => (
  <div className="bg-primary w-full">

    {/* NAVBAR (Always visible) */}
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
    </Routes>

    {/* 🔥 Lazy-loaded Banner */}
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

export default App;
