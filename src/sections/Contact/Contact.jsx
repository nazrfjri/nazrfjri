import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-36"
    >
      {/* Decorative Animated Aurora Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="gradient-line absolute left-0 top-0 w-full"
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