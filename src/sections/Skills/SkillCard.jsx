import { motion } from "framer-motion";

// Varian animasi untuk kemunculan setiap kartu
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="
        group
        relative
        flex
        items-center
        gap-4
        overflow-hidden
        rounded-2xl
        border
        border-slate-700/60
        bg-slate-900/40
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-500/50
        hover:shadow-[0_0_30px_rgba(37,99,235,.15)]
      "
    >
      {/* Inner Hover Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon Container */}
      <div
        className="
          relative
          z-10
          flex
          h-13
          w-13
          items-center
          justify-center
          rounded-xl
          bg-slate-800/80
          p-3
          ring-1
          ring-inset
          ring-slate-700
          transition-all
          duration-300
          group-hover:bg-blue-500/10
          group-hover:ring-blue-500/30
        "
      >
        <Icon
          className={`
            text-2xl
            transition-transform
            duration-300
            group-hover:scale-110
            ${skill.color}
          `}
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10">
        <p className="font-semibold tracking-wide text-slate-200 transition-colors group-hover:text-white">
          {skill.name}
        </p>

        <p className="text-sm font-medium text-slate-500 transition-colors group-hover:text-slate-400">
          {skill.category ?? "Technology"}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillCard;