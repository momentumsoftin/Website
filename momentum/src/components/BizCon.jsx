import { bizcon_mockup } from "../assets";
import styles, { layout } from "../style";

const BizCon = () => (
    <section id="bizcon" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Empower Your Field Force <br className="sm:block hidden" />
                <span className="text-gradient">Even Without Internet</span>
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                BizCon is the Offline-First CRM designed for the realities of field sales.
                Eliminate signal anxiety with seamless offline data sync, intelligent route planning,
                and automated expense reimbursements.
            </p>

            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                    <h4 className="font-poppins font-semibold text-[18px] leading-[27px] text-white">
                        Offline First
                    </h4>
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                        Works perfectly in no-network zones.
                    </p>
                </div>
                <div className="flex flex-col ss:my-0 my-4 min-w-[150px] sm:ml-10 ml-0">
                    <h4 className="font-poppins font-semibold text-[18px] leading-[27px] text-white">
                        Smart Planning
                    </h4>
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                        Optimize routes & beat plans.
                    </p>
                </div>
            </div>

            <a href="https://play.google.com/store/apps/details?id=com.momentumsoft.sales" target="_blank" rel="noopener noreferrer" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] mt-10 hover:scale-105 transition-transform inline-block`}>
                Download BizCon
            </a>
        </div>

        <div className={layout.sectionImg}>
            <img src={bizcon_mockup} alt="bizcon-app" className="w-[100%] h-[100%] rounded-[20px] shadow-lg border border-gray-700" />
        </div>
    </section>
);

export default BizCon;
