// In src/component/Services.jsx

import { services } from "../constants";
import styles from "../style";

// FeatureCard component defined locally inside this file
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


const Services = () => (
  <section id="services" className={`${styles.paddingY} flex-col relative`}>
    {/* Centered Heading */}
    <div className="w-full flex justify-center items-center flex-col text-center mb-12">
      <h2 className={styles.heading2}>Our Services</h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
        We offer a comprehensive suite of services to build, test, and maintain your software, ensuring success at every stage.
      </p>
    </div>

    {/* Two-Column Layout for Services */}
    <div className="w-full flex md:flex-row flex-col justify-center gap-8">
      
      {/* Left Column (4 items) */}
      <div className="flex-1 flex flex-col gap-6">
        {services.slice(0, 4).map((service) => (
          <FeatureCard key={service.id} {...service} />
        ))}
      </div>

      {/* Right Column (3 items) */}
      <div className="flex-1 flex flex-col gap-6">
        {services.slice(4, 7).map((service) => (
          <FeatureCard key={service.id} {...service} />
        ))}
      </div>

    </div>
  </section>
);

export default Services;
