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

const ProjectCard = ({
  project,
  featuredView = false,
}) => {
  const hasGithub =
    (project.type === "github" ||
      project.type === "both") &&
    project.github;

  const hasDemo =
    (project.type === "demo" ||
      project.type === "both") &&
    project.demo;

  const hasPrototype =
    project.type === "prototype" &&
    project.prototype;

  const totalButtons =
    Number(Boolean(hasGithub)) +
    Number(Boolean(hasDemo)) +
    Number(Boolean(hasPrototype));

  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-500/60
        hover:shadow-[0_0_45px_rgba(37,99,235,.18)]
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-500/10
          via-transparent
          to-cyan-500/10
          opacity-0
          transition
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Header */}

      <div className="relative">

        {/* Browser */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-700
            bg-slate-900
            px-5
            py-3
          "
        >
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          {project.category && (
            <span
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-500/30
                bg-blue-500/10
                px-3
                py-1
                text-xs
                font-medium
                text-blue-300
              "
            >
              {categoryIcon[project.category]}
              {project.category}
            </span>
          )}
        </div>

        {/* Featured */}

        {project.featured && (
          <div
            className="
              absolute
              left-5
              top-5
              z-20
              flex
              items-center
              gap-2
              rounded-full
              bg-blue-600
              px-3
              py-1
              text-xs
              font-semibold
              text-white
              shadow-lg
            "
          >
            <Star
              size={13}
              fill="white"
            />

            Featured
          </div>
        )}

        {/* Image */}

        <div className="overflow-hidden bg-slate-950">

          <img
            src={project.image}
            alt={project.title}
            className={`
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105

              ${
                featuredView
                  ? "h-[420px]"
                  : "h-72"
              }
            `}
          />

        </div>

      </div>

      {/* Content */}

      <div className="relative z-10 flex flex-1 flex-col p-8">

        <h3
          className={`

            font-bold
            text-white

            ${
              featuredView
                ? "text-4xl"
                : "text-3xl"
            }
          `}
        >
          {project.title}
        </h3>

        <p
          className={`

            mt-5
            text-slate-400

            ${
              featuredView
                ? "max-w-3xl leading-9 text-lg"
                : "leading-8"
            }
          `}
        >
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-3">

          {project.technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                key={tech.name}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-800/70
                  px-4
                  py-2
                  text-sm
                "
              >
                <Icon
                  className={`${tech.color} text-lg`}
                />

                <span className="text-slate-200">
                  {tech.name}
                </span>

              </motion.div>
            );
          })}

        </div>

        {/* Buttons */}

        <div
          className={`

            mt-auto
            pt-10
            grid
            gap-4

            ${
              totalButtons > 1
                ? "grid-cols-2"
                : "grid-cols-1"
            }
          `}
        >

          {hasGithub && (
            <motion.a
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-700
                bg-slate-800/60
                py-3.5
                font-medium
                text-white
                transition
                hover:border-blue-500
              "
            >
              <FaGithub size={18} />

              GitHub
            </motion.a>
          )}

          {hasDemo && (
            <motion.a
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                py-3.5
                font-medium
                text-white
                transition
                hover:bg-blue-700
              "
            >
              <ExternalLink size={18} />

              Live Demo
            </motion.a>
          )}

          {hasPrototype && (
            <motion.a
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href={project.prototype}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-pink-600
                py-3.5
                font-medium
                text-white
                transition
                hover:bg-pink-700
              "
            >
              <FaFigma size={18} />

              View Prototype
            </motion.a>
          )}

          {!hasGithub &&
            !hasDemo &&
            !hasPrototype && (
              <div
                className="
                  rounded-xl
                  border
                  border-dashed
                  border-slate-700
                  py-3.5
                  text-center
                  text-slate-500
                "
              >
                Coming Soon
              </div>
            )}

        </div>

      </div>

    </motion.article>
  );
};

export default ProjectCard;
