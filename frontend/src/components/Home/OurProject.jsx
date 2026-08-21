import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";

const CATEGORIES = [
  "All Initiatives",
  "Summits & Conferences",
  "Bootcamps",
  "Outreaches",
];

const PROJECTS = [
  {
    id: 1,
    title: "African Youth Entrepreneurs Summit (AYES)",
    category: "Summits & Conferences",
    thematicArea: "Youth Economic Empowerment",
    location: "Abuja (FCT) & Pan-African Virtual",
    date: "Upcoming Convening",
    status: "Upcoming",
    summary:
      "A premier convening uniting young founders, mentors, and corporate partners to set the agenda for youth-led enterprise across Africa.",
    metrics: "Flagship Youth Gathering",
    link: "/media",
  },
  {
    id: 2,
    title: "RISE-UP Bootcamp",
    category: "Bootcamps",
    thematicArea: "Entrepreneurship & Business Development",
    location: "Abuja, Nigeria",
    date: "Upcoming Cohort",
    status: "In Progress",
    summary:
      "Intensive, hands-on business acceleration equipping first-generation founders with actionable strategy, marketing funnels, and cash flow tools.",
    metrics: "Structured Cohort Training",
    link: "/media",
  },
  {
    id: 3,
    title: "Building a Legacy Business Summit",
    category: "Summits & Conferences",
    thematicArea: "Legacy & Sustainable Enterprise Development",
    location: "Abuja, Nigeria",
    date: "Completed Convening",
    status: "Completed",
    summary:
      "High-impact gathering focusing on succession planning, documented systems, and shifting mindsets from short-term hustle to multi-generational legacy.",
    metrics: "SME Founders Convened",
    link: "/media",
  },
  {
    id: 4,
    title: "Business On-Time School Outreach",
    category: "Outreaches",
    thematicArea: "STEM Education & Innovation",
    location: "Secondary & Tertiary Institutions",
    date: "Completed Outreach",
    status: "Completed",
    summary:
      "Engaging students and teachers to impart practical enterprise skills and innovation-led business problem-solving from an early stage.",
    metrics: "Students & Teachers Reached",
    link: "/media",
  },
  {
    id: 5,
    title: "Legacy in Motion: Beyond the Safety Net",
    category: "Summits & Conferences",
    thematicArea: "Access to Finance & Markets",
    location: "Abuja Secretariat",
    date: "Completed Convening",
    status: "Completed",
    summary:
      "Empowering entrepreneurs to navigate market hurdles, secure sustainable credit, and eliminate dependency on informal safety nets.",
    metrics: "Micro-Enterprises Supported",
    link: "/media",
  },
  {
    id: 6,
    title: "Inclusive Futures Hub",
    category: "Bootcamps",
    thematicArea: "Inclusive Entrepreneurship & Social Impact",
    location: "Abuja & Regional Hubs",
    date: "Upcoming Cohort",
    status: "Upcoming",
    summary:
      "Targeted incubator for persons with disabilities and underrepresented community innovators building practical business solutions.",
    metrics: "Accessible Incubation",
    link: "/media",
  },
];

const OurProject = () => {
  const [activeCategory, setActiveCategory] = useState("All Initiatives");

  const filteredProjects =
    activeCategory === "All Initiatives"
      ? PROJECTS
      : PROJECTS.filter((proj) => proj.category === activeCategory);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
              Events & Interventions
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
              Our Projects & Convenings
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              Real transformation happens when entrepreneurs gather, learn, and hold each other accountable. Explore our past and upcoming initiatives.
            </p>
          </div>

          <a
            href="/media"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-blef-green hover:text-blef-green-dark transition"
          >
            <span>View All Foundation Events</span>
            <FaArrowRight size={12} />
          </a>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-transparent hover:shadow-[0_16px_40px_rgba(20,82,42,0.12)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative h-52 w-full bg-neutral-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blef-green-dark via-blef-green to-blef-charcoal opacity-90 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-white/40 text-xs font-semibold uppercase tracking-wider">
                  [ {project.title} ]
                </div>

                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                      project.status === "Completed"
                        ? "bg-blef-green text-white"
                        : "bg-blef-gold text-blef-charcoal"
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

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="inline-block bg-black/60 backdrop-blur-sm text-blef-gold-light text-[0.72rem] font-bold px-2.5 py-1 rounded-md">
                    {project.thematicArea}
                  </span>
                </div>
              </div>

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

                <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-blef-green-dark">
                    {project.metrics}
                  </span>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blef-charcoal group-hover:text-blef-green group-hover:translate-x-1 transition-all"
                  >
                    <span>Read More</span>
                    <FaArrowRight size={10} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProject;