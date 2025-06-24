import React from "react";
import { FiExternalLink, FiCode } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    image,
    technologies,
    githubUrl,
    liveUrl,
    category,
  } = project;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg h-[650px] flex flex-col">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex-shrink-0">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FiCode className="w-16 h-16 text-primary-400 dark:text-gray-400" />
          </div>
        )}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
              {category}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Project Title */}
        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {description}
        </p>

        {/* Technologies */}
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

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Canlı Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
