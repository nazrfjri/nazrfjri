import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import CertificateCard from "./CertificateCard";
import certificatesData from "@/data/certificates";

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Menampilkan 4 kartu per halaman agar mengisi grid dengan sempurna
  const itemsPerPage = 4;
  const totalSlides = Math.ceil(certificatesData.length / itemsPerPage);

  // Memotong array data sesuai halaman aktif
  const currentCertificates = certificatesData.slice(
    currentSlide * itemsPerPage,
    (currentSlide + 1) * itemsPerPage
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section id="certificates" className="relative overflow-hidden py-32">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/3 rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <Container className="relative z-10">
        
        {/* Header & Slider Controls */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            subtitle="Achievements"
            title="Licenses & Certifications"
          />

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 md:pb-16">
            <button
              onClick={prevSlide}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 backdrop-blur-md transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              onClick={nextSlide}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 backdrop-blur-md transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Sliding Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {currentCertificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        {totalSlides > 1 && (
          <div className="mt-12 flex justify-center gap-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  currentSlide === index
                    ? "w-12 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                    : "w-3 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        )}

      </Container>
    </section>
  );
};

export default Certificates;