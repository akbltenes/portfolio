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
    []
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
    [t]
  );

  return (
    <div className="min-h-screen gradient-bg">
      <section className="section-padding pt-32 pb-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={prefersReducedMotion ? {} : fadeInLeftVariants}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient">{t("home.title")}</span>
              </h1>

              <h2 className="text-2xl md:text-3xl text-gradient mb-8 font-medium">
                {t("home.subtitle")}
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
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
                  href="/MuhammedEnesAkbulutResume.pdf"
                  download="Muhammed_Enes_Akbulut_CV.pdf"
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
              <div className="relative group">
                {/* Animated gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-gradient bg-300%"></div>
                
                <div className="relative p-1 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 animate-gradient bg-300%">
                  <img
                    src="/images/profil2.jpg"
                    alt="Muhammed Enes Akbulut"
                    className="w-80 h-80 object-cover rounded-full shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer border-4 border-white dark:border-gray-900"
                    loading="lazy"
                    onClick={() => setIsModalOpen(true)}
                  />
                </div>
                
                {/* Floating orbs */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full opacity-60 blur-md animate-float"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent-400 to-neon-pink rounded-full opacity-60 blur-md animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-neon-cyan to-primary-400 rounded-full opacity-40 blur-md animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>
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
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-400 shadow-lg">
                  <specialty.icon className="text-4xl text-white" />
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

      <section className="section-padding relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent dark:via-gray-800/30"></div>
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={prefersReducedMotion ? {} : staggerContainerVariants}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center justify-center group"
                variants={prefersReducedMotion ? {} : scaleInVariants}
                whileHover={prefersReducedMotion ? {} : { scale: 1.15, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <tech.icon className={`text-7xl ${tech.color} mb-3 group-hover:drop-shadow-[0_0_20px_currentColor] transition-all duration-300`} />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
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
