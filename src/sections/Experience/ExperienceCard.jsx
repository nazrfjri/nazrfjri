import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";

const ExperienceCard = ({ item, isLast, index }) => {
  return (
    <div className="relative flex gap-8 pb-12">
      {/* Animated Timeline Column */}
      <div className="relative flex flex-col items-center">
        {/* Glowing Dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-blue-900/50 ring-2 ring-blue-500"
        >
          <div className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,1)]" />
        </motion.div>

        {/* Drawing Line Animation */}
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-6 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 to-transparent"
          />
        )}
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 15 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -5 }}
        className="group relative flex-1 rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800/50 hover:shadow-[0_0_30px_rgba(37,99,235,.15)]"
      >
        {/* Hover Inner Glow Effect */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10">
          {/* Header Area */}
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-slate-700/50 pb-5">
            <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-blue-400">
              {item.role}
            </h3>
            
            <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-300">
              <Calendar size={14} />
              {item.period}
            </div>
          </div>

          {/* Company Area */}
          <div className="mt-5 flex items-center gap-2 font-medium text-slate-300">
            <Building2 size={16} className="text-slate-500" />
            {item.company}
          </div>

          <p className="mt-4 leading-8 text-slate-400">
            {item.description}
          </p>

          {/* Skill Badges */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            {item.skills.map((skill, i) => (
              <span
                key={i}
                className="rounded-lg bg-slate-950/50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-300 ring-1 ring-inset ring-slate-700 transition-colors group-hover:bg-slate-800/80 group-hover:text-white group-hover:ring-slate-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;