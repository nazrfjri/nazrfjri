import { motion } from "framer-motion";

const ExperienceCard = ({ item, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative flex gap-8"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="h-5 w-5 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,.7)]" />

        {!isLast && (
          <div className="mt-2 h-full w-[2px] bg-slate-700" />
        )}
      </div>

      {/* Card */}
      <div
        className="
          mb-12
          flex-1
          rounded-3xl
          border
          border-slate-700
          bg-slate-900/40
          p-8
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-blue-500
          hover:-translate-y-1
        "
      >
        <p className="text-sm text-blue-400">
          {item.period}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {item.role}
        </h3>

        <p className="mt-1 font-medium text-slate-300">
          {item.company}
        </p>

        <p className="mt-6 leading-8 text-slate-400">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;