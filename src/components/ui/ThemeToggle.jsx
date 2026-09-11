import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/60 text-slate-700 transition-all hover:border-blue-500 hover:bg-blue-600/20 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-blue-500/20 dark:hover:text-blue-400 shadow-[0_0_10px_rgba(0,0,0,0.05)]"
      aria-label="Toggle theme"
    >
      <div className="relative flex items-center justify-center">
        {/* Sun Icon */}
        <Sun
          size={18}
          className={`absolute transition-all duration-300 ${
            theme === "dark" ? "scale-0 opacity-0 rotate-90" : "scale-100 opacity-100 rotate-0"
          }`}
        />
        {/* Moon Icon */}
        <Moon
          size={18}
          className={`absolute transition-all duration-300 ${
            theme === "light" ? "scale-0 opacity-0 -rotate-90" : "scale-100 opacity-100 rotate-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
