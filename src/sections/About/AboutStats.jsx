import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  FolderGit2,
  Award,
  BookOpenCheck,
} from "lucide-react";

const stats = [
  {
    icon: <Briefcase size={28} />,
    value: "2",
    suffix: " Years",
    label: "Industrial Experience",
  },
  {
    icon: <Award size={28} />,
    value: "3.88",
    suffix: " GPA",
    label: "Cum Laude Achievement",
  },
  {
    icon: <FolderGit2 size={28} />,
    value: "10+",
    suffix: "",
    label: "Completed Projects",
  },
  {
    icon: <BookOpenCheck size={28} />,
    value: "2",
    suffix: "",
    label: "Hacktiv8 Bootcamps",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const StatValue = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <h3
      ref={ref}
      className="relative z-10 text-4xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-500"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-block"
      >
        {value}
      </motion.span>
      {suffix && (
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {suffix}
        </span>
      )}
    </h3>
  );
};

const AboutStats = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid gap-6 sm:grid-cols-2"
    >
      {stats.map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02 }}
          className="holo-border tilt-shine group relative flex min-h-[220px] flex-col justify-center overflow-hidden rounded-3xl border border-white/40/60 bg-dreamy-glass p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(37,99,235,.2)]"
        >
          {/* Subtle Background Accent */}
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/5 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20 group-hover:scale-150" />
          
          <div className="neon-glow relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-blue-600 ring-1 ring-inset ring-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-blue-500/10 group-hover:text-blue-700 group-hover:ring-blue-500/30">
            {item.icon}
          </div>

          <StatValue value={item.value} suffix={item.suffix} />

          <p className="relative z-10 mt-3 text-lg font-medium leading-7 text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
            {item.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutStats;