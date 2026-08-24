import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { BRAND } from "../../utils/constants";

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-5">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
              Secretariat Location
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
              Get in Touch with Our Team
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              We welcome inquiries from grassroots entrepreneurs, corporate sponsors, public sector institutions, and civil society partners across Africa.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blef-green/10 text-blef-green flex items-center justify-center shrink-0 mt-1">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blef-charcoal">Secretariat Address</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    {BRAND.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blef-green/10 text-blef-green flex items-center justify-center shrink-0 mt-1">
                  <FaPhoneAlt size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blef-charcoal">Direct Phone Lines</h4>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <a href={`tel:${BRAND.phone1Raw}`} className="text-xs text-neutral-600 hover:text-blef-green">
                      {BRAND.phone1}
                    </a>
                    <a href={`tel:${BRAND.phone2Raw}`} className="text-xs text-neutral-600 hover:text-blef-green">
                      {BRAND.phone2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-neutral-50 rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-sm">
              <h3 className="text-xl font-bold text-blef-charcoal mb-6">
                Send a Direct Message
              </h3>

              {submitted ? (
                <div className="p-8 bg-blef-cream rounded-2xl border border-blef-green/20 text-center">
                  <FaCheckCircle className="text-blef-green text-4xl mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-blef-charcoal">Message Submitted</h4>
                  <p className="text-xs text-neutral-600 mt-2">
                    Thank you for reaching out. The secretariat team will respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-xs font-bold text-blef-green underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-blef-green bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+234..."
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-blef-green bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Department / Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-blef-green bg-white"
                    >
                      <option>General Secretariat Inquiry</option>
                      <option>Programmes & Bootcamps (RISE-UP / AYES)</option>
                      <option>Corporate Partnership & Sponsorship</option>
                      <option>Legal & Governance</option>
                      <option>Media Kit & Press Requests</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-blef-green bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-blef-green hover:bg-blef-green-dark text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blef-green/20"
                  >
                    <span>Send Message</span>
                    <FaPaperPlane size={12} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;