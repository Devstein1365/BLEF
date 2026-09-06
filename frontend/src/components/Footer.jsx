import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/logo-2.png";
import { BRAND } from "../utils/constants";

const THEMATIC_LINKS = [
  { label: "Entrepreneurship & Business Dev.", href: "/what-we-do/entrepreneurship-business-development" },
  { label: "Youth Economic Empowerment", href: "/what-we-do/youth-economic-empowerment" },
  { label: "Women's Economic Empowerment", href: "/what-we-do/womens-economic-empowerment" },
  { label: "STEM Education & Innovation", href: "/what-we-do/stem-education-innovation" },
  { label: "Access to Finance & Markets", href: "/what-we-do/access-to-finance-markets" },
  { label: "Inclusive Entrepreneurship", href: "/what-we-do/inclusive-entrepreneurship-social-impact" },
  { label: "Legacy & Sustainable Enterprise", href: "/what-we-do/legacy-sustainable-enterprise-development" },
];

const QUICK_LINKS = [
  { label: "About BLEF", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Impact & MEL", href: "/impact" },
  { label: "Events & Media", href: "/media" },
  { label: "Get Involved & Donate", href: "/get-involved" },
  { label: "Secretariat Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-neutral-800">
          
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-4">
                <img src={logo} alt={BRAND.name} className="h-12 w-auto brightness-110" />
                <div className="flex flex-col leading-tight">
                  <span className="font-extrabold text-base text-white tracking-tight">
                    Better Life
                  </span>
                  <span className="text-[0.68rem] font-bold uppercase tracking-wider text-blef-gold-light">
                    Entrepreneurship Foundation
                  </span>
                </div>
              </Link>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 max-w-sm">
                Empowering people, building enterprises, and creating legacies across Africa through practical business education, mentorship, and peer accountability.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/share/1DCwikjwUF/" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 hover:bg-blef-green hover:text-white text-neutral-300 flex items-center justify-center transition">
                <FaFacebookF size={12} />
              </a>
              <a href="https://x.com/BetterLifeEF" aria-label="Twitter / X" className="w-8 h-8 rounded-full bg-white/10 hover:bg-blef-green hover:text-white text-neutral-300 flex items-center justify-center transition">
                <FaTwitter size={12} />
              </a>
              <a href="https://ng.linkedin.com/in/better-life-entrepreneurship-foundation-911407408" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/10 hover:bg-blef-green hover:text-white text-neutral-300 flex items-center justify-center transition">
                <FaLinkedinIn size={12} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-blef-gold-light mb-4">
              7 Thematic Areas
            </h3>
            <ul className="space-y-2 text-xs text-neutral-400">
              {THEMATIC_LINKS.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="hover:text-white hover:underline transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-blef-gold-light mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-neutral-400">
              {QUICK_LINKS.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="hover:text-white hover:underline transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-blef-gold-light mb-4">
              Secretariat Info
            </h3>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-blef-gold shrink-0 mt-0.5" />
                <span>{BRAND.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <FaPhoneAlt className="text-blef-gold shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${BRAND.phone1Raw}`} className="hover:text-white">{BRAND.phone1}</a>
                  <a href={`tel:${BRAND.phone2Raw}`} className="hover:text-white">{BRAND.phone2}</a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-blef-green hover:bg-blef-green-dark text-white font-bold text-xs transition"
              >
                Join a Session / Partner
              </Link>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {BRAND.name} ({BRAND.acronym}). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-blef-gold font-medium">Grass Green & Gold Standard</span>
            <Link to="/contact" className="hover:text-white transition">Governance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;