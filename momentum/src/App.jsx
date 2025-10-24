// app.jsx

import styles from "./style";
// Ensure 'Careers' is imported from your component barrel file (index.js)
import {  Business, Footer, Navbar, Stats, Hero, Products, Services, Careers, Leadership } from "./component";

const App = () => (
  // 1. "overflow-hidden" has been REMOVED from this line
  <div className="bg-primary w-full"> 
    
    {/* 2. Added "bg-primary", "sticky", "top-0", and "z-50" to this wrapper div */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} sticky top-0 z-50`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* --- NO OTHER CHANGES BELOW THIS LINE --- */}

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        {/* <Business /> */}
        <Products />
        <Services />
        <Leadership/>
        <Careers /> 
        <Footer />
      </div>
    </div>
  </div>
);

export default App;