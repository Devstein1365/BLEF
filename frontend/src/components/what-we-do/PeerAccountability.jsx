import { FaUsers, FaCheckCircle, FaHandshake } from "react-icons/fa";

const PeerAccountability = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-blef-green-dark via-blef-green to-blef-green-dark text-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blef-gold-light text-xs font-bold uppercase tracking-widest border border-white/15">
              The Missing Dimension
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Peer Accountability: <br />
              <span className="text-blef-gold-light">Where Learning Turns into Habit</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
              Beyond training, BLEF fosters ongoing peer accountability groups where entrepreneurs support, challenge, and grow together long after formal sessions end. This is the dimension most entrepreneurship programs miss entirely.
            </p>

            <div className="mt-8 space-y-3.5">
              {[
                "Weekly and monthly check-ins on revenue goals and bookkeeping",
                "Cross-sector peer networking and collective market bargaining",
                "Direct advisory escalation to BLEF mentors when bottlenecks occur",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-medium text-white/90">
                  <FaCheckCircle className="text-blef-gold-light shrink-0" size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="/get-involved"
                className="inline-flex items-center px-8 py-4 rounded-full bg-blef-gold text-blef-charcoal font-bold text-sm hover:bg-blef-gold-light transition shadow-lg"
              >
                Join an Accountability Cohort
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-white">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-blef-gold-light flex items-center justify-center mb-6">
                <FaUsers size={22} />
              </div>
              <h3 className="text-2xl font-extrabold mb-3">
                Why Accountability Works
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                Talent without consistent execution fades. Our structured cohorts eliminate founder loneliness, encourage transparent financial reporting, and provide the collective resilience needed to navigate difficult economic climates.
              </p>
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex items-center gap-3 text-xs font-semibold text-blef-gold-light">
                <FaHandshake size={18} />
                <span>Active nationwide peer networks across Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeerAccountability;