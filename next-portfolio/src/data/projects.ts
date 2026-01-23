export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMedia = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  context?: string;
  role?: string;
  tech: string[];
  highlights: string[];
  experienceGained?: string[];
  links?: ProjectLink[];
  cover: ProjectMedia;
  gallery: ProjectMedia[];
};

const media = (src: string, alt: string): ProjectMedia => ({ src, alt });

export const projects: Project[] = [
  {
    slug: "cbhi-mobile-app",
    title: "CBHI Mobile Application (Ethiopian Health Insurance)",
    summary:
      "Architected and developed a comprehensive Community-Based Health Insurance (CBHI) mobile application using Flutter and GetX, delivering robust state management and intuitive health workflow experiences for field operations across Ethiopia.",
    context: "Mobile Application Developer at Habtech (until end of December).",
    role: "Mobile Developer",
    tech: ["Flutter", "Dart", "GetX", "Riverpod"],
    highlights: [
      "Engineered core CBHI enrollment and claims workflows optimized for field usage with offline capabilities.",
      "Implemented scalable GetX state management patterns ensuring maintainable and testable code architecture.",
      "Collaborated cross-functionally with healthcare experts to deliver reliable, production-ready features.",
      "Navigated complex production constraints including network reliability, data synchronization, and user experience in challenging field conditions.",
      "Established modular architecture principles that improved code maintainability and enabled rapid feature iteration.",
    ],
    experienceGained: [
      "At Habtech, I gained strong technical and professional discipline — delivering features within time and budget.",
      "I learned practical ways to estimate tasks, communicate progress, and avoid last-minute surprises.",
      "I improved my ability to debug complex app issues under real timelines and user pressure.",
      "I had the chance to work with senior and expert developers, including Dr. Abiyot (one of the DHIS2 co-founders and a core programmer at the University of Oslo).",
      "I would like to thank my technical lead, Rediet, for teaching me how to stay professional in every situation — whether a project is delayed or progressing well — and for his consistent support.",
      "I also appreciate Mr. Tigabu Dagne, one of the Habtech co-founders, for his optimism and leadership, and I’m grateful to the entire Habtech team for the opportunity.",
    ],
    cover: media("/assets/login-form.jpg", "CBHI application login screen"),
    gallery: [
      media("/assets/login-form.jpg", "CBHI application login screen"),
      media("/assets/enrollment_habtech.jpg", "CBHI enrollment screen"),
      media("/assets/claim_mgt_habtech.jpg", "CBHI claim management screen"),
    ],
  },
  {
    slug: "dhis2-ethiopian-calendar-dashboards",
    title: "DHIS2 Enhancements: Ethiopian Calendar + Dashboards",
    summary:
      "Transformed DHIS2 health information systems for Sidama and Somali regions by implementing Ethiopian Calendar integration and crafting sophisticated interactive dashboards that revolutionized data monitoring and decision-making processes.",
    context: "DHIS2 mobile + web contributions for regional health systems.",
    role: "DHIS2 Developer",
    tech: ["DHIS2", "JavaScript", "Dashboards", "Indicators"],
    highlights: [
      "Pioneered Ethiopian Calendar integration into DHIS2, dramatically improving local usability and cultural relevance for health workers.",
      "Architected comprehensive dashboards with advanced data visualization, enabling real-time tracking of health program indicators and KPIs.",
      "Empowered health stakeholders with actionable insights through intuitive monitoring interfaces that transformed raw data into strategic decisions.",
      "Delivered seamless cross-platform experiences across mobile and web environments for Sidama and Somali regional health systems.",
      "Prioritized localization and user adoption by implementing culturally appropriate interfaces and Ethiopian calendar systems.",
    ],
    experienceGained: [
      "Deepened my DHIS2 understanding: programs, indicators, dashboards, and practical health reporting workflows.",
      "Learned how to translate stakeholder reporting needs into dashboards that are easy to use and maintain.",
      "Improved collaboration skills by planning and delivering a key feature (Ethiopian Calendar) with a teammate.",
    ],
    cover: media(
      "/assets/enrollment_habtech.jpg",
      "Habtech enrollment screen (default cover)"
    ),
    gallery: [
      media(
        "/assets/enrollment_habtech.jpg",
        "Habtech enrollment screen (field workflow)"
      ),
      media(
        "/assets/claim_mgt_habtech.jpg",
        "Habtech claim management screen (field workflow)"
      ),
      media("/assets/habtech-dashboard1.png", "DHIS2 dashboard overview"),
      media("/assets/habtech-dashboard2.png", "DHIS2 dashboard view"),
      media("/assets/habtech-dashboard3.png", "DHIS2 dashboard analytics"),
      media("/assets/habtech-dashboard4.png", "DHIS2 dashboard indicators"),
      media("/assets/habtech-dashboard15.png", "DHIS2 dashboard report"),
    ],
  },
  {
    slug: "capacity-building-trainings",
    title: "Capacity Building & Technical Training (Hawassa + Moyale)",
    summary:
      "Led comprehensive DHIS2 technical training and capacity building initiatives across Ethiopia, conducting immersive two-day sessions at Roroi Hotel (Hawassa) and delivering specialized training in Somali Region (Moyale), empowering health professionals with advanced system expertise.",
    role: "DHIS2 Trainer / Technical Support",
    tech: ["DHIS2", "Training", "Workflows"],
    highlights: [
      "Designed and delivered intensive, practical training curricula focused on real-world DHIS2 implementation scenarios.",
      "Provided hands-on technical support, guiding trainees through complex workflows and system optimization techniques.",
      "Facilitated transformative two-day training program at Roroi Hotel, Hawassa, covering advanced DHIS2 features and best practices.",
      "Extended training reach to Somali Region (Moyale), adapting content for diverse regional healthcare contexts.",
      "Minimized reporting errors and improved data quality by establishing standardized workflows and troubleshooting methodologies.",
    ],
    experienceGained: [
      "Strengthened my communication and facilitation skills through hands-on, practical training delivery.",
      "Improved my ability to explain technical workflows clearly to different audiences.",
      "Built confidence in supporting users on-site and resolving issues quickly during training sessions.",
    ],
    cover: media(
      "/assets/capacity-training-habtech_2_hawassa.jpg",
      "Hawassa training photo (default cover)"
    ),
    gallery: [
      media(
        "/assets/capacity-training-habtech_2_hawassa.jpg",
        "Hawassa training (Roroi Hotel)"
      ),
      media(
        "/assets/capcity-traning-habtech_1_hawassa.jpg",
        "Hawassa training (Roroi Hotel)"
      ),
      media(
        "/assets/capacity_building_habtech_3_hawassa.jpg",
        "Hawassa capacity building"
      ),
      media("/assets/hawassa_habtech_4.png", "Hawassa training (Habtech)"),
      media("/assets/hawass_habtech_5.png", "Hawassa training (Habtech)"),
      media("/assets/hawassa_habtech_6.png", "Hawassa training (Habtech)"),
      media("/assets/hawassa_habtech_7.png", "Hawassa training (Habtech)"),
      media(
        "/assets/capacity-training-habtech.jpg",
        "Training session (Habtech)"
      ),
      media(
        "/assets/capcity-traning-habtech.jpg",
        "Training session (Habtech)"
      ),
      media(
        "/assets/capacity_building_moyale_habtech_1.png",
        "Moyale training (Somali Region)"
      ),
      media(
        "/assets/capacity_building_moyale_habtech_2.png",
        "Moyale training (Somali Region)"
      ),
      media("/assets/moyale_habtech_3.png", "Moyale training (Somali Region)"),
    ],
  },
  {
    slug: "laravel-backend-systems",
    title: "Laravel Backend Systems (Helder Technologies)",
    summary:
      "Engineered sophisticated backend architectures using Laravel with cutting-edge Filament and Livewire 3 technologies, creating powerful admin dashboards and seamless API integrations that powered multiple client websites with exceptional performance and security.",
    context: "Laravel Backend Developer at Helder Technologies.",
    role: "Backend Developer",
    tech: ["Laravel", "Filament", "Livewire 3", "MySQL/PostgreSQL"],
    highlights: [
      "Architected scalable backend systems for diverse client portfolios, ensuring high availability and optimal performance.",
      "Implemented enterprise-grade security measures and performance optimizations for mission-critical applications.",
      "Established seamless collaboration workflows with frontend teams, enabling rapid feature development and integration.",
      "Crafted intuitive, data-driven admin dashboards using Filament and Livewire 3, providing clients with powerful content management capabilities.",
      "Designed robust RESTful APIs and backend logic that facilitated reliable, real-time frontend-backend communication.",
    ],
    experienceGained: [
      "Strengthened backend architecture skills in Laravel with a focus on clean structure and long-term maintainability.",
      "Improved my ability to think about security, performance, and deployment-readiness in real projects.",
      "Learned how to coordinate with frontend developers to deliver consistent end-to-end features.",
    ],
    links: [
      { label: "Refocus Africa", href: "#" },
      { label: "Dr. Eyob Mamo eCommerce", href: "#" },
      { label: "Mr. Endashaw website", href: "#" },
    ],
    cover: media(
      "/assets/helder-endeshaw.png",
      "Helder Technologies project screenshot"
    ),
    gallery: [
      media(
        "/assets/helder-endeshaw.png",
        "Helder Technologies project screenshot"
      ),
    ],
  },

  {
    slug: "tanaexpress",
    title: "TanaExpress (eCommerce Mobile App)",
    summary:
      "Crafted a high-performance eCommerce mobile application with lightning-fast transactions, advanced security features, and an intuitive user experience that prioritizes seamless browsing, secure purchasing, and exclusive discount management.",
    role: "Mobile Developer",
    tech: ["Flutter"],
    highlights: ["Mobile-first UX with advanced gesture controls", "Performance-optimized checkout flows with real-time validation"],
    cover: media("/project1.png", "TanaExpress app preview"),
    gallery: [media("/project1.png", "TanaExpress app preview")],
  },
  {
    slug: "pick-your-meal",
    title: "Pick Your Meal",
    summary:
      "Developed an elegant Flutter application that revolutionizes meal selection with intelligent preference matching, stunning visual design, and a smooth, intuitive user experience that makes food discovery delightful and effortless.",
    role: "Mobile Developer",
    tech: ["Flutter"],
    highlights: ["Polished UI with sophisticated animations", "Smart preference-based meal recommendations"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/bereket-alemayehu/pick-up-your-meal",
      },
    ],
    cover: media("/project2.jpg", "Pick Your Meal app preview"),
    gallery: [media("/project2.jpg", "Pick Your Meal app preview")],
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    summary:
      "Built a comprehensive expense management application featuring advanced data visualization, intelligent budgeting algorithms, and insightful analytics that transform financial tracking into a powerful decision-making tool.",
    role: "Mobile Developer",
    tech: ["Flutter"],
    highlights: ["Intuitive expense CRUD operations", "Advanced charting and financial insights"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/bereket-alemayehu/track-your-expense",
      },
    ],
    cover: media("/project3.jpg", "Expense tracker preview"),
    gallery: [media("/project3.jpg", "Expense tracker preview")],
  },
  {
    slug: "omnifood",
    title: "OmniFood",
    summary:
      "Designed a responsive food delivery platform with exceptional user experience, featuring rapid browsing capabilities, elegant animations, and a clean, modern interface that sets new standards for food delivery websites.",
    role: "Frontend Developer",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: ["Fully responsive design across all devices", "Modern landing page with smooth interactions"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/bereket-alemayehu/Omnifood-Food-Delivery-App",
      },
    ],
    cover: media("/project4.jpg", "OmniFood website preview"),
    gallery: [media("/project4.jpg", "OmniFood website preview")],
  },
  {
    slug: "gamezone",
    title: "GameZone",
    summary:
      "Engineered a full-stack gaming platform combining React's dynamic frontend with Node.js backend, offering sophisticated game discovery, rental management, and device compatibility matching for an unparalleled gaming experience.",
    role: "Full-Stack Developer",
    tech: ["React", "Node.js"],
    highlights: ["Advanced filtering and recommendation engine", "Intuitive user interface with seamless navigation"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/bereket-alemayehu/GameZone",
      },
    ],
    cover: media("/project5.jpg", "GameZone preview"),
    gallery: [media("/project5.jpg", "GameZone preview")],
  },
  {
    slug: "dice-roller",
    title: "Dice Roller Game",
    summary: "Created an engaging interactive dice game that demonstrates mastery of web fundamentals with smooth animations, responsive design, and intuitive gameplay mechanics.",
    role: "Frontend Developer",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: ["Polished interactive UI with fluid animations", "Clean game logic with excellent user feedback"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/bereket-alemayehu/DiceRollerFlutter/",
      },
    ],
    cover: media("/project6.jpg", "Dice roller preview"),
    gallery: [media("/project6.jpg", "Dice roller preview")],
  },
  {
    slug: "bankist",
    title: "Bankist",
    summary:
      "Developed a sophisticated banking landing page with dynamic JavaScript interactions, modern CSS animations, and a professional design that effectively communicates financial services with elegance and clarity.",
    role: "Frontend Developer",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: ["Fluid micro-interactions and animations", "Contemporary layout with excellent visual hierarchy"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/bereket-alemayehu/bankist.github.io",
      },
    ],
    cover: media("/project7.jpg", "Bankist preview"),
    gallery: [media("/project7.jpg", "Bankist preview")],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
