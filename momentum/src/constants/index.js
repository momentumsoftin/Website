import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance,
coinbase, dropbox, send, shield, star, iconCustomSoftware,
  iconWebApp,
  iconMobileApp,
  iconQaTesting,
  iconConsulting,
  iconMaintenance,
  iconResponsive,yogesh} from "../assets";
import { BsBoxes, BsBriefcaseFill } from 'react-icons/bs';
import { FaUserFriends, FaMoneyBillWave } from 'react-icons/fa';
import { MdOutlineReceiptLong, MdOutlineQueryStats } from 'react-icons/md';

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "products",
    title: "Products",
  },
  {
    id: "services",
    title: "Services",
  },
  
  {
    id: "careers",
    title: "Careers",
  },
  {
    id : "Leadership",
    title: "Leadership",
  }
];
export const services = [
  {
    id: "service-1",
    icon: iconCustomSoftware, // Replaced
    title: "Custom Software Development",
    content: "We build tailored software solutions to meet your specific business needs and objectives.",
  },
  {
    id: "service-2",
    icon: iconWebApp, // Replaced
    title: "Web Application Development",
    content: "Creating dynamic, responsive, and scalable web applications for a seamless user experience.",
  },
  {
    id: "service-3",
    icon: iconMobileApp, // Replaced
    title: "Mobile Application Development",
    content: "Developing high-performance native and cross-platform mobile apps for iOS and Android.",
  },
  {
    id: "service-4",
    icon: iconQaTesting, // Replaced
    title: "Q/A Testing",
    content: "Rigorous quality assurance and testing to ensure your software is bug-free and reliable.",
  },
  {
    id: "service-5",
    icon: iconConsulting, // Replaced
    title: "Technology Consulting",
    content: "Our experts provide strategic guidance to help you leverage the right technology for your goals.",
  },
  {
    id: "service-6",
    icon: iconMaintenance, // Replaced
    title: "Maintenance & Support",
    content: "Ongoing support and maintenance to ensure your applications are always running smoothly.",
  },
  {
    id: "service-7",
    icon: iconResponsive, // Replaced
    title: "Responsive Web Development",
    content: "Building websites that deliver a perfect user experience on any device, from desktop to mobile.",
  },
];
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Powerful Dashboards",
    content:
      "Visualize your KPIs, track targets, and identify trends with our clean, easy-to-understand dashboards.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Secure & Reliable",
    content:
      "We take proactive steps to ensure your sensitive sales data is secure, encrypted, and always available.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Automated Reporting",
    content:
      "Save hours every week. Schedule and automate reports to be sent directly to your team and stakeholders.",
  },
];
export const leadershipTeam = [
  
  {
    name: 'Mr. Devesh Pradhan',
    title: 'Chief Operating Officer, AutoNexHub',
    imageUrl: yogesh ,
    bio: '',
    imagePosition: 'right',
  },
  {
    name: 'Mr. Yogesh Pradhan',
    title: 'Chief Operating Officer,MomentumSoft',
    imageUrl: yogesh ,
    bio: 'Mr. Yogesh Pradhan is a seasoned professional with 25+ years of experience in business development, sales, and marketing across automotive, electronics, and petroleum industries. With a proven track record in product management, P&L management, and strategic channel planning, he has held key roles at Tata Green Batteries, Reliance Industries, Bajaj Electricals Ltd, and Luminous Electronics. His leadership and strategic vision will be invaluable to our growth journey.',
    imagePosition: 'right',
  },
];
export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Actionable Insights",
    value: "",
  },
  {
    id: "stats-2",
    title: "Automated Reporting",
    value: "",
  },
  {
    id: "stats-3",
    title: "Team Collaboration",
    value: "",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
export const roles = [
  {
    icon: "Palette",
    title: "UX Designer",
    exp: "3+ Years Experience",
    desc: "We’re seeking a UX Designer who can transform complex ideas into simple, delightful experiences for mobile and web apps.You’ll work with developers, product owners, and creative teams to build seamless digital journeys.",
    points: [
      "Conduct user research and create wireframes, prototypes, and final UI designs.",
      "Collaborate with developers to ensure design accuracy and usability.",
      "Maintain consistency through design systems and accessibility standards.",
      "Proficiency in Figma, Sketch, or Adobe XD is a must.",
    ],
  },
  {
    icon: "Cpu",
    title: "Python Developer",
    exp: "2–4 Years Experience",
    desc: "Join our backend team to design, develop, and maintain Python-based applications and APIs. You’ll build scalable, secure systems that power our products and client solutions.",
    points: [
      "Hands-on experience with Django, Flask, or FastAPI.",
      "Write efficient, testable, and reusable code.",
      "Work with RESTful APIs, databases, and cloud environments.",
      "Collaborate with designers and PMs to deliver product features.",
    ],
  },
  {
    icon: "Rocket",
    title: "AI Developer",
    exp: "2-4 Years Experience",
    desc: "We're expanding our innovation wing — looking for an AI Developer passionate about transforming ideas into intelligent, data-driven products. You’ll develop smart systems that enhance business outcomes and user experiences.",
    points: [
      "Develop and deploy AI/ML models for real-world applications.",
      "Experience with Python ML libraries (TensorFlow, PyTorch, scikit-learn).",
      "Work with cross-functional teams to integrate AI features into apps.",
      "Strong understanding of data preprocessing and model optimization.",
    ],
    marketing: "Be part of MomentumSoft's future-forward AI team — where creativity meets intelligence.",
  },
];
export const products = [
  {
    id: "product-1",
    icon: BsBoxes, // Was: star
    title: "Inventory management",
    content: "Streamline your stock, track inventory, and manage orders with ease.",
  },
  {
    id: "product-2",
    icon: BsBriefcaseFill, // Was: shield (or check)
    title: "Virtual HR",
    content: "A comprehensive solution for managing your workforce and HR processes.",
  },
  {
    id: "product-3",
    icon: FaUserFriends, // Was: send
    title: "Customer connect",
    content: "Build stronger customer relationships with our integrated CRM tools.",
  },
  {
    id: "product-4",
    icon: MdOutlineReceiptLong, // Was: star
    title: "Automated travel expenses",
    content: "Simplify expense reporting and reimbursement for your entire team.",
  },
  {
    id: "product-5",
    icon: MdOutlineQueryStats, // Was: shield (or check)
    title: "AI based performance appraisal",
    content: "Leverage AI to conduct fair, insightful, and efficient performance reviews.",
  },
  {
    id: "product-6",
    icon: FaMoneyBillWave, // Was: send
    title: "Payroll management",
    content: "Ensure accurate and timely payroll processing every single time.",
  },
];