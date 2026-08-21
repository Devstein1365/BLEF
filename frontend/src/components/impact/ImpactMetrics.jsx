import { FaChartBar, FaUsers, FaGraduationCap, FaSeedling } from "react-icons/fa";

const METRICS = [
  {
    icon: FaUsers,
    stat: "5,000+",
    label: "Entrepreneurs Reached",
    subtext: "Reached directly and indirectly within the first year of operations across Nigeria.",
  },
  {
    icon: FaChartBar,
    stat: "20+",
    label: "Signups Per 100 Outreach",
    subtext: "High conversion reflecting strong market demand for localized business education.",
  },
  {
    icon: FaGraduationCap,
    stat: "100%",
    label: "Free Foundational Training",
    subtext: "Funded via strategic development partnerships to ensure zero cost barrier.",
  },
  {
    icon: FaSeedling,
    stat: "7",
    label: "Thematic Focus Areas",
    subtext: "Interconnected pillars driving long-term enterprise sustainability and legacy.",
  },
];

const ImpactMetrics = () => {
  return (
    <section className="py-20 bg-white border-b border-neutral-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
            Audited Performance
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
            Our Impact in Numbers
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            BLEF has been validated as a high-potential initiative reflecting a strong, socially impactful concept grounded in real market need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-blef-cream rounded-2xl p-7 border border-neutral-200 hover:border-blef-green hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blef-green text-white flex items-center justify-center mb-6 shadow-md shadow-blef-green/20">
                  <Icon size={20} />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-blef-charcoal mb-1">
                  {item.stat}
                </div>
                <h3 className="text-sm font-bold text-blef-green-dark uppercase tracking-wider mb-2">
                  {item.label}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;