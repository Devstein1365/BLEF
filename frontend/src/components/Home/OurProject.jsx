import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
import deepFlyer from "../../assets/events/deep-flyer.jpeg";
import riseUpFlyer from "../../assets/events/riseup-flyer.jpeg";
import ayesLogo from "../../assets/ayes-project.jpeg";

const CATEGORIES = [
  "All Initiatives",
  "Summits & Conferences",
  "Bootcamps",
  "Outreaches",
];

const PROJECTS = [
  {
    id: 1,
    title: "Digital Enterprise and Empowerment Programme (DEEP)",
    category: "Bootcamps",
    thematicArea: "Digital Commerce & Economic Empowerment",
    location: "Durumi Community, Abuja",
    date: "October 5th, 2026",
    status: "Registration Open",
    image: deepFlyer,
    summary:
      "A targeted economic empowerment and entrepreneurship / digital skills development project for rural women, youths, petty traders, small-scale women farmers, and first-generation entrepreneurs.",
    metrics: "Community Outreach",
    link: "/get-involved",
  },
  {
    id: 2,
    title: "RISE-UP Bootcamp (Rural Income & Skills Upgrade)",
    category: "Bootcamps",
    thematicArea: "Entrepreneurship & Business Development",
    location: "Abuja, FCT",
    date: "23-29 November 2026",
    status: "Upcoming",
    image: riseUpFlyer,
    summary:
      "A one-week economic empowerment bootcamp covering Business Skills, Digital Commerce (Mobile Money & Online Selling), Mentorship, and Seed Capital Access.",
    metrics: "200 Beneficiaries • 160 Seed Capital Grants",
    link: "/get-involved",
  },
  {
    id: 3,
    title: "African Youth Entrepreneurs Summit (AYES)",
    category: "Summits & Conferences",
    thematicArea: "Youth Economic Empowerment",
    location: "Abuja (FCT) & Pan-African Stream",
    date: "April 2027",
    status: "Upcoming",
    image: ayesLogo,
    summary:
      "A premier convening uniting young founders, mentors, and corporate partners to set the agenda for youth-led enterprise across Africa. Theme: Innovate. Empower. Transform Africa.",
    metrics: "Flagship Continental Summit",
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
              Real transformation happens when entrepreneurs gather, learn, and build sustainable enterprises. Explore our upcoming cohorts and summits.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-transparent hover:shadow-[0_16px_40px_rgba(20,82,42,0.12)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative h-60 w-full bg-neutral-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-md ${
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
                  <span className="inline-block bg-black/70 backdrop-blur-sm text-blef-gold-light text-[0.72rem] font-bold px-2.5 py-1 rounded-md">
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
                    <span>Register</span>
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