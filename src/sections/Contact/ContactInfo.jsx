import { motion } from "framer-motion";

import contactData from "./contactData";

const AvailabilityIcon = contactData.availability.icon;

const ContactInfo = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mx-auto max-w-3xl text-center"
    >
      {/* Heading */}

      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
        {contactData.heading.subtitle}
      </p>

      <h2 className="mt-5 text-5xl font-black leading-tight text-white">
        {contactData.heading.title}
      </h2>

      <p className="mx-auto mt-8 max-w-2xl leading-8 text-slate-400">
        {contactData.heading.description}
      </p>

      {/* Contact List */}

      <div className="mt-16 space-y-5">
        {contactData.info.map((item) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.02,
              }}
              className="
                group
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/40
                px-7
                py-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-500
                hover:bg-slate-900/70
              "
            >
              <div className="flex items-center gap-5">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-blue-400
                    transition
                    group-hover:bg-blue-500
                    group-hover:text-white
                  "
                >
                  <Icon size={22} />
                </div>

                <div className="text-left">
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <p className="font-medium text-white break-all">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Availability */}

      <div className="mt-14 flex justify-center">
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
          "
        >
          <AvailabilityIcon size={18} />

          <span className="font-medium">
            {contactData.availability.description}
          </span>
        </div>
      </div>

      {/* Social */}

      <div className="mt-12 flex justify-center gap-5">
        {contactData.socials.map((item) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -5,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-700
                bg-slate-900/40
                text-slate-300
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-500
                hover:bg-blue-500
                hover:text-white
              "
            >
              <Icon size={22} />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ContactInfo;