import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-36 pb-20 lg:pt-36 lg:pb-24"
    >
      {/* Subtle Grid Background for Hero only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2 }}
        className="
          absolute inset-0 -z-20 
          [background-size:60px_60px] 
          [background-image:linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
          [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)]
        "
      />

      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <HeroContent />
        <HeroImage />
      </Container>

      {/* Modern Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 transition-all hover:text-blue-600"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          Scroll
        </span>
        <div className="flex h-11 w-6 justify-center rounded-full border-2 border-white/40/80 bg-white/40 pt-2 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          />
        </div>
      </motion.a>
    </section>
  );
};

export default Hero;