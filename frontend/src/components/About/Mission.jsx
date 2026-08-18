import {
  FaBullseye,
  FaEye,
  FaShieldAlt,
  FaHandHoldingHeart,
  FaChartLine,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

const VALUES = [
  {
    icon: FaShieldAlt,
    title: "Integrity & Accountability",
    description:
      "We operate under rigorous governance standards, ensuring every grant, intervention, and partnership is transparent and auditable.",
  },
  {
    icon: FaChartLine,
    title: "Enterprise Excellence",
    description:
      "We believe handouts create dependency, while structured enterprise support builds durable, self-sustaining community wealth.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Radical Inclusivity",
    description:
      "Bridging economic divides by deliberately prioritizing women, marginalized youth, and underserved rural populations.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation & Agility",
    description:
      "Leveraging modern digital infrastructure, STEM tools, and adaptive methodologies to solve complex socio-economic challenges.",
  },
  {
    icon: FaUsers,
    title: "Shared Prosperity",
    description:
      "Measuring success not just by individual business growth, but by the generational impact created in local communities.",
  },
];

const MissionVisionValues = () => {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Lead */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
            Strategic Foundation
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
            Our Purpose, Vision & Core Values
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            The guiding principles driving our interventions, partnerships, and programmatic investments across Africa.
          </p>
        </div>

        {/* Mission & Vision Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="relative group bg-blef-cream rounded-3xl p-8 sm:p-10 border border-neutral-200 hover:border-blef-green transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-blef-green text-white flex items-center justify-center mb-6 shadow-md shadow-blef-green/20">
              <FaBullseye size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-blef-green-dark">
              Our Mission
            </span>
            <h3 className="text-2xl font-extrabold text-blef-charcoal mt-2 mb-4 leading-tight">
              Empowering People. Building Enterprises.
            </h3>
            <p className="text-neutral-700 leading-relaxed text-base">
              To drive inclusive socio-economic development across Nigeria and Africa by equipping grassroots innovators, youth, and women with seed capital, enterprise training, and direct market linkage to build resilient, long-lasting businesses.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative group bg-blef-green-dark rounded-3xl p-8 sm:p-10 text-white border border-blef-green-dark hover:border-blef-gold transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-blef-gold text-blef-charcoal flex items-center justify-center mb-6 shadow-md shadow-blef-gold/20">
              <FaEye size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-blef-gold-light">
              Our Vision
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-2 mb-4 leading-tight">
              Creating Legacies That Outlast Us
            </h3>
            <p className="text-white/85 leading-relaxed text-base">
              To be Africa’s foremost catalytic NGO, creating an economic ecosystem where every ambitious individual has the structural support, access, and opportunity to transform local potential into generational prosperity.
            </p>
          </div>

        </div>

        {/* Core Values Sub-grid */}
        <div className="pt-10 border-t border-neutral-100">
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl font-extrabold text-blef-charcoal tracking-tight">
              The Values That Anchor Our Work
            </h3>
            <p className="text-sm text-neutral-500 mt-1">
              Non-negotiable institutional standards across every programme and engagement
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-blef-gold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-blef-green/10 text-blef-green flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <h4 className="text-base font-bold text-blef-charcoal mb-2">
                    {val.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}

            {/* Accent Card filling the 6th slot */}
            <div className="bg-gradient-to-br from-blef-green to-blef-green-dark rounded-2xl p-6 text-white flex flex-col justify-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blef-gold-light mb-2">
                Our Commitment
              </span>
              <p className="text-sm leading-relaxed text-white/90 font-medium">
                100% focused on sustainable, scalable outcomes that create independent wealth creators, not perpetual dependents.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVisionValues;