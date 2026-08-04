import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import ExperienceCard from "./ExperienceCard";
import experienceData from "./experienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute -left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          title="Experience"
          subtitle="My Professional Journey"
        />

        <div className="mx-auto mt-20 max-w-4xl">
          {experienceData.map((item, index) => (
            <ExperienceCard
              key={item.id}
              item={item}
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;