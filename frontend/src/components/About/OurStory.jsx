import {
  FaHistory,
  FaCheck,
  FaAward,
  FaChartPie,
  FaHandsHelping,
} from "react-icons/fa";

const MILESTONES = [
  {
    year: "Foundation Established",
    title: "The Catalytic Mandate",
    description:
      "BLEF was established to address the critical gaps in access to capital, mentorship, and structured capacity development for African grassroots entrepreneurs.",
  },
  {
    year: "Thematic Expansion",
    title: "7 Integrated Pillars",
    description:
      "Evolved from basic seed disbursements into 7 comprehensive focus areas encompassing STEM, women's empowerment, and sustainable market linkage.",
  },
  {
    year: "Nationwide Footprint",
    title: "Scaling Community Impact",
    description:
      "Deepened partnerships with civil society, private enterprises, and regional cooperatives to deliver audited interventions across 20+ states.",
  },
];

const IMPACT_POINTS = [
  "Institutional approach modeled on sustainable market integration",
  "Targeted seed funding delivered without predatory collateral hurdles",
  "Tailored incubation curricula built for local economic realities",
  "Continuous post-program monitoring, advisory, and market linkage",
];

const OurStory = () => {
  return (
    <section className="py-20 sm:py-28 bg-blef-cream relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Main 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
              Our Journey
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blef-charcoal tracking-tight leading-[1.18]">
              Born from a Conviction that{" "}
              <span className="text-blef-green">Grassroots Enterprise</span> Shapes Nations
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed">
              Across Africa, ambition is universally distributed, but institutional access to capital, structured mentorship, and viable markets remains scarce. Better Life Foundation was created to bridge this disparity.
            </p>

            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Rather than offering short-term relief, BLEF champions a venture-catalyst methodology: identifying high-potential innovators, women entrepreneurs, and young change-makers, then providing them with the systemic support required to build enterprises that create jobs and generate multi-generational prosperity.
            </p>

            {/* Core Pillars Bullet Checklist */}
            <div className="mt-8 space-y-3.5">
              {IMPACT_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blef-green text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <FaCheck size={9} />
                  </div>
                  <span className="text-sm sm:text-[0.94rem] font-medium text-blef-charcoal">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Institutional Timeline / Milestone Stack (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-xl relative">
              <div className="flex items-center gap-3 mb-8 pb-5 border-b border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-blef-gold/15 text-blef-gold flex items-center justify-center">
                  <FaHistory size={16} />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-blef-charcoal">
                    Institutional Evolution
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Milestones that shaped our operational model
                  </p>
                </div>
              </div>

              {/* Milestones Stack */}
              <div className="space-y-8 relative before:absolute before:top-3 before:bottom-3 before:left-[15px] before:w-0.5 before:bg-neutral-200">
                {MILESTONES.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-5 pl-1">
                    <div className="w-7 h-7 rounded-full bg-blef-green text-white flex items-center justify-center text-xs font-bold shrink-0 ring-4 ring-white z-10">
                      {idx + 1}
                    </div>
                    <div>
                      <span className="inline-block text-[0.72rem] font-bold text-blef-green-dark uppercase tracking-wider bg-blef-green/10 px-2 py-0.5 rounded-md mb-1">
                        {item.year}
                      </span>
                      <h4 className="text-sm font-bold text-blef-charcoal leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlight Badge */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-blef-charcoal">
                  <FaAward className="text-blef-gold" size={16} />
                  <span>Audited Non-Profit Governance</span>
                </div>
                <span className="text-[0.7rem] font-semibold text-blef-green bg-blef-green/10 px-2.5 py-1 rounded-full">
                  100% Impact Driven
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStory;