import {
  FaLaravel,
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import {
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiVite,
} from "react-icons/si";

import ecommerceImg from "@/assets/images/ecommerce.png";
import articleImg from "@/assets/images/webarticle.png";
import movieImg from "@/assets/images/movie.png";
import inventarisImg from "@/assets/images/inventaris.png";
import trackerImg from "@/assets/images/covidtracker.png";
import weatherImg from "@/assets/images/weatherapp.png";
import rentalImg from "@/assets/images/rentalyuk.png";
import magangImg from "@/assets/images/magangsi.png";
import sirkusImg from "@/assets/images/sirkus.png";


const projectsData = [
  // =========================================
  // FEATURED
  // =========================================

  {
    featured: false,
    category: "Web Development",
    type: "github",

    title: "E-Inventaris",

    description:
      "Developed a web-based inventory management system for tracking and managing assets, including features for item categorization, stock management, and reporting.",

    image: inventarisImg,

    technologies: [
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
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-blue-500",
      },
      {
        name: "Bootstrap",
        icon: FaBootstrap,
        color: "text-violet-500",
      },
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
      },
    ],

    github: "https://github.com/nazrfjri/e-inventaris",
    demo: "",
    prototype: "",
  },

  {
    featured: false,
    category: "Web Development",
    type: "github",

    title: "Web Article & Blog",

    description:
      "Developed a web application for creating and managing articles and blogs, featuring user authentication, content management, and responsive design.",

    image: articleImg,

    technologies: [
      {
        name: "Laravel",
        icon: FaLaravel,
        color: "text-red-500",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-sky-500",
      },
      {
        name: "Bootstrap",
        icon: FaBootstrap,
        color: "text-violet-500",
      },
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
      },
    ],

    github: "https://github.com/nazrfjri/web-app",
    demo: "",
    prototype: "",
  },

  {
    featured: true,
    category: "UI/UX Design",
    type: "prototype",

    title: "SIRKUS UI/UX Prototype",

    description:
      "Designed the UI/UX prototype for a classroom booking application using the Design Thinking methodology, focusing on user-centered experience and intuitive interface design.",

    image: sirkusImg,

    technologies: [
      {
        name: "Figma",
        icon: FaFigma,
        color: "text-pink-500",
      },
    ],

    github: "",
    demo: "https://www.figma.com/proto/TPoqoBxs7DxcWI9TsgiNYY/SIRKUS--Aplikasi-Peminjaman-Ruang-Kelas-FASILKOM-?node-id=1-1286&p=f&viewport=226%2C171%2C0.06&t=bbLNtqMm5nRluckH-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1255&page-id=0%3A1",
    prototype: "https://www.figma.com/proto/TPoqoBxs7DxcWI9TsgiNYY/SIRKUS--Aplikasi-Peminjaman-Ruang-Kelas-FASILKOM-?node-id=1-1286&p=f&viewport=226%2C171%2C0.06&t=bbLNtqMm5nRluckH-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1255&page-id=0%3A1",
  },

  {
    featured: false,
    category: "UI/UX Design",
    type: "prototype",

    title: "Magang SI UI/UX Prototype",

    description:
      "Designed the UI/UX prototype for an internship management application using the Design Thinking methodology, focusing on user-centered experience and intuitive interface design.",

    image: magangImg,
    
    technologies: [
      {
        name: "Figma",
        icon: FaFigma,
        color: "text-pink-500",
      },
    ],

    github: "",
    demo: "https://www.figma.com/proto/clhB3zdJFbRvtfHA6GbcZa/Aplikasi-MAGANG-SI?node-id=466-13571&p=f&viewport=174%2C251%2C0.02&t=fZJpAPoL5czPJRMe-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=466%3A13571&show-proto-sidebar=1&page-id=466%3A13567",
    prototype: "https://www.figma.com/proto/clhB3zdJFbRvtfHA6GbcZa/Aplikasi-MAGANG-SI?node-id=466-13571&p=f&viewport=174%2C251%2C0.02&t=fZJpAPoL5czPJRMe-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=466%3A13571&show-proto-sidebar=1&page-id=466%3A13567",
  },

  // =========================================
  // REACT PROJECTS
  // =========================================

  {
    category: "Web Development",
    type: "both",

    title: "Movie App",

    description:
      "Movie discovery application with searching, filtering, and dynamic movie data powered by public REST APIs using React.",

    image: movieImg,

    technologies: [
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "text-yellow-400",
      },
    ],

    github: "https://github.com/nazrfjri/Assignment6H8_Eka-Nazar-Fajriansyah/tree/main/assignment-6",
    demo: "",
    prototype: "",
  },

  {
    category: "Web Development",
    type: "both",

    title: "E-Commerce React",

    description:
      "Responsive e-commerce application built using React, Redux, and modern component architecture with product browsing and shopping cart features.",

    image: ecommerceImg,

    technologies: [
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "text-violet-400",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "text-yellow-400",
      },
    ],

    github: "https://github.com/nazrfjri",
    demo: "https://capstone-project-eka-nazar-fajriansyah-delta.vercel.app/",
    prototype: "https://capstone-project-eka-nazar-fajriansyah-delta.vercel.app/",
  },

  {
    category: "Web Development",
    type: "both",

    title: "COVID-19 Tracker",

    description:
      "Interactive dashboard displaying worldwide COVID-19 statistics through REST API integration with responsive visualization.",

    image: trackerImg,

    technologies: [
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "text-violet-400",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
      },
    ],

    github: "https://github.com/nazrfjri/WDP-KS14-020-TUGAS-3",
    demo: "",
    prototype: "",
  },

  {
    featured: true,
    category: "Web Development",
    type: "both",

    title: "Weather Forecast",

    description:
      "Modern weather forecasting application with live weather information and responsive user interface powered by public APIs.",

    image: weatherImg,

    technologies: [
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
      },
    ],

    github: "https://github.com/FahrulAz/Weathers-Web-API",
    demo: "https://weathers-web-api.vercel.app/",
    prototype: "",
  },

  {
    featured: true,
    category: "Web Development",
    type: "both",

    title: "Rental Car Company Profile",

    description:
      "Responsive company profile website featuring modern landing page design, service showcase, and optimized user experience.",

    image: rentalImg,

    technologies: [
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
    ],

    github: "https://github.com/FahrulAz/Company-Profile-Website",
    demo: "https://company-profile-website-h27blb1up-fahruls-projects.vercel.app/",
    prototype: "",
  },
];

export default projectsData;