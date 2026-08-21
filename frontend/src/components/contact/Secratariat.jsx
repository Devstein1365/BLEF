import { FaUserTie, FaLaptopCode, FaHandshake, FaGavel, FaCoins } from "react-icons/fa";

const DEPARTMENTS = [
  {
    icon: FaUserTie,
    dept: "Executive Director's Office",
    lead: "Bella Khobe Jonathan",
    purpose: "Strategic foundation directives, multi-lateral alliances, and high-level stakeholder relations.",
  },
  {
    icon: FaLaptopCode,
    dept: "Directorate of Programmes",
    lead: "Jonathan Ogoji",
    purpose: "Cohorts, RISE-UP Bootcamps, AYES summit planning, and the 7 thematic pillar curricula.",
  },
  {
    icon: FaHandshake,
    dept: "Communications & Partnerships",
    lead: "Glory Okezie",
    purpose: "Corporate sponsorships, donor engagements, media access, and public dispatch inquiries.",
  },
  {
    icon: FaGavel,
    dept: "Legal & Secretariat",
    lead: "Barr. Ayo Olabode",
    purpose: "Statutory compliance, regulatory frameworks, contracts, and institutional governance.",
  },
  {
    icon: FaCoins,
    dept: "Finance & Accounts",
    lead: "Mary Amogo",
    purpose: "Grant disbursement reconciliation, partner budgeting, and fiscal audit matters.",
  },
];

const SecretariatDirects = () => {
  return (
    <section className="py-20 sm:py-24 bg-blef-cream border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
            Institutional Channels
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blef-charcoal tracking-tight">
            Departmental Inquiries
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Direct your correspondence to the respective administrative unit within our Secretariat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((d, idx) => {
            const Icon = d.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-neutral-200 hover:border-blef-green hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-blef-green/10 text-blef-green flex items-center justify-center mb-5">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-bold text-blef-charcoal mb-1">
                    {d.dept}
                  </h3>
                  <p className="text-xs font-semibold text-blef-gold mb-3">
                    Led by: {d.lead}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {d.purpose}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecretariatDirects;