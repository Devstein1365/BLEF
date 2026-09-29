import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import deepFlyer from "../../assets/events/deep-flyer.jpeg";
import { BRAND } from "../../utils/constants";

const EventModalAlert = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isExpired = new Date() > BRAND.deepEventDate;
    const isDismissed = sessionStorage.getItem("blef_deep_alert_dismissed");

    if (!isExpired && !isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("blef_deep_alert_dismissed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
        <button
          onClick={handleDismiss}
          aria-label="Close alert"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition cursor-pointer"
        >
          <FaTimes size={15} />
        </button>

        {/* Modal Banner Graphic */}
        <div className="bg-neutral-900 relative">
          <img
            src={deepFlyer}
            alt="Registration Now Open - Digital Enterprise and Empowerment Programme"
            className="w-full h-56 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="bg-blef-gold text-blef-charcoal text-[0.68rem] font-black uppercase px-2.5 py-1 rounded-md tracking-wider">
              Registration Now Open
            </span>
            <h3 className="text-xl font-extrabold text-white mt-1.5 leading-snug">
              Digital Enterprise and Empowerment Programme
            </h3>
          </div>
        </div>

        {/* Details & Roles */}
        <div className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-neutral-600 mb-4 pb-3 border-b border-neutral-100">
            <span className="flex items-center gap-1.5 text-blef-green-dark">
              <FaCalendarAlt className="text-blef-gold" />
              <span>{BRAND.deepDisplayDate}</span>
            </span>
            <span className="flex items-center gap-1.5 text-neutral-500">
              <FaMapMarkerAlt className="text-blef-gold" />
              <span>{BRAND.deepVenue}</span>
            </span>
          </div>

          <p className="text-xs text-neutral-600 leading-relaxed mb-4">
            A targeted economic empowerment and digital skills project for rural women, youths, petty traders, small-scale farmers, and first-generation entrepreneurs in Abuja.
          </p>

          <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200 mb-5">
            <span className="text-[0.7rem] font-bold text-neutral-500 uppercase tracking-wider block mb-1.5">
              Register as:
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-bold text-blef-charcoal">
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-blef-green" size={11} /> Participant
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-blef-green" size={11} /> Sponsor
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-blef-green" size={11} /> Volunteer
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-blef-green" size={11} /> Partner
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              to="/get-involved"
              onClick={handleDismiss}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-blef-green hover:bg-blef-green-dark text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              <span>Register on Website</span>
              <FaArrowRight size={10} />
            </Link>
            <button
              onClick={handleDismiss}
              className="py-3 px-5 rounded-full border border-neutral-300 hover:bg-neutral-100 text-neutral-600 font-bold text-xs uppercase tracking-wider transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModalAlert;