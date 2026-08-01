import { motion } from "framer-motion";

import profile from "@/assets/images/profile.png";

import {
  FaReact,
  FaLaravel,
  FaJs,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const TechBadge = ({
  icon,
  text,
  className,
  delay = 0,
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className={`
        absolute
        hidden
        lg:flex

        items-center
        gap-2

        rounded-full

        border
        border-slate-700

        bg-slate-900/75

        px-5
        py-3

        text-sm
        font-medium
        text-white

        backdrop-blur-xl

        shadow-lg

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-105
        hover:border-blue-500
        hover:shadow-[0_0_30px_rgba(37,99,235,.35)]

        whitespace-nowrap
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
      className="
        relative
        flex
        h-[560px]
        items-center
        justify-center
      "
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.3,
      }}
    >
      {/* Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[110px]" />

      {/* React */}

      <TechBadge
        icon={<FaReact className="text-sky-400" />}
        text="ReactJS"
        className="-left-2 top-36"
        delay={0}
      />

      {/* JavaScript */}

      <TechBadge
        icon={<FaJs className="text-yellow-400" />}
        text="JavaScript"
        className="left-1/2 top-10 -translate-x-1/2"
        delay={0.8}
      />

      {/* Laravel */}

      <TechBadge
        icon={<FaLaravel className="text-red-500" />}
        text="Laravel"
        className="left-4 bottom-32"
        delay={1.6}
      />

      {/* PostgreSQL */}

      <TechBadge
        icon={<SiPostgresql className="text-blue-400" />}
        text="PostgreSQL"
        className="-right-2 top-44"
        delay={2.4}
      />

      {/* MySQL */}

      <TechBadge
        icon={<SiMysql className="text-sky-500" />}
        text="MySQL"
        className="right-6 bottom-28"
        delay={3.2}
      />

      {/* Profile */}

      <motion.img
        src={profile}
        alt="Eka Nazar Fajriansyah"
        whileHover={{
          scale: 1.03,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          relative
          z-10

          w-72
          xl:w-80

          rounded-full
          border-4
          border-slate-700

          object-cover

          shadow-[0_0_90px_rgba(37,99,235,.35)]
        "
      />
    </motion.div>
  );
};

export default HeroImage;