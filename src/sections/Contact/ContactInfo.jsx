import { motion } from "framer-motion";
import contactData from "./contactData";

const AvailabilityIcon = contactData.availability.icon;

// Varian untuk Stagger Effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactInfo = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="mx-auto max-w-3xl text-center"
    >
      {/* Heading */}
      <motion.p variants={itemVariants} className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
        {contactData.heading.subtitle}
      </motion.p>

      <motion.h2 variants={itemVariants} className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
        <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
          {contactData.heading.title}
        </span>
      </motion.h2>

      <motion.p variants={itemVariants} className="mx-auto mt-8 max-w-2xl leading-8 text-slate-400">
        {contactData.heading.description}
      </motion.p>

      {/* Contact List */}
      <motion.div variants={itemVariants} className="mt-16 space-y-5">
        {contactData.info.map((item) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                group
                relative
                flex
                items-center
                justify-between
                overflow-hidden
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/40
                px-7
                py-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-500/50
                hover:shadow-[0_0_30px_rgba(37,99,235,.15)]
              "
            >
              {/* Inner Hover Glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex items-center gap-5">
                <div
                  className="
                    flex
                    h-13
                    w-13
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/10
                    p-3
                    text-blue-400
                    ring-1
                    ring-inset
                    ring-blue-500/20
                    transition-all
                    duration-300
                    group-hover:bg-blue-500
                    group-hover:text-white
                    group-hover:ring-blue-500
                  "
                >
                  <Icon size={24} />
                </div>

                <div className="text-left">
                  <p className="text-sm font-medium text-slate-500 transition-colors group-hover:text-slate-400">
                    {item.title}
                  </p>
                  <p className="mt-1 font-semibold tracking-wide text-slate-200 transition-colors group-hover:text-white break-all">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Availability Status */}
      <motion.div variants={itemVariants} className="mt-14 flex justify-center">
        <div
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-emerald-500/30
            bg-emerald-500/10
            px-5
            py-3
            text-emerald-400
            shadow-[0_0_20px_rgba(16,185,129,.1)]
          "
        >
          {/* Live Pinging Dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>

          <AvailabilityIcon size={18} />
          <span className="font-semibold tracking-wide">
            {contactData.availability.description}
          </span>
        </div>
      </motion.div>

      {/* Socials */}
      <motion.div variants={itemVariants} className="mt-12 flex justify-center gap-5">
        {contactData.socials.map((item) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="
                group
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-slate-700/60
                bg-slate-900/40
                text-slate-300
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-500
                hover:bg-blue-500
                hover:text-white
                hover:shadow-[0_0_25px_rgba(37,99,235,.4)]
              "
            >
              <Icon size={22} className="relative z-10" />
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;