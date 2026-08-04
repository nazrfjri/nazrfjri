import { motion } from "framer-motion";
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
          className="group relative flex min-h-[220px] flex-col justify-center overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(37,99,235,.15)]"
        >
          {/* Subtle Background Accent */}
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/5 blur-2xl transition-all duration-500 group-hover:bg-blue-500/15" />
          
          <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800/80 text-blue-400 ring-1 ring-inset ring-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-blue-500/10 group-hover:text-blue-300 group-hover:ring-blue-500/30">
            {item.icon}
          </div>

          <h3 className="relative z-10 text-4xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-slate-100">
            {item.value}
            {item.suffix && (
              <span className="text-blue-500/90">
                {item.suffix}
              </span>
            )}
          </h3>

          <p className="relative z-10 mt-3 text-lg font-medium leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
            {item.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutStats;