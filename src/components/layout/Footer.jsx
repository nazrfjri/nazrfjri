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
    <footer className="relative border-t border-white/60/60 bg-white/70 backdrop-blur-md">
      {/* Animated aurora border top */}
      <div className="gradient-line absolute left-0 top-0 w-full" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row lg:px-8">
        
        {/* Copyright Text */}
        <div className="text-center md:text-left">
          <p className="font-medium text-slate-600">
            © {year} Eka Nazar Fajriansyah. All rights reserved.
          </p>
          <p className="mt-1.5 text-sm text-slate-500">
            Built with React, Vite & Tailwind CSS.
          </p>
        </div>

        {/* Back to Top Button */}
        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="group flex items-center gap-2 rounded-full border border-white/40 bg-white/40 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur-md transition-all hover:border-blue-500 hover:text-blue-600 hover:shadow-[0_0_25px_rgba(37,99,235,.3)]"
        >
          Back to Top
          <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />
        </motion.button>
        
      </div>
    </footer>
  );
};

export default Footer;