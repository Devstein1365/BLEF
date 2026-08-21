import { Link } from "react-router-dom";
import { FaChevronRight, FaChartLine, FaCheckCircle, FaFileDownload } from "react-icons/fa";

const ImpactHero = () => {
  return (
    <section className="relative bg-blef-green-dark text-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #14522A 0%, #1F7A3C 60%, #8a6a12 140%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blef-green-dark/80 via-blef-green-dark to-blef-green-dark" />

      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blef-gold/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blef-green/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-white/70 mb-8">
          <Link to="/" className="hover:text-blef-gold-light transition-colors">
            Home
          </Link>
          <FaChevronRight size={9} className="text-white/40" />
          <span className="text-blef-gold-light">Impact & Reports</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-blef-gold-light text-xs font-bold uppercase tracking-widest border border-white/15">
              Evidence-Based Transformation
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Measuring Impact, <span className="text-blef-gold-light">Building Legacies</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-normal max-w-2xl">
              We measure our success not only by the businesses we help build, but by how many of them belong to people the system had already written off. Explore our audited metrics, field evaluation frameworks, and research reports.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#reports"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blef-gold text-blef-charcoal font-bold text-sm hover:bg-blef-gold-light transition shadow-lg"
              >
                <FaFileDownload size={13} />
                <span>Download Impact Publications</span>
              </a>
              <a
                href="#mel"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-bold text-sm hover:bg-white hover:text-blef-green-dark transition"
              >
                <span>MEL Framework</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            {[
              {
                icon: FaChartLine,
                title: "5,000+ Entrepreneurs Reached",
                desc: "Direct and indirect beneficiaries reached within the first year of operations.",
              },
              {
                icon: FaCheckCircle,
                title: "High Community Engagement",
                desc: "Over 20 signups per 100 visitors through targeted community outreach campaigns.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-blef-green/30 border border-white/10 flex items-center justify-center text-blef-gold-light shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white tracking-wide">
                      {item.title}
                    </h2>
                    <p className="text-xs text-white/70 mt-0.5 leading-normal">
                      {item.desc}
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

export default ImpactHero;