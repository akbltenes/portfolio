import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import {
  fadeInUpVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
  defaultViewport,
  usePrefersReducedMotion,
} from "../hooks/useScrollAnimation";

const Contact = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();
  const contactInfo = useMemo(
    () => [
      {
        icon: FiPhone,
        title: t("contact.phone"),
        value: "+90 531 462 3921",
        link: null,
      },
      {
        icon: FiMail,
        title: t("contact.email"),
        value: "akbulutenes.dev@gmail.com",
        link: null,
      },
      {
        icon: FiMapPin,
        title: t("contact.location"),
        value: t("contact.locationValue"),
        link: null,
      },
    ],
    [t]
  );

  const socialLinks = useMemo(
    () => [
      {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/akbltenes",
        color: "hover:text-gray-900 dark:hover:text-white",
      },
      {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/enes-akbulut/",
        color: "hover:text-blue-600",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen gradient-bg">
      <section className="section-padding pt-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-400/20 rounded-full blur-3xl"></div>
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={prefersReducedMotion ? {} : fadeInUpVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">{t("contact.title")}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("contact.description")}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="glass-card p-8 hover:shadow-2xl hover:shadow-primary-400/20 transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={prefersReducedMotion ? {} : fadeInLeftVariants}
              >
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  {t("contact.contactInfo")}
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-primary-400/50 transition-all duration-300">
                          <info.icon className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="glass-card p-8 hover:shadow-2xl hover:shadow-accent-400/20 transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={prefersReducedMotion ? {} : fadeInRightVariants}
              >
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  {t("contact.socialMedia")}
                </h2>

                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-4 glass rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-primary-400/30 transition-all duration-300 group ${social.color}`}
                    >
                      <social.icon className="text-2xl mr-4" />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-8 glass rounded-xl p-6 border-2 border-green-400/30 dark:border-green-500/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 dark:text-green-300 font-medium">
                      {t("contact.availableText")}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("contact.availableDesc")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
