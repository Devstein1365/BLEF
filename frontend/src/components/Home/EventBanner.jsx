import { Link } from "react-router-dom";
import { FaRocket, FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import ayesLogo from "../../assets/event.jpeg"; // verify your asset filename

// Target event expiry date
const EVENT_EXPIRY_DATE = new Date("2026-11-30T23:59:59");

const HomeEventBanner = () => {
  const isExpired = new Date() > EVENT_EXPIRY_DATE;

  if (isExpired) return null;

  return (
    <section className="bg-gradient-to-r from-neutral-900 via-blef-green-dark to-neutral-900 text-white py-4 px-6 border-b border-blef-gold/30 relative z-20">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left info */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="hidden sm:flex bg-white p-1.5 rounded-xl shadow-sm shrink-0 w-12 h-12 items-center justify-center">
            <img src={ayesLogo} alt="AYES 2026" className="max-h-full max-w-full object-contain" />
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="bg-blef-gold text-blef-charcoal text-[0.68rem] font-extrabold uppercase px-2 py-0.5 rounded-md">
                Upcoming Event
              </span>
              <span className="text-xs text-blef-gold-light font-bold">
                AYES 2026
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white/90 mt-0.5">
              African Youth Entrepreneurs Summit 2026 — Theme: <span className="text-blef-gold-light italic">Innovate. Empower. Transform Africa.</span>
            </p>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-1.5 py-2 px-5 rounded-full bg-blef-gold hover:bg-blef-gold-light text-blef-charcoal font-extrabold text-xs uppercase tracking-wider transition shadow-md"
          >
            <span>Register Free</span>
            <FaArrowRight size={10} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeEventBanner;