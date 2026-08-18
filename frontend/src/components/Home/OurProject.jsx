import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";

const CATEGORIES = [
  "All Projects",
  "Entrepreneurship",
  "Youth Empowerment",
  "Women Empowerment",
  "STEM & Innovation",
  "Access to Finance",
];

const PROJECTS = [
  {
    id: 1,
    title: "1,000 Women Enterprise Seed Grant Scheme",
    category: "Women Empowerment",
    thematicArea: "Women’s Economic Empowerment",
    location: "Lagos & Ogun States",
    date: "Completed • Q2 2026",
    status: "Completed",
    summary:
      "Direct disbursement of non-equity seed grants and capacity training for micro-enterprises run by women across peri-urban communities.",
    metrics: "1,000 Beneficiaries | ₦50M Disbursed",
    link: "/projects/women-enterprise-seed-grant",
  },
  {
    id: 2,
    title: "National STEM Labs & Digital Skills Initiative",
    category: "STEM & Innovation",
    thematicArea: "STEM Education & Innovation",
    location: "Kano, Kaduna & Niger States",
    date: "Ongoing • 2026",
    status: "In Progress",
    summary:
      "Equipping public secondary schools with modern computer laboratories and robotics training kits to foster practical technical competence.",
    metrics: "25 Schools Equipped | 8,500 Students",
    link: "/projects/national-stem-labs",
  },
  {
    id: 3,
    title: "Youth Agribusiness Incubation Hub",
    category: "Youth Empowerment",
    thematicArea: "Youth Economic Empowerment",
    location: "Oyo & Benue States",
    date: "Ongoing • 2026",
    status: "In Progress",
    summary:
      "Comprehensive agribusiness training covering modern hydroponics, supply chain logistics, and direct market linkage for young agri-preneurs.",
    metrics: "350 Agro-Hub Startups Incubated",
    link: "/projects/youth-agribusiness-hub",
  },
  {
    id: 4,
    title: "MSME Scale-Up & Market Access Facility",
    category: "Entrepreneurship",
    thematicArea: "Entrepreneurship & Business Development",
    location: "Enugu, Rivers & Abuja (FCT)",
    date: "Completed • Q1 2026",
    status: "Completed",
    summary:
      "Providing structured bookkeeping, regulatory compliance clinics, and commercial buyer linkups for growing mid-scale enterprises.",
    metrics: "420 Businesses Formalized",
    link: "/projects/msme-scale-up-facility",
  },
  {
    id: 5,
    title: "Rural Cooperative Micro-Finance Bridge",
    category: "Access to Finance",
    thematicArea: "Access to Finance & Markets",
    location: "Plateau & Nasarawa States",
    date: "Completed • 2025/2026",
    status: "Completed",
    summary:
      "Revolving micro-credit facilities for rural farming cooperatives to eliminate predatory middlemen and secure post-harvest storage.",
    metrics: "18 Cooperatives Supported",
    link: "/projects/rural-cooperative-bridge",
  },
  {
    id: 6,
    title: "Inclusive Innovation Bootcamp for Persons with Disabilities",
    category: "Youth Empowerment",
    thematicArea: "Inclusive Entrepreneurship & Social Impact",
    location: "Abuja (FCT)",
    date: "Upcoming • Q4 2026",
    status: "Upcoming",
    summary:
      "Specialized vocational and digital product development training designed to remove accessibility barriers and foster financial independence.",
    metrics: "200 Target Trainees",
    link: "/projects/inclusive-innovation-bootcamp",
  },
];

const OurProject = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((proj) => proj.category === activeCategory);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
              Impact On Ground
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
              Our Projects
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              Explore concrete interventions and community-driven initiatives
              delivering tangible results across Nigeria.
            </p>
          </div>

          <a
            href="/projects"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-blef-green hover:text-blef-green-dark transition"
          >
            <span>View All Foundation Projects</span>
            <FaArrowRight size={12} />
          </a>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-blef-green text-white shadow-md shadow-blef-green/20"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-blef-charcoal"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-transparent hover:shadow-[0_16px_40px_rgba(20,82,42,0.12)] hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-52 w-full bg-neutral-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blef-green-dark via-blef-green to-blef-charcoal opacity-90 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-white/40 text-xs font-semibold uppercase tracking-wider">
                  [ Project Media ]
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                      project.status === "Completed"
                        ? "bg-blef-green text-white"
                        : project.status === "In Progress"
                        ? "bg-blef-gold text-blef-charcoal"
                        : "bg-neutral-800 text-white"
                    }`}
                  >
                    {project.status === "Completed" ? (
                      <FaCheckCircle size={10} />
                    ) : (
                      <FaSpinner size={10} className="animate-spin" />
                    )}
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Thematic Area Tag */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="inline-block bg-black/60 backdrop-blur-sm text-blef-gold-light text-[0.72rem] font-bold px-2.5 py-1 rounded-md">
                    {project.thematicArea}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-1 flex flex-col p-6">
                <div className="flex items-center gap-4 text-xs font-medium text-neutral-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-blef-gold" size={11} />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-blef-gold" size={11} />
                    {project.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-blef-charcoal group-hover:text-blef-green transition-colors leading-snug mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-5">
                  {project.summary}
                </p>

                {/* Metrics & Action */}
                <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-blef-green-dark">
                    {project.metrics}
                  </span>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blef-charcoal group-hover:text-blef-green group-hover:translate-x-1 transition-all"
                  >
                    <span>Details</span>
                    <FaArrowRight size={10} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-10 text-center sm:hidden">
          <a
            href="/projects"
            className="inline-flex items-center justify-center w-full py-3 rounded-full bg-neutral-100 text-blef-charcoal font-bold text-sm"
          >
            <span>View All Foundation Projects</span>
            <FaArrowRight className="ml-2" size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurProject;