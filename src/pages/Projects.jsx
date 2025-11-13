import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Card3D from "../components/Card3D";
import { useLanguage } from "../context/LanguageContext";
import {
  fadeInUpVariants,
  staggerContainerVariants,
  scaleInVariants,
  defaultViewport,
  usePrefersReducedMotion,
} from "../hooks/useScrollAnimation";

const Projects = () => {
  const { t, language } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeFilter, setActiveFilter] = useState("all");
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: t("projects.projectList.hoaxify.title"),
        description: t("projects.projectList.hoaxify.description"),
        image: "/images/hoaxify.png",
        technologies: ["React", "Spring Boot", "PostgreSQL", "REST API"],
        liveUrl: "https://hoaxify.vercel.app/feed",
        categoryId: "fullstack",
        category: t("projects.projectList.hoaxify.category"),
      },
      {
        id: 2,
        title: t("projects.projectList.blurr.title"),
        description: t("projects.projectList.blurr.description"),
        image: "/images/Blurr.png",
        technologies: ["React Native", "Firebase"],
        liveUrl: null,
        categoryId: "mobile",
        category: t("projects.projectList.blurr.category"),
      },
      {
        id: 3,
        title: t("projects.projectList.familyAlbum.title"),
        description: t("projects.projectList.familyAlbum.description"),
        image: "/images/family-album.png",
        technologies: ["TypeScript", "React", "PostgreSQL"],
        liveUrl: "https://family-album-pink.vercel.app/",
        categoryId: "fullstack",
        category: t("projects.projectList.familyAlbum.category"),
      },
      {
        id: 4,
        title: t("projects.projectList.contentCalendar.title"),
        description: t("projects.projectList.contentCalendar.description"),
        image: "/images/iceriktakvimi.png",
        technologies: ["React", "Spring Boot", "PostgreSQL"],
        liveUrl: null,
        categoryId: "fullstack",
        category: t("projects.projectList.contentCalendar.category"),
      },
      {
        id: 5,
        title: t("projects.projectList.rentACar.title"),
        description: t("projects.projectList.rentACar.description"),
        image: "/images/RentACarLogo.png",
        technologies: ["Spring Boot", "JPA", "ModelMapper", "PostgreSQL"],
        liveUrl: null,
        categoryId: "backend",
        category: t("projects.projectList.rentACar.category"),
      },
    ],
    [t]
  );

  const categoryMap = useMemo(() => {
    const map = new Map();
    projects.forEach((p) => {
      if (!map.has(p.categoryId)) map.set(p.categoryId, p.category);
    });
    return map;
  }, [projects]);
  const allLabel = language === "tr" ? "Tümü" : "All";
  const filters = useMemo(() => {
    const items = [{ label: allLabel, value: "all" }];
    categoryMap.forEach((label, id) => items.push({ label, value: id }));
    return items;
  }, [allLabel, categoryMap]);
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categoryId === activeFilter);

  return (
    <div className="min-h-screen gradient-bg">
      <section className="section-padding pt-32 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={prefersReducedMotion ? {} : fadeInUpVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">{t("projects.title")}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("projects.description")}
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                type="button"
                className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
                  activeFilter === f.value
                    ? "bg-primary-600 text-white border-primary-600"
                    : "bg-transparent text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-primary-50 dark:hover:bg-gray-700"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <motion.div
            key={activeFilter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            initial="hidden"
            animate="visible"
            variants={prefersReducedMotion ? {} : staggerContainerVariants}
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={prefersReducedMotion ? {} : scaleInVariants}
                layout
              >
                <Card3D>
                  <ProjectCard project={project} />
                </Card3D>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
