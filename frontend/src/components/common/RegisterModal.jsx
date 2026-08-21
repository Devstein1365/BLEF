import { useState } from "react";
import { FaTimes, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import ayesLogo from "../../assets/event.jpeg";

const SummitRegisterModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    attendanceMode: "Physical (Abuja)",
    sector: "Technology / Innovation",
    businessStage: "Early Stage / Side Hustle",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[2100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close registration"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <FaTimes size={14} />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
            <img src={ayesLogo} alt="AYES 2026" className="w-12 h-12 object-contain" />
            <div>
              <h3 className="text-base font-extrabold text-blef-charcoal leading-tight">
                AYES 2026 Delegate Registration
              </h3>
              <p className="text-xs text-neutral-500">
                Innovate. Empower. Transform Africa.[cite: 1]
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="py-8 text-center">
              <FaCheckCircle className="text-blef-green text-5xl mx-auto mb-4" />
              <h4 className="text-xl font-extrabold text-blef-charcoal">
                Registration Confirmed!
              </h4>
              <p className="text-xs text-neutral-600 mt-2 max-w-xs mx-auto leading-relaxed">
                Thank you for registering for the African Youth Entrepreneurs Summit 2026[cite: 1]. Your summit delegate pass details have been sent to your email.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-6 px-6 py-2.5 rounded-full bg-blef-green text-white font-bold text-xs uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[0.72rem] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samuel Adeleke"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-blef-green"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.72rem] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-blef-green"
                  />
                </div>

                <div>
                  <label className="block text-[0.72rem] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234..."
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-blef-green"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.72rem] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Attendance Mode
                  </label>
                  <select
                    value={form.attendanceMode}
                    onChange={(e) => setForm({ ...form, attendanceMode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-blef-green bg-white"
                  >
                    <option>Physical (Abuja FCT)[cite: 1]</option>
                    <option>Virtual / Pan-African Stream[cite: 1]</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[0.72rem] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Business Stage
                  </label>
                  <select
                    value={form.businessStage}
                    onChange={(e) => setForm({ ...form, businessStage: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-blef-green bg-white"
                  >
                    <option>Aspiring / Ideation[cite: 1]</option>
                    <option>Early Stage / Micro-SME[cite: 1]</option>
                    <option>Growth / Scaling[cite: 1]</option>
                    <option>Student / Campus Innovator[cite: 1]</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl bg-blef-green hover:bg-blef-green-dark text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md shadow-blef-green/20 cursor-pointer"
              >
                <span>Complete Summit Registration</span>
                <FaPaperPlane size={11} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SummitRegisterModal;