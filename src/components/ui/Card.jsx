const Card = ({ children, className = "", hover = false }) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/40 backdrop-blur-xl transition-all duration-300
        ${hover ? "hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;