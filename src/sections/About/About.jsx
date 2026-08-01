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
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-32 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
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