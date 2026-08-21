import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaSpinner, FaArrowRight } from "react-icons/fa";

const EVENTS = [
  {
    id: 1,
    title: "African Youth Entrepreneurs Summit (AYES)",
    category: "Upcoming",
    tagline: "Uniting Africa's Next Generation of Business Leaders",
    location: "Abuja, Nigeria & Virtual Pan-African Stream",
    date: "Upcoming Convening",
    description:
      "A large-scale gathering bringing together young entrepreneurs, seasoned mentors, corporate leaders, and development partners to set the agenda for youth-led enterprise across Africa.",
  },
  {
    id: 2,
    title: "RISE-UP Bootcamp",
    category: "Upcoming",
    tagline: "Action-Focused Business Acceleration",
    location: "Abuja Secretariat Hub",
    date: "Upcoming Cohort",
    description:
      "Intensive, hands-on business acceleration equipping first-generation founders with actionable strategy, marketing funnels, and cash flow tools.",
  },
  {
    id: 3,
    title: "Inclusive Futures Hub",
    category: "Upcoming",
    tagline: "Removing Barriers for Underserved Innovators",
    location: "Abuja & Regional Centers",
    date: "Upcoming Cohort",
    description:
      "Targeted incubator for persons with disabilities and underrepresented community innovators building practical business solutions.",
  },
  {
    id: 4,
    title: "Building a Legacy Business Summit",
    category: "Past",
    tagline: "Structuring Businesses to Outlast Founders",
    location: "Abuja, Nigeria",
    date: "Completed Convening",
    description:
      "High-impact gathering focusing on succession planning, documented systems, and shifting mindsets from short-term hustle to multi-generational legacy.",
  },
  {
    id: 5,
    title: "Legacy in Motion: Beyond the Safety Net",
    category: "Past",
    tagline: "Navigating Credit and Market Realities",
    location: "Abuja Secretariat",
    date: "Completed Convening",
    description:
      "Empowering entrepreneurs to navigate market hurdles, secure sustainable credit, and eliminate dependency on informal safety nets.",
  },
  {
    id: 6,
    title: "Business On-Time School Outreach",
    category: "Past",
    tagline: "Empowering Students and Teachers",
    location: "Secondary & Tertiary Institutions",
    date: "Completed Outreach",
    description:
      "Engaging students and teachers to impart practical enterprise skills and innovation-led business problem-solving from an early stage.",
  },
];

const EventsSection = () => {
  const [filter, setFilter] = useState("All");

  const filteredEvents =
    filter === "All" ? EVENTS : EVENTS.filter((e) => e.category === filter);

  return (
    <section id="events" className="py-20 sm:py-28 bg-white scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
              Events & Convenings
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
              Where the BLEF Community Gathers
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              Our events bring founders together to sharpen skills, share wins, and build the networks that carry businesses further than they could go alone.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-neutral-100 p-1.5 rounded-full">
            {["All", "Upcoming", "Past"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === tab
                    ? "bg-blef-green text-white shadow-sm"
                    : "text-neutral-600 hover:text-blef-charcoal"
                }`}
              >
                {tab} Events
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200 hover:border-blef-green hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      evt.category === "Upcoming"
                        ? "bg-blef-gold text-blef-charcoal"
                        : "bg-blef-green text-white"
                    }`}
                  >
                    {evt.category === "Upcoming" ? (
                      <FaSpinner size={10} className="animate-spin" />
                    ) : (
                      <FaCheckCircle size={10} />
                    )}
                    <span>{evt.category} Event</span>
                  </span>

                  <span className="text-xs font-medium text-neutral-500 flex items-center gap-1">
                    <FaCalendarAlt size={10} className="text-blef-gold" />
                    {evt.date}
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-blef-green-dark block mb-2">
                  {evt.tagline}
                </span>

                <h3 className="text-xl font-extrabold text-blef-charcoal mb-3 leading-snug">
                  {evt.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {evt.description}
                </p>
              </div>

              <div className="pt-5 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-medium flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-blef-gold" size={11} />
                  {evt.location}
                </span>

                {evt.category === "Upcoming" && (
                  <a
                    href="/get-involved"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blef-green hover:underline"
                  >
                    <span>Register</span>
                    <FaArrowRight size={9} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;