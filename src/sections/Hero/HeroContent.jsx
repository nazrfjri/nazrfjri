import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";

const HeroContent = () => {
  const sequence = [];

  profile.title.forEach((title) => {
    sequence.push(title);
    sequence.push(2000);
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="text-center lg:text-left"
    >
      {/* Greeting */}

      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.15,
        }}
        className="
          mb-6
          text-xs
          font-semibold
          uppercase
          tracking-[0.3em]
          text-blue-400

          sm:text-sm
        "
      >
        Hello, I'm
      </motion.p>

      {/* Name */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.25,
        }}
        className="
          mb-8

          text-4xl
          font-black
          leading-[1.05]
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
      </motion.h1>

      {/* Animated Title */}

      <TypeAnimation
        sequence={sequence}
        speed={40}
        repeat={Infinity}
        wrapper="h2"
        className="
          min-h-[48px]

          text-xl
          font-semibold
          text-slate-300

          sm:min-h-[56px]
          sm:text-2xl

          lg:min-h-[60px]
          lg:text-3xl
        "
      />

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.45,
        }}
        className="
          mx-auto
          mt-8

          max-w-2xl

          text-base
          leading-8
          text-slate-400

          sm:text-lg

          lg:mx-0
          lg:max-w-xl
        "
      >
        {profile.description}
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
        }}
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
        <a
          href={profile.cv}
          download
          aria-label="Download CV"
        >
          <Button>
            Download CV
          </Button>
        </a>

        <a
          href="#projects"
          aria-label="View Projects"
        >
          <Button variant="secondary">
            View Projects
          </Button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;