import { Link } from "react-router-dom";
import { FaChevronRight, FaChartLine, FaCheckCircle, FaFileDownload } from "react-icons/fa";
import impactHeroBg from "../../assets/impact-hero-bg.jpeg";

const ImpactHero = () => {
  return (
    <section className="relative bg-blef-green-dark text-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background Image with Dark Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${impactHeroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blef-green-dark/55 via-blef-green-dark/55 to-black/80" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blef-gold/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] h-60 mx-auto px-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-white/70 mb-8">
          <Link to="/" className="hover:text-blef-gold-light transition-colors">
            Home
          </Link>
          <FaChevronRight size={9} className="text-white/40" />
          <span className="text-blef-gold-light">Impact & Reports</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8">
            {/* <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-blef-gold-light text-xs font-bold uppercase tracking-widest border border-white/15">
              Evidence-Based Transformation
            </span> */}

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.12]">
              Measuring Impact, Building Legacies
            </h1>

            {/* <p className="mt-6 text-[14px] sm:text-[14px] lg:text-[16px] text-white/90 leading-relaxed font-normal max-w-2xl">
              We measure our success not only by the businesses we help build, but by how many of them belong to people the system had already written off. Explore our audited metrics, field evaluation frameworks, and research reports.
            </p> */}

            
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default ImpactHero;