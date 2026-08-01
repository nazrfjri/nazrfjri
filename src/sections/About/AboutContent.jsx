import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

const infos = [
  {
    icon: <MapPin size={20} />,
    title: "Location",
    value: "Karawang, Indonesia",
  },
  {
    icon: <GraduationCap size={20} />,
    title: "Education",
    value: "B.Sc. Information Systems",
  },
  {
    icon: <Briefcase size={20} />,
    title: "Experience",
    value: "2 Years Internship",
  },
  {
    icon: <Award size={20} />,
    title: "GPA",
    value: "3.88 / 4.00",
  },
];

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h3
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className="
          max-w-xl
          text-3xl
          font-bold
          leading-tight
          text-white
        "
      >
        Building impactful digital solutions.
      </motion.h3>

      <p className="mt-8 max-w-xl leading-8 text-slate-400">
        Fresh Graduate in Information Systems from Universitas
        Singaperbangsa Karawang with a GPA of 3.88/4.00 and nearly
        two years of internship experience in Information Technology
        and Knowledge Management within a manufacturing environment.
      </p>

      <p className="mt-6 max-w-xl leading-8 text-slate-400">
        Experienced in developing internal web applications using
        Laravel, ReactJS, JavaScript, PostgreSQL, and MySQL,
        including backend feature development, system integration,
        database optimization, debugging, deployment, and
        collaborative software development. I also have experience
        in operational documentation, learning material development,
        and knowledge sharing to improve organizational efficiency.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {infos.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -4,
            }}
            className="
              flex
              min-h-28
              items-start
              gap-4
              rounded-3xl
              border
              border-slate-700
              bg-slate-900/40
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-blue-500
              hover:shadow-[0_0_20px_rgba(37,99,235,.15)]
            "
          >
            <div
              className="
                rounded-2xl
                bg-blue-500/10
                p-3
                text-blue-400
              "
            >
              {item.icon}
            </div>

            <div className="min-w-0">
              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <p
                className="
                  mt-1
                  font-medium
                  leading-6
                  text-white
                "
              >
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutContent;