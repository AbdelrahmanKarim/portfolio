export const siteConfig = {
  name: "Abdelrahman Karim",
  title: "Abdelrahman Karim — Mobile Developer",
  description:
    "Mobile Developer specializing in Android, iOS, and cross-platform apps. Kotlin, Jetpack Compose, Swift, Flutter, and Clean Architecture for scalable, offline-first products.",
  url: "https://abdelrahmankarim.dev",
  email: "abdelrahmankarimwork@gmail.com",
  phone: "+201557285572",
  phoneDisplay: "+20 155 728 5572",
  location: "Cairo, Egypt",
  status: "Open to opportunities",
  resumePath: "/resume.pdf",
  profileImage: "/profile.jpg",
  links: {
    github: "https://github.com/AbdelrahmanKarim",
    linkedin: "https://linkedin.com/in/abdelrahman-karim",
    email: "mailto:abdelrahmankarimwork@gmail.com",
    phone: "tel:+201557285572",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const heroBackgroundImages = [
  "/hero/jets_1stplaceMe.jpeg",
  "/hero/jets_1stplace.jpeg",
  "/hero/creativa_2ndplace.jpeg",
  "/hero/nile_uni_2ndplace.jpeg",
  "/hero/ecpc_finalist.jpeg",
  "/hero/cursor_paymob_buildathon.jpg",
  "/hero/workshop_mobile.jpeg",
  "/hero/hult_prize.jpeg",
  "/hero/hultprize2.jpeg",
  "/hero/nile_uni_2ndplace_2.jpeg",
];

export const heroMarquee = [
  "Kotlin",
  "Swift",
  "Flutter",
  "Jetpack Compose",
  "SwiftUI",
  "Clean Architecture",
  "Coroutines",
  "RxSwift",
  "Retrofit",
  "KMP",
  "Firebase",
  "CoreData",
  "Room",
  "iOS",
  "Android",
];

export const aboutContent = {
  headline: "Engineer first. Builder always.",
  paragraphs: [
    "I'm Abdelrahman, a Mobile Developer who enjoys building products that feel fast, reliable, and polished — from offline-first Android apps to Clean Architecture iOS clients and cross-platform fitness trackers.",
    "I care about the parts of mobile engineering that matter in production: modular architecture, reactive state management, testable codebases, and UI that stays smooth on real devices.",
    "My path started with computer science fundamentals and competitive programming, then deepened through ITI's Mobile Native track and hands-on squad projects across Android, iOS, and KMP.",
    "If I'm not coding, I'm usually debugging something that was definitely supposed to work the first time — or exploring new mobile APIs.",
  ],
  focusAreas: ["Android", "iOS", "Flutter", "Clean Architecture", "Cross-Platform"],
  education: [
    {
      degree: "9-Month Diploma — Mobile Applications Development (Native)",
      school: "Information Technology Institute (ITI)",
      period: "Oct 2025 — Jun 2026",
      note: "Hybrid",
      logo: "/logos/iti.jpg",
    },
    {
      degree: "B.Sc. Computer Science",
      school: "Mansoura University",
      period: "Sep 2021 — May 2025",
      note: "Graduation Project: ArchivAI — 2nd Place at Nile University UGRF & Creativa Hackathon",
      logo: "/logos/mansoura.jpg",
    },
  ],
};

export type ExperienceItem = {
  year: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  logo?: string;
  bullets: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    year: "2026",
    role: "Android Engineer Intern",
    company: "Paymob",
    location: "Hybrid",
    period: "July 2026",
    current: true,
    logo: "/logos/paymob.jpg",
    bullets: [
      "Joined the Android POS team at a leading fintech payment gateway serving nearly 10M users across partner companies.",
      "Work within a multi-module POS codebase alongside the team in a hybrid model, attending daily stand-ups.",
      "Contribute unit tests to improve code reliability across production payment flows.",
    ],
    tags: ["Kotlin", "Multi-Module", "Unit Testing", "POS", "Fintech"],
  },
  {
    year: "2025",
    role: "Android Engineer Intern",
    company: "The Chance",
    location: "Remote",
    period: "Apr 2025 — Nov 2025",
    logo: "/logos/the-chance.jpg",
    bullets: [
      "Operated in a fast-paced, 8-month simulated enterprise environment with Agile sprints and daily stand-ups.",
      "Architected robust apps with strict Clean Architecture and multi-module structures.",
      "Established CI/CD pipelines via GitHub Actions for maintainable, shippable code.",
      "Built responsive UIs with Kotlin, Jetpack Compose, and Compose Multiplatform.",
    ],
    tags: ["Kotlin", "Jetpack Compose", "CMP", "Clean Architecture", "GitHub Actions"],
  },
];

export type ProjectItem = {
  name: string;
  description: string;
  github: string;
  tags: string[];
  highlight?: string;
  platform?: string;
  images: string[];
};

const movioImages = [
  "https://github.com/user-attachments/assets/96c36a18-90b1-47a9-a669-d5343ac283b4",
  "https://github.com/user-attachments/assets/14f28034-222b-403c-8b7c-98461b5b420f",
  "https://github.com/user-attachments/assets/16e24d73-b185-4e8b-92d8-8ec00d2fca87",
];

const evolveFitImages = [
  "https://github.com/user-attachments/assets/a05dd70d-5fa4-46e7-b1cf-ad426dd38e30",
  "https://github.com/user-attachments/assets/1405881a-5f36-4dcb-9f04-2ebc75f9ed4b",
  "https://github.com/user-attachments/assets/4b1dfa38-0593-444d-8515-7cdd153a06f5",
  "https://github.com/user-attachments/assets/18a2acf4-9858-4361-8511-493e33703247",
  "https://github.com/user-attachments/assets/22e10a4c-5cb1-404a-9299-aed19e95fb88",
];

export const projects: ProjectItem[] = [
  {
    name: "Carto",
    description:
      "1st Place JETS MobileX Challenge — native e-commerce app with Shopify integration, AI shopping assistant, wishlist, cart, and map-based address selection.",
    github: "https://github.com/Big-OO/carto",
    tags: ["Kotlin", "Compose", "Hilt", "GraphQL", "Room", "Clean Architecture"],
    highlight: "1st Place — JETS MobileX",
    platform: "Android",
    images: [
      "/projects/carto/carto1.jpeg",
      "/projects/carto/carto2.jpeg",
      "/projects/carto/carto3.jpeg",
      "/projects/carto/carto4.jpeg",
      "/projects/carto/carto5.jpeg",
      "/projects/carto/carto6.jpeg",
      "/projects/carto/carto7.jpeg",
    ],
  },
  {
    name: "FotMoc",
    description:
      "Clean Architecture iOS app delivering live sports data for Football, Basketball, Tennis, and Cricket — MVVM, RxSwift, CoreData offline cache, and AllSports API integration.",
    github: "https://github.com/AbdelrahmanKarim/FotMok",
    tags: ["Swift", "MVVM", "RxSwift", "CoreData", "Alamofire", "Kingfisher"],
    platform: "iOS",
    images: [
      "/projects/fotmoc/FotMoc1.jpeg",
      "/projects/fotmoc/FotMoc2.jpeg",
      "/projects/fotmoc/FotMoc3.jpeg",
      "/projects/fotmoc/FotMoc4.jpeg",
      "/projects/fotmoc/FotMoc5.jpeg",
      "/projects/fotmoc/FotMoc6.jpeg",
      "/projects/fotmoc/FotMoc7.jpeg",
    ],
  },
  {
    name: "Movio",
    description:
      "Squad-built movie/TV discovery app powered by TMDb — onboarding, auth, search, library with favorites & watch history, and multi-module Clean Architecture.",
    github: "https://github.com/Cairo-Squad/Movio",
    tags: ["Kotlin", "Compose", "Hilt", "Room", "Paging3", "Firebase"],
    platform: "Android",
    images: movioImages,
  },
  {
    name: "EvolveFit",
    description:
      "Cross-platform gym tracker built with Kotlin Multiplatform and Compose Multiplatform — workouts, nutrition, progress tracking, and shared UI across Android & iOS.",
    github: "https://github.com/Cairo-Squad/EvolveFit",
    tags: ["KMP", "Compose Multiplatform", "Koin", "Ktor", "Room", "Coil"],
    platform: "Cross-Platform",
    images: evolveFitImages,
  },
  {
    name: "Atmos",
    description:
      "Offline-first weather app with Room caching and a custom Danger Alerting System that bypasses Doze mode for severe weather thresholds.",
    github: "https://github.com/AbdelrahmanKarim/Atmos",
    tags: ["Kotlin", "Compose", "MVVM", "Koin", "WorkManager", "Retrofit"],
    platform: "Android",
    images: [
      "/projects/atmos/atmos1.jpeg",
      "/projects/atmos/atmos2.jpeg",
      "/projects/atmos/atmos3.jpeg",
      "/projects/atmos/atmos4.jpeg",
      "/projects/atmos/atmos5.jpeg",
    ],
  },
  {
    name: "BiteWise",
    description:
      "Culinary companion with recipe discovery, Weekly Meal Planner, offline-first Room caching, and Firebase Auth cloud sync.",
    github: "https://github.com/AbdelrahmanKarim/mealz",
    tags: ["Java", "MVP", "Room", "RxJava", "Firebase", "WorkManager"],
    platform: "Android",
    images: [
      "/projects/bitewise/bitewise1.jpeg",
      "/projects/bitewise/bitewise2.jpeg",
      "/projects/bitewise/bitewise3.jpeg",
      "/projects/bitewise/bitewise4.jpeg",
      "/projects/bitewise/bitewise5.jpeg",
    ],
  },
];

export type AchievementItem = {
  title: string;
  subtitle: string;
  year: string;
  badge: string;
  image: string;
};

export const achievements: AchievementItem[] = [
  {
    title: "JETS MobileX Challenge",
    subtitle: "Information Technology Institute — Carto project",
    year: "2026",
    badge: "1st Place",
    image: "/achievements/jets_1stplace.jpeg",
  },
  {
    title: "Creativa Hackathon",
    subtitle: "ArchivAI — 20,000 EGP prize among 50+ teams",
    year: "2024",
    badge: "2nd Place",
    image: "/achievements/creativa_2ndplace.jpeg",
  },
  {
    title: "Nile University UGRF",
    subtitle: "Computer Science Track — $300 prize",
    year: "2025",
    badge: "2nd Place",
    image: "/achievements/nile_uni_2ndplace.jpeg",
  },
  {
    title: "ECPC Finalist",
    subtitle: "Egyptian Collegiate Programming Contest",
    year: "2025",
    badge: "Finalist",
    image: "/achievements/ecpc_finalist.jpeg",
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Kotlin", "Java", "Swift", "Dart", "C++"],
  },
  {
    title: "Android Development",
    skills: [
      "Jetpack Compose",
      "Coroutines",
      "Flow",
      "Retrofit",
      "Room",
      "WorkManager",
      "Navigation",
      "Firebase",
    ],
  },
  {
    title: "iOS Development",
    skills: [
      "SwiftUI",
      "UIKit",
      "RxSwift",
      "CoreData",
      "Alamofire",
      "Kingfisher",
      "MVVM",
      "Factory DI",
    ],
  },
  {
    title: "Cross-Platform",
    skills: [
      "Flutter",
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "Koin",
      "Ktor",
    ],
  },
  {
    title: "Architecture & Patterns",
    skills: [
      "Clean Architecture",
      "MVVM",
      "MVP",
      "MVI",
      "Dependency Injection",
      "Modular Design",
      "SOLID",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub Actions",
      "Postman",
      "Figma",
      "JIRA",
      "JUnit",
      "Xcode",
      "Firebase Console",
    ],
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" },
];
