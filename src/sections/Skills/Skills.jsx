import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import SkillCard from "./SkillCard";
import skillsData from "./skillsData";

// Orkestrasi urutan animasi per kategori
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      <Container className="relative z-10">
        <SectionTitle
          subtitle="Technologies"
          title="Skills & Tools"
        />

        <div className="mt-20 space-y-16">
          {skillsData.map((group) => (
            <motion.div
              key={group.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.h3
                variants={headerVariants}
                className="mb-8 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white"
              >
                <span
                  className="h-1.5 w-8 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)",
                    boxShadow: "0 0 15px rgba(59,130,246,0.6)",
                  }}
                />
                {group.title}
              </motion.h3>

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
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;