import { FaFilePdf, FaDownload, FaBookOpen } from "react-icons/fa";

const PUBLICATIONS = [
  {
    title: "The State of First-Generation African SMEs: Survival Beyond Year Five",
    type: "Annual Research Report",
    date: "2026 Edition",
    size: "2.4 MB",
    summary:
      "A comprehensive analysis of structural bottlenecks in bookkeeping, localized marketing, and cash flow across 20+ Nigerian states.",
  },
  {
    title: "Closing the African Women MSME Financing & Mentorship Gap",
    type: "Case Study & Policy Paper",
    date: "2026 Edition",
    size: "1.8 MB",
    summary:
      "Field insights on how non-collateral capital and peer support cohorts catalyze micro-business expansion.",
  },
  {
    title: "From Hustle to Legacy: Systems & Succession in Informal Enterprise",
    type: "Knowledge Hub Brief",
    date: "2025/2026",
    size: "1.2 MB",
    summary:
      "Practical blueprints for transition from founder-dependent operations to institutionalized enterprises.",
  },
];

const ResearchKnowledgeHub = () => {
  return (
    <section id="reports" className="py-20 sm:py-28 bg-white scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
              Knowledge Hub & Publications
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
              Research, Reports & Case Studies
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              Open-access research papers, policy briefs, and verified impact reports documenting our field findings across Africa.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-blef-green bg-blef-green/10 px-4 py-2 rounded-full">
            <FaBookOpen size={14} />
            <span>Open Access Repository</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PUBLICATIONS.map((pub, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200 hover:border-blef-green hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-blef-green-dark bg-blef-green/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {pub.type}
                  </span>
                  <FaFilePdf className="text-red-500" size={22} />
                </div>

                <h3 className="text-lg font-bold text-blef-charcoal mb-3 leading-snug">
                  {pub.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  {pub.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-medium">
                  {pub.date} • {pub.size}
                </span>
                <button
                  onClick={() => alert("Downloading publication...")}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blef-green hover:text-blef-green-dark transition cursor-pointer"
                >
                  <span>Download</span>
                  <FaDownload size={11} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchKnowledgeHub;