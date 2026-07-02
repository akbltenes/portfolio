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
      <section className="section-padding pt-32">
        <div className="container-custom">
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
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-md transition-all duration-200"
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={prefersReducedMotion ? {} : fadeInLeftVariants}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t("contact.contactInfo")}
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 rounded-lg flex items-center justify-center">
                          <info.icon className="text-brand-600 dark:text-brand-400" />
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
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-md transition-all duration-200"
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={prefersReducedMotion ? {} : fadeInRightVariants}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t("contact.socialMedia")}
                </h2>

                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${social.color}`}
                    >
                      <social.icon className="text-xl mr-4" />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-8 bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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
