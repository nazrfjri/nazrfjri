import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuroraBackground from "@/components/common/AuroraBackground";
import FloatingParticles from "@/components/common/FloatingParticles";

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
      {/* Global Animated Background */}
      <AuroraBackground />
      <FloatingParticles />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative min-h-screen overflow-x-hidden">
        <Hero />
        <div className="gradient-line mx-auto max-w-5xl" />
        <About />
        <div className="gradient-line mx-auto max-w-5xl" />
        <Experience />
        <div className="gradient-line mx-auto max-w-5xl" />
        <Skills />
        <div className="gradient-line mx-auto max-w-5xl" />
        <Certificates />
        <div className="gradient-line mx-auto max-w-5xl" />
        <Projects />
        <div className="gradient-line mx-auto max-w-5xl" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;