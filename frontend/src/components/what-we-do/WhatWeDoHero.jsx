import { Link } from "react-router-dom";
import { FaChevronRight, FaCompass, FaCogs, FaHandsHelping } from "react-icons/fa";
import whatWeDoHeroBg from "../../assets/what-we-do-hero-bg.jpeg";

const WhatWeDoHero = () => {
  return (
    <section className="relative bg-blef-green-dark text-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background Image with Dark Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${whatWeDoHeroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blef-green-dark/85 via-blef-green-dark/65 to-black/80" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blef-gold/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] h-60 mx-auto px-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-white/70 mb-8">
          <Link to="/" className="hover:text-blef-gold-light transition-colors">
            Home
          </Link>
          <FaChevronRight size={9} className="text-white/40" />
          <span className="text-blef-gold-light">What We Do</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8">
            {/* <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-blef-gold-light text-xs font-bold uppercase tracking-widest border border-white/15">
              Programmatic Architecture
            </span> */}

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              From Grassroots to Gold Standard
            </h1>

            {/* <p className="mt-6 text-[15px] sm:text-[15px] lg:text-[16px] text-white/90 leading-relaxed font-normal max-w-2xl">
              We offer free, partner-supported business training designed specifically for first-generation entrepreneurs and SMEs in Africa. Our programs are practical, culturally relevant, and built around real challenges faced by African enterprises.
            </p> */}

            {/* <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blef-gold animate-pulse" />
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 italic">
                Empowering People. Building Enterprises. Creating Legacies.
              </p>
            </div> */}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoHero;