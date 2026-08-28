import { useEffect, useRef, useState } from "react";
import empoweringImg from "../../assets/hero/Empowering People.jpg";
import buildingImg from "../../assets/hero/Building Enterprises.jpg";
import creatingImg from "../../assets/hero/Creating Legacies.jpg";

const HERO_SLIDES = [
  
  {
    image: buildingImg,
    tagline: "Building Enterprises.",
    lead: "Building Enterprises.",
    middle: "Empowering People.",
    end: "Creating Legacies.",
    description:
      "Transitioning African startups and SMEs from guesswork to scalable, structured, and profitable businesses that survive year five.",
  },
  {
    image: creatingImg,
    tagline: "Creating Legacies.",
    lead: "Creating Legacies.",
    middle: "Empowering People.",
    end: "Building Enterprises.",
    description:
      "Fostering generational wealth, documented workflows, and sustainable institutions built to outlast their original founders.",
  },
  {
    image: empoweringImg,
    tagline: "Empowering People.",
    lead: "Empowering People.",
    middle: "Building Enterprises.",
    end: "Creating Legacies.",
    description:
      "Equipping youth, women, and aspiring founders across Africa with free, practical skills, mentorship, and lifelong community support.",
  },
];

const STATS = [
  { label: "Entrepreneurs Reached", value: 5000, suffix: "+" },
  { label: "Signups Per 100 Outreach", value: 20, suffix: "+" },
  { label: "Thematic Focus Areas", value: 7, suffix: "" },
  { label: "Target Demographics", value: 45, prefix: "Ages 16-", suffix: "" },
];

function useCountUp(target, start) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame;
    const duration = 1600;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return value;
}

function StatItem({ stat, start }) {
  const count = useCountUp(stat.value, start);
  return (
    <div className="text-center px-4">
      <div className="text-3xl sm:text-4xl font-extrabold text-white">
        {stat.prefix || ""}
        {count.toLocaleString()}
        {stat.suffix || ""}
      </div>
      <div className="mt-1 text-xs sm:text-sm font-medium text-white/75 uppercase tracking-wide">
        {stat.label}
      </div>
    </div>
  );
}

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  // Background slideshow auto-advance (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Stats Intersection Observer
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const active = HERO_SLIDES[currentSlide];

  return (
    <section className="relative overflow-hidden bg-blef-green-dark min-h-[680px] lg:min-h-[600px] flex flex-col justify-between">
      
      {/* Background Slideshow Images */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            currentSlide === idx ? "opacity-100 scale-105 transition-transform duration-[6000ms]" : "opacity-0 scale-100"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Dark & Emerald Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-blef-green-dark/65 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/50" />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-blef-gold/20 blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 pt-24 pb-3 sm:pt-32 sm:pb-24 my-[-20px]">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-blef-gold-light text-xs font-semibold uppercase tracking-widest border border-white/20 mb-6">
            <span>Better Life Entrepreneurship Foundation</span>
          </div>

          {/* Dynamic Bold Phrase Display */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight transition-all duration-700">
            <span className="text-blef-gold-light block drop-shadow-md">
              {active.tagline}
            </span>
            
          </h1>

        

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a
              href="/get-involved"
              className="inline-flex items-center px-8 py-4 rounded-full bg-blef-gold text-blef-charcoal font-black text-sm sm:text-base hover:bg-blef-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,160,23,0.45)] transition-all duration-300 uppercase tracking-wider"
            >
              Join a Session
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white/50 text-white font-bold text-sm sm:text-base hover:bg-white hover:text-blef-green-dark hover:border-white transition-all duration-300"
            >
              Explore Our Mission
            </a>
          </div>

          {/* Slide Indicator Bars */}
          <div className="flex items-center gap-3 mt-10">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="group flex flex-col items-start gap-1 cursor-pointer py-1"
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentSlide === idx
                      ? "w-12 bg-blef-gold"
                      : "w-6 bg-white/30 group-hover:bg-white/60"
                  }`}
                />
                <span
                  className={`text-[0.65rem] font-bold uppercase tracking-wider transition-colors hidden sm:block ${
                    currentSlide === idx ? "text-blef-gold-light" : "text-white/40"
                  }`}
                >
                  {slide.tagline.replace(".", "")}
                </span>
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Stats Bar */}
      <div
        ref={statsRef}
        className="relative z-10 border-t border-white/15 bg-black/10 backdrop-blur-md"
      >
        <div className="max-w-[1280px] mx-auto px-6 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} start={statsVisible} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;