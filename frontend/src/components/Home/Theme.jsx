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
      "Equipping founders with strategy, systems, marketing, and cash flow management to move from guesswork to growth and survive past year five.",
  },
  {
    icon: FaUsers,
    number: "02",
    title: "Youth Economic Empowerment",
    description:
      "Meeting young people where they are—from campus ventures to phone hustles—turning talent and ambition into structured, scalable businesses.",
  },
  {
    number: "03",
    icon: FaVenus,
    title: "Women's Economic Empowerment",
    description:
      "Creating safe, supportive spaces with capital access and mentorship designed around the realities of women balancing business and family.",
  },
  {
    number: "04",
    icon: FaFlask,
    title: "STEM Education & Innovation",
    description:
      "Demystifying digital tools and scientific problem-solving so everyday entrepreneurs can automate inventory, track sales, and compete effectively.",
  },
  {
    number: "05",
    icon: FaCoins,
    title: "Access to Finance & Markets",
    description:
      "Breaking systemic exclusion by preparing founders to be investment-ready and connecting them directly to grants, investors, and active buyers.",
  },
  {
    number: "06",
    icon: FaHandsHelping,
    title: "Inclusive Entrepreneurship & Social Impact",
    description:
      "Deliberately designing programs that reach persons with disabilities and underserved rural groups often overlooked by traditional systems.",
  },
  {
    number: "07",
    icon: FaSeedling,
    title: "Legacy & Sustainable Enterprise Development",
    description:
      "Instilling documented systems, succession planning, and generational wealth habits so enterprises outlive their original founders.",
  },
];

const Theme = () => {
  return (
    <section className="bg-blef-cream py-20 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
            Our 7 Pillars
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
            Thematic Focus Areas
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Seven interconnected pillars guiding every training, partnership, and catalytic intervention we deliver across Africa.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOCUS_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.number}
                className="group relative bg-white rounded-2xl p-7 border border-neutral-200 hover:border-transparent hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(20,82,42,0.12)] transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-blef-green to-blef-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blef-green/10 flex items-center justify-center text-blef-green group-hover:bg-blef-green group-hover:text-white transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  <span className="text-2xl font-extrabold text-neutral-200 group-hover:text-blef-gold transition-colors duration-300">
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

          {/* CTA Card */}
          <div className="hidden lg:flex flex-col justify-center items-start bg-blef-green-dark rounded-2xl p-7 text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-blef-gold-light mb-2">
              From Grassroots to Gold
            </span>
            <h3 className="text-lg font-bold leading-snug mb-2">
              Ready to build your legacy?
            </h3>
            <p className="text-sm text-white/80 leading-relaxed mb-5">
              Explore how our partner-supported practical business education transforms everyday hustle into lasting enterprise.
            </p>
            <a
              href="/what-we-do"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-blef-gold text-blef-charcoal font-bold text-sm hover:bg-blef-gold-light transition-colors duration-300"
            >
              Explore Our Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme;