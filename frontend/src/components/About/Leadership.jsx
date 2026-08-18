import { FaLinkedinIn, FaAward } from "react-icons/fa";

const LEADERS = [
  {
    name: "Dr. Adebayo Ogunlesi",
    role: "Chairman, Board of Trustees",
    bio: "Over 25 years of leadership in sustainable finance, strategic philanthropy, and African enterprise development.",
    category: "Board of Trustees",
  },
  {
    name: "Hajiya Aisha Bello",
    role: "Executive Director & CEO",
    bio: "Spearheading grassroots intervention frameworks, multi-state grant execution, and institutional partnerships.",
    category: "Executive Management",
  },
  {
    name: "Engr. Chinedu Okafor",
    role: "Head of Programmes & STEM Initiatives",
    bio: "Bridging technical education and digital innovation hubs across public secondary and tertiary institutions.",
    category: "Executive Management",
  },
  {
    name: "Mrs. Folashade Adeleke",
    role: "Director of Women Empowerment & Grants",
    bio: "Championing non-equity capital access and structured market linkage programs for women-led MSMEs.",
    category: "Executive Management",
  },
];

const Leadership = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
            Governance & Leadership
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
            Guided by Experience and Integrity
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Our leadership team combines deep financial expertise, public sector insight, and operational rigor to ensure every intervention delivers maximum impact.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEADERS.map((leader, idx) => (
            <div
              key={idx}
              className="group bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-blef-green hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Photo Placeholder */}
              <div className="relative h-64 w-full bg-neutral-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blef-green-dark via-blef-green to-blef-charcoal opacity-90 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-white/40 text-xs font-semibold uppercase tracking-wider">
                  [ Executive Photo ]
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-sm text-blef-gold-light text-[0.7rem] font-bold px-2.5 py-1 rounded-md">
                    {leader.category}
                  </span>
                </div>
              </div>

              {/* Leader Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-blef-charcoal group-hover:text-blef-green transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-blef-green-dark mt-0.5 mb-3">
                    {leader.role}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                    {leader.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                  <span className="text-[0.7rem] text-neutral-400 font-medium">BLEF Secretariat</span>
                  <a
                    href="#linkedin"
                    aria-label="LinkedIn profile"
                    className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-blef-green hover:text-white hover:border-blef-green transition-colors"
                  >
                    <FaLinkedinIn size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;