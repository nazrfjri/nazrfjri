const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;