import { useState } from "react";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";

const EngagementForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Entrepreneur (Join a Session)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className="py-20 sm:py-28 bg-white scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-neutral-50 rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-lg">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
              Direct Secretariat Routing
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-blef-charcoal">
              Get in Touch with BLEF
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Register for an upcoming training cohort, volunteer your expertise, or propose a sponsorship.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-blef-cream rounded-2xl border border-blef-green/20 text-center">
              <FaCheckCircle className="text-blef-green text-4xl mx-auto mb-3" />
              <h3 className="text-xl font-bold text-blef-charcoal">
                Thank You for Reaching Out!
              </h3>
              <p className="text-sm text-neutral-600 mt-2">
                Your submission has been routed to the Secretariat team in Abuja. We will be in touch shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs font-bold text-blef-green underline cursor-pointer"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Amina Yusuf"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-blef-green bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-blef-green bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-blef-green bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    I am getting involved as:
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-blef-green bg-white"
                  >
                    <option>Entrepreneur (Join a Session)</option>
                    <option>Corporate Partner / Sponsor</option>
                    <option>Volunteer Mentor / Facilitator</option>
                    <option>Donor</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Message / Enterprise Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your business or how you would like to partner with BLEF..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-blef-green bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-blef-green hover:bg-blef-green-dark text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blef-green/20"
              >
                <span>Submit Details</span>
                <FaPaperPlane size={12} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EngagementForm;