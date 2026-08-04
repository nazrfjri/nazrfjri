import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
  FaPhp,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiRedux,
  SiVite,
} from "react-icons/si";

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
      },
      {
        name: "React",
        icon: FaReact,
        color: "text-sky-400",
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "text-violet-400",
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "text-cyan-400",
      },
      {
        name: "Bootstrap",
        icon: FaBootstrap,
        color: "text-purple-500",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "text-yellow-300",
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        name: "Laravel",
        icon: FaLaravel,
        color: "text-red-500",
      },
      {
        name: "PHP",
        icon: FaPhp,
        color: "text-indigo-400",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
      },
      {
        name: "Python",
        icon: FaPython,
        color: "text-blue-400",
      },
    ],
  },
  {
    title: "Database Management",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-blue-400",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-sky-500",
      },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
      },
      {
        name: "Figma",
        icon: FaFigma,
        color: "text-pink-500",
      },
    ],
  },
];

export default skillsData;