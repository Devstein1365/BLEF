import { FaShieldAlt, FaCheck, FaHandshake, FaGlobe } from "react-icons/fa";





const PILLARS = [
  {
    icon: FaShieldAlt,
    title: "Rigorous Compliance",
    description: "Full compliance with corporate governance guidelines, anti-money laundering policies, and non-profit regulatory statutes.",
  },
  {
    icon: FaCheck,
    title: "Audited Financials",
    description: "Annual independent financial audits published openly to guarantee absolute donor and stakeholder accountability.",
  },
  {
    icon: FaHandshake,
    title: "Transparent Grants",
    description: "Merit-based selection processes with zero political interference or bias in fund allocation.",
  },
  {
    icon: FaGlobe,
    title: "Global Standards",
    description: "Operating frameworks aligned with international philanthropic best practices and sustainable impact metrics.",
  },
];

const GovernanceImpact = () => {
  return (
    <section className="py-20 sm:py-28 bg-blef-cream border-t border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
              Accountability First
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight leading-tight">
              Governance & Institutional <span className="text-blef-green">Integrity</span>
            </h2>
            <p className="mt-4 text-base text-neutral-600 leading-relaxed">
              We recognize that public trust is our most valuable asset. Every naira entrusted to Better Life Foundation is rigorously tracked, audited, and deployed directly into community transformation.
            </p>

            <div className="mt-8">
              <a
                href="/impact"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-blef-green text-white font-bold text-sm hover:bg-blef-green-dark transition-all duration-200 shadow-md shadow-blef-green/20"
              >
                Download Annual Reports
              </a>
            </div>
          </div>

          {/* Right Column: 4 Pillars Grid */}
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