import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" }, // Saya tambahkan Skills agar lengkap
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-6 z-50 flex justify-center px-4"
    >
      <div className="flex w-full max-w-4xl items-center justify-between rounded-full border border-slate-700/60 bg-slate-950/60 px-6 py-3.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        
        {/* Logo / Name */}
        <a href="#home" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 font-bold text-white transition-transform duration-300 group-hover:rotate-12">
            E
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-200 transition-colors group-hover:text-white">
            nazrfjr<span className="text-blue-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              <span className="relative z-10">{link.name}</span>
              {/* Hover Pill Background */}
              <div className="absolute inset-0 z-0 scale-50 opacity-0 rounded-full bg-slate-800/80 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        {/* Hire Me / Action Button (Optional desktop addition for conversion) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full border border-blue-500/50 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400 transition-all hover:bg-blue-500 hover:text-white hover:shadow-[0_0_15px_rgba(37,99,235,.4)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Icon (Visual Only) */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/60 bg-slate-800/50 text-slate-300 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        
      </div>
    </motion.header>
  );
};

export default Navbar;