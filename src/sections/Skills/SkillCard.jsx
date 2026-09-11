import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

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
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -8, y: dx * 8 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: "800px", transformStyle: "preserve-3d" }}
      className="
        holo-border
        tilt-shine
        group
        relative
        flex
        items-center
        gap-4
        overflow-hidden
        rounded-2xl
        border
        border-white/40/60
        bg-dreamy-glass
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-500/50
        hover:shadow-[0_0_35px_rgba(37,99,235,.2)]
        cursor-default
      "
    >
      {/* Inner Hover Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

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
          bg-white/80
          p-3
          ring-1
          ring-inset
          ring-slate-300
          transition-all
          duration-300
          group-hover:bg-blue-500/10
          group-hover:ring-blue-500/30
          group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
        "
      >
        <Icon
          className={`
            text-2xl
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]
            ${skill.color}
          `}
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10">
        <p className="font-semibold tracking-wide text-slate-800 transition-colors group-hover:text-slate-900">
          {skill.name}
        </p>

        <p className="text-sm font-medium text-slate-500 transition-colors group-hover:text-slate-600">
          {skill.category ?? "Technology"}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillCard;