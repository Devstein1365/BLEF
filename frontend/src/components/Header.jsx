import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo-2.png";

const THEMATIC_AREAS = [
  { label: "Entrepreneurship & Business Development", href: "/what-we-do/entrepreneurship-business-development" },
  { label: "Youth Economic Empowerment", href: "/what-we-do/youth-economic-empowerment" },
  { label: "Women's Economic Empowerment", href: "/what-we-do/womens-economic-empowerment" },
  { label: "STEM Education & Innovation", href: "/what-we-do/stem-education-innovation" },
  { label: "Access to Finance & Markets", href: "/what-we-do/access-to-finance-markets" },
  { label: "Inclusive Entrepreneurship & Social Impact", href: "/what-we-do/inclusive-entrepreneurship-social-impact" },
  { label: "Legacy & Sustainable Enterprise Development", href: "/what-we-do/legacy-sustainable-enterprise-development" },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "What We Do", href: "/what-we-do", dropdown: THEMATIC_AREAS },
  { label: "Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "News & Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth hover handlers for desktop with debounced close
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-[1000] w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_16px_rgba(20,82,42,0.08)]" : ""
      }`}
    >
      {/* Utility strip */}
      <div className="hidden md:block bg-blef-green-dark text-white text-[0.78rem]">
        <div className="max-w-[1280px] mx-auto px-6 py-[0.45rem] flex items-center justify-between">
          <div className="flex gap-6">
            <a
              href="tel:+2340000000000"
              className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:text-blef-gold-light transition"
            >
              <FaPhoneAlt size={12} />
              <span>+234 000 000 0000</span>
            </a>
            <a
              href="mailto:info@betterlifefoundation.org"
              className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:text-blef-gold-light transition"
            >
              <FaEnvelope size={12} />
              <span>info@betterlifefoundation.org</span>
            </a>
          </div>

          <div className="flex gap-3.5">
            <a href="#" aria-label="Facebook" className="opacity-90 hover:opacity-100 hover:text-blef-gold-light transition">
              <FaFacebookF size={13} />
            </a>
            <a href="#" aria-label="Twitter / X" className="opacity-90 hover:opacity-100 hover:text-blef-gold-light transition">
              <FaTwitter size={13} />
            </a>
            <a href="#" aria-label="Instagram" className="opacity-90 hover:opacity-100 hover:text-blef-gold-light transition">
              <FaInstagram size={13} />
            </a>
            <a href="#" aria-label="LinkedIn" className="opacity-90 hover:opacity-100 hover:text-blef-gold-light transition">
              <FaLinkedinIn size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-[1280px] mx-auto px-6 py-3 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Better Life Entrepreneurship Foundation" className="h-11 sm:h-[52px] w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-[1.05rem] text-blef-green-dark tracking-tight">
                Better Life Foundation
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex flex-1 justify-center" aria-label="Primary">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <li
                    key={link.label}
                    className="relative list-none py-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to={link.href}
                      onClick={() => setDropdownOpen(false)}
                      className={({ isActive }) =>
                        `group relative inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-md text-[0.92rem] font-semibold transition-colors ${
                          isActive ? "text-blef-green" : "text-blef-charcoal hover:text-blef-green"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.label}</span>
                          <FaChevronDown
                            size={10}
                            className={`transition-transform duration-200 ${
                              dropdownOpen ? "rotate-180 text-blef-green" : ""
                            }`}
                          />
                          <span
                            className={`absolute left-3.5 right-3.5 bottom-1 h-0.5 bg-blef-gold origin-left transition-transform duration-200 ${
                              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                            }`}
                          />
                        </>
                      )}
                    </NavLink>

                    {/* Desktop Dropdown Popover */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                        dropdownOpen
                          ? "opacity-100 visible translate-y-0 pointer-events-auto"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <ul className="min-w-[360px] bg-white border border-neutral-200 rounded-2xl shadow-[0_16px_40px_rgba(20,82,42,0.14)] p-2.5 list-none m-0 z-50">
                        {link.dropdown.map((item) => (
                          <li key={item.label}>
                            <Link
                              to={item.href}
                              onClick={() => setDropdownOpen(false)}
                              className="block px-3.5 py-2.5 rounded-xl text-[0.88rem] font-medium text-blef-charcoal border-l-[3px] border-transparent hover:bg-blef-cream hover:border-blef-gold hover:text-blef-green-dark transition-all"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={link.label} className="list-none">
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `group relative inline-flex items-center px-3.5 py-2.5 rounded-md text-[0.92rem] font-semibold transition-colors ${
                          isActive ? "text-blef-green" : "text-blef-charcoal hover:text-blef-green"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {link.label}
                          <span
                            className={`absolute left-3.5 right-3.5 bottom-1 h-0.5 bg-blef-gold origin-left transition-transform duration-200 ${
                              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/get-involved"
              className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-blef-green text-white font-bold text-[0.88rem] whitespace-nowrap bg-gradient-to-br from-blef-green to-blef-green hover:from-blef-green hover:to-blef-gold hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(212,160,23,0.35)] transition-all duration-300"
            >
              Get Involved
            </Link>

            <button
              className="lg:hidden flex items-center justify-center w-9 h-9 text-blef-green-dark"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-white border-t border-neutral-200 transition-[max-height] duration-300 ${
          mobileOpen ? "max-h-[calc(100vh-90px)] overflow-y-auto" : "max-h-0"
        }`}
      >
        <ul className="list-none m-0 px-4 pt-2 pb-6">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <li key={link.label} className="list-none border-b border-neutral-200">
                <div className="flex items-center justify-between py-3.5">
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-semibold text-[0.98rem] text-blef-charcoal hover:text-blef-green flex-1"
                  >
                    {link.label}
                  </Link>
                  <button
                    onClick={() => setMobileDropdownOpen((v) => !v)}
                    aria-label="Toggle thematic areas sub-menu"
                    className="p-2 text-blef-charcoal hover:text-blef-green"
                  >
                    <FaChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        mobileDropdownOpen ? "rotate-180 text-blef-green" : ""
                      }`}
                    />
                  </button>
                </div>
                <ul
                  className={`list-none m-0 bg-blef-cream rounded-xl overflow-hidden transition-[max-height] duration-300 ${
                    mobileDropdownOpen ? "max-h-[600px] mb-3 p-2" : "max-h-0"
                  }`}
                >
                  {link.dropdown.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 text-[0.84rem] font-medium text-blef-green-dark hover:text-blef-gold"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.label} className="list-none">
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3.5 font-semibold text-[0.98rem] text-blef-charcoal border-b border-neutral-200"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
          <li className="list-none pt-4">
            <Link
              to="/get-involved"
              onClick={() => setMobileOpen(false)}
              className="flex justify-center w-full px-6 py-2.5 rounded-full bg-blef-green text-white font-bold text-[0.88rem]"
            >
              Get Involved
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;