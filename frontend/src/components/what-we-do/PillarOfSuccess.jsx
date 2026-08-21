import { FaCogs, FaBullhorn, FaCoins, FaCheckCircle } from "react-icons/fa";

const PILLARS = [
  {
    icon: FaCogs,
    number: "01",
    title: "Strategy & Systems",
    subtitle: "Building the Foundation That Outlasts Season One",
    description:
      "Too many businesses fail not because the idea was weak, but because the foundation was never built. A hustle with no system to repeat what worked stalls. We equip founders with documented operational structures and pricing models that let the enterprise run without the founder holding every piece together.",
    deliverables: [
      "Documented workflows and operational standard operating procedures (SOPs)",
      "Pricing for profit & scalable business modeling",
      "Operational delegation and systems automation",
    ],
  },
  {
    icon: FaBullhorn,
    number: "02",
    title: "Marketing in the African Context",
    subtitle: "Customer Acquisition Beyond Guesswork",
    description:
      "A shop with no marketing plan cannot survive. We teach founders how to market on a limited budget, leverage culturally grounded communication, and build repeatable customer acquisition funnels that convert foot-traffic and digital followers into loyal buyers.",
    deliverables: [
      "Low-budget guerrilla and localized digital marketing",
      "Culturally relevant value proposition and brand messaging",
      "Customer retention and referral loops",
    ],
  },
  {
    icon: FaCoins,
    number: "03",
    title: "Financial Literacy & Cash Flow",
    subtitle: "From Survival to Investment-Readiness",
    description:
      "Separating business money from personal survival is the single hardest transition for first-generation founders. We train entrepreneurs on structured bookkeeping, working capital management, and financial governance to make them grant- and investor-ready.",
    deliverables: [
      "Daily bookkeeping, cash flow statements, and inventory control",
      "Working capital management and micro-credit preparation",
      "Seed funding readiness & investor pitch clinics",
    ],
  },
];

const PillarsOfSuccess = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
            Core Curriculum
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
            The Three Pillars of Business Success
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Our practical, solution-focused sessions target the exact areas where most African SMEs struggle and fail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative bg-neutral-50 rounded-3xl p-8 border border-neutral-200 hover:border-blef-green hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blef-green/10 text-blef-green flex items-center justify-center group-hover:bg-blef-green group-hover:text-white transition-colors duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="text-3xl font-extrabold text-neutral-200 group-hover:text-blef-gold transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-blef-green-dark block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-extrabold text-blef-charcoal mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-200">
                  <h4 className="text-xs font-bold text-blef-charcoal uppercase tracking-wider mb-3">
                    Key Competencies Built:
                  </h4>
                  <ul className="space-y-2.5">
                    {pillar.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 font-medium">
                        <FaCheckCircle className="text-blef-green shrink-0 mt-0.5" size={13} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsOfSuccess;