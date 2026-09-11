import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto px-4 md:px-8">
      <div
        className={`holo-border mx-auto flex w-full max-w-6xl items-center justify-between rounded-full px-6 py-3 backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "border border-white/60 bg-dreamy-glass shadow-[0_10px_40px_rgba(37,99,235,0.1)]"
            : "border border-white/40 bg-white/40"
        }`}
      >
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="group flex items-center gap-2"
        >
          <div className="neon-glow flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 font-bold text-slate-900 transition-transform group-hover:scale-110">
            E
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">nazrfjr.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="group relative text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Hire Me Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="group relative rounded-full border border-white/40 bg-white/60 px-5 py-2 text-sm font-semibold text-slate-900 transition-all hover:border-blue-500 hover:bg-blue-600/20 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            <span className="relative z-10">Hire Me</span>
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white text-slate-700 transition-all hover:border-blue-500/50 hover:text-slate-900 md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-2xl border border-white/60 bg-dreamy-glass p-4 backdrop-blur-2xl md:hidden shadow-[0_10px_50px_rgba(0,0,0,0.1)]"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-all hover:bg-blue-500/10 hover:text-slate-900"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-3 pb-1">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3.5 text-sm font-semibold text-slate-900 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;