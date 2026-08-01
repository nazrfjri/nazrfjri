import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import SkillCard from "./SkillCard";
import skillsData from "./skillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32"
    >
      <Container>
        <SectionTitle
          subtitle="Technologies"
          title="Skills & Tools"
        />

        <div className="space-y-16">
          {skillsData.map((group) => (
            <div key={group.title}>
              <h3 className="mb-8 text-2xl font-bold text-white">
                {group.title}
              </h3>

              <div
                className="
                  grid
                  gap-5

                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                "
              >
                {group.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;