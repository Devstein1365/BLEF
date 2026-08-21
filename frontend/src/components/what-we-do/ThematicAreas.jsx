import {
  FaBriefcase,
  FaUsers,
  FaVenus,
  FaFlask,
  FaCoins,
  FaHandsHelping,
  FaSeedling,
  FaArrowRight,
} from "react-icons/fa";

export const THEMATIC_DATA = [
  {
    slug: "entrepreneurship-business-development",
    number: "01",
    icon: FaBriefcase,
    title: "Entrepreneurship & Business Development",
    tagline: "Moving Founders from Guesswork to Structured Growth",
    overview:
      "Every thriving economy is built on the back of strong, well-run businesses, and that is where we start. This is the beating heart of BLEF: equipping entrepreneurs with the strategy, systems, marketing, and financial skills to move from guesswork to growth.",
    deepDive:
      "Too many small businesses in Africa fail not because the idea was weak, but because the foundation was never built. A shop with no bookkeeping. A brand with no marketing plan. A hustle with no system to repeat what worked. Our training goes straight at these gaps. Entrepreneurs leave with a working business model, not just a business idea: how to price for profit, how to manage cash flow, how to market on a limited budget, and how to build the systems that let a business run without the founder holding every piece together. This is where legacies begin, not in the launch, but in the structure that lets a business outlast its first hard season.",
  },
  {
    slug: "youth-economic-empowerment",
    number: "02",
    icon: FaUsers,
    title: "Youth Economic Empowerment",
    tagline: "Investing in the Generation Defining Africa's Next 50 Years",
    overview:
      "Africa’s greatest asset is its young population, and yet too many young people are told to wait their turn. We refuse that narrative. Through targeted training, mentorship, and access to opportunity, we help young people turn ambition into income, and side hustles into structured, scalable businesses.",
    deepDive:
      "For most young Africans, the barrier was never talent. It was access: to capital, to a mentor who has actually built something, to a community that will not let them quit when things get hard. We meet young entrepreneurs exactly where they are, whether that is a phone-based hustle, a campus side business, or an idea still waiting for its first customer, and we walk with them as it grows. Because when a young person builds a real business instead of chasing a scarce job, the impact reaches their household, their peers, and the next generation watching.",
  },
  {
    slug: "womens-economic-empowerment",
    number: "03",
    icon: FaVenus,
    title: "Women's Economic Empowerment",
    tagline: "Backing the Multiplier Effect of Women-Led Enterprise",
    overview:
      "When a woman builds a business, she rarely builds it for herself alone. She builds it for her household, her children, and her community. That ripple effect is why women’s economic empowerment sits at the core of our work.",
    deepDive:
      "Across Africa, women run a significant share of small and informal businesses, yet they remain some of the least funded and least mentored entrepreneurs on the continent. We create safe, supportive spaces where women entrepreneurs access practical training built around their unique realities, connect with established female mentors, and secure funding free from discriminatory collateral hurdles. We are backing the ripple effect that follows every woman who builds something that lasts.",
  },
  {
    slug: "stem-education-innovation",
    number: "04",
    icon: FaFlask,
    title: "STEM Education & Innovation",
    tagline: "Putting Digital Tools in the Hands of Everyday Founders",
    overview:
      "The businesses that will lead Africa’s future will be built on more than hustle—they will be built on innovation. We introduce entrepreneurs to STEM thinking and digital tools as practical assets, not abstract subjects.",
    deepDive:
      "This is not about turning every entrepreneur into a software engineer. It is about giving them the confidence to use digital platforms for tracking inventory, managing sales, reaching new markets, and applying engineering problem-solving to iterate faster. In a fast-changing marketplace where adaptive businesses survive, STEM literacy is mandatory. We ensure grassroots founders are never left behind.",
  },
  {
    slug: "access-to-finance-markets",
    number: "05",
    icon: FaCoins,
    title: "Access to Finance & Markets",
    tagline: "Connecting Effort to Capital and Real Commercial Buyers",
    overview:
      "A brilliant idea without capital or customers is still just an idea. We connect entrepreneurs to funding pathways, investors, and real market opportunities to transition from survival to sustainable revenue.",
    deepDive:
      "Most first-generation entrepreneurs are locked out of systems that let effort compound: bank loans demanding unattainable collateral, investors who never hear their pitch, and closed market channels. We prepare founders to be investment-ready, connect them with grant funding suited to their level, and open commercial buyer linkages. Access to finance and markets is the defining line between a business staying small out of necessity and scaling to its full potential.",
  },
  {
    slug: "inclusive-entrepreneurship-social-impact",
    number: "06",
    icon: FaHandsHelping,
    title: "Inclusive Entrepreneurship & Social Impact",
    tagline: "Deliberately Reaching Those the System Overlooks",
    overview:
      "Talent is universal, but opportunity has never been evenly distributed. This area is our commitment to reaching persons with disabilities, underserved communities, and vulnerable groups with the drive to build.",
    deepDive:
      "Inclusion is a fundamental design choice. We provide physically and digitally accessible training, extend programs beyond major urban centers, and actively onboard founders whom traditional programs write off. A foundation cannot claim genuine social impact while leaving the vulnerable behind. Entrepreneurship is one of Africa's greatest equalizers, and we put it in every willing hand.",
  },
  {
    slug: "legacy-sustainable-enterprise-development",
    number: "07",
    icon: FaSeedling,
    title: "Legacy & Sustainable Enterprise Development",
    tagline: "Building Enterprises That Outlast Their Founders",
    overview:
      "A business that dies with its founder was never truly built to last. We push entrepreneurs to think beyond the next sale toward generational succession and sustainable systems.",
    deepDive:
      "Too many African businesses collapse the moment their founder steps away because the enterprise relied entirely on tribal knowledge. We instill documented workflows, succession planning, and long-term financial management. Empowering people is the starting point. Building enterprises is the middle. But creating legacies—businesses that outlive their founders—is the entire point.",
  },
];

