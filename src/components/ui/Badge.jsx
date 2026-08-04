const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`
        inline-flex items-center rounded-full border border-slate-700/60 bg-slate-900/50 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-md transition-colors hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;