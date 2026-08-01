import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import ExperienceCard from "./ExperienceCard";
import experienceData from "./experienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-32"
    >
      <Container>
        <SectionTitle
          title="Experience"
          subtitle="My Professional Journey"
        />

        <div className="mx-auto mt-20 max-w-4xl">
          {experienceData.map((item, index) => (
            <ExperienceCard
              key={item.id}
              item={item}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;