const ThematicAreasDetail = ({ activeSlug }) => {
  return (
    <section className="py-20 sm:py-28 bg-blef-cream relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
            Detailed Pillars
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
            Our 7 Thematic Areas in Depth
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Explore the comprehensive programmatic frameworks that guide every BLEF intervention, cohort, and partnership.
          </p>
        </div>

        <div className="space-y-10">
          {THEMATIC_DATA.map((area) => {
            const Icon = area.icon;
            const isHighlighted = activeSlug === area.slug;

            return (
              <div
                key={area.slug}
                id={area.slug}
                className={`scroll-mt-28 rounded-3xl p-8 sm:p-12 transition-all duration-300 border ${
                  isHighlighted
                    ? "bg-white border-blef-gold shadow-2xl ring-2 ring-blef-gold/50"
                    : "bg-white border-neutral-200/90 shadow-sm hover:shadow-xl"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-blef-green text-white flex items-center justify-center shadow-md shadow-blef-green/20">
                        <Icon size={24} />
                      </div>
                      <span className="text-3xl font-extrabold text-blef-gold">
                        {area.number}
                      </span>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-widest text-blef-green-dark block mb-2">
                      {area.tagline}
                    </span>
                    <h3 className="text-2xl font-extrabold text-blef-charcoal leading-snug">
                      {area.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-8 space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
                    <p className="font-semibold text-blef-charcoal">
                      {area.overview}
                    </p>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {area.deepDive}
                    </p>

                    <div className="pt-4 flex items-center gap-4">
                      <a
                        href="/get-involved"
                        className="inline-flex items-center gap-2 text-xs font-bold text-blef-green hover:text-blef-green-dark transition"
                      >
                        <span>Join a session in this thematic area</span>
                        <FaArrowRight size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThematicAreasDetail;