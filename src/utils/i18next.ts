// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      headline: "Empowering Digital Experiences Through Frontend Development",
      description:
        "I’m a front-end web developer with a strong design sensibility, dedicated to transforming creative concepts into responsive, high-performance websites. From interactive UI/UX interfaces to smooth animations and scalable code, I help brands and creators build powerful digital experiences that truly connect with users.",
      codeStats: "Lines of Code & Counting",
      industrySummary:
        "Collaborated with clients across tech, gaming, and creative industries to build modern, responsive websites. Merging design precision with clean, scalable code to deliver exceptional frontend solutions.",
      discover: "Discover More",
      aboutUs: "About Us",
      desc_aboutUs: "Hi, I’m Riko Purnama, a Frontend Web Developer with a passion for crafting seamless, responsive, and visually compelling web experiences. My primary focus lies in building user-centered interfaces using modern frameworks like React.js, enhanced by utility-first tools such as Tailwind CSS. With over 4 years of experience in frontend engineering, I specialize in creating fast-loading, accessible, and scalable websites that look and feel great across all devices. I take pride in blending clean code with meaningful design. Whether it’s implementing smooth GSAP animations or integrating immersive 3D interactions using Three.js, I approach every project with attention to performance, responsiveness, and creative flair. Beyond just 'how it looks', I care deeply about how it works—making sure every UI component is efficient, intuitive, and reusable. Currently, I collaborate with creative teams, startups, and indie game developers to turn complex ideas into elegant, functional interfaces. I'm always exploring new frontiers in web animation, motion design, and frontend architecture. Let’s build something awesome together.",

      projects: {
        project1: {
          title: "Darkblade Studio – Web Platform Development",
          desc: "Developed a fully responsive and scalable web platform for a fantasy game studio. Implemented React.js with Tailwind CSS for rapid UI building, and integrated backend APIs for player stats, login, and live leaderboards. Optimized for performance and accessibility across all devices.",
        },
        project2: {
          title: "Personal Developer Portfolio – GSAP & 3D UI",
          desc: "Created an animated portfolio site with GSAP scroll animations and interactive 3D sections using Three.js. Included custom-built CMS for easy content updates. Achieved Lighthouse performance score of 98+. Built with SEO, responsive design, and accessibility in mind.",
        },
      },
    },
  },
  id: {
    translation: {
      headline: "Memberdayakan Pengalaman Digital Melalui Pengembangan Frontend",
      description:
        "Saya adalah pengembang web front-end dengan rasa desain yang kuat, berdedikasi untuk mengubah konsep kreatif menjadi situs web yang responsif dan berkinerja tinggi. Dari antarmuka UI/UX interaktif hingga animasi yang halus dan kode yang skalabel, saya membantu merek dan kreator membangun pengalaman digital yang kuat yang benar-benar terhubung dengan pengguna.",
      codeStats: "Baris Kode & Terus Bertambah",
      industrySummary:
        "Bekerja sama dengan klien di bidang teknologi, game, dan industri kreatif untuk membangun situs web modern dan responsif. Menggabungkan presisi desain dengan kode yang bersih dan skalabel untuk menghadirkan solusi frontend yang luar biasa.",
      discover: "Selengkapnya",
      aboutUs: "Tentang Kami",
      desc_aboutUs: "Halo, saya Riko Purnama, seorang Frontend Web Developer dengan gairah untuk menciptakan pengalaman web yang mulus, responsif, dan menarik secara visual. Fokus utama saya adalah membangun antarmuka yang berpusat pada pengguna menggunakan framework modern seperti React.js, didukung oleh tools utility-first seperti Tailwind CSS. Dengan pengalaman lebih dari 4 tahun dalam rekayasa frontend, saya mengkhususkan diri dalam membuat situs web yang cepat dimuat, dapat diakses, dan skalabel yang terlihat dan terasa hebat di semua perangkat. Saya bangga memadukan kode bersih dengan desain bermakna. Baik itu mengimplementasikan animasi GSAP yang halus atau mengintegrasikan interaksi 3D yang imersif menggunakan Three.js, saya mendekati setiap proyek dengan perhatian pada kinerja, responsivitas, dan kreativitas. Lebih dari sekadar 'bagaimana tampilannya,' saya sangat peduli dengan cara kerjanya—memastikan setiap komponen UI efisien, intuitif, dan dapat digunakan kembali. Saat ini, saya bekerja sama dengan tim kreatif, startup, dan pengembang game indie untuk mengubah ide kompleks menjadi antarmuka yang elegan dan fungsional. Saya selalu menjelajahi batas baru dalam animasi web, desain gerak, dan arsitektur frontend. Mari kita bangun sesuatu yang luar biasa bersama.",

      projects: {
        project1: {
          title: "Darkblade Studio – Pengembangan Platform Web",
          desc: "Mengembangkan platform web yang responsif dan skalabel untuk studio game fantasi. Menggunakan React.js dan Tailwind CSS untuk membangun UI secara cepat, serta mengintegrasikan API backend untuk statistik pemain, login, dan papan peringkat langsung. Dioptimalkan untuk kinerja dan aksesibilitas di semua perangkat.",
        },
        project2: {
          title: "Portofolio Developer Pribadi – GSAP & UI 3D",
          desc: "Membuat situs portofolio animasi dengan scroll animation dari GSAP dan elemen 3D interaktif menggunakan Three.js. Menyertakan CMS kustom untuk pembaruan konten yang mudah. Meraih skor performa Lighthouse 98+. Dibangun dengan fokus pada SEO, desain responsif, dan aksesibilitas.",
        },
      },
    },
  },
  fr: {
    translation: {
      headline:
        "Favoriser des expériences numériques grâce au développement frontend",
      description:
        "Je suis développeur web frontend avec un sens aigu du design, dédié à la transformation de concepts créatifs en sites web réactifs et performants. Des interfaces UI/UX interactives aux animations fluides et au code évolutif, j'aide les marques et les créateurs à construire des expériences numériques puissantes et engageantes.",
      codeStats: "Lignes de code & en augmentation",
      industrySummary:
        "Collaboration avec des clients dans les domaines de la technologie, du jeu vidéo et de la création pour développer des sites web modernes et réactifs. Alliant précision du design et code propre pour offrir des solutions frontend exceptionnelles.",
      discover: "Découvrir plus",
      aboutUs: "A propos de nous",
      desc_aboutUs: "Bonjour, je suis Riko Purnama, développeur web frontend passionné par la création d’expériences web fluides, réactives et visuellement attrayantes. Mon principal objectif est de concevoir des interfaces centrées utilisateur avec des frameworks modernes comme React.js, renforcés par des outils utility-first tels que Tailwind CSS. Fort de plus de 4 ans d’expérience en ingénierie frontend, je me spécialise dans la création de sites web rapides, accessibles et évolutifs, performants sur tous les appareils. Je suis fier de combiner un code propre avec un design significatif. Qu’il s’agisse de mettre en œuvre des animations GSAP fluides ou d’intégrer des interactions 3D immersives avec Three.js, j’aborde chaque projet avec une attention particulière à la performance, la réactivité et la créativité. Au-delà de 'l’apparence,' je m’assure que tout fonctionne parfaitement — chaque composant UI est efficace, intuitif et réutilisable. Actuellement, je collabore avec des équipes créatives, des startups et des développeurs de jeux indépendants pour transformer des idées complexes en interfaces élégantes et fonctionnelles. J’explore sans cesse de nouveaux horizons dans l’animation web, le design du mouvement et l’architecture frontend. Construisons ensemble quelque chose d’exceptionnel.",

      projects: {
        project1: {
          title: "Darkblade Studio – Développement de plateforme Web",
          desc: "Développement d'une plateforme web entièrement responsive et évolutive pour un studio de jeux fantastiques. Utilisation de React.js avec Tailwind CSS pour une construction rapide de l’interface, intégration d’API backend pour les statistiques de joueurs, connexions et classements en direct. Optimisé pour la performance et l’accessibilité.",
        },
        project2: {
          title: "Portfolio Développeur Personnel – GSAP & UI 3D",
          desc: "Création d’un site de portfolio animé avec des scroll animations GSAP et des éléments 3D interactifs via Three.js. CMS personnalisé pour une mise à jour facile du contenu. Score Lighthouse de 98+. Construit avec un focus sur le SEO, la réactivité, et l’accessibilité.",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
