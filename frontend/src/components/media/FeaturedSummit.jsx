import { FaCalendarAlt, FaMapMarkerAlt, FaRocket, FaCheckCircle } from "react-icons/fa";
import ayesLogo from "../../assets/event.jpeg"; // or .jpg

const HIGHLIGHTS = [
  "Pan-African Youth Founders Exhibition & Deal Rooms",
  "Seed Funding Pitch Clinics & Angel Investor Linkage",
  "Policy Panels on African Cross-Border Trade & Innovation",
  "Hands-on Masterclasses in Strategy, Systems & Growth",
];

const FeaturedSummit = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-neutral-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-gradient-to-br from-neutral-900 via-blef-green-dark to-neutral-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blef-gold/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Graphic Logo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl max-w-sm w-full border border-white/20">
                <img
                  src={ayesLogo}
                  alt="African Youth Entrepreneurs Summit (AYES) 2026"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right: Content & Highlights */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blef-gold/20 text-blef-gold-light text-xs font-bold uppercase tracking-widest border border-blef-gold/30 mb-4">
                <FaRocket size={11} />
                <span>Flagship Annual Convening</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                African Youth Entrepreneurs Summit (AYES) 2026
              </h2>

              <p className="text-sm sm:text-base font-semibold text-blef-gold-light mt-1">
                Theme: INNOVATE. EMPOWER. TRANSFORM AFRICA.
              </p>

              <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                Bringing together the brightest first-generation founders, youth innovators, corporate partners, and venture leaders to build durable African enterprises that shape the continent's economic future.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-white/90">
                <span className="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl border border-white/10">
                  <FaCalendarAlt className="text-blef-gold" />
                  <span>2026 Summit Edition</span>
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl border border-white/10">
                  <FaMapMarkerAlt className="text-blef-gold" />
                  <span>Abuja (FCT) & Pan-African Hybrid</span>
                </span>
              </div>

              <div className="mt-8 space-y-2.5">
                {HIGHLIGHTS.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                    <FaCheckCircle className="text-blef-gold shrink-0" size={13} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/get-involved"
                  className="inline-flex items-center px-7 py-3.5 rounded-full bg-blef-gold text-blef-charcoal font-bold text-sm hover:bg-blef-gold-light transition-all duration-200 shadow-lg shadow-blef-gold/20"
                >
                  Register for AYES 2026
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/30 text-white font-bold text-sm hover:bg-white hover:text-blef-charcoal transition-all duration-200"
                >
                  Partner / Sponsor AYES
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSummit;