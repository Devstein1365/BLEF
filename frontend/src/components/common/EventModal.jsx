import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaRocket, FaArrowRight } from "react-icons/fa";
import ayesLogo from "../../assets/event.jpeg"; // verify your asset filename

// Target event expiry date (e.g., Nov 30, 2026)
const EVENT_EXPIRY_DATE = new Date("2026-11-30T23:59:59");

const EventModalAlert = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isExpired = new Date() > EVENT_EXPIRY_DATE;
    const isDismissed = sessionStorage.getItem("blef_ayes_alert_dismissed");

    if (!isExpired && !isDismissed) {
      // Pop up 1 second after page loads for smooth entrance
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("blef_ayes_alert_dismissed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
        
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          aria-label="Close event alert"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <FaTimes size={15} />
        </button>

        {/* Modal Header & Graphic */}
        <div className="bg-gradient-to-br from-blef-green-dark via-blef-green to-neutral-900 p-6 text-white text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blef-gold/20 text-blef-gold-light text-[0.72rem] font-extrabold uppercase tracking-widest border border-blef-gold/30 mb-3">
            <FaRocket size={10} />
            <span>Upcoming Flagship Summit</span>
          </div>

          <div className="bg-white p-4 rounded-2xl max-w-[180px] mx-auto mb-3 shadow-lg">
            <img
              src={ayesLogo}
              alt="African Youth Entrepreneurs Summit (AYES) 2026"
              className="w-full h-auto object-contain"
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            AYES 2026
          </h3>
          <p className="text-xs font-semibold text-blef-gold-light mt-0.5">
            INNOVATE. EMPOWER. TRANSFORM AFRICA.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center justify-center gap-4 text-xs font-semibold text-neutral-600 mb-4 pb-3 border-b border-neutral-100">
            <span className="flex items-center gap-1.5">
              <FaCalendarAlt className="text-blef-gold" />
              <span>2026 Convening</span>
            </span>
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-blef-gold" />
              <span>Abuja & Virtual Hybrid</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 text-center leading-relaxed mb-6">
            Join thousands of first-generation founders, innovators, mentors, and investors across Africa setting the agenda for youth-led enterprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/get-involved"
              onClick={handleDismiss}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-blef-green hover:bg-blef-green-dark text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-blef-green/20"
            >
              <span>Register Now</span>
              <FaArrowRight size={10} />
            </Link>

            <button
              onClick={handleDismiss}
              className="py-3 px-5 rounded-full border border-neutral-300 hover:bg-neutral-100 text-neutral-700 font-bold text-xs uppercase tracking-wider transition cursor-pointer"
            >
              Remind Me Later
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventModalAlert;