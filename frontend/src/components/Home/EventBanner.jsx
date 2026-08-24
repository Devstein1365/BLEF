import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import ayesLogo from "../../assets/event.jpeg";
import { BRAND } from "../../utils/constants";

const HomeEventBanner = () => {
  const isExpired = new Date() > BRAND.ayesEventDate;
  if (isExpired) return null;

  return (
    <section className="bg-gradient-to-r from-neutral-900 via-blef-green-dark to-neutral-900 text-white py-3.5 px-6 border-b border-blef-gold/30 relative z-20">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="hidden sm:flex bg-white p-1 rounded-xl shrink-0 w-11 h-11 items-center justify-center shadow">
            <img src={ayesLogo} alt="AYES 2026" className="max-h-full max-w-full object-contain" />
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="bg-blef-gold text-blef-charcoal text-[0.65rem] font-extrabold uppercase px-2 py-0.5 rounded-md">
                Upcoming Flagship Event
              </span>
              <span className="text-xs text-blef-gold-light font-bold flex items-center gap-1">
                <FaCalendarAlt size={10} />
                {BRAND.ayesDisplayDate}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white/90 mt-0.5">
              African Youth Entrepreneurs Summit (AYES) 2026 — Theme: <span className="text-blef-gold-light italic">Innovate. Empower. Transform Africa.</span>
            </p>
          </div>
        </div>

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