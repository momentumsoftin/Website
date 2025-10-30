import React from 'react';
import styles from "./style";
import { Footer, Navbar } from "./component"; // Only import shared components
import { Routes, Route } from "react-router-dom"; // Import the router

// Import your new pages
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";


const App = () => (
  <div className="bg-primary w-full"> 
    
    {/* 1. NAVBAR (Always visible) */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} sticky top-0 z-50`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* 2. DYNAMIC PAGE CONTENT */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      {/* Add other routes here, e.g., <Route path="/careers" element={<CareersPage />} /> */}
    </Routes>
    
    {/* 3. FOOTER (Always visible) */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;