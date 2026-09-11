const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`
        inline-flex items-center rounded-full border border-white/40 dark:border-slate-700/60/60 bg-white dark:bg-slate-900/40 dark:bg-slate-800/40 px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 backdrop-blur-md transition-colors hover:border-blue-500/50 hover:bg-white dark:bg-slate-900/80 dark:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white dark:text-white
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;