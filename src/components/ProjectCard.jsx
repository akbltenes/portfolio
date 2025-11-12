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
  const [imgLoaded, setImgLoaded] = useState(false);
  const shouldShowReadMore = description.length > 150;

  const handleToggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div
      className={`glass-card flex flex-col group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-400/30 ${
        isExpanded ? "h-auto" : "h-[550px]"
      }`}
    >
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-400/20 to-accent-400/20 flex-shrink-0 rounded-t-2xl">
        {image ? (
          <>
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 transition-opacity duration-300"
              style={{ opacity: imgLoaded ? 1 : 0 }}
            ></div>
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" style={{ opacity: imgLoaded ? 0 : 1 }}></div>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-opacity duration-300"
              style={{
                ...(title === "RentACar" ? { objectPosition: "center 38%" } : {}),
                opacity: imgLoaded ? 1 : 0,
              }}
              loading="lazy"
              decoding="async"
              onLoad={() => setImgLoaded(true)}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FiCode className="w-16 h-16 text-primary-400 dark:text-gray-400" />
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {category && (
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold rounded-full">
              #{category}
            </span>
          </div>
        )}
        <h3 className="font-bold text-2xl mb-3 text-gray-900 dark:text-white">
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
              className="text-primary-500 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400 text-sm font-bold mt-2 flex items-center gap-1 transition-colors"
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

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 border border-primary-200 dark:border-gray-600 text-primary-700 dark:text-gray-200 text-xs font-semibold rounded-full"
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
              className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold shadow-lg"
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
