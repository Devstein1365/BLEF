import { useState } from "react";
import {
  FaEnvelope,
  FaBell,
  FaCheckCircle,
  FaFileAlt,
  FaShieldAlt,
  FaPaperPlane,
} from "react-icons/fa";

const PERKS = [
  {
    icon: FaBell,
    title: "Application Call Alerts",
    description: "Get early notices on seed grants, cohort bootcamps, and funding cycles.",
  },
  {
    icon: FaFileAlt,
    title: "Quarterly Impact Reports",
    description: "Read audited metrics, case studies, and field performance disclosures.",
  },
  {
    icon: FaShieldAlt,
    title: "Zero Spam Commitment",
    description: "Only verified institutional releases. Unsubscribe anytime with 1 click.",
  },
];

const News = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMsg("Please provide a valid corporate or personal email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    // Simulate API submission
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  return (
    <section className="relative bg-blef-green-dark text-white py-20 sm:py-24 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blef-green/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blef-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Value Proposition (7 cols) */}
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blef-gold-light text-xs font-semibold uppercase tracking-widest border border-white/15">
              Stay Informed
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Subscribe to the <span className="text-blef-gold-light">BLEF Dispatch</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              Join thousands of founders, policymakers, researchers, and partners receiving verified updates on African enterprise development and community grants.
            </p>

            {/* Feature Perks List */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/15">
              {PERKS.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div key={idx} className="flex flex-col">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-blef-gold-light mb-3">
                      <Icon size={14} />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {perk.title}
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Subscription Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 sm:p-10 text-blef-charcoal shadow-2xl border border-white/20 relative">
              <div className="w-12 h-12 rounded-2xl bg-blef-green/10 text-blef-green flex items-center justify-center mb-6">
                <FaEnvelope size={20} />
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-blef-charcoal tracking-tight">
                Join the Network
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 mb-6">
                Direct dispatches on interventions, grant openings, and economic empowerment across Nigeria.
              </p>

              {status === "success" ? (
                <div className="p-6 bg-blef-cream rounded-2xl border border-blef-green/20 text-center animate-fade-in">
                  <FaCheckCircle className="text-blef-green text-3xl mx-auto mb-3" />
                  <h4 className="text-base font-bold text-blef-green-dark">
                    Subscription Confirmed!
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Thank you for joining. Please check your inbox for our welcome dispatch and program overview.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-xs font-bold text-blef-green underline cursor-pointer"
                  >
                    Register another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="newsletter-email"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="newsletter-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@organization.org"
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm text-blef-charcoal placeholder-neutral-400 bg-neutral-50 focus:bg-white focus:outline-none transition-all ${
                          status === "error"
                            ? "border-red-500 focus:border-red-500"
                            : "border-neutral-300 focus:border-blef-green"
                        }`}
                      />
                    </div>
                    {status === "error" && (
                      <p className="text-xs text-red-500 mt-1.5 font-medium">
                        {errorMsg}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blef-green hover:bg-blef-green-dark text-white font-bold text-sm shadow-md shadow-blef-green/25 hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-75"
                  >
                    {status === "loading" ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <span>Subscribe to Dispatches</span>
                        <FaPaperPlane size={12} />
                      </>
                    )}
                  </button>

                  <p className="text-[0.72rem] text-neutral-500 text-center leading-relaxed">
                    By subscribing, you agree to receive communications in accordance with Better Life Foundation’s Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default News;