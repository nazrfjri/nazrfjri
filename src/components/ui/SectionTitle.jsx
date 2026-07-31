const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16">
      <p className="mb-3 text-blue-500">{subtitle}</p>

      <h2 className="text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;