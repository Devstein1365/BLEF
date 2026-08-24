import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaBriefcase,
  FaUsers,
  FaVenus,
  FaFlask,
  FaCoins,
  FaHandsHelping,
  FaSeedling,
} from "react-icons/fa";

const THEMATIC_SLIDES = [
  {
    id: 1,
    icon: FaBriefcase,
    heading: "ENTREPRENEURSHIP & BUSINESS DEVELOPMENT",
    highlight: "Moving Founders from Guesswork to Structured Growth",
    description:
      "Equipping first-generation entrepreneurs with the strategy, systems, marketing, and financial disciplines needed to survive year one and scale past year five.",
    link: "/what-we-do/entrepreneurship-business-development",
  },
  {
    id: 2,
    icon: FaUsers,
    heading: "YOUTH ECONOMIC EMPOWERMENT",
    highlight: "Turning Ambition into Scalable Enterprises",
    description:
      "Africa’s young population is its greatest asset. We meet young founders where they are—turning campus ventures and phone hustles into sustainable businesses.",
    link: "/what-we-do/youth-economic-empowerment",
  },
  {
    id: 3,
    icon: FaVenus,
    heading: "WOMEN'S ECONOMIC EMPOWERMENT",
    highlight: "Catalyzing the Generational Multiplier Effect",
    description:
      "When a woman builds a business, she transforms her entire community. We provide safe spaces, mentorship, and non-predatory funding pathways for women-led MSMEs.",
    link: "/what-we-do/womens-economic-empowerment",
  },
  {
    id: 4,
    icon: FaFlask,
    heading: "STEM EDUCATION & INNOVATION",
    highlight: "Digital Tools in the Hands of Everyday Founders",
    description:
      "Demystifying digital platforms, inventory software, and engineering problem-solving so grassroots businesses can adapt and compete globally.",
    link: "/what-we-do/stem-education-innovation",
  },
  {
    id: 5,
    icon: FaCoins,
    heading: "ACCESS TO FINANCE & MARKETS",
    highlight: "Bridging the Seed Capital & Customer Gap",
    description:
      "Connecting effort to capital by preparing entrepreneurs to be investment-ready and linking them directly to investors and commercial buyers.",
    link: "/what-we-do/access-to-finance-markets",
  },
  {
    id: 6,
    icon: FaHandsHelping,
    heading: "INCLUSIVE ENTREPRENEURSHIP & SOCIAL IMPACT",
    highlight: "Reaching the Underrepresented & Vulnerable",
    description:
      "Deliberately designing accessible programs for persons with disabilities and underserved rural communities that traditional systems overlook.",
    link: "/what-we-do/inclusive-entrepreneurship-social-impact",
  },
  {
    id: 7,
    icon: FaSeedling,
    heading: "LEGACY & SUSTAINABLE ENTERPRISE",
    highlight: "Building Businesses That Outlast Their Founders",
    description:
      "Instilling documented systems, transparent governance, and succession planning so businesses create multi-generational wealth and security.",
    link: "/what-we-do/legacy-sustainable-enterprise-development",
  },
];

const Theme = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrent((curr) => (curr === 0 ? THEMATIC_SLIDES.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurrent((curr) => (curr === THEMATIC_SLIDES.length - 1 ? 0 : curr + 1));
  };

  // Auto-play interval (5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, current]);

  const active = THEMATIC_SLIDES[current];
  const Icon = active.icon;

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-gradient-to-r from-blef-green-dark via-blef-green to-blef-green-dark text-white rounded-3xl shadow-2xl overflow-hidden min-h-[360px] sm:min-h-[400px] flex flex-col justify-center items-center px-8 sm:px-20 py-12 text-center"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blef-gold/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 hover:bg-black/50 text-white flex items-center justify-center transition-all cursor-pointer border border-white/15"
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 hover:bg-black/50 text-white flex items-center justify-center transition-all cursor-pointer border border-white/15"
          >
            <FaChevronRight size={16} />
          </button>

          {/* Slide Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center animate-fade-in key={active.id}">
            
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-blef-gold-light border border-white/15 flex items-center justify-center mb-4">
              <Icon size={22} />
            </div>

            <span className="text-[0.72rem] sm:text-xs font-extrabold uppercase tracking-widest text-blef-gold-light mb-2">
              Thematic Pillar 0{active.id} of 07
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight mb-3">
              {active.heading}
            </h2>

            <p className="text-sm sm:text-base font-semibold text-white/90 mb-3 max-w-xl">
              {active.highlight}
            </p>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl mb-8">
              {active.description}
            </p>

            <Link
              to={active.link}
              className="inline-flex items-center px-8 py-3 rounded-full border-2 border-white text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-blef-green-dark transition-all duration-300 shadow-md"
            >
              Read More
            </Link>
          </div>

        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-6">
          {THEMATIC_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                current === idx
                  ? "w-8 bg-blef-green"
                  : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Theme;