import { FaHeart, FaHandshake, FaUserTie, FaArrowRight } from "react-icons/fa";

const PATHWAYS = [
  {
    icon: FaHeart,
    title: "Donate",
    tagline: "Fund Free Training & Mentorship",
    description:
      "Your contribution funds free practical business training, mentorship sessions, and essential learning resources for entrepreneurs who could not otherwise access them.",
    action: "Make a Donation",
    href: "#contact-form",
  },
  {
    icon: FaHandshake,
    title: "Sponsor",
    tagline: "Cohort & Summit Sponsorship",
    description:
      "Support a training cohort, a summit (such as AYES), or a bootcamp, and put your organization's name behind real, visible grassroots impact across Africa.",
    action: "Become a Sponsor",
    href: "#contact-form",
  },
  {
    icon: FaUserTie,
    title: "Volunteer",
    tagline: "Mentorship & Facilitation",
    description:
      "Share your time, skills, or business expertise as a mentor, facilitator, or coordinator within our active peer accountability network.",
    action: "Join as a Mentor",
    href: "#contact-form",
  },
];

const WaysToPartner = () => {
  return (
    <section className="py-20 sm:py-28 bg-blef-cream">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
            Support Channels
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
            Ways to Support Our Work
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Whether you are an individual, professional, or corporate organization, you can contribute directly to sustainable enterprise development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATHWAYS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-neutral-200 hover:border-blef-green hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blef-green/10 text-blef-green flex items-center justify-center mb-6">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blef-gold block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="text-2xl font-extrabold text-blef-charcoal mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100">
                  <a
                    href={item.href}
                    className="inline-flex items-center justify-center w-full py-3 px-6 rounded-full bg-neutral-100 hover:bg-blef-green hover:text-white text-blef-charcoal font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>{item.action}</span>
                    <FaArrowRight className="ml-2" size={10} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WaysToPartner;