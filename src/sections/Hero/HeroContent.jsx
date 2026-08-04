import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";

const HeroContent = () => {
  const sequence = [];

  // Asumsi profile.title adalah array string
  profile.title.forEach((title) => {
    sequence.push(title);
    sequence.push(2000);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center lg:text-left"
    >
      {/* Live Status Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 backdrop-blur-md"
      >
        <span className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
        </span>
        <span className="text-xs font-semibold tracking-wider text-blue-300 sm:text-sm">
          IT WEB DEVELOPER INTERN
        </span>
      </motion.div>

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400"
      >
        Hello, I'm
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6 text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
      >
        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          {profile.name}
        </span>
      </motion.h1>

      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center lg:justify-start"
      >
        <TypeAnimation
          sequence={sequence}
          speed={40}
          repeat={Infinity}
          wrapper="h2"
          className="min-h-[40px] bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent sm:min-h-[48px] sm:text-3xl lg:min-h-[56px] lg:text-4xl"
        />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0 lg:max-w-xl"
      >
        {profile.description}
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
      >
        <a href={profile.cv} download aria-label="Download CV" className="w-full sm:w-auto">
          <Button className="w-full shadow-[0_0_20px_rgba(37,99,235,.3)] transition-all hover:shadow-[0_0_30px_rgba(37,99,235,.5)]">
            Download CV
          </Button>
        </a>

        <a href="#projects" aria-label="View Projects" className="w-full sm:w-auto">
          <Button variant="secondary" className="w-full group relative overflow-hidden border-slate-700 hover:border-slate-500">
            View Projects
          </Button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;