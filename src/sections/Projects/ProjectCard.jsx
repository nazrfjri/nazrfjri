import { motion } from "framer-motion";
import {
  ExternalLink,
  Star,
  Code2,
  Palette,
} from "lucide-react";

import { FaGithub, FaFigma } from "react-icons/fa";

const categoryIcon = {
  "Web Development": <Code2 size={14} />,
  "UI/UX Design": <Palette size={14} />,
};

const ProjectCard = ({ project, featuredView = false }) => {
  const hasGithub =
    (project.type === "github" || project.type === "both") && project.github;
  const hasDemo =
    (project.type === "demo" || project.type === "both") && project.demo;
  const hasPrototype = project.type === "prototype" && project.prototype;

  const totalButtons =
    Number(Boolean(hasGithub)) +
    Number(Boolean(hasDemo)) +
    Number(Boolean(hasPrototype));

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/40 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(37,99,235,.15)]"
    >
      {/* Card Inner Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Header (Mac Browser Style) */}
      <div className="relative z-10 border-b border-slate-700/50 bg-slate-900/80 px-5 py-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.4)]" />
            <span className="h-3 w-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]" />
            <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
          </div>

          {project.category && (
            <span className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 backdrop-blur-md">
              {categoryIcon[project.category]}
              {project.category}
            </span>
          )}
        </div>
      </div>

      {/* Image Container with Featured Badge */}
      <div className="relative overflow-hidden bg-slate-950">
        {/* Dark overlay on hover for better focus */}
        <div className="absolute inset-0 z-10 bg-slate-900/0 transition-colors duration-500 group-hover:bg-slate-900/20" />

        {/* Featured Badge (Moved inside image wrapper, Top Right) */}
        {project.featured && (
          <div className="absolute right-4 top-4 z-20 flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-600/90 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white shadow-[0_0_20px_rgba(37,99,235,.4)] backdrop-blur-md">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star size={13} fill="currentColor" className="text-yellow-300" />
            </motion.div>
            Featured
          </div>
        )}

        <img
          src={project.image}
          alt={project.title}
          className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            featuredView ? "h-[420px]" : "h-72"
          }`}
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-1 flex-col p-8">
        <h3 className={`font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-400 ${featuredView ? "text-4xl" : "text-3xl"}`}>
          {project.title}
        </h3>

        <p className={`mt-5 text-slate-400 transition-colors duration-300 group-hover:text-slate-300 ${featuredView ? "max-w-3xl leading-9 text-lg" : "leading-8"}`}>
          {project.description}
        </p>

        {/* Technologies Badges */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {project.technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                key={tech.name}
                className="flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/50 px-4 py-2 text-sm backdrop-blur-md transition-colors hover:border-blue-500/50 hover:bg-slate-800"
              >
                <Icon className={`${tech.color} text-lg drop-shadow-md`} />
                <span className="font-medium text-slate-200">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className={`mt-auto pt-10 grid gap-4 ${totalButtons > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
          {hasGithub && (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="group/btn flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 py-3.5 font-semibold text-white transition-all hover:border-slate-500 hover:bg-slate-700 hover:shadow-[0_0_20px_rgba(255,255,255,.1)]"
            >
              <FaGithub size={18} className="transition-transform group-hover/btn:scale-110" />
              Source Code
            </motion.a>
          )}

          {hasDemo && (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="group/btn flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,.4)]"
            >
              <ExternalLink size={18} className="transition-transform group-hover/btn:scale-110" />
              Live Demo
            </motion.a>
          )}

          {hasPrototype && (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={project.prototype}
              target="_blank"
              rel="noreferrer"
              className="group/btn flex items-center justify-center gap-2 rounded-xl bg-pink-600 py-3.5 font-semibold text-white shadow-lg shadow-pink-900/20 transition-all hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(219,39,119,.4)]"
            >
              <FaFigma size={18} className="transition-transform group-hover/btn:scale-110" />
              View Prototype
            </motion.a>
          )}

          {!hasGithub && !hasDemo && !hasPrototype && (
            <div className="rounded-xl border border-dashed border-slate-700/60 bg-slate-900/30 py-3.5 text-center font-medium tracking-wide text-slate-500 backdrop-blur-sm">
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;