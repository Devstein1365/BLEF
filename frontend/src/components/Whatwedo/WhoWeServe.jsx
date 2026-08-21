import {
  FaUserGraduate,
  FaFemale,
  FaStore,
  FaLightbulb,
  FaChalkboardTeacher,
  FaRocket,
  FaLaptopCode,
} from "react-icons/fa";

const AUDIENCES = [
  {
    icon: FaStore,
    title: "Young First-Generation SMEs (Ages 16–45)",
    desc: "Running micro to small businesses across Africa, seeking structured growth systems without generational safety nets.",
  },
  {
    icon: FaFemale,
    title: "Women in Business",
    desc: "Female founders seeking structured, practical support, non-predatory capital, and community to scale their ventures.",
  },
  {
    icon: FaRocket,
    title: "Aspiring Sector Entrepreneurs",
    desc: "Founders across fashion, agriculture, food, tech, and services ready to turn hustle into viable enterprise.",
  },
  {
    icon: FaUserGraduate,
    title: "Students & Campus Innovators",
    desc: "Young minds developing campus enterprises and seeking practical skills to launch ventures before graduation.",
  },
  {
    icon: FaLaptopCode,
    title: "Digital Startups & Tech Innovators",
    desc: "Teams building scalable solutions to bridge African infrastructure gaps, operational hurdles, and financial exclusion.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Teachers & Educators",
    desc: "Working to impart practical enterprise knowledge to students while building their own prosperous enterprises.",
  },
];

const WhoWeServe = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
            Target Demographics
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
            Who We Serve
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Whether you are just starting out or looking to scale what you’ve already built, BLEF meets you where you are.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-blef-gold hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blef-green/10 text-blef-green flex items-center justify-center mb-5">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-blef-charcoal mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;