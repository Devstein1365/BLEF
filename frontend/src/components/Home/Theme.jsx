import {
  FaBriefcase,
  FaUsers,
  FaVenus,
  FaFlask,
  FaCoins,
  FaHandsHelping,
  FaSeedling,
} from "react-icons/fa";

const FOCUS_AREAS = [
  {
    number: "01",
    icon: FaBriefcase,
    title: "Entrepreneurship & Business Development",
    description:
      "Equipping founders with the training, mentorship, and structure they need to launch and run viable businesses.",
  },
  {
    number: "02",
    icon: FaUsers,
    title: "Youth Economic Empowerment",
    description:
      "Giving young people the skills and opportunities to build income, independence, and long-term careers.",
  },
  {
    number: "03",
    icon: FaVenus,
    title: "Women's Economic Empowerment",
    description:
      "Backing women-led enterprises with capital, mentorship, and market access to close the gender gap in business.",
  },
  {
    number: "04",
    icon: FaFlask,
    title: "STEM Education & Innovation",
    description:
      "Building interest and capability in science, technology, and innovation from an early stage.",
  },
  {
    number: "05",
    icon: FaCoins,
    title: "Access to Finance & Markets",
    description:
      "Connecting entrepreneurs to funding, grants, and markets that turn good ideas into sustainable revenue.",
  },
  {
    number: "06",
    icon: FaHandsHelping,
    title: "Inclusive Entrepreneurship & Social Impact",
    description:
      "Widening access for underrepresented groups and supporting ventures that create real community impact.",
  },
  {
    number: "07",
    icon: FaSeedling,
    title: "Legacy & Sustainable Enterprise Development",
    description:
      "Helping businesses build for the long term, so the impact outlives the initial support.",
  },
];

const Theme = ()=> {
  return (
    <section className="bg-blef-cream py-20 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
            Our Focus
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
            Where We Direct Our Impact
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Seven focus areas guide every programme we run, each one built to
            move people from potential to sustainable enterprise.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOCUS_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.number}
                className="group relative bg-white rounded-2xl p-7 border border-neutral-200 hover:border-transparent hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(20,82,42,0.12)] transition-all duration-300"
              >
                {/* Top accent line that fills on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-blef-green to-blef-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blef-green/10 flex items-center justify-center text-blef-green group-hover:bg-blef-green group-hover:text-white transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  <span className="text-2xl font-extrabold text-neutral-200 group-hover:text-blef-gold-light transition-colors duration-300">
                    {area.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-blef-charcoal leading-snug mb-2.5">
                  {area.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}

          {/* Closing CTA card filling the 8th grid slot on lg screens */}
          <div className="hidden lg:flex flex-col justify-center items-start bg-blef-green-dark rounded-2xl p-7 text-white">
            <h3 className="text-lg font-bold leading-snug mb-2">
              See the full picture
            </h3>
            <p className="text-sm text-white/75 leading-relaxed mb-5">
              Explore how each focus area translates into real programmes and
              results.
            </p>
            <a
              href="/what-we-do"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-blef-gold text-blef-charcoal font-bold text-sm hover:bg-blef-gold-light transition-colors duration-300"
            >
              Explore What We Do
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Theme