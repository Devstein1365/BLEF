import { useState, useEffect, useRef, useCallback } from "react";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Amina Yusuf",
    role: "Founder, Dan-Aljanna Agro Processing",
    location: "Kano State",
    thematicArea: "Women's Economic Empowerment",
    program: "Women Enterprise Seed Grant Scheme",
    quote:
      "The seed capital and structured supply-chain training from Better Life Foundation allowed us to expand our grain processing plant from 2 manual mills to 6 automated lines, employing 14 rural women.",
  },
  {
    id: 2,
    name: "Emeka Okonkwo",
    role: "Lead Engineer, ByteLab Robotics",
    location: "Enugu State",
    thematicArea: "STEM Education & Innovation",
    program: "National STEM Labs & Innovation Hub",
    quote:
      "Through BLEF’s innovation grant, we built and distributed low-cost solar-powered learning kits to 35 community schools. Their mentorship gave us institutional credibility to scale across the Southeast.",
  },
  {
    id: 3,
    name: "Fatima Al-Hassan",
    role: "CEO, Savanna Organics",
    location: "Kaduna State",
    thematicArea: "Entrepreneurship & Business Development",
    program: "MSME Scale-Up & Market Access Facility",
    quote:
      "Beyond the non-equity funding, the market linkage clinics connected our shea butter processing brand directly with international export aggregators. Our monthly revenue tripled within 8 months.",
  },
  {
    id: 4,
    name: "Tunde Bakare",
    role: "Co-founder, FarmGrid Logistics",
    location: "Oyo State",
    thematicArea: "Youth Economic Empowerment",
    program: "Youth Agribusiness Incubation Hub",
    quote:
      "BLEF gave us the foundation to move from an ambitious prototype to a full cold-chain logistics fleet supporting over 400 local smallholder farmers.",
  },
  {
    id: 5,
    name: "Blessing Nwachukwu",
    role: "Managing Director, Apex Micro-Wares",
    location: "Rivers State",
    thematicArea: "Access to Finance & Markets",
    program: "Rural Cooperative Micro-Finance Bridge",
    quote:
      "Getting access to clean credit without predatory collateral demands was a game-changer. BLEF is genuinely building businesses designed to outlast their founders.",
  },
  {
    id: 6,
    name: "Ibrahim Musa",
    role: "Founder, AccessTech Hub",
    location: "Abuja (FCT)",
    thematicArea: "Inclusive Entrepreneurship & Social Impact",
    program: "Inclusive Innovation Bootcamp",
    quote:
      "As a founder living with physical disability, finding an NGO that provides tailored infrastructure and equity-focused incubation was life-changing. We've now trained 180+ youth.",
  },
];

const Testimonial = () => {
  // Current index tracks the start item of the visible window
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalItems = TESTIMONIALS.length;
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Auto-slide loop every 3 seconds (3000ms)
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Infinite wrap helper: duplicates list for infinite seamless rendering
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="bg-blef-cream py-20 sm:py-28 overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
              Voices of Impact
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
              Stories from Our Beneficiaries
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              Real founders, innovators, and community leaders whose businesses
              and lives have been transformed through BLEF interventions.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonials"
              className="w-11 h-11 rounded-full border border-neutral-300 bg-white text-blef-charcoal flex items-center justify-center hover:bg-blef-green hover:text-white hover:border-blef-green shadow-sm transition-all duration-200 cursor-pointer"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonials"
              className="w-11 h-11 rounded-full border border-neutral-300 bg-white text-blef-charcoal flex items-center justify-center hover:bg-blef-green hover:text-white hover:border-blef-green shadow-sm transition-all duration-200 cursor-pointer"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            {/* Sliding Track (1 card on mobile, 2 on tablet, 3 on desktop) */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex + totalItems) * (100 / (window?.innerWidth >= 1024 ? 3 : window?.innerWidth >= 640 ? 2 : 1))}%)`,
              }}
            >
              {duplicatedTestimonials.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3.5"
                >
                  <div className="h-full flex flex-col justify-between bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_20px_rgba(20,82,42,0.04)] hover:shadow-[0_16px_36px_rgba(20,82,42,0.1)] transition-all duration-300">
                    <div>
                      {/* Top Bar: Stars & Quote Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-1 text-blef-gold text-xs">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-blef-green/10 flex items-center justify-center text-blef-green">
                          <FaQuoteLeft size={13} />
                        </div>
                      </div>

                      {/* Thematic Area Pill */}
                      <span className="inline-block text-[0.72rem] font-bold text-blef-green-dark bg-blef-green/10 px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">
                        {item.thematicArea}
                      </span>

                      {/* Quote Body */}
                      <p className="text-sm sm:text-[0.92rem] text-neutral-700 leading-relaxed italic mb-6">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Beneficiary Info Footer */}
                    <div className="pt-5 border-t border-neutral-100 flex items-center gap-3.5">
                      {/* Profile Photo Placeholder */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blef-green-dark to-blef-gold flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-inner">
                        {item.name.charAt(0)}
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-blef-charcoal truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-neutral-500 truncate mt-0.5">
                          {item.role}
                        </p>
                        <div className="flex items-center gap-1 text-[0.72rem] text-blef-green font-medium mt-1">
                          <FaMapMarkerAlt size={10} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-blef-green"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;