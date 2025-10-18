import React, { useMemo } from "react";
import ProjectCard from "../components/ProjectCard";
import Card3D from "../components/Card3D";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: t("projects.projectList.hoaxify.title"),
        description: t("projects.projectList.hoaxify.description"),
        image: "/images/hoaxify.png",
        technologies: ["React", "Spring Boot", "PostgreSQL", "REST API"],
        liveUrl: "https://hoaxify.vercel.app/feed",
        category: t("projects.projectList.hoaxify.category"),
      },
      {
        id: 2,
        title: t("projects.projectList.blurr.title"),
        description: t("projects.projectList.blurr.description"),
        image: "/images/Blurr.png",
        technologies: ["React Native", "Firebase"],
        liveUrl: null,
        category: t("projects.projectList.blurr.category"),
      },
      {
        id: 3,
        title: t("projects.projectList.familyAlbum.title"),
        description: t("projects.projectList.familyAlbum.description"),
        image: "/images/family-album.png",
        technologies: ["TypeScript", "React", "PostgreSQL"],
        liveUrl: "https://family-album-pink.vercel.app/",
        category: t("projects.projectList.familyAlbum.category"),
      },
      {
        id: 4,
        title: t("projects.projectList.contentCalendar.title"),
        description: t("projects.projectList.contentCalendar.description"),
        image: "/images/iceriktakvimi.png",
        technologies: ["React", "Spring Boot", "PostgreSQL"],
        liveUrl: null,
        category: t("projects.projectList.contentCalendar.category"),
      },
      {
        id: 5,
        title: t("projects.projectList.rentACar.title"),
        description: t("projects.projectList.rentACar.description"),
        image: "/images/RentACarLogo.png",
        technologies: ["Spring Boot", "JPA", "ModelMapper", "PostgreSQL"],
        githubUrl: "https://github.com/muhammedenesAkbulut/rentacar",
        liveUrl: null,
        category: t("projects.projectList.rentACar.category"),
      },
    ],
    [t]
  );

  return (
    <div className="min-h-screen">
      <section className="section-padding pt-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">{t("projects.title")}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("projects.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card3D>
                  <ProjectCard project={project} />
                </Card3D>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
