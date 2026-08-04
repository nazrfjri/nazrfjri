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
          "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.5)]",
        
        variant === "secondary" &&
          "border border-slate-700/80 bg-slate-900/50 text-slate-300 backdrop-blur-md hover:-translate-y-1 hover:border-blue-500/80 hover:bg-slate-800 hover:text-white hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]",
        
        className
      )}
    >
      <span className="relative z-10">{children}</span>

      <ArrowRight
        size={18}
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
};

export default Button;