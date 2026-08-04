import { motion } from "framer-motion";
import profile from "@/assets/images/profile.png";

import { FaReact, FaLaravel, FaJs } from "react-icons/fa";
import { SiPostgresql, SiMysql } from "react-icons/si";

const TechBadge = ({ icon, text, className, delay = 0 }) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`
        absolute hidden lg:flex items-center gap-2.5 rounded-2xl border border-slate-700/50 
        bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur-xl 
        transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:bg-slate-800/80 
        hover:text-white hover:shadow-[0_0_30px_rgba(37,99,235,.3)] cursor-default z-20
        ${className}
      `}
    >
      <div className="flex items-center justify-center rounded-lg bg-slate-800/80 p-1.5 ring-1 ring-slate-700">
        {icon}
      </div>
      <span>{text}</span>
    </motion.div>
  );
};

const HeroImage = () => {
  return (
    <motion.div
      className="relative flex h-[500px] w-full items-center justify-center sm:h-[560px]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      {/* Center Ambient Glow */}
      <div className="absolute h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-[100px]" />

      {/* Tech Badges */}
      <TechBadge
        icon={<FaReact size={18} className="text-sky-400" />}
        text="ReactJS"
        className="-left-6 top-24"
        delay={0}
      />
      <TechBadge
        icon={<FaJs size={18} className="text-yellow-400" />}
        text="JavaScript"
        className="left-1/2 -top-4 -translate-x-1/2"
        delay={0.8}
      />
      <TechBadge
        icon={<FaLaravel size={18} className="text-red-500" />}
        text="Laravel"
        className="-left-2 bottom-24"
        delay={1.6}
      />
      <TechBadge
        icon={<SiPostgresql size={18} className="text-blue-400" />}
        text="PostgreSQL"
        className="-right-6 top-32"
        delay={2.4}
      />
      <TechBadge
        icon={<SiMysql size={18} className="text-sky-500" />}
        text="MySQL"
        className="right-2 bottom-28"
        delay={3.2}
      />

      {/* Profile Image Wrapper with Rotating Rings */}
      <div className="relative flex h-72 w-72 items-center justify-center xl:h-80 xl:w-80">
        
        {/* Outer Rotating Dashed Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-slate-700/80"
        />

        {/* Inner Rotating Solid Ring (Reverse) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border border-blue-500/30 border-t-blue-400"
        />

        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 h-56 w-56 overflow-hidden rounded-full border-4 border-slate-800 bg-slate-900 shadow-[0_0_50px_rgba(37,99,235,.2)] xl:h-64 xl:w-64"
        >
          <img
            src={profile}
            alt="Eka Nazar Fajriansyah"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroImage;