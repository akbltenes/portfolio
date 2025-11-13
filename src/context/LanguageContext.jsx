import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const translations = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      projects: "Projeler",
      contact: "İletişim",
    },
    home: {
      title: "Muhammed Enes AKBULUT",
      subtitle: "Full-stack developer",
      description:
        "24 yaşındayım.Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği mezunuyum.Yazılımla ilk tanıştığım andan beri kod yazmak benim için sadece bir meslek değil, aynı zamanda bir tutku oldu. Modern teknolojilerle gerçek hayat problemlerine pratik ve ölçeklenebilir çözümler üretmeyi seviyorum.",
      viewProjects: "Projelerimi Görüntüle",
      contact: "İletişime Geç",
      downloadCV: "CV İndir",
      specialtiesTitle: "İlgilendiğim Alanlar",
      specialtiesDesc:
        "Farklı teknoloji stack'leri ile end-to-end çözümler geliştiriyorum",
      techTitle: "Kullandığım Teknolojiler",
      techDesc:
        "Modern web geliştirme teknolojileri ile projelerinizi hayata geçiriyorum",
      specialties: {
        frontend: {
          title: "Frontend Development",
          desc: "React ile modern ve responsive kullanıcı arayüzleri geliştiriyorum",
        },
        backend: {
          title: "Backend Development",
          desc: "Spring Boot ile güçlü ve ölçeklenebilir API'ler inşa ediyorum",
        },
        mobile: {
          title: "Mobile Development",
          desc: "React Native ile cross-platform mobil uygulamalar üretiyorum",
        },
      },
    },
    projects: {
      title: "Projelerim",
      description:
        "Modern teknolojiler kullanarak geliştirdiğim projeler. Her biri farklı challenges ve çözümler içeriyor.",
      readMore: "Devamını oku",
      readLess: "Daha az göster",
      liveDemo: "Canlı Demo",
      projectList: {
        hoaxify: {
          title: "Hoaxify",
          description:
            "Bir arkadaşım ile ekip olarak geliştirdiğimiz, Twitter tarzında bir sosyal medya uygulamasıdır. Kullanıcıların anlık paylaşımlar yapabildiği, birbirlerini takip edip etkileşimde bulunabildiği dinamik bir platform. İçerik paylaşma, beğenme, yorum yapma ve etkileşim özellikleri ile hızlı ve akıcı iletişimi sağlar. Takım çalışmasıyla modern teknolojilerle gerçek dünya uygulaması geliştirme deneyimi.",
          category: "Full-stack",
        },
        blurr: {
          title: "Blurr",
          description:
            "Hala gelişirmekte olduğum Blurr, gizliliği ön planda tutan mobil sosyal iletişim uygulamasıdır. Kullanıcılar anonim olarak sohbet edebilir, story paylaşabilir ve mesajlaşabilir. Tamamen anonim mesajlaşma sistemi, gizli takip sistemi ve mahremiyet odaklı deneyim sunar. Klasik sosyal medyadan farklı olarak, kullanıcıların kendilerini rahatça ifade edebileceği güvenli bir alan oluşturmayı amaçlar.Uygulamanın ismine ve içeriğine vurgu yapmak amacıyla logosunu özel olarak bulanık şekilde tasarladım.",
          category: "Mobile",
        },
        familyAlbum: {
          title: "Family Album",
          description:
            "Aile bireylerinin dijital ortamda anılarını paylaşabilmesi için geliştirdiğim modern bir fotoğraf paylaşım platformudur. QR kod ile kolay erişim, fotoğraf yükleme, yükleyen kişi ve zaman bilgisi görüntüleme özelliklerine sahiptir. Duyguları teknolojiyle buluşturan, kullanıcı deneyimini ön planda tutan özel bir projedir.",
          category: "Full-stack",
        },
        contentCalendar: {
          title: "İçerik Planlama Takvimi",
          description:
            "Sosyal medya ekiplerinin içerik yönetimini kolaylaştırmak için geliştirmekte olduğum uygulamadır. Gönderi, reels ve story gibi içeriklerin tarih bazlı takvim üzerinden planlanabilmesi, medya kütüphanesi ile merkezi içerik yönetimi ve admin paneli üzerinden içerik onayları, kullanıcı yetkilendirmeleri sağlar.",
          category: "Full-stack",
        },
        rentACar: {
          title: "RentACar",
          description:
            "Araç kiralama süreçlerini dijital ortama taşıyan, tamamen Spring Boot ile geliştirdiğim bir backend uygulamasıdır. Çok katmanlı mimari ile tasarlanmış, veri tutarlılığı sağlanmış ve ModelMapper ile Entity-DTO dönüşümleri uygulanmıştır.",
          category: "Backend",
        },
      },
    },
    contact: {
      title: "İletişim",
      description:
        "Projeleriniz veya işbirliği fırsatları için benimle iletişime geçebilirsiniz.",
      contactInfo: "İletişim Bilgileri",
      socialMedia: "Sosyal Medya",
      phone: "Telefon",
      email: "Email",
      location: "Konum",
      locationValue: "Türkiye",
      availability: "Müsaitlik Durumu",
      availableText: "Yeni projeler için müsaitim",
      availableDesc: "Freelance projelere ve tam zamanlı fırsatlara açığım.",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      title: "Muhammed Enes AKBULUT",
      subtitle: "Full-stack developer",
      description:
        "I'm 24 years old. I graduated from Süleyman Demirel University Computer Engineering. Since I first met software, coding has been not just a profession for me, but also a passion. I love creating practical and scalable solutions to real-life problems with modern technologies.",
      viewProjects: "View My Projects",
      contact: "Get In Touch",
      downloadCV: "Download CV",
      specialtiesTitle: "My Specialties",
      specialtiesDesc:
        "I develop end-to-end solutions with different technology stacks",
      techTitle: "Technologies I Use",
      techDesc:
        "I bring your projects to life with modern web development technologies",
      specialties: {
        frontend: {
          title: "Frontend Development",
          desc: "I develop modern and responsive user interfaces with React",
        },
        backend: {
          title: "Backend Development",
          desc: "I build powerful and scalable APIs with Spring Boot",
        },
        mobile: {
          title: "Mobile Development",
          desc: "I create cross-platform mobile applications with React Native",
        },
      },
    },
    projects: {
      title: "My Projects",
      description:
        "Projects I developed using modern technologies. Each contains different challenges and solutions.",
      readMore: "Read more",
      readLess: "Show less",
      liveDemo: "Live Demo",
      projectList: {
        hoaxify: {
          title: "Hoaxify",
          description:
            "A Twitter-style social media application that I developed as a team with a friend. A dynamic platform where users can make instant posts, follow each other and interact. It provides fast and smooth communication with content sharing, liking, commenting and interaction features. Team work experience developing real-world applications with modern technologies.",
          category: "Full-stack",
        },
        blurr: {
          title: "Blurr",
          description:
            "Blurr, which I'm still developing, is a mobile social communication app that prioritizes privacy. Users can chat anonymously, share stories and message. It offers a completely anonymous messaging system, secret follow system and privacy-focused experience. Unlike traditional social media, it aims to create a safe space where users can express themselves comfortably. I specially designed the logo blurred to emphasize the name and content of the application.",
          category: "Mobile",
        },
        familyAlbum: {
          title: "Family Album",
          description:
            "A modern photo sharing platform I developed for family members to share their memories in digital environment. It has features such as easy access with QR code, photo upload, displaying uploader and time information. It's a special project that brings emotions together with technology and prioritizes user experience.",
          category: "Full-stack",
        },
        contentCalendar: {
          title: "Content Planning Calendar",
          description:
            "An application I'm developing to facilitate content management for social media teams. It enables planning content like posts, reels and stories through a date-based calendar, centralized content management with media library, and content approvals and user authorizations through admin panel.",
          category: "Full-stack",
        },
        rentACar: {
          title: "RentACar",
          description:
            "A backend application I developed entirely with Spring Boot that brings car rental processes to the digital environment. It's designed with multi-layered architecture, data consistency is ensured, and Entity-DTO transformations are implemented with ModelMapper.",
          category: "Backend",
        },
      },
    },
    contact: {
      title: "Contact",
      description:
        "You can contact me for your projects or collaboration opportunities.",
      contactInfo: "Contact Information",
      socialMedia: "Social Media",
      phone: "Phone",
      email: "Email",
      location: "Location",
      locationValue: "Turkey",
      availability: "Availability Status",
      availableText: "Available for new projects",
      availableDesc:
        "I'm open to freelance projects and full-time opportunities.",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "tr";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "tr" ? "en" : "tr"));
  }, []);

  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      let result = translations[language];

      for (const k of keys) {
        result = result?.[k];
      }

      return result || key;
    },
    [language]
  );

  const contextValue = useMemo(
    () => ({
      language,
      toggleLanguage,
      t,
    }),
    [language, toggleLanguage, t]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
