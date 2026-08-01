import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import ProjectCard from "./ProjectCard";
import projectsData from "./projectsData";

const categories = [
  "All",
  "Web Development",
  "UI/UX Design",
];

const Projects = () => {
  const featuredProjects = useMemo(
    () =>
      projectsData.filter(
        (project) => project.featured
      ),
    []
  );

  const [currentSlide, setCurrentSlide] =
    useState(0);

  const [activeCategory, setActiveCategory] =
    useState("All");

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === featuredProjects.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0
        ? featuredProjects.length - 1
        : prev - 1
    );
  };

  const filteredProjects =
    activeCategory === "All"
      ? projectsData.filter(
          (project) => !project.featured
        )
      : projectsData.filter(
          (project) =>
            !project.featured &&
            project.category === activeCategory
        );

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-20
          -z-10
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/10
          blur-[190px]
        "
      />

      <Container>

        {/* Featured */}

        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <div className="mb-14">

          <div className="mb-8 flex items-center justify-end gap-3">

            <button
              onClick={prevSlide}
              className="
                rounded-full
                border
                border-slate-700
                p-3
                text-slate-300
                transition
                hover:border-blue-500
                hover:text-white
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="
                rounded-full
                border
                border-slate-700
                p-3
                text-slate-300
                transition
                hover:border-blue-500
                hover:text-white
              "
            >
              <ChevronRight size={20} />
            </button>

          </div>

          <AnimatePresence mode="wait">

            <motion.div
              key={featuredProjects[currentSlide].title}
              initial={{
                opacity: 0,
                x: 80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -80,
              }}
              transition={{
                duration: 0.45,
              }}
            >
              <ProjectCard
                project={
                  featuredProjects[currentSlide]
                }
              />
            </motion.div>

          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-3">

            {featuredProjects.map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentSlide(index)
                  }
                  className={`
                    h-2.5
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      currentSlide === index
                        ? "w-10 bg-blue-500"
                        : "w-2.5 bg-slate-600 hover:bg-slate-500"
                    }
                  `}
                />
              )
            )}

          </div>

        </div>

        {/* Other Projects */}

        <SectionTitle
          subtitle="More Projects"
          title="All Projects"
        />

        {/* Filter */}

        <div className="mb-12 flex justify-center lg:justify-start">

          <div
            className="
              flex
              flex-wrap
              gap-2

              rounded-full

              border
              border-slate-700

              bg-slate-900/60

              p-2

              backdrop-blur-xl
            "
          >

            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className="
                  relative
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                "
              >

                {activeCategory ===
                  category && (
                  <motion.div
                    layoutId="active-filter"
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 30,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-blue-600
                    "
                  />
                )}

                <span
                  className={`relative z-10 ${
                    activeCategory === category
                      ? "text-white"
                      : "text-slate-400"
                  }`}
                >
                  {category}
                </span>

              </button>
            ))}

          </div>

        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              grid
              gap-8

              lg:grid-cols-2
            "
          >

            {filteredProjects.map(
              (project, index) => (
                <motion.div
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <ProjectCard
                    project={project}
                  />
                </motion.div>
              )
            )}

          </motion.div>

        </AnimatePresence>

      </Container>

    </section>
  );
};

export default Projects;