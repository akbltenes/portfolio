import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hoaxify",
      description:
        "Bir arkadaşım ile ekip olarak geliştirdiğimiz, Twitter tarzında bir sosyal medya uygulamasıdır. Kullanıcıların anlık paylaşımlar yapabildiği, birbirlerini takip edip etkileşimde bulunabildiği dinamik bir platform. İçerik paylaşma, beğenme, yorum yapma ve etkileşim özellikleri ile hızlı ve akıcı iletişimi sağlar. Takım çalışmasıyla modern teknolojilerle gerçek dünya uygulaması geliştirme deneyimi.",
      image: null,
      technologies: ["React", "Spring Boot", "PostgreSQL", "REST API"],
      githubUrl: "https://github.com/muhammedenesAkbulut/hoaxify",
      liveUrl: "https://hoaxify.vercel.app/feed",
      category: "Full-stack",
    },
    {
      id: 2,
      title: "Blurr",
      description:
        "Hala gelişirmekte olduğum Blurr, gizliliği ön planda tutan mobil sosyal iletişim uygulamasıdır. Kullanıcılar anonim olarak sohbet edebilir, story paylaşabilir ve mesajlaşabilir. Tamamen anonim mesajlaşma sistemi, gizli takip sistemi ve mahremiyet odaklı deneyim sunar. Klasik sosyal medyadan farklı olarak, kullanıcıların kendilerini rahatça ifade edebileceği güvenli bir alan oluşturmayı amaçlar.",
      image: null,
      technologies: ["React Native", "Firebase"],
      githubUrl: "https://github.com/muhammedenesAkbulut/blurr",
      liveUrl: null,
      category: "Mobile",
    },
    {
      id: 3,
      title: "Family Album",
      description:
        "Aile bireylerinin dijital ortamda anılarını paylaşabilmesi için geliştirdiğim modern bir fotoğraf paylaşım platformudur. QR kod ile kolay erişim, fotoğraf yükleme, yükleyen kişi ve zaman bilgisi görüntüleme özelliklerine sahiptir. Duyguları teknolojiyle buluşturan, kullanıcı deneyimini ön planda tutan özel bir projedir.",
      image: null,
      technologies: ["TypeScript", "React", "PostgreSQL"],
      githubUrl: "https://github.com/muhammedenesAkbulut/family-album",
      liveUrl: "https://family-album-pink.vercel.app/",
      category: "Full-stack",
    },
    {
      id: 4,
      title: "İçerik Planlama Takvimi",
      description:
        "Sosyal medya ekiplerinin içerik yönetimini kolaylaştırmak için geliştirmekte olduğum uygulamadır. Gönderi, reels ve story gibi içeriklerin tarih bazlı takvim üzerinden planlanabilmesi, medya kütüphanesi ile merkezi içerik yönetimi ve admin paneli üzerinden içerik onayları, kullanıcı yetkilendirmeleri sağlar.",
      image: null,
      technologies: ["React", "Spring Boot", "PostgreSQL"],
      githubUrl: "https://github.com/muhammedenesAkbulut/content-calendar",
      liveUrl: null,
      category: "Full-stack",
    },
    {
      id: 5,
      title: "RentACar",
      description:
        "Araç kiralama süreçlerini dijital ortama taşıyan, tamamen Spring Boot ile geliştirdiğim bir backend uygulamasıdır. Çok katmanlı mimari ile tasarlanmış, veri tutarlılığı sağlanmış ve ModelMapper ile Entity-DTO dönüşümleri uygulanmıştır.",
      image: null,
      technologies: ["Spring Boot", "JPA", "ModelMapper", "PostgreSQL"],
      githubUrl: "https://github.com/muhammedenesAkbulut/rentacar",
      liveUrl: null,
      category: "Backend",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Projelerim</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Modern teknolojiler kullanarak geliştirdiğim projeler. Her biri
              farklı challenges ve çözümler içeriyor.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
