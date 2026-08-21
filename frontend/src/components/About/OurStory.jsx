import {
  FaCheck,
  FaAward,
  FaHandsHelping,
} from "react-icons/fa";

const DIFFERENTIATORS = [
  {
    title: "Ultra-Localized Content",
    description: "Our training is not imported from Western curricula. It is designed for African entrepreneurs using local market realities.",
  },
  {
    title: "Legacy Over Short-Term Growth",
    description: "We don't just teach you to start; we teach you to build businesses that create generational impact.",
  },
  {
    title: "Community & Accountability",
    description: "Our peer accountability groups ensure learning continues long after the session ends.",
  },
  {
    title: "Accessible & Free",
    description: "Cost is never a barrier. Our foundational trainings are provided free through strategic partners.",
  },
];

const TARGET_AUDIENCE = [
  "Young first-generation entrepreneurs & SMEs (ages 16–45)",
  "Women in business seeking structured growth and mentorship",
  "Aspiring entrepreneurs in fashion, food, tech, and services",
  "Students, innovators, and teachers building viable ventures",
];

const OurStory = () => {
  return (
    <section className="py-20 sm:py-28 bg-blef-cream relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
              The Reality We Are Changing
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blef-charcoal tracking-tight leading-[1.18]">
              Your Beginning Doesn’t Have to Look Like{" "}
              <span className="text-blef-green">Anyone Else’s</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed">
              Every day, millions of Africans build businesses out of nothing but grit, with no mentor to call, no course they can afford, and no one who understands the road they’re walking. Formal business training is often expensive, theoretical, or disconnected from the realities of the African market.
            </p>

            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              The Better Life Entrepreneurship Foundation exists to close that gap. A business built the right way doesn't just pay bills—it changes the trajectory of a family, a street, and a generation.
            </p>

            <div className="mt-8 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-blef-green-dark mb-2">
                Who We Serve
              </h4>
              {TARGET_AUDIENCE.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blef-green text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <FaCheck size={9} />
                  </div>
                  <span className="text-sm font-medium text-blef-charcoal">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-xl relative">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-blef-gold/15 text-blef-gold flex items-center justify-center">
                  <FaAward size={18} />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-blef-charcoal">
                    Why BLEF Stands Out
                  </h3>
                  <p className="text-xs text-neutral-500">
                    What makes our approach different
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {DIFFERENTIATORS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-blef-charcoal">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-blef-charcoal">
                  <FaHandsHelping className="text-blef-gold" size={16} />
                  <span>Free & Partner Supported</span>
                </div>
                <span className="text-[0.7rem] font-semibold text-blef-green bg-blef-green/10 px-2.5 py-1 rounded-full">
                  Pan-African Reach
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;