import Container from "@/components/ui/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          -z-20
          opacity-20
          [background-size:40px_40px]
          [background-image:
            linear-gradient(to_right,#1e293b_1px,transparent_1px),
            linear-gradient(to_bottom,#1e293b_1px,transparent_1px)
          ]
        "
      />

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/20
            blur-[160px]
          "
        />
      </div>

      <Container
        className="
            grid
            items-center
            gap-16
            py-24
            lg:grid-cols-2
        "
        >
        <HeroContent />
        <HeroImage />
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs tracking-[0.4em] text-slate-500">
            SCROLL
          </span>

          <div className="flex h-12 w-7 justify-center rounded-full border border-slate-700">
            <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-blue-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;