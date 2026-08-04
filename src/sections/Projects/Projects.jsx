import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import ProjectCard from "./ProjectCard";
import projectsData from "./projectsData";

const categories = ["All", "Web Development", "UI/UX Design"];

const Projects = () => {
  // FEATURED PROJECTS STATE
  const featuredProjects = useMemo(() => projectsData.filter((p) => p.featured), []);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));

  // ALL PROJECTS STATE
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentAllSlide, setCurrentAllSlide] = useState(0);
  const itemsPerPage = 2;

  const filteredProjects = activeCategory === "All"
    ? projectsData.filter((p) => !p.featured)
    : projectsData.filter((p) => !p.featured && p.category === activeCategory);

  const totalAllSlides = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentFilteredProjects = filteredProjects.slice(
    currentAllSlide * itemsPerPage,
    (currentAllSlide + 1) * itemsPerPage
  );

  const nextAllSlide = () => setCurrentAllSlide((prev) => (prev === totalAllSlides - 1 ? 0 : prev + 1));
  const prevAllSlide = () => setCurrentAllSlide((prev) => (prev === 0 ? totalAllSlides - 1 : prev - 1));

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentAllSlide(0);
  };

  return (
    <section id="projects" className="relative overflow-hidden py-32">
      {/* Ambient Animated Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-40 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[200px]"
        />
      </div>

      <Container className="relative z-10">
        {/* Featured Section */}
        <SectionTitle subtitle="Portfolio" title="Featured Projects" />

        <div className="mb-20">
          <div className="mb-8 flex items-center justify-end gap-3">
            <button
              onClick={prevSlide}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 backdrop-blur-md transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(37,99,235,.2)]"
            >
              <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              onClick={nextSlide}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 backdrop-blur-md transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(37,99,235,.2)]"
            >
              <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={featuredProjects[currentSlide].title}
              initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ProjectCard project={featuredProjects[currentSlide]} featuredView={true} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-3">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  currentSlide === index ? "w-12 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" : "w-3 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Other Projects Section */}
        <SectionTitle subtitle="More Projects" title="All Projects" />

        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 rounded-full border border-slate-700/60 bg-slate-900/40 p-2 backdrop-blur-xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className="relative rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-colors"
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="active-filter"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,.4)]"
                  />
                )}
                <span className={`relative z-10 ${activeCategory === category ? "text-white" : "text-slate-400 hover:text-slate-200"}`}>
                  {category}
                </span>
              </button>
            ))}
          </div>

          {/* All Projects Slider Controls */}
          {totalAllSlides > 1 && (
            <div className="flex items-center gap-3">
              <button
                onClick={prevAllSlide}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 backdrop-blur-md transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              </button>
              <button
                onClick={nextAllSlide}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 backdrop-blur-md transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}
        </div>

        {/* All Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${currentAllSlide}`}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid gap-8 lg:grid-cols-2"
          >
            {currentFilteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* All Projects Pagination */}
        {totalAllSlides > 1 && (
          <div className="mt-12 flex justify-center gap-3">
            {Array.from({ length: totalAllSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAllSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  currentAllSlide === index ? "w-12 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" : "w-3 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;