import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="text-center lg:text-left"
    >
      {/* Greeting */}
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
        👋 Hello, I'm
      </p>

      {/* Name */}
      <h1
        className="
          mb-8
          text-4xl
          font-black
          leading-tight
          tracking-tight

          sm:text-5xl
          md:text-6xl
          lg:text-7xl

          bg-gradient-to-r
          from-blue-400
          via-white
          to-cyan-400

          bg-clip-text
          text-transparent
        "
      >
        {profile.name}
      </h1>

      {/* Animated Title */}
      <TypeAnimation
        sequence={[
          "Full-Stack Web Developer",
          2000,
          "UI/UX Designer",
          2000,
          "Laravel Developer",
          2000,
        ]}
        speed={30}
        repeat={Infinity}
        className="
          text-xl
          font-semibold
          text-slate-300

          sm:text-2xl
          lg:text-3xl
        "
      />

      {/* Description */}
      <p
        className="
          mx-auto
          mt-8
          max-w-xl
          text-base
          leading-8
          text-slate-400

          sm:text-lg
          lg:mx-0
        "
      >
        {profile.description}
      </p>

      {/* Buttons */}
      <div
        className="
          mt-10
          flex
          flex-col
          items-center
          gap-4

          sm:flex-row
          sm:justify-center

          lg:justify-start
        "
      >
        <a href="/cv.pdf" download>
          <Button>Download CV</Button>
        </a>

        <a href="#projects">
          <Button variant="secondary">
            View Projects
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default HeroContent;