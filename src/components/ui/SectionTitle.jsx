const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-20 text-center lg:text-left">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        {subtitle}
      </p>

      <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;