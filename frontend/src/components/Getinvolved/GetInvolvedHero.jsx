import { Link } from "react-router-dom";
import { FaChevronRight, FaHandsHelping, FaHeart, FaUserCheck } from "react-icons/fa";

const GetInvolvedHero = () => {
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
          <span className="text-blef-gold-light">Get Involved</span>
        </nav>

        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-blef-gold-light text-xs font-bold uppercase tracking-widest border border-white/15">
            Join the Movement
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Support Our Work, <br />
            <span className="text-blef-gold-light">Build a Generation</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-normal">
            BLEF runs on the belief that ordinary people, organizations, and partners can change the trajectory of a generation of entrepreneurs. There is a place for you in that work.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blef-gold animate-pulse" />
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 italic">
              Join a session. Partner with us. Build your legacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedHero;