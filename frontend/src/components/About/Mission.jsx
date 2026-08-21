import {
  FaBullseye,
  FaEye,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaSeedling,
  FaAward,
} from "react-icons/fa";

const OBJECTIVES = [
  {
    icon: FaChartLine,
    title: "Practical Business Education",
    description: "Delivering free training covering Strategy & Systems, Marketing, and Finance for first-generation founders.",
  },
  {
    icon: FaUsers,
    title: "Youth & Women's Empowerment",
    description: "Creating accessible pathways into entrepreneurship and scalable business growth across Africa.",
  },
  {
    icon: FaBullseye,
    title: "Finance & Market Linkage",
    description: "Connecting entrepreneurs to funding, investors, and viable commercial markets for their goods and services.",
  },
  {
    icon: FaShieldAlt,
    title: "Peer Accountability Groups",
    description: "Building supportive community cohorts that keep entrepreneurs growing long after formal sessions end.",
  },
  {
    icon: FaLightbulb,
    title: "STEM & Innovation",
    description: "Deploying digital tools and innovation methodologies to solve real enterprise and community bottlenecks.",
  },
  {
    icon: FaSeedling,
    title: "Generational Legacy",
    description: "Fostering businesses built to outlast their founders and create lasting economic security for communities.",
  },
];

const MissionVisionValues = () => {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Lead */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
            Institutional Blueprint
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
            Our Vision, Mission & Objectives
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Where you start should never determine where you can go. We exist to bridge Africa's entrepreneurial knowledge and access gap.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="bg-blef-green-dark rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blef-gold text-blef-charcoal flex items-center justify-center mb-6 shadow-md shadow-blef-gold/20">
                <FaEye size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-blef-gold-light">
                Our Vision
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-2 mb-4 leading-tight">
                Generational Enterprises Driving Inclusive Growth
              </h3>
              <p className="text-white/85 leading-relaxed text-base">
                To build a generation of empowered first-generation entrepreneurs and SMEs across Africa whose enterprises drive inclusive growth and lasting legacies in their communities.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-blef-cream rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blef-green text-white flex items-center justify-center mb-6 shadow-md shadow-blef-green/20">
                <FaBullseye size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-blef-green-dark">
                Our Mission
              </span>
              <h3 className="text-2xl font-extrabold text-blef-charcoal mt-2 mb-4 leading-tight">
                Practical Skills, Finance & Innovation
              </h3>
              <p className="text-neutral-700 leading-relaxed text-base">
                We equip people—especially youth and women—with the practical skills, access to finance, and innovation tools needed to start, grow, and sustain successful businesses, while championing inclusive and socially impactful entrepreneurship across Africa.
              </p>
            </div>
          </div>
        </div>

        {/* Color Philosophy Banner */}
        <div className="bg-gradient-to-r from-blef-green-dark via-blef-green to-blef-gold/90 rounded-3xl p-8 sm:p-10 text-white mb-16 shadow-lg">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blef-gold-light">
              Brand Philosophy
            </span>
            <h3 className="text-2xl font-extrabold mt-2 mb-4">
              Our Colours: Grass Green & Gold
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-white/90 leading-relaxed">
              <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 font-bold text-white mb-2">
                  <FaSeedling className="text-blef-gold-light" />
                  <span>Grass Green (Growth & Grassroots)</span>
                </div>
                Represents renewal and the small seed of ambition planted in a market stall, spare bedroom, or side hustle—the fertile ground every entrepreneur starts from.
              </div>
              <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 font-bold text-white mb-2">
                  <FaAward className="text-blef-gold-light" />
                  <span>Gold (Excellence & Legacy)</span>
                </div>
                Represents financial and generational wealth, the reward for resilience, and the gold standard of excellence we hold our training and community to.
              </div>
            </div>
          </div>
        </div>

        {/* Actionable Objectives */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-extrabold text-blef-charcoal">
              Our Strategic Objectives
            </h3>
            <p className="text-sm text-neutral-500 mt-1">
              Turning ambition into enterprise, and enterprise into legacy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OBJECTIVES.map((obj, idx) => {
              const Icon = obj.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-blef-green hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-blef-green/10 text-blef-green flex items-center justify-center mb-4">
                    <Icon size={16} />
                  </div>
                  <h4 className="text-base font-bold text-blef-charcoal mb-2">
                    {obj.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {obj.description}
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

export default MissionVisionValues;