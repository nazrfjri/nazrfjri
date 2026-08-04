import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-slate-800/60 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row lg:px-8">
        
        {/* Copyright Text */}
        <div className="text-center md:text-left">
          <p className="font-medium text-slate-400">
            © {year} Eka Nazar Fajriansyah. All rights reserved.
          </p>
          <p className="mt-1.5 text-sm text-slate-500">
            Built with React, Vite & Tailwind CSS.
          </p>
        </div>

        {/* Back to Top Button */}
        <motion.button
          whileHover={{ y: -4, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="group flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-300 backdrop-blur-md transition-all hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(37,99,235,.2)]"
        >
          Back to Top
          <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />
        </motion.button>
        
      </div>
    </footer>
  );
};

export default Footer;