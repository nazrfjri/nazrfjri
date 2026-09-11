import { ArrowRight } from "lucide-react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-3.5 font-semibold transition-all duration-300",
        
        variant === "primary" &&
          "holo-border bg-blue-600 text-slate-900 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]",
        
        variant === "secondary" &&
          "holo-border border border-white/40/80 bg-white/40 text-slate-700 backdrop-blur-md hover:-translate-y-1 hover:border-blue-500/80 hover:bg-slate-800 hover:text-slate-900 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]",
        
        className
      )}
    >
      {/* Animated inner glow on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/0 via-cyan-400/20 to-blue-600/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <span className="relative z-10">{children}</span>

      <ArrowRight
        size={18}
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
};

export default Button;