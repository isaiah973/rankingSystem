import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Voting rules", to: "/rules" },
  { label: "Payment", to: "/payment" },
];

const Footer = () => {
  return (
    <footer className="bg-[#e94b35] px-6 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/30 py-14 md:grid-cols-[1fr_auto] md:items-end lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/65">The future is written</p>
            <h2 className="mt-5 max-w-3xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] sm:text-7xl">
              Back the next
              <span className="block font-serif font-normal italic">great writer.</span>
            </h2>
          </div>
          <Link to="/payment" className="group flex w-fit items-center gap-4 bg-[#171713] px-6 py-4 text-xs font-black uppercase tracking-[0.15em] transition hover:bg-white hover:text-[#171713]">
            Cast your vote
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="text-2xl font-black tracking-[-0.05em]">TESWA</Link>
          <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-xs font-bold uppercase tracking-[0.14em] text-white/75 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">© {new Date().getFullYear()} TESWA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
