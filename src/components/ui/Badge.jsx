const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`
        inline-flex items-center rounded-full border border-white/40/60 bg-white/40 px-4 py-1.5 text-sm font-medium text-slate-700 backdrop-blur-md transition-colors hover:border-blue-500/50 hover:bg-white/80 hover:text-slate-900
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;