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
  FiX,
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={prefersReducedMotion ? {} : fadeInLeftVariants}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display text-gray-900 dark:text-white">
                {t("home.title")}
              </h1>

              <h2 className="text-2xl md:text-3xl text-gradient mb-8 font-medium">
                {t("home.subtitle")}
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-xl">
                {t("home.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
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

            <motion.div
              className="flex justify-center lg:justify-end"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={prefersReducedMotion ? {} : fadeInRightVariants}
            >
              <div className="relative">
                <div className="relative p-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                  <img
                    src="/images/profil2.jpg"
                    alt="Muhammed Enes Akbulut"
                    className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-xl"
                    loading="lazy"
                    onClick={() => setIsModalOpen(true)}
                  />
                </div>
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

      {/* Photo Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 bg-gray-800 hover:bg-gray-700 rounded-full p-2"
            >
              <FiX size={24} />
            </button>
            <img
              src="/images/profil2.jpg"
              alt="Muhammed Enes Akbulut"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
