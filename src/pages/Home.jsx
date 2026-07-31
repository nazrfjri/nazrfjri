import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/sections/Hero/Hero";

function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        <Hero />
      </main>

      <Footer />
    </>
  );
}

export default Home;