import { FaShieldAlt, FaChartPie, FaHandshake, FaBullhorn } from "react-icons/fa";

const PILLARS = [
  {
    icon: FaChartPie,
    title: "Strategy & Systems",
    description: "Eliminating guesswork by helping founders implement documented workflows, operations, and scalable structures.",
  },
  {
    icon: FaBullhorn,
    title: "Marketing in Context",
    description: "Customer acquisition and sales techniques grounded in the operational realities of African commerce.",
  },
  {
    icon: FaShieldAlt,
    title: "Financial Literacy & Cash Flow",
    description: "Bookkeeping, cash flow management, pricing for profit, and preparing founders for investment and seed grants.",
  },
  {
    icon: FaHandshake,
    title: "Legal & Regulatory Compliance",
    description: "Guidance on business formalization, intellectual property, and governance led by our Secretariat Legal Directorate.",
  },
];

const GovernanceImpact = () => {
  return (
    <section className="py-20 sm:py-28 bg-blef-cream border-t border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
              Core Framework
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight leading-tight">
              The Three Pillars of <span className="text-blef-green">Business Success</span>
            </h2>
            <p className="mt-4 text-base text-neutral-600 leading-relaxed">
              Most African SMEs fail not because the business idea was weak, but because the foundation was never built. BLEF equips entrepreneurs with the precise structural competencies needed to survive year one and scale past year five.
            </p>

            <div className="mt-8">
              <a
                href="/get-involved"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-blef-green text-white font-bold text-sm hover:bg-blef-green-dark transition-all duration-200 shadow-md shadow-blef-green/20"
              >
                Partner With Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PILLARS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blef-green/10 text-blef-green flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-blef-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GovernanceImpact;