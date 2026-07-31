import { motion } from "framer-motion";

import profile from "@/assets/images/profile.png";

import {
  FaReact,
  FaLaravel,
  FaFigma,
  FaJs,
} from "react-icons/fa";

import { SiPostgresql } from "react-icons/si";

const TechBadge = ({
  icon,
  text,
  className,
  delay = 0,
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className={`
        absolute
        flex
        items-center
        gap-2
        rounded-2xl
        border
        border-slate-700
        bg-slate-900/70
        px-4
        py-2
        text-sm
        font-medium
        text-white
        backdrop-blur-xl
        shadow-xl

        transition-all
        duration-300
        hover:scale-105
        hover:border-blue-500
        hover:shadow-[0_0_30px_rgba(37,99,235,.35)]
        cursor-default

        ${className}
      `}
    >
      {icon}
      <span>{text}</span>
    </motion.div>
  );
};

const HeroImage = () => {
  return (
    <motion.div
      className="relative flex justify-center"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.3,
      }}
    >
      {/* Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-blue-600/30 blur-3xl" />

      <TechBadge
        icon={<FaReact className="text-sky-400" />}
        text="React"
        className="-left-5 top-10"
        delay={0}
      />

      <TechBadge
        icon={<FaLaravel className="text-red-500" />}
        text="Laravel"
        className="left-4 bottom-10"
        delay={1}
      />

      <TechBadge
        icon={<SiPostgresql className="text-blue-400" />}
        text="PostgreSQL"
        className="-right-8 top-24"
        delay={2}
      />

      <TechBadge
        icon={<FaFigma className="text-pink-400" />}
        text="Figma"
        className="right-5 bottom-8"
        delay={3}
      />

      <TechBadge
        icon={<FaJs className="text-yellow-400" />}
        text="JavaScript"
        className="top-0"
        delay={1.5}
      />

      <img
        src={profile}
        alt="Profile"
        className="
          relative
          z-10
          w-80
          rounded-full
          border-4
          border-slate-700
          object-cover
          shadow-[0_0_80px_rgba(37,99,235,.35)]
        "
      />
    </motion.div>
  );
};

export default HeroImage;