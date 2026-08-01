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
  // ==========================
  // FEATURED PROJECTS STATE
  // ==========================
  const featuredProjects = useMemo(
    () =>
      projectsData.filter(
        (project) => project.featured
      ),
    []
  );

  const [currentSlide, setCurrentSlide] =
    useState(0);

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

  // ==========================
  // ALL PROJECTS STATE (NEW)
  // ==========================
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [currentAllSlide, setCurrentAllSlide] =
    useState(0);

  const itemsPerPage = 2;

  // Filter based on category
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

  // Pagination Logic
  const totalAllSlides = Math.ceil(
    filteredProjects.length / itemsPerPage
  );

  const currentFilteredProjects =
    filteredProjects.slice(
      currentAllSlide * itemsPerPage,
      (currentAllSlide + 1) * itemsPerPage
    );

  const nextAllSlide = () => {
    setCurrentAllSlide((prev) =>
      prev === totalAllSlides - 1 ? 0 : prev + 1
    );
  };

  const prevAllSlide = () => {
    setCurrentAllSlide((prev) =>
      prev === 0 ? totalAllSlides - 1 : prev - 1
    );
  };

  // Reset pagination when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentAllSlide(0);
  };

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

        {/* Featured Section */}

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
                featuredView={true}
              />
            </motion.div>

          </AnimatePresence>

          {/* Featured Pagination Dots */}
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

        {/* Other Projects Section */}

        <SectionTitle
          subtitle="More Projects"
          title="All Projects"
        />

        {/* Filter & Controls Container */}

        <div
          className="
            mb-12
            flex
            flex-col
            justify-between
            gap-6
            lg:flex-row
            lg:items-center
          "
        >

          {/* Category Filter */}
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
                  handleCategoryChange(category)
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

          {/* All Projects Slider Controls (Arrows) */}
          {totalAllSlides > 1 && (
            <div className="flex items-center gap-3">

              <button
                onClick={prevAllSlide}
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
                onClick={nextAllSlide}
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
          )}

        </div>

        {/* All Projects Slider Grid */}

        <AnimatePresence mode="wait">

          <motion.div
            key={`${activeCategory}-${currentAllSlide}`}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              grid
              gap-8
              lg:grid-cols-2
            "
          >

            {currentFilteredProjects.map(
              (project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              )
            )}

          </motion.div>

        </AnimatePresence>

        {/* All Projects Pagination Dots */}
        
        {totalAllSlides > 1 && (
          <div className="mt-12 flex justify-center gap-3">

            {Array.from({ length: totalAllSlides }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentAllSlide(index)
                  }
                  className={`
                    h-2.5
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      currentAllSlide === index
                        ? "w-10 bg-blue-500"
                        : "w-2.5 bg-slate-600 hover:bg-slate-500"
                    }
                  `}
                />
              )
            )}

          </div>
        )}

      </Container>

    </section>
  );
};

export default Projects;