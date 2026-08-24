import { FaLinkedinIn, FaUser } from "react-icons/fa";

// Import leadership portraits
import bellaImg from "../../assets/bella-khobe.jpeg";
import jonathanImg from "../../assets/jonathan-ogoji.jpeg";
import gloryImg from "../../assets/glory-okezie.jpeg";

const MANAGEMENT_TEAM = [
  {
    name: "Bella Khobe Jonathan",
    role: "Executive Director",
    image: bellaImg,
    bio: "Driving the strategic mandate, stakeholder mobilization, and overall executive leadership of Better Life Entrepreneurship Foundation across Africa.",
    tag: "Executive Leadership",
    linkedin: "#",
  },
  {
    name: "Jonathan Ogoji",
    role: "Director of Programmes",
    image: jonathanImg,
    bio: "Overseeing the end-to-end design, localized curricula implementation, and operational roll-out of BLEF's 7 thematic pillars.",
    tag: "Programmes",
    linkedin: "#",
  },
  {
    name: "Glory Okezie",
    role: "Communications & Partnerships Manager",
    image: gloryImg,
    bio: "Managing institutional partnerships, strategic stakeholder relations, corporate sponsorships, and public media dispatches.",
    tag: "Partnerships",
    linkedin: "#",
  },
];

const Leadership = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
            Executive Leadership
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
            Management Team
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Dedicated leaders combining operational rigor, legal governance, and grassroots passion to build businesses that last.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {MANAGEMENT_TEAM.map((leader, idx) => (
            <div
              key={idx}
              className="group bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200 hover:border-blef-green hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Photo Frame Container */}
              <div className="relative h-72 w-full bg-neutral-900 overflow-hidden">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-scale-down group-hover:scale-100 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : null}

                {/* Fallback Placeholder (shows if image fails or is missing) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blef-green-dark via-blef-green to-neutral-800 -z-10 flex flex-col items-center justify-center text-white/40">
                  <FaUser size={40} className="mb-2 opacity-50" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {leader.name}
                  </span>
                </div>

                {/* Tag Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-blef-gold-light text-[0.7rem] font-bold px-2.5 py-1 rounded-md shadow-sm">
                    {leader.tag}
                  </span>
                </div>

                {/* Gradient Shadow at Bottom of Photo */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-blef-charcoal group-hover:text-blef-green transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-blef-green-dark mt-0.5 mb-3">
                    {leader.role}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-[0.7rem] text-neutral-400 font-medium">
                    BLEF Secretariat
                  </span>
                  <a
                    href={leader.linkedin || "#"}
                    aria-label={`${leader.name} LinkedIn`}
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