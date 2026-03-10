// src/pages/HomePage.jsx
import React from 'react';
import styles from "../style"; // Note: path is now ../
import { Business, Footer, Navbar, Stats, Hero, BizCon, BizConFeatures, Products, Services, Careers, Leadership } from "../components"; // Note: path is now ../

const HomePage = () => (
  <>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <BizCon />
        <BizConFeatures />
        <Business />
        <Products />
        <Services />
        <Leadership />
        <Careers />
        {/* Footer is now in App.jsx */}
      </div>
    </div>
  </>
);

export default HomePage;
