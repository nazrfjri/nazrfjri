import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-36"
    >
      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          -z-30
          opacity-20
          [background-size:42px_42px]
          [background-image:
            linear-gradient(to_right,#1e293b_1px,transparent_1px),
            linear-gradient(to_bottom,#1e293b_1px,transparent_1px)
          ]
        "
      />

      {/* Ambient Pulsing Glow */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-600/10
            blur-[170px]
          "
        />
      </div>

      {/* Decorative Animated Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          absolute
          left-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-blue-500/60
          to-transparent
        "
      />

      <Container>
        <div className="mx-auto max-w-4xl">
          <ContactInfo />
        </div>
      </Container>
    </section>
  );
};

export default Contact;