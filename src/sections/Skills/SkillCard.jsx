import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        group
        flex
        items-center
        gap-4

        rounded-2xl

        border
        border-slate-700

        bg-slate-900/40

        p-5

        backdrop-blur-xl

        transition-all
        duration-300

        hover:border-blue-500
        hover:shadow-[0_0_25px_rgba(37,99,235,.2)]
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-xl

          bg-slate-800

          transition-all
          duration-300

          group-hover:bg-blue-500/10
        "
      >
        <Icon
          className={`
            text-3xl
            transition-transform
            duration-300
            group-hover:scale-110

            ${skill.color}
          `}
        />
      </div>

      <div>
        <p className="font-semibold text-white">
          {skill.name}
        </p>

        <p className="text-sm text-slate-500">
          {skill.category ?? "Technology"}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillCard;