import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import footerData from "./footerData";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 lg:px-8">

        {/* Top */}

        <div className="text-center">

          <h3 className="text-2xl font-bold text-white">
            {footerData.name}
          </h3>

          <p className="mt-2 text-slate-400">
            {footerData.role}
          </p>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-500">
            {footerData.description}
          </p>

        </div>

        {/* Divider */}

        <div className="h-px bg-slate-800" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm md:flex-row">

          <div className="text-center md:text-left">

            <p className="text-slate-500">
              © {year} {footerData.name}
            </p>

            <p className="mt-1 text-slate-600">
              Built with React, Vite & Tailwind CSS.
            </p>

          </div>

          <motion.button
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={scrollToTop}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-700
              px-5
              py-2.5
              text-slate-400
              transition
              hover:border-blue-500
              hover:text-blue-400
            "
          >
            Back to Top

            <ArrowUp size={16} />
          </motion.button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;