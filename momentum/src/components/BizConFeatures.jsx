import { bizcon_hub, bizcon_growth, bizcon_actuals, feature_visit_entry, feature_payment, feature_visit_dashboard, feature_analytics, shield } from "../assets";
import styles, { layout } from "../style";

const FeatureCard = ({ title, content, img, index, imgStyles }) => (
    <div className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} ${styles.paddingY} gap-10 items-center`}>
        <div className={`flex-1 flex flex-col justify-center`}>
            <h3 className={styles.heading2}>
                {title}
            </h3>
            <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
                {content}
            </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={img} alt="billing" className={`${imgStyles || "w-[50%] h-[auto]"} relative z-[5] object-contain drop-shadow-2xl`} />
            {/* Pink gradient specific for this section */}
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </div>
    </div>
);

const BizConFeatures = () => {
    const features = [
        {
            title: "Field Connect",
            content: "Empower your Sales Focals to log visits and outcomes (Suspect, Prospect, End User) with GPS-verified locations. View details on a Google Map integrated dashboard. Critical offline capability ensures data is captured even in remote areas.",
            img: feature_visit_dashboard // or feature_visit_entry
        },
        {
            title: "GrowthLens",
            content: "Goal setting at Firm and SKU levels. Teams can track real-time achievement against goals, submit actuals via invoices, and lookup SKU prices/margins instantly during visits. Bridges the gap between targets and reality.",
            img: bizcon_growth
        },
        {
            title: "ExpenseEase",
            content: "Mobile-first reimbursement solution linked directly to Field Connect. Auto-validate claims against logged visits. Managers can verify, and Finance can approve payments online - streamlining the entire cycle.",
            img: feature_payment
        },
        {
            title: "Report & Analytics",
            content: "Deep dive into metrics against firms, SKUs, and invoices. Design data-driven plans for improvement and growth. Upcoming: Log Collections to validate pending invoices and focus recovery efforts.",
            img: feature_analytics,
            imgStyles: "w-[50%] h-[auto] [clip-path:inset(15%_0_15%_0)]"
        },
        {
            title: "Enterprise Grade Security",
            content: "Your data is protected by industry-standard encryption and strict role-based access controls. Our architecture ensures complete data isolation and secure offline storage.",
            img: shield,
            imgStyles: "w-[50%] h-[auto]"
        }
    ];

    return (
        <section id="features" className={`flex flex-col`}>
            {features.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} {...feature} index={index} />
            ))}
        </section>
    );
};

export default BizConFeatures;
