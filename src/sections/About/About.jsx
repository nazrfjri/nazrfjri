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