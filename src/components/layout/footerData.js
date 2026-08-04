import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

const footerData = {
  name: "Eka Nazar Fajriansyah",
  role: "Full-Stack Web Developer",
  description:
    "Crafting scalable web applications with clean code and thoughtful UI.",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/nazrfjri",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/nazrfjr",
      icon: FaLinkedin,
    },
    {
      label: "Email",
      href: "mailto:ekanazarfajriansyah@gmail.com",
      icon: Mail,
    },
  ],
};

export default footerData;