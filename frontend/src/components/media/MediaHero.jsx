import { Link } from "react-router-dom";
import { FaChevronRight, FaCalendarAlt, FaBullhorn, FaCamera } from "react-icons/fa";
import mediaHeroBg from "../../assets/media-hero-bg.jpeg";

const MediaHero = () => {
  return (
    <section className="relative bg-blef-green-dark text-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background Image with Dark Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mediaHeroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blef-green-dark/95 via-blef-green-dark/85 to-black/80" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blef-gold/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-white/70 mb-8">
          <Link to="/" className="hover:text-blef-gold-light transition-colors">
            Home
          </Link>
          <FaChevronRight size={9} className="text-white/40" />
          <span className="text-blef-gold-light">News & Media</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-blef-gold-light text-xs font-bold uppercase tracking-widest border border-white/15">
              News, Convenings & Dispatches
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Events & <span className="text-blef-gold-light">Media Center</span>
            </h1>

            <p className="mt-6 text-[14px] sm:text-[14px] lg:text-[16px] text-white/90 leading-relaxed font-normal max-w-2xl">
              Real transformation happens when entrepreneurs gather, learn, and hold each other accountable. Explore our summits, bootcamps, school outreaches, and press releases.
            </p>

            
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            {[
              {
                icon: FaCalendarAlt,
                title: "Flagship Convenings",
                desc: "High-impact gatherings connecting founders, policymakers, and mentors.",
              },
              {
                icon: FaCamera,
                title: "Media & Press Kit",
                desc: "Official brand assets, executive photography, and verified press statements.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-blef-green/40 border border-white/15 flex items-center justify-center text-blef-gold-light shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white tracking-wide">
                      {item.title}
                    </h2>
                    <p className="text-xs text-white/80 mt-0.5 leading-normal">
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

export default MediaHero;