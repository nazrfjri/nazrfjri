import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const CertificateCard = ({ certificate }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -6, y: dx * 6 });
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
      className="holo-border group relative flex flex-col overflow-hidden rounded-3xl border border-white/40 dark:border-slate-700/60/60 bg-dreamy-glass backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(37,99,235,.2)]"
    >
      {/* Inner Hover Glow */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Image Container */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden border-b border-white/40 dark:border-slate-700/60/50 bg-slate-950">
        {/* Prismatic overlay on hover */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-500/0 via-violet-500/0 to-cyan-500/0 transition-all duration-700 group-hover:from-blue-500/10 group-hover:via-violet-500/5 group-hover:to-cyan-500/10" />
        <img
          src={certificate.image}
          alt={certificate.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-[17px] font-bold leading-snug tracking-tight text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 sm:text-lg">
          {certificate.title}
        </h3>

        {/* Footer Data */}
        <div className="mt-auto pt-6 flex w-full items-center justify-between gap-3 overflow-hidden">
          
          {/* Issuer Badge */}
          <div className="flex min-w-0 shrink items-center gap-1.5 rounded-full bg-white dark:bg-slate-900/80 dark:bg-slate-800/80 px-2.5 py-1.5 text-[11px] font-medium text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 transition-colors group-hover:ring-blue-500/30 sm:text-xs">
            <Award size={13} className="shrink-0 text-blue-600" />
            <span className="truncate">{certificate.issuer}</span>
          </div>

          {/* Date */}
          <div className="flex shrink-0 items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400 sm:text-xs">
            <Calendar size={13} className="shrink-0" />
            <span className="whitespace-nowrap">{certificate.date}</span>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;