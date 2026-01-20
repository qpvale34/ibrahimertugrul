"use client";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../app/context/ThemeContext";

export function ThemeToggle() {
  const { isLight, isInitialized, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="hidden md:flex items-center justify-center px-3 py-2 rounded-lg nm-button nm-flat border-transparent transition-all duration-300 focus:outline-none cursor-pointer hover:cursor-pointer group hover:scale-105"
      title={isLight ? "Dark Mode" : "Light Mode"}
      disabled={!isInitialized}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isLight ? (
        <FaMoon className="w-5 h-5 text-[var(--bg-accent)] group-hover:-rotate-12 transition-transform duration-500" />
      ) : (
        <FaSun className="w-5 h-5 text-[var(--bg-accent)] group-hover:rotate-180 transition-transform duration-500" />
      )}
    </button>
  );
}
