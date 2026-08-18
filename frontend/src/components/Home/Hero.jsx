import { useEffect, useRef, useState } from "react";
// import heroImg from "../assets/hero.jpg"; // uncomment once you have a real hero photo

const STATS = [
  { label: "Entrepreneurs Empowered", value: 2500, suffix: "+" },
  { label: "Communities Reached", value: 120, suffix: "+" },
  { label: "States Covered", value: 20, suffix: "" },
  { label: "Grants Disbursed", value: 15, prefix: "₦", suffix: "M+" },
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
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
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

const Hero = ()=> {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

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

  return (
    <section className="relative overflow-hidden bg-blef-green-dark">
      {/* Background image (swap in a real photo when ready) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #14522A 0%, #1F7A3C 55%, #8a6a12 130%)",
          // backgroundImage: `url(${heroImg})`, // use this once heroImg is imported above
        }}
      />

      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-blef-green-dark via-blef-green-dark/70 to-blef-green-dark/30" />

      {/* Subtle radial glow accent */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-blef-gold/20 blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto px-6 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-blef-gold-light text-xs font-semibold uppercase tracking-widest border border-white/15">
            Better Life Foundation
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Empowering People.{" "}
            <span className="text-blef-gold-light">Building Enterprises.</span>{" "}
            Creating Legacies.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
            We equip entrepreneurs, youth, and women with the training, funding,
            and market access they need to build businesses that outlast
            them — turning individual ambition into lasting community impact.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/donate"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-blef-gold text-blef-charcoal font-bold text-sm sm:text-base hover:bg-blef-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,160,23,0.4)] transition-all duration-300"
            >
              Donate Now
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-white/40 text-white font-bold text-sm sm:text-base hover:bg-white hover:text-blef-green-dark hover:border-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        ref={statsRef}
        className="relative border-t border-white/15 bg-black/15 backdrop-blur-sm"
      >
        <div className="max-w-[1280px] mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} start={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero