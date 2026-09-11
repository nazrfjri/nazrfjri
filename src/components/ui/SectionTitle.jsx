import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 text-center lg:text-left ${className}`}
    >
      <p className="mb-4 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-600 lg:justify-start">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
        </span>
        {subtitle}
      </p>

      <h2 className="shimmer-text text-4xl font-black tracking-tight md:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;