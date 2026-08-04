import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";
import Experience from "@/sections/Experience/Experience";
import Skills from "@/sections/Skills/Skills";
import Certificates from "@/sections/Certificates/Certificates";
import Projects from "@/sections/Projects/Projects";
import Contact from "@/sections/Contact/Contact";

const Home = () => {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative min-h-screen overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;