import { motion } from "framer-motion";
import profile from "@/assets/images/profile2.png";

import { FaReact, FaLaravel, FaJs } from "react-icons/fa";
import { SiPostgresql, SiMysql } from "react-icons/si";

const HeroImage = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full lg:h-[560px] lg:block relative mt-10 lg:mt-0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      {/* Desktop Ambient Glow */}
      <div className="absolute hidden lg:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-[100px]" />

      {/* Profile Image Wrapper with 3D Hologram Effect */}
      <div className="relative flex h-72 w-72 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 items-center justify-center xl:h-80 xl:w-80">
        
        {/* Outer Rotating Dashed Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/50 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
        />

        {/* Inner Rotating Solid Ring (Reverse) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border border-blue-500/40 border-t-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
        />

        {/* Holographic Inner Sphere Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-500/10 to-purple-500/20 blur-md pointer-events-none" />

        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="holo-border tilt-shine relative z-10 h-56 w-56 overflow-hidden rounded-full border-4 border-white/60 dark:border-slate-700 bg-dreamy-glass shadow-[0_0_50px_rgba(37,99,235,.2)] xl:h-64 xl:w-64 backdrop-blur-md"
        >
          <img
            src={profile}
            alt="Eka Nazar Fajriansyah"
            className="h-full w-full object-cover scale-[2.2] object-[90%_100%] -translate-x-8"
          />
        </motion.div>
      </div>

      {/* Tech Badges Container */}
      {/* On mobile: row grid below image. On Desktop: absolutely positioned floating around image */}
      <div className="mt-12 flex flex-wrap justify-center gap-3 lg:mt-0 lg:block lg:absolute lg:inset-0 pointer-events-none">
        
        {/* ReactJS */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0, ease: "easeInOut" }}
          className="flex lg:absolute lg:-left-6 lg:top-24 items-center gap-2.5 rounded-2xl border border-white/40 dark:border-slate-700/60 bg-dreamy-glass px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] pointer-events-auto transition-all hover:scale-110 hover:border-blue-400/50 hover:bg-dreamy-glass hover:text-blue-700"
        >
          <div className="flex items-center justify-center rounded-lg bg-white dark:bg-slate-900/80 dark:bg-slate-800/80 p-1.5 ring-1 ring-slate-300 dark:ring-slate-700">
            <FaReact size={18} className="text-sky-400" />
          </div>
          <span>ReactJS</span>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
          className="flex lg:absolute lg:left-1/2 lg:-top-4 lg:-translate-x-1/2 items-center gap-2.5 rounded-2xl border border-white/40 dark:border-slate-700/60 bg-dreamy-glass px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] pointer-events-auto transition-all hover:scale-110 hover:border-blue-400/50 hover:bg-dreamy-glass hover:text-blue-700"
        >
          <div className="flex items-center justify-center rounded-lg bg-white dark:bg-slate-900/80 dark:bg-slate-800/80 p-1.5 ring-1 ring-slate-300 dark:ring-slate-700">
            <FaJs size={18} className="text-yellow-400" />
          </div>
          <span>JavaScript</span>
        </motion.div>

        {/* Laravel */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.6, ease: "easeInOut" }}
          className="flex lg:absolute lg:-left-2 lg:bottom-24 items-center gap-2.5 rounded-2xl border border-white/40 dark:border-slate-700/60 bg-dreamy-glass px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] pointer-events-auto transition-all hover:scale-110 hover:border-blue-400/50 hover:bg-dreamy-glass hover:text-blue-700"
        >
          <div className="flex items-center justify-center rounded-lg bg-white dark:bg-slate-900/80 dark:bg-slate-800/80 p-1.5 ring-1 ring-slate-300 dark:ring-slate-700">
            <FaLaravel size={18} className="text-red-500" />
          </div>
          <span>Laravel</span>
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2.4, ease: "easeInOut" }}
          className="flex lg:absolute lg:-right-6 lg:top-32 items-center gap-2.5 rounded-2xl border border-white/40 dark:border-slate-700/60 bg-dreamy-glass px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] pointer-events-auto transition-all hover:scale-110 hover:border-blue-400/50 hover:bg-dreamy-glass hover:text-blue-700"
        >
          <div className="flex items-center justify-center rounded-lg bg-white dark:bg-slate-900/80 dark:bg-slate-800/80 p-1.5 ring-1 ring-slate-300 dark:ring-slate-700">
            <SiPostgresql size={18} className="text-blue-600" />
          </div>
          <span>PostgreSQL</span>
        </motion.div>

        {/* MySQL */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 3.2, ease: "easeInOut" }}
          className="flex lg:absolute lg:right-2 lg:bottom-28 items-center gap-2.5 rounded-2xl border border-white/40 dark:border-slate-700/60 bg-dreamy-glass px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] pointer-events-auto transition-all hover:scale-110 hover:border-blue-400/50 hover:bg-dreamy-glass hover:text-blue-700"
        >
          <div className="flex items-center justify-center rounded-lg bg-white dark:bg-slate-900/80 dark:bg-slate-800/80 p-1.5 ring-1 ring-slate-300 dark:ring-slate-700">
            <SiMysql size={18} className="text-sky-500" />
          </div>
          <span>MySQL</span>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default HeroImage;