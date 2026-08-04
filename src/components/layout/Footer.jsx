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
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950/50 pt-16">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-blue-900/10 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-12 lg:px-8">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-3xl font-black tracking-tight text-transparent">
            {footerData.name}
          </h3>
          <p className="mt-3 font-medium text-blue-400">
            {footerData.role}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-500">
            {footerData.description}
          </p>

          {/* Social Links Rendering */}
          <div className="mt-8 flex justify-center gap-4">
            {footerData.socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 transition-all hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,.4)]"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-medium text-slate-400">
              © {year} {footerData.name}. All rights reserved.
            </p>
            <p className="mt-1.5 text-sm text-slate-500">
              Built with React, Vite & Tailwind CSS.
            </p>
          </div>

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
      </div>
    </footer>
  );
};

export default Footer;