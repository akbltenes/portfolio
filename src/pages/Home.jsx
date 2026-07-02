import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Button3D from "../components/Button3D";
import {
  fadeInUpVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
  staggerContainerVariants,
  scaleInVariants,
  defaultViewport,
  usePrefersReducedMotion,
} from "../hooks/useScrollAnimation";
import {
  FiMail,
  FiArrowRight,
  FiCode,
  FiServer,
  FiSmartphone,
  FiDownload,
} from "react-icons/fi";
import {
  SiReact,
  SiSpringboot,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiTypescript,
} from "react-icons/si";
import { FaJava, FaReact } from "react-icons/fa";

const Home = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();
  const technologies = useMemo(
    () => [
      { name: "React", icon: SiReact, color: "text-blue-400" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
      { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
      { name: "React Native", icon: FaReact, color: "text-blue-500" },
      { name: "Git", icon: SiGit, color: "text-red-600" },
    ],
    [],
  );

  const specialties = useMemo(
    () => [
      {
        icon: FiCode,
        title: t("home.specialties.frontend.title"),
        description: t("home.specialties.frontend.desc"),
      },
      {
        icon: FiServer,
        title: t("home.specialties.backend.title"),
        description: t("home.specialties.backend.desc"),
      },
      {
        icon: FiSmartphone,
        title: t("home.specialties.mobile.title"),
        description: t("home.specialties.mobile.desc"),
      },
    ],
    [t],
  );

  return (
    <div className="min-h-screen gradient-bg">
      <section className="section-padding pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={prefersReducedMotion ? {} : fadeInUpVariants}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display text-gray-900 dark:text-white">
                {t("home.title")}
              </h1>

              <h2 className="text-2xl md:text-3xl text-gradient mb-8 font-medium">
                {t("home.subtitle")}
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                {t("home.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button3D to="/projects" className="btn-primary">
                  <span>{t("home.viewProjects")}</span>
                  <FiArrowRight className="ml-2" />
                </Button3D>
                <Button3D to="/contact" className="btn-secondary">
                  <FiMail className="mr-2" />
                  <span>{t("home.contact")}</span>
                </Button3D>
                <Button3D
                  href="/MuhammedEnesAkbulut.pdf"
                  download="Muhammed_Enes_Akbulut_Resume.pdf"
                  className="btn-secondary"
                >
                  <FiDownload className="mr-2" />
                  <span>{t("home.downloadCV")}</span>
                </Button3D>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={prefersReducedMotion ? {} : fadeInUpVariants}
          >
            <h3 className="text-3xl font-bold mb-4">
              {t("home.specialtiesTitle")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("home.specialtiesDesc")}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={prefersReducedMotion ? {} : staggerContainerVariants}
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                className="text-center"
                variants={prefersReducedMotion ? {} : scaleInVariants}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-brand-50 dark:bg-brand-900/20">
                  <specialty.icon className="text-3xl text-brand-600 dark:text-brand-400" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {specialty.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={prefersReducedMotion ? {} : fadeInUpVariants}
          >
            <h3 className="text-3xl font-bold mb-4">{t("home.techTitle")}</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("home.techDesc")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={prefersReducedMotion ? {} : staggerContainerVariants}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                variants={prefersReducedMotion ? {} : scaleInVariants}
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <tech.icon
                  className={`text-5xl ${tech.color} mb-3`}
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
