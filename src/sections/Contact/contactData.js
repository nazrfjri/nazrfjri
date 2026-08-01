import {
  Mail,
  MapPin,
  Briefcase,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const contactData = {
  heading: {
    subtitle: "Get In Touch",

    title: "Let's Build Something Great Together",

    description:
      "I'm always open to discussing new opportunities, collaborations, or exciting projects. Whether you're looking for a web developer, UI/UX designer, or simply want to connect, I'd love to hear from you.",
  },

  info: [
    {
      title: "Email",

      value: "ekanazarfajriansyah@gmail.com",

      href: "mailto:ekanazarfajriansyah@gmail.com",

      icon: Mail,
    },

    {
      title: "Location",

      value: "Karawang, West Java, Indonesia",

      href: "https://maps.google.com/?q=Karawang",

      icon: MapPin,
    },

    {
      title: "LinkedIn",

      value: "linkedin.com/in/nazrfjr",

      href: "https://linkedin.com/in/nazrfjr",

      icon: FaLinkedin,
    },

    {
      title: "GitHub",

      value: "github.com/nazrfjri",

      href: "https://github.com/nazrfjri",

      icon: FaGithub,
    },
  ],

  socials: [
    {
      name: "LinkedIn",

      href: "https://linkedin.com/in/nazrfjr",

      icon: FaLinkedin,
    },

    {
      name: "GitHub",

      href: "https://github.com/nazrfjri",

      icon: FaGithub,
    },

    {
      name: "Email",

      href: "mailto:ekanazarfajriansyah@gmail.com",

      icon: Mail,
    },
  ],

  availability: {
    title: "Currently Available",

    description:
      "Open for full-time opportunities, freelance work, and exciting collaborations.",

    icon: Briefcase,
  },
};

export default contactData;