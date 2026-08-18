import { Link } from "react-router-dom";
import { FaChevronRight, FaShieldAlt, FaUsers, FaGlobeAfrica } from "react-icons/fa";

const QUICK_BADGES = [
  {
    icon: FaShieldAlt,
    title: "Audited Governance",
    subtitle: "Transparent operational standards",
  },
  {
    icon: FaUsers,
    title: "Grassroots Centric",
    subtitle: "Direct beneficiary intervention",
  },
  {
    icon: FaGlobeAfrica,
    title: "Pan-African Vision",
    subtitle: "Scalable socio-economic models",
  },
];

const AboutHero = () => {
  return (
    <section className="relative bg-blef-green-dark text-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background with subtle gradient & ambient lighting */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #14522A 0%, #1F7A3C 60%, #8a6a12 140%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blef-green-dark/80 via-blef-green-dark to-blef-green-dark" />

      {/* Decorative Glow Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blef-gold/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blef-green/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-white/70 mb-8">
          <Link to="/" className="hover:text-blef-gold-light transition-colors">
            Home
          </Link>
          <FaChevronRight size={9} className="text-white/40" />
          <span className="text-blef-gold-light">About Us</span>
        </nav>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Tagline */}
          <div className="lg:col-span-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-blef-gold-light text-xs font-bold uppercase tracking-widest border border-white/15">
              Who We Are
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Catalyzing Grassroots Potential into{" "}
              <span className="text-blef-gold-light">Sustainable Legacies</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed font-normal max-w-2xl">
              Better Life Foundation (BLEF) is a pan-African philanthropic institution dedicated to eliminating structural barriers for entrepreneurs, youth, and women through targeted capital, structured incubation, and institutional market access.
            </p>

            {/* Tagline Callout */}
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blef-gold animate-pulse" />
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 italic">
                Empowering People. Building Enterprises. Creating Legacies.
              </p>
            </div>
          </div>

          {/* Right Column: Quick Trust Badges */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {QUICK_BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-blef-gold/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-blef-green/30 border border-white/10 flex items-center justify-center text-blef-gold-light shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white tracking-wide">
                      {badge.title}
                    </h2>
                    <p className="text-xs text-white/70 mt-0.5 leading-normal">
                      {badge.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;