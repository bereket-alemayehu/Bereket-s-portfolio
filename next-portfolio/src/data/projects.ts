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
      "Contributed to a Community-Based Health Insurance (CBHI) mobile app built with Flutter using GetX; focused on scalable state management and real-world health workflows.",
    context: "Mobile Application Developer at Habtech (until end of December).",
    role: "Mobile Developer",
    tech: ["Flutter", "Dart", "GetX", "Riverpod"],
    highlights: [
      "Implemented core CBHI workflows for field usage.",
      "Applied GetX patterns for scalable, maintainable state management.",
      "Collaborated with team for feature delivery and reliability.",
      "Worked with real production constraints: stability, usability, and field readiness.",
      "Improved maintainability by keeping features modular and testable by design.",
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
      "Worked on DHIS2 mobile and web systems for Sidama and Somali regions, including Ethiopian Calendar integration and interactive dashboards for data monitoring.",
    context: "DHIS2 mobile + web contributions for regional health systems.",
    role: "DHIS2 Developer",
    tech: ["DHIS2", "JavaScript", "Dashboards", "Indicators"],
    highlights: [
      "Collaborated to integrate Ethiopian Calendar into DHIS2 (major local usability improvement).",
      "Designed DHIS2 dashboards for fetching, tracking, and analyzing program data.",
      "Enabled decision-making via clear monitoring views for health stakeholders.",
      "Worked on both mobile and web-side DHIS2 workflows for Sidama and Somali regions.",
      "Focused on usability and local adoption (localized calendar and clear monitoring views).",
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
      "Delivered hands-on DHIS2 technical training and capacity building: a two-day session at Roroi Hotel (Hawassa) and training at Somali Region (Moyale).",
    role: "DHIS2 Trainer / Technical Support",
    tech: ["DHIS2", "Training", "Workflows"],
    highlights: [
      "Prepared and delivered practical training sessions.",
      "Supported trainees with DHIS2 workflows and system usage.",
      "Two-day training at Roroi Hotel, Hawassa.",
      "Training delivered in Moyale (Somali Region).",
      "Helped trainees follow standard workflows and avoid common reporting mistakes.",
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
      "Built backend systems with Laravel, including modern admin dashboards using Filament and Livewire 3; collaborated closely with frontend developers for robust integration.",
    context: "Laravel Backend Developer at Helder Technologies.",
    role: "Backend Developer",
    tech: ["Laravel", "Filament", "Livewire 3", "MySQL/PostgreSQL"],
    highlights: [
      "Built maintainable backend systems for multiple client websites.",
      "Focused on performance, security, and long-term maintainability.",
      "Worked in close collaboration with frontend teams.",
      "Developed data-driven admin dashboards using Filament and Livewire 3.",
      "Designed clean APIs and backend logic to support reliable frontend integration.",
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
      "A fast, secure, user-friendly eCommerce mobile app experience with simple browsing, purchasing, and discounts.",
    role: "Mobile Developer",
    tech: ["Flutter"],
    highlights: ["Mobile-first UX", "Performance-focused flows"],
    cover: media("/project1.png", "TanaExpress app preview"),
    gallery: [media("/project1.png", "TanaExpress app preview")],
  },
  {
    slug: "pick-your-meal",
    title: "Pick Your Meal",
    summary:
      "Flutter app that lets users browse and select meals based on preferences with an intuitive UX.",
    role: "Mobile Developer",
    tech: ["Flutter"],
    highlights: ["Clean UI", "Simple meal browsing"],
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
      "Flutter app to track daily expenses with visualizations and budgeting insights.",
    role: "Mobile Developer",
    tech: ["Flutter"],
    highlights: ["Add/edit/delete expenses", "Charts and insights"],
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
      "Responsive food delivery website focused on clear UX and fast browsing.",
    role: "Frontend Developer",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: ["Responsive layout", "Clean landing page"],
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
      "React + Node.js website to explore and rent games based on preferences and device specs.",
    role: "Full-Stack Developer",
    tech: ["React", "Node.js"],
    highlights: ["Filtering and discovery", "User-friendly UI"],
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
    summary: "Simple interactive dice roller built with web fundamentals.",
    role: "Frontend Developer",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: ["Interactive UI", "Simple game logic"],
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
      "Dynamic banking landing page built with JavaScript, HTML, and CSS.",
    role: "Frontend Developer",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: ["Smooth interactions", "Modern layout"],
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
