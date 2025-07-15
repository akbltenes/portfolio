import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
      aria-label="Toggle language"
    >
      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
        {language === "tr" ? "EN" : "TR"}
      </span>
    </button>
  );
};

export default LanguageToggle;
