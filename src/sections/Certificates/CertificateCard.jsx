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
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/40 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(37,99,235,.15)]"
    >
      {/* Inner Hover Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />

      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-950 border-b border-slate-700/50">
        <div className="absolute inset-0 z-10 bg-slate-900/10 transition-colors duration-500 group-hover:bg-slate-900/0" />
        <img
          src={certificate.image}
          alt={certificate.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-blue-400">
          {certificate.title}
        </h3>

        <div className="mt-auto pt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-300 ring-1 ring-inset ring-slate-700">
            <Award size={14} className="text-blue-400" />
            {certificate.issuer}
          </div>

          <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
            <Calendar size={14} />
            {certificate.date}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;