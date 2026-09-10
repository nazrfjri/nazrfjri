import { useState } from "react";
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
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-slate-800/60 bg-slate-950/80 px-6 py-3 backdrop-blur-md">
        
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="group flex items-center gap-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 font-bold text-white transition-transform group-hover:scale-105">
            E
          </div>
          <span className="text-xl font-bold tracking-tight text-white">nazrfjr.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="rounded-full border border-slate-700 bg-slate-800/50 px-5 py-2 text-sm font-semibold text-white transition-all hover:border-blue-500 hover:bg-blue-600/20"
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-950/95 p-4 backdrop-blur-xl md:hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-slate-800/50 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 pb-1">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
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