import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Voting rules", to: "/rules" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="relative z-50 border-b border-[#171713]/15 bg-[#f4efe4] text-[#171713]">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16" aria-label="Main navigation">
        <Link
          to="/"
          className="text-2xl font-black tracking-[-0.05em] transition-colors hover:text-[#e94b35]"
          aria-label="TESWA home"
        >
          TESWA
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:text-[#e94b35] ${
                  isActive
                    ? "text-[#e94b35] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#e94b35]"
                    : "text-[#171713]/70"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/payment"
          className="group hidden items-center gap-2 bg-[#171713] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#e94b35] md:inline-flex"
        >
          Cast your vote
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center border border-[#171713]/20 transition hover:border-[#e94b35] hover:text-[#e94b35] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`absolute left-0 right-0 top-full overflow-hidden border-b border-[#171713]/15 bg-[#f4efe4] shadow-[0_18px_35px_rgba(23,23,19,.12)] transition-all duration-300 md:hidden ${
          isOpen ? "visible max-h-96 opacity-100" : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-3 sm:px-10">
          {links.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center justify-between border-b border-[#171713]/15 py-4 text-sm font-black uppercase tracking-[0.12em] ${
                  isActive ? "text-[#e94b35]" : "text-[#171713]"
                }`
              }
            >
              <span>{link.label}</span>
              <span className="font-serif text-sm italic text-[#171713]/35">0{index + 1}</span>
            </NavLink>
          ))}
          <Link
            to="/payment"
            className="mt-5 flex items-center justify-between bg-[#e94b35] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white"
          >
            Cast your vote
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
