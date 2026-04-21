# Personal Portfolio Project

Bu proje, kendimi ve çalışmalarımı tanıtmak amacıyla geliştirdiğim, modern tasarım prensiplerine ve kullanıcı deneyimine (UX) odaklanan kişisel portfolyo web sitemdir. Proje, interaktif 3D öğeler ve dinamik özelliklerle zenginleştirilmiştir.


# Features
Multi-Language Support: Context API kullanılarak hazırlanan, Türkçe ve İngilizce dil seçenekleri.

Dark/Light Mode: Kullanıcı tercihlerine göre dinamik olarak değişen tema desteği.

3D & Interactive UI: Framer Motion ve özel bileşenlerle hazırlanan interaktif 3D animasyonlar.

Responsive Design: Tüm cihazlarla (Mobil, Tablet, Masaüstü) tam uyumlu arayüz.

Scroll Animations: Sayfa kaydırıldığında tetiklenen modern giriş ve vurgu animasyonları.


## Technologies Used

* **React.js** (Frontend kütüphanesi)
* **Tailwind CSS** (Modern ve hızlı stil yönetimi)
* **Framer Motion** (3D efektler ve kaydırma animasyonları için)
* **React Context API** (Tema ve Dil yönetimi için)
* **Custom Hooks** (Yeniden kullanılabilir animasyon mantığı)
* **PostCSS** (CSS dönüştürme araçları)

## Project Structure

```text
portfolio/
├── public/                     # Statik varlıklar (Favicon, resimler vb.)
├── src/
│   ├── components/             # Yeniden kullanılabilir UI bileşenleri
│   │   ├── Button3D.jsx        # Etkileşimli 3D butonlar
│   │   ├── Card3D.jsx          # Proje sergileme kartları
│   │   ├── Header.jsx          # Navigasyon çubuğu
│   │   ├── LanguageToggle.jsx  # Dil değiştirme butonu
│   │   ├── ProjectCard.jsx     # Proje detay bileşeni
│   │   ├── ScrollProgress.jsx  # Okuma ilerleme çubuğu
│   │   └── ThemeToggle.jsx     # Gece/Gündüz modu seçici
│   ├── context/                # Global state yönetimi
│   │   ├── LanguageContext.jsx # Çoklu dil desteği yapısı
│   │   └── ThemeContext.jsx    # Light/Dark mode yönetimi
│   ├── hooks/                  # Özel React hook'ları
│   │   └── useScrollAnimation.js # Scroll tabanlı animasyon tetikleyicileri
│   ├── pages/                  # Sayfa görünümleri
│   │   ├── Contact.jsx         # İletişim sayfası
│   │   ├── Home.jsx            # Ana sayfa / Hero bölümü
│   │   └── Projects.jsx        # Projeler galeri sayfası
│   ├── App.jsx                 # Ana uygulama bileşeni ve Router
│   ├── index.css               # Global stiller ve Tailwind direktifleri
│   └── index.js                # Uygulama giriş noktası
├── postcss.config.js           # Stil yapılandırması
└── package.json                # Proje bağımlılıkları ve scriptler






