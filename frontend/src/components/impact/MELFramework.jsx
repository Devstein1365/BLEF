import { FaSearch, FaClipboardCheck, FaChartLine, FaSyncAlt } from "react-icons/fa";

const STEPS = [
  {
    icon: FaSearch,
    step: "01",
    title: "Needs Assessment & Baseline",
    desc: "Assessing baseline bookkeeping habits, pricing models, and cash flow structures prior to training onboarding.",
  },
  {
    icon: FaClipboardCheck,
    step: "02",
    title: "Practical Capacity Evaluation",
    desc: "Measuring practical competency acquisition across Strategy, Marketing in Context, and Finance.",
  },
  {
    icon: FaSyncAlt,
    step: "03",
    title: "Cohort Peer Accountability",
    desc: "Post-training tracking via peer accountability groups to monitor execution discipline and prevent drop-off.",
  },
  {
    icon: FaChartLine,
    step: "04",
    title: "Long-Term Legacy & Scaling",
    desc: "Tracking enterprise survival past year 5, job creation numbers, and generational transition readiness.",
  },
];

const MELFramework = () => {
  return (
    <section id="mel" className="py-20 sm:py-28 bg-neutral-50 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
              MEL Architecture
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
              Monitoring, Evaluation & Learning
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              We don’t just teach you to start, we teach you to last. Our MEL framework ensures every intervention is tracked for long-term survival, profitability, and generational community impact.
            </p>
          </div>

          <div className="lg:col-span-6 flex lg:justify-end">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm max-w-md">
              <span className="text-xs font-bold text-blef-gold uppercase tracking-wider block mb-1">
                Evaluation Rigor
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Supervised by the Secretariat Monitoring & Evaluation Directorate, ensuring data integrity across all programmatic clusters.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-neutral-200 hover:border-blef-green hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blef-green/10 text-blef-green flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                    <span className="text-xs font-extrabold text-neutral-300">
                      STEP {item.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-blef-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MELFramework;