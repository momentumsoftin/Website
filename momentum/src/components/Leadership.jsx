import React from 'react';
import { leadershipTeam } from "/src/constants/index.js";
import styles from "/src/style.js";

const LeaderProfile = ({ name, title, imageUrl, bio, imagePosition }) => {
  const containerClasses = `flex w-full flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 ${
    imagePosition === 'right' ? 'md:flex-row-reverse' : ''
  }`;

  return (
    <div className={containerClasses}>
      <div className="flex-shrink-0">
        <img
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-lg object-cover"
          src={imageUrl}
          alt={`Profile of ${name}`}
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/250/0B0A0E/FFFFFF?text=Image'; }}
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="font-poppins font-semibold text-white text-[28px] leading-[38px]">{name}</h3>
        <p className="font-poppins font-semibold text-cyan-400 mt-1 mb-3 text-[18px]">{title}</p>
        <p className={`${styles.paragraph}`}>{bio}</p>
      </div>
    </div>
  );
};

const Leadership = () => {
  return (
    // The "overflow-hidden" class is added here to contain the gradient
    <section id="Leadership" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative overflow-hidden`}>
        <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="w-full flex justify-center items-center flex-col text-center sm:mb-16 mb-6 relative z-[1]">
            <h2 className={styles.heading2}>Meet Our Leadership</h2>
            <div className="w-full md:mt-6 mt-6">
                <p className={`${styles.paragraph} max-w-[550px] mx-auto`}>
                    Driving our success with a wealth of experience and a clear vision for the future.
                </p>
            </div>
        </div>

        <div className="flex flex-col w-full space-y-16 relative z-[1]">
            {leadershipTeam.map((leader) => (
                <LeaderProfile
                    key={leader.name}
                    {...leader}
                />
            ))}
        </div>
    </section>
  );
};

export default Leadership;

