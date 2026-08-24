import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBullseye,
  FaEye,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaSeedling,
  FaAward,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

const OBJECTIVES = [
  {
    id: 1,
    icon: FaChartLine,
    title: "PRACTICAL BUSINESS EDUCATION",
    highlight: "Core Competency Mastery",
    description:
      "Deliver free, practical business education to first-generation entrepreneurs and SMEs across Africa, covering strategy & systems, marketing, and finance.",
  },
  {
    id: 2,
    icon: FaUsers,
    title: "YOUTH & WOMEN'S EMPOWERMENT",
    highlight: "Inclusive Economic Pathways",
    description:
      "Expand youth and women's economic empowerment by creating structured, accessible pathways into entrepreneurship and sustainable business growth.",
  },
  {
    id: 3,
    icon: FaBullseye,
    title: "FINANCE & MARKET ACCESS",
    highlight: "Connecting Effort to Capital",
    description:
      "Bridge the finance and market access gap by connecting entrepreneurs to funding opportunities, investors, and viable commercial markets for their goods and services.",
  },
  {
    id: 4,
    icon: FaShieldAlt,
    title: "PEER ACCOUNTABILITY GROUPS",
    highlight: "Sustained Post-Training Discipline",
    description:
      "Build a culture of accountability and community through peer support groups that keep entrepreneurs connected, motivated, and growing long after training ends.",
  },
  {
    id: 5,
    icon: FaLightbulb,
    title: "STEM EDUCATION & INNOVATION",
    highlight: "Digital Problem-Solving",
    description:
      "Promote STEM education and innovation as practical tools for solving real enterprise, operational, and community challenges across Africa.",
  },
  {
    id: 6,
    icon: FaSeedling,
    title: "LEGACY & SUSTAINABLE ENTERPRISES",
    highlight: "Generational Wealth Creation",
    description:
      "Foster legacy-minded, sustainable enterprises that outlast their founders and create lasting economic impact for families and communities.",
  },
];

const MissionVisionValues = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentSlide((curr) => (curr === 0 ? OBJECTIVES.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((curr) => (curr === OBJECTIVES.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, currentSlide]);

  const active = OBJECTIVES[currentSlide];
  const Icon = active.icon;

  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Lead */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
            Institutional Blueprint
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
            Our Vision, Mission & Objectives
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Where you start should never determine where you can go. We exist to bridge Africa's entrepreneurial knowledge and access gap.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="bg-blef-green-dark rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blef-gold text-blef-charcoal flex items-center justify-center mb-6 shadow-md shadow-blef-gold/20">
                <FaEye size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-blef-gold-light">
                Our Vision
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-2 mb-4 leading-tight">
                Generational Enterprises Driving Inclusive Growth
              </h3>
              <p className="text-white/85 leading-relaxed text-base">
                To build a generation of empowered first-generation entrepreneurs and SMEs across Africa whose enterprises drive inclusive growth and lasting legacies in their communities.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-blef-cream rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blef-green text-white flex items-center justify-center mb-6 shadow-md shadow-blef-green/20">
                <FaBullseye size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-blef-green-dark">
                Our Mission
              </span>
              <h3 className="text-2xl font-extrabold text-blef-charcoal mt-2 mb-4 leading-tight">
                Practical Skills, Finance & Innovation
              </h3>
              <p className="text-neutral-700 leading-relaxed text-base">
                We equip people—especially youth and women—with the practical skills, access to finance, and innovation tools needed to start, grow, and sustain successful businesses, while championing inclusive and socially impactful entrepreneurship across Africa.
              </p>
            </div>
          </div>
        </div>

        {/* Color Philosophy Banner */}
        <div className="bg-gradient-to-r from-blef-green-dark via-blef-green to-blef-gold/90 rounded-3xl p-8 sm:p-10 text-white mb-20 shadow-lg">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blef-gold-light">
              Brand Philosophy
            </span>
            <h3 className="text-2xl font-extrabold mt-2 mb-4">
              Our Colours: Grass Green & Gold
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-white/90 leading-relaxed">
              <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 font-bold text-white mb-2">
                  <FaSeedling className="text-blef-gold-light" />
                  <span>Grass Green (Growth & Grassroots)</span>
                </div>
                Represents renewal and the small seed of ambition planted in a market stall, spare bedroom, or side hustle—the fertile ground every entrepreneur starts from.
              </div>
              <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 font-bold text-white mb-2">
                  <FaAward className="text-blef-gold-light" />
                  <span>Gold (Excellence & Legacy)</span>
                </div>
                Represents financial and generational wealth, the reward for resilience, and the gold standard of excellence we hold our training and community to.
              </div>
            </div>
          </div>
        </div>

        {/* Clean Outlined / Shadowed Strategic Objectives Slider */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
              Actionable Mandate
            </span>
            <h3 className="mt-3 text-3xl font-extrabold text-blef-charcoal tracking-tight">
              Our Strategic Objectives
            </h3>
            <p className="text-sm text-neutral-500 mt-1">
              Turning ambition into enterprise, and enterprise into legacy
            </p>
          </div>

          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative bg-white rounded-3xl border-2 border-blef-green/30 shadow-[0_16px_48px_rgba(20,82,42,0.08)] overflow-hidden min-h-[350px] sm:min-h-[380px] flex flex-col justify-center items-center px-8 sm:px-20 py-12 text-center transition-all duration-300 hover:border-blef-green"
          >
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              aria-label="Previous Objective"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-100 hover:bg-blef-green hover:text-white text-blef-charcoal flex items-center justify-center transition-all cursor-pointer border border-neutral-200 shadow-sm"
            >
              <FaChevronLeft size={16} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              aria-label="Next Objective"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-100 hover:bg-blef-green hover:text-white text-blef-charcoal flex items-center justify-center transition-all cursor-pointer border border-neutral-200 shadow-sm"
            >
              <FaChevronRight size={16} />
            </button>

            {/* Slide Details */}
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-blef-green/10 text-blef-green border border-blef-green/20 flex items-center justify-center mb-4 shadow-sm">
                <Icon size={24} />
              </div>

              <span className="text-[0.72rem] sm:text-xs font-extrabold uppercase tracking-widest text-blef-gold mb-2">
                Strategic Objective 0{active.id} of 06
              </span>

              <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blef-charcoal uppercase leading-tight mb-2">
                {active.title}
              </h4>

              <p className="text-xs sm:text-sm font-semibold text-blef-green-dark mb-4">
                {active.highlight}
              </p>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mb-8 font-normal">
                {active.description}
              </p>

              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blef-green hover:bg-blef-green-dark text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-blef-green/20"
              >
                <span>Explore Programmes</span>
                <FaArrowRight size={10} />
              </Link>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2.5 mt-6">
            {OBJECTIVES.map((obj, idx) => (
              <button
                key={obj.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to objective ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx
                    ? "w-8 bg-blef-green"
                    : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVisionValues;