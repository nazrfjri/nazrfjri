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
        "group inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold transition-all duration-300",

        variant === "primary" &&
          "bg-blue-600 text-white hover:bg-blue-500 hover:-translate-y-1",

        variant === "secondary" &&
          "border border-slate-700 bg-slate-900 text-white hover:border-blue-500",

        className
      )}
    >
      {children}

      <ArrowRight
        size={18}
        className="transition group-hover:translate-x-1"
      />
    </button>
  );
};

export default Button;