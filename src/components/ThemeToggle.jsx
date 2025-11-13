import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 overflow-hidden"
      aria-label="Toggle theme"
      style={{ perspective: "1000px" }}
    >
      <div
        className="transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {isDark ? (
            <FiMoon className="w-5 h-5 text-gray-300" />
          ) : (
            <FiSun className="w-5 h-5 text-yellow-500" />
          )}
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {isDark ? (
            <FiSun className="w-5 h-5 text-yellow-500" />
          ) : (
            <FiMoon className="w-5 h-5 text-gray-700" />
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
