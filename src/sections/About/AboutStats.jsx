import { motion } from "framer-motion";
import {
  Briefcase,
  FolderGit2,
  Award,
  Building2,
} from "lucide-react";

const stats = [
  {
    icon: <Briefcase size={26} />,
    value: "2",
    suffix: " Years",
    label: "Internship Experience",
  },
  {
    icon: <FolderGit2 size={26} />,
    value: "10+",
    suffix: "",
    label: "Completed Projects",
  },
  {
    icon: <Award size={26} />,
    value: "3.88",
    suffix: " GPA",
    label: "Academic Achievement",
  },
  {
    icon: <Building2 size={26} />,
    value: "4",
    // suffix: "+",
    label: "Experience & Learning",
  },
];

const AboutStats = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          className="
            min-h-[220px]
            rounded-3xl
            border
            border-slate-700
            bg-slate-900/40
            p-8
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-blue-500
            hover:shadow-[0_0_35px_rgba(37,99,235,.18)]
          "
        >
          <div className="mb-6 text-blue-400">
            {item.icon}
          </div>

          <h3 className="text-3xl font-black text-white">
            {item.value}

            {item.suffix && (
              <span className="text-blue-400">
                {item.suffix}
              </span>
            )}
          </h3>

          <p className="mt-3 text-lg leading-7 text-slate-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutStats;