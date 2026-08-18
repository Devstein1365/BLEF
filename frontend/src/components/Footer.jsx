import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../assets/logo.png"; // adjust path if needed

const THEMATIC_LINKS = [
  { label: "Entrepreneurship & Business Development", href: "/what-we-do/entrepreneurship-business-development" },
  { label: "Youth Economic Empowerment", href: "/what-we-do/youth-economic-empowerment" },
  { label: "Women's Economic Empowerment", href: "/what-we-do/womens-economic-empowerment" },
  { label: "STEM Education & Innovation", href: "/what-we-do/stem-education-innovation" },
  { label: "Access to Finance & Markets", href: "/what-we-do/access-to-finance-markets" },
  { label: "Inclusive Entrepreneurship", href: "/what-we-do/inclusive-entrepreneurship-social-impact" },
  { label: "Sustainable Enterprise Development", href: "/what-we-do/legacy-sustainable-enterprise-development" },
];

const QUICK_LINKS = [
  { label: "About BLEF", href: "/about" },
  { label: "Our Focus Areas", href: "/what-we-do" },
  { label: "Projects & Impact", href: "/impact" },
  { label: "Get Involved / Partner", href: "/get-involved" },
  { label: "News & Media", href: "/media" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIAL_LINKS = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter / X" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-blef-charcoal text-white pt-16 pb-10 border-t border-white/10 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <a href="/" className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Better Life Foundation Logo"
                className="h-12 w-auto bg-white/90 p-1.5 rounded-lg"
              />
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block">
                  Better Life Foundation
                </span>
                <span className="text-[0.68rem] text-blef-gold uppercase font-bold tracking-wider">
                  BLEF Nigeria
                </span>
              </div>
            </a>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm mb-6">
              Empowering People. Building Enterprises. Creating Legacies. A catalytic NGO dedicated to grassroots enterprise, sustainable funding access, and inclusive growth across Nigeria.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-2.5 mt-auto">
              {SOCIAL_LINKS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:bg-blef-green hover:text-white hover:border-blef-green transition-all duration-200"
                  >
                    <Icon size={13} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-blef-gold mb-5 pb-1 border-b border-white/10 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300 list-none p-0 m-0">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-blef-gold-light hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Thematic Areas (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-blef-gold mb-5 pb-1 border-b border-white/10 inline-block">
              Our Thematic Areas
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300 list-none p-0 m-0">
              {THEMATIC_LINKS.map((area) => (
                <li key={area.label}>
                  <a
                    href={area.href}
                    className="hover:text-blef-gold-light hover:translate-x-1 inline-block transition-transform duration-200 leading-snug"
                  >
                    {area.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Secretariat (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-blef-gold mb-5 pb-1 border-b border-white/10 inline-block">
              Secretariat
            </h4>
            <ul className="space-y-3.5 text-sm text-neutral-300 list-none p-0 m-0">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blef-gold mt-1 shrink-0" size={14} />
                <span className="leading-snug">
                  Abuja Secretariat, Federal Capital Territory, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blef-gold shrink-0" size={13} />
                <a href="tel:+2340000000000" className="hover:text-white transition">
                  +234 000 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blef-gold shrink-0" size={13} />
                <a
                  href="mailto:info@betterlifefoundation.org"
                  className="hover:text-white transition truncate"
                >
                  info@betterlifefoundation.org
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-white/10">
              <a
                href="/donate"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-full bg-blef-gold text-blef-charcoal font-bold text-xs uppercase tracking-wider hover:bg-blef-gold-light transition-all shadow-md shadow-blef-gold/20"
              >
                <FaHeart className="mr-2 text-blef-green-dark" size={12} />
                Support Our Interventions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} Better Life Foundation (BLEF). All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms of Engagement
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-blef-gold hover:text-blef-gold-light transition cursor-pointer"
            >
              <span>Back to Top</span>
              <FaArrowUp size={10} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;