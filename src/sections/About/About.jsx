import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Animated Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-32 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]"
        />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me"
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          <AboutContent />
          <AboutStats />
        </div>
      </Container>
    </section>
  );
};

export default About;