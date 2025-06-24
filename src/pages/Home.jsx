import React from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiArrowRight,
  FiCode,
  FiServer,
  FiSmartphone,
} from "react-icons/fi";
import {
  SiReact,
  SiSpringboot,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiFirebase,
  SiGit,
} from "react-icons/si";
import { FaJava, FaReact } from "react-icons/fa";

const Home = () => {
  const technologies = [
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
    { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
    { name: "React Native", icon: FaReact, color: "text-blue-500" },
    { name: "Git", icon: SiGit, color: "text-red-600" },
  ];

  const specialties = [
    {
      icon: FiCode,
      title: "Frontend Development",
      description:
        "React ile modern ve responsive kullanıcı arayüzleri geliştiriyorum",
    },
    {
      icon: FiServer,
      title: "Backend Development",
      description:
        "Spring Boot ile güçlü ve ölçeklenebilir API'ler inşa ediyorum",
    },
    {
      icon: FiSmartphone,
      title: "Mobile Development",
      description:
        "React Native ile cross-platform mobil uygulamalar üretiyorum",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="animate-fade-in text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient">Muhammed Enes AKBULUT</span>
              </h1>

              <h2 className="text-2xl md:text-3xl text-gradient mb-8 font-medium">
                Full-stack developer
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                24 yaşındayım.Süleyman Demirel Üniversitesi Bilgisayar
                Mühendisliği mezunuyum.Yazılımla ilk tanıştığım andan beri kod
                yazmak benim için sadece bir meslek değil, aynı zamanda bir
                tutku oldu. Modern teknolojilerle gerçek hayat problemlerine
                pratik ve ölçeklenebilir çözümler üretmeyi seviyorum.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link to="/projects" className="btn-primary">
                  <span>Projelerimi Görüntüle</span>
                  <FiArrowRight className="ml-2" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  <FiMail className="mr-2" />
                  <span>İletişime Geç</span>
                </Link>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                {/* Main photo container with auto sizing */}
                <div className="relative w-auto h-auto max-w-sm max-h-sm">
                  {/* Photo with aspect ratio preservation */}
                  <div className="relative aspect-square w-80 md:w-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                    <img
                      src="/images/profilfoto.jpg"
                      alt="Muhammed Enes Akbulut"
                      className="w-full h-full object-cover scale-110"
                      style={{ objectPosition: "center 62%" }}
                      onError={(e) => {
                        // Fotoğraf yüklenemezse placeholder göster
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div
                      className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-purple-100 dark:from-gray-700 dark:to-gray-600"
                      style={{ display: "none" }}
                    >
                      <FiCode className="text-8xl text-primary-400 dark:text-gray-400" />
                    </div>
                  </div>

                  {/* Decorative ring */}
                  <div className="absolute -inset-2 rounded-full border-2 border-primary-200 dark:border-primary-800 opacity-50"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full opacity-30 animate-bounce-slow"></div>
                <div
                  className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-bounce-slow"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">İlgilendiğim Alanlar</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Farklı teknoloji stack'leri ile end-to-end çözümler geliştiriyorum
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div key={specialty.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                  <specialty.icon className="text-3xl text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-semibold mb-4">
                  {specialty.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">
              Kullandığım Teknolojiler
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Modern web geliştirme teknolojileri ile projelerinizi hayata
              geçiriyorum
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="flex flex-col items-center p-4">
                <tech.icon className={`text-5xl ${tech.color} mb-2`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
