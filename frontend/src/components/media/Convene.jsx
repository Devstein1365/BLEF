import { FaLaptopHouse, FaGlobeAfrica, FaHandshake, FaUserGraduate } from "react-icons/fa";

const CONVENINGS = [
  {
    icon: FaLaptopHouse,
    title: "Workshops",
    desc: "Hands-on, skills-focused sessions that give entrepreneurs practical tools they can apply immediately to Strategy, Marketing, and Finance.",
  },
  {
    icon: FaGlobeAfrica,
    title: "Summits",
    desc: "Large-scale gatherings bringing together founders, mentors, and corporate partners to share ideas and set the agenda for what's next.",
  },
  {
    icon: FaHandshake,
    title: "Partnerships",
    desc: "Convenings built with corporate, development, and strategic partners to expand funding and market access for the entrepreneurs we serve.",
  },
  {
    icon: FaUserGraduate,
    title: "Mentorships",
    desc: "Structured follow-up trainings and one-on-one sessions with our mentees to navigate operational bottlenecks and build lasting legacies.",
  },
];

const WaysWeConvene = () => {
  return (
    <section className="py-20 sm:py-28 bg-blef-cream">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
            Convening Formats
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
            Ways We Convene
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Delivering practical knowledge, institutional networks, and peer accountability through structured gathering formats.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONVENINGS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-neutral-200/80 hover:border-blef-green hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blef-green/10 text-blef-green flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-blef-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WaysWeConvene;