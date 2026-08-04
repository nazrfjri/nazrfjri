import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Code2,
  UserCheck,
} from "lucide-react";

const infos = [
  {
    icon: <MapPin size={20} />,
    title: "Location",
    value: "Karawang, Indonesia",
  },
  {
    icon: <GraduationCap size={20} />,
    title: "Education",
    value: "B.Sc. Information Systems",
  },
  {
    icon: <Code2 size={20} />,
    title: "Specialization",
    value: "Full-Stack Web Dev",
  },
  {
    icon: <UserCheck size={20} />,
    title: "Availability",
    value: "Open to Opportunities",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-xl text-3xl font-bold leading-tight tracking-tight"
      >
        <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
          Bridging software engineering with operational efficiency.
        </span>
      </motion.h3>

      <p className="mt-8 max-w-xl leading-8 text-slate-400">
        I am a software engineer focused on building scalable internal tools and impactful digital solutions. My technical foundation spans across the Laravel and React ecosystems, powered by robust PostgreSQL and MySQL database architectures.
      </p>

      <p className="mt-6 max-w-xl leading-8 text-slate-400">
        Beyond writing clean code, my dual experience in IT and Knowledge Management within the manufacturing sector has taught me how to align software with real business needs—from system integration and database optimization to standardizing operational workflows and technical documentation.
      </p>

      {/* Info Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mt-10 grid gap-5 sm:grid-cols-2"
      >
        {infos.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative flex min-h-[110px] items-start gap-4 rounded-3xl border border-slate-700/60 bg-slate-900/40 p-5 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800/50 hover:shadow-[0_0_25px_rgba(37,99,235,.12)]"
          >
            {/* Hover Inner Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500/20 group-hover:text-blue-300">
              {item.icon}
            </div>

            <div className="relative z-10 min-w-0 flex-1 pt-1">
              <p className="text-sm font-medium text-slate-500">
                {item.title}
              </p>
              <p className="mt-1 font-semibold leading-relaxed text-slate-200 transition-colors group-hover:text-white">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;