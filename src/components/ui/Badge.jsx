const Badge = ({ children }) => {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
      {children}
    </span>
  );
};

export default Badge;