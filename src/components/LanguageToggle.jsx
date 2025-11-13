import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={toggleLanguage}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 overflow-hidden"
      aria-label="Toggle language"
      style={{ perspective: "1000px" }}
    >
      <div
        className="transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <span
          className="block text-sm font-bold text-gray-700 dark:text-gray-300"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {language === "tr" ? "TR" : "EN"}
        </span>
        <span
          className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-700 dark:text-gray-300"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {language === "tr" ? "EN" : "TR"}
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;
