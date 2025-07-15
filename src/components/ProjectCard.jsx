import React, { useState, useCallback, memo } from "react";
import {
  FiExternalLink,
  FiCode,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, liveUrl, category } =
    project;
  const { t } = useLanguage();

  const [isExpanded, setIsExpanded] = useState(false);
  const shouldShowReadMore = description.length > 150;

  const handleToggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div
      className={`bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col ${
        isExpanded ? "h-auto" : "h-[550px]"
      }`}
    >
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex-shrink-0">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={title === "RentACar" ? { objectPosition: "center 38%" } : {}}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FiCode className="w-16 h-16 text-primary-400 dark:text-gray-400" />
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="mb-4 flex-grow">
          <p
            className={`text-gray-600 dark:text-gray-300 ${
              !isExpanded && shouldShowReadMore ? "line-clamp-3" : ""
            }`}
          >
            {description}
          </p>
          {shouldShowReadMore && (
            <button
              onClick={handleToggleExpand}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium mt-2 flex items-center gap-1 transition-colors"
            >
              {isExpanded ? (
                <>
                  <span>{t("projects.readLess")}</span>
                  <FiChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>{t("projects.readMore")}</span>
                  <FiChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        {category && (
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
            #{category}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-3 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>{t("projects.liveDemo")}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectCard);
