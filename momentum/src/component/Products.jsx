// In src/components/Products.jsx

import { products } from "../constants";
import styles from "../style";

// Reusable FeatureCard component
const FeatureCard = ({ icon, title, content }) => (
  <div className="flex flex-row p-6 rounded-[20px] feature-card">
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

// Main Products component
const Products = () => (
  <section id="products" className={`${styles.paddingY} flex-col relative`}>
    {/* Centered Heading */}
    <div className="w-full flex justify-center items-center flex-col text-center mb-12">
      <h2 className={styles.heading2}>Our Products</h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
        Explore our suite of tools designed to streamline your business operations and drive growth.
      </p>
    </div>

    {/* Two-Column Layout for Products */}
    <div className="w-full flex md:flex-row flex-col justify-center gap-8">
      
      {/* Left Column */}
      <div className="flex-1 flex flex-col gap-6">
        {products.slice(0, 3).map((product) => (
          <FeatureCard key={product.id} {...product} />
        ))}
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col gap-6">
        {products.slice(3, 6).map((product) => (
          <FeatureCard key={product.id} {...product} />
        ))}
      </div>

    </div>
  </section>
);

export default Products;