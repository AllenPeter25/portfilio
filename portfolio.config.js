/**
 * Portfolio content source of truth.
 * Update this file to change text, links, experience, projects, or skills.
 */
export const portfolio = {
  personal: {
    name: "Allen Peter",
    initials: "AP",
    role: "Software Engineer",
    location: "Bengaluru, India",
    email: "apeter753@gmail.com",
    phone: "+91 84958 26426",
    phoneHref: "+918495826426",
    linkedin: "https://www.linkedin.com/in/allenpeter7",
    github: "https://github.com/AllenPeter25",
    resume: {
      url: "/Resume.pdf",
      enabled: false,
    },
    tagline: "I turn complex product requirements into fast, intuitive web experiences.",
    summary:
      "Software Engineer with 4 years of experience building enterprise web applications, specializing in Angular, TypeScript, and RxJS. I work across the stack, connect thoughtful interfaces to reliable APIs, and enjoy making complex systems feel simple.",
    focus: "Angular · TypeScript · Product engineering",
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Education", href: "#credentials" },
    { label: "Contact", href: "#contact" },
  ],

  stats: [
    { value: "4", suffix: " yrs", label: "Professional Experience", enabled: true }
  ],

  skills: [
    {
      title: "Frontend",
      description: "Interfaces that stay maintainable as products grow.",
      items: ["Angular", "TypeScript", "RxJS", "NgRx", "Reactive Forms", "Highcharts", "HTML5", "CSS3"],
    },
    {
      title: "Backend & APIs",
      description: "Practical full-stack support and efficient data flows.",
      items: ["Spring Boot", "Java", "REST APIs", "PostgreSQL"],
    },
    {
      title: "Ways of working",
      description: "Quality delivery through collaboration and iteration.",
      items: ["Git", "Postman", "Code Reviews", "Agile", "POC Development"],
    },
  ],

  experience: [
    {
      company: "Netcracker Technology",
      logo: {
        src: "./assets/logos/netcracker.svg",
        alt: "Netcracker Technology logo",
      },
      location: "Bengaluru, Karnataka, India",
      period: "Sep 2022 — Present",
      roles: [
        {
          role: "Software Engineer",
          period: "Mar 2025 — Present",
          duration: "1 yr 6 mos",
          current: true,
          intro:
            "Building and evolving a Sales Force Automation product for enterprise lead, opportunity, and quota management within a research-driven product team.",
          highlights: [
            "Integrated REST and GraphQL APIs, reducing unnecessary calls and limiting payloads to the fields each experience needed.",
            "Contributed enhancements and defect fixes to Spring Boot services while supporting REST API development.",
            "Delivered fast-paced demos and POCs, prepared release items, refactored existing functionality, and contributed to peer code and design reviews.",
            "Led technical knowledge-transfer sessions to help teammates understand project components and processes.",
          ],
          technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "GraphQL", "Spring Boot", "Highcharts"],
        },
        {
          role: "Junior Software Engineer",
          period: "Sep 2022 — Feb 2025",
          duration: "2 yrs 6 mos",
          current: false,
          intro:
            "Started my professional journey on the Sales Force Automation product, developing enterprise-facing experiences and building a strong foundation in product delivery.",
          highlights: [
            "Developed Angular features and used RxJS and NgRx to manage asynchronous data streams and application state.",
            "Integrated frontend experiences with RESTful and GraphQL APIs for dependable data exchange.",
            "Built interactive Highcharts visualizations for reporting and analytics.",
            "Supported POCs, fast-paced product demos, release preparation, and ongoing feature refactoring.",
          ],
          technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "Reactive Forms", "GraphQL", "Highcharts"],
        },
      ],
    },
  ],

  projects: [
    {
      number: "01",
      title: "Enterprise Sales Force Automation",
      type: "Professional Work · Netcracker",
      description:
        "Product experiences for lead, opportunity, and quota management, with efficient REST and GraphQL integrations and interactive analytics dashboards.",
      contribution:
        "Frontend feature development, API optimization, reporting visualizations, release delivery, and Bug fixes",
      technologies: ["Angular", "RxJS", "API integration", "Optimization" , "Highcharts"],
      accent: "mint",
      icon: "enterprise",
    },
    {
      number: "02",
      title: "Cloud Kitchen Platform",
      type: "Freelance Project · Full Stack",
      description:
        "A cloud-kitchen recipe platform with recipe management, image uploads through Cloudinary, and embedded YouTube content.",
      contribution:
        "Built the Angular frontend and a Spring Boot microservices architecture with an API gateway, service discovery, PostgreSQL persistence, Cloudinary media storage, and containerized deployments.",
      technologies: ["Angular", "Spring Boot", "Spring Cloud", "PostgreSQL", "Cloudinary", "Docker"],
      accent: "violet",
      icon: "kitchen",
      url: "https://www.jinroskitchens.co.in/",
      linkLabel: "Visit jinroskitchens.co.in",
      architecture: {
        image: "./docs/architecture/jinros-kitchen-system-architecture-v2.png",
        alt: "Jinros Kitchen system architecture showing the Angular client, Spring Boot microservices, PostgreSQL, Cloudinary, deployment, and monitoring.",
      },
    },
  ],

  credentials: {
    education: {
      label: "Education",
      history: [
        {
          degree: "B.E. in Information Science & Engineering",
          school: "Mangalore Institute of Technology & Engineering",
          affiliationLabel: "University",
          affiliation: "Visvesvaraya Technological University (VTU), Belagavi",
          period: "2018 — 2022",
          extras: [
            {
              label: "Secretary, Music Club · 2020–2021",
              url: "", // Add a URL to display this activity as an arrow link.
            },
            {
              label:
                "Final-year project selected as the department nominee for VTU Financial Assistance for Innovative Projects · 2021–22",
              url: "https://mite.ac.in/wp-content/uploads/2023/02/VTU-Innovative-Project-Proceedings.pdf",
            },
          ],
        },
        {
          degree: "Pre-University (PCMCs)",
          school: "Mahesh PU College, Udupi",
          affiliationLabel: "Board",
          affiliation: "Karnataka Secondary Education Examination Board (KSEEB)",
          period: "2016 — 2018",
          extras: [
            {
              label: "Class Representative · 2017–2018",
              url: "", // Add a URL to display this activity as an arrow link.
            },
          ],
        },
        {
          degree: "Secondary School",
          school: "St. Mary’s English Medium School, Udupi",
          affiliationLabel: "Board",
          affiliation: "Central Board of Secondary Education (CBSE)",
          period: "2015 — 2016",
        },
      ],
    },
    awards: [
      {
        label: "Recognition",
        title: "Star Award",
        organization: "Netcracker Technology",
        description: "Recognized for consistently delivering exceptional value.",
      },
    ],
    publications: [
      {
        label: "Publication",
        title: "Solving MTSP (Geocode) for E-commerce Delivery using k-medoid and dynamic programming",
        description: "",
        journal: "International Journal of Innovative Science and Research Technology · Vol. 7, Issue 6",
        url: "https://ijisrt.com/assets/upload/files/IJISRT22JUN941.pdf",
      },
    ],
  },

  music: {
    modeLabels: {
      open: "Music mode",
      close: "Code mode",
    },
    eyebrow: "The amplified side",
    heading: ["Bands, stages", "and strings."],
    chronologyExpandedByDefault: true,
    introduction: "When I'm not building applications, you'll usually find me playing guitar.",
    tagline: "Developer by profession. Guitarist by passion.",
    instruments: ["Acoustic guitar", "Electric guitar", "Bass guitar"],
    labels: {
      archive: "Band archive",
      subBands: "Related sub-bands",
      role: "Role",
      activeYears: "Active years",
      achievements: "Highlights & achievements",
      chronology: "Associated Bands",
      chronologyKicker: "Career archive",
      chronologySummary: "Latest to earliest",
      expandChronologyAria: "Expand band chronology",
      collapseChronologyAria: "Collapse band chronology",
      viewHighlights: "View highlights",
      hideHighlights: "Hide highlights",
      latest: "Latest",
    },
    bands: [
      {
        order: 6,
        name: "Ashq",
        url: "https://www.instagram.com/ashq_theband/",
        role: "Lead Guitarist",
        activeYears: "2026 — Present",
        location: "Bangaluru",
        achievements: [],
      },
      {
        order: 5,
        name: "MetalBlade",
        url: "",
        role: "Bass Guitarist / Electric Guitarist",
        activeYears: "2019 — 2023",
        location: "Udupi",
        subBands: [
          {
            name: "Elementals",
            url: "",
          },
        ],
        achievements: [
          "Runner-up at the TAPMI Battle of the Bands in Manipal (2020).",
          "Performed at a public festival in Mangalore",
          "Performed at Hotel Ashlesh (New Year's) Manipal",
          "Participated in the Battle of the Bands at Atharva, TAPMI, Manipal (2019).",
          "Participated in the Battle of the Bands at NMAMIT, Nitte (2020).",
          "Participated in the Battle of the Bands at FMMC, Mangalore (2020).",
        ],
      },
      {
        order: 4,
        name: "College Band",
        url: "",
        role: "Electric Guitarist / Bass Guitarist",
        activeYears: "2018 — 2022",
        location: "Moodbidri",
        subBands: [
          {
            name: "Cloud 7",
          },
          {
            name: "Octavia",
          },
        ],
        achievements: [
          "Participated in the Battle of the Bands at NITK, Surathkal. (2019)",
          "Performed at various College cultural events.",
        ],
      },
      {
        order: 3,
        name: "Frequency",
        url: "",
        role: "Bass Guitarist",
        activeYears: "2018",
        location: "Udupi",
        achievements: [
          "Participated in Forum Rock at Forum Vijaya Mall, Vadapalani, Chennai.",
          "Performed at City Centre, Mangalore.",
        ],
      },
      {
        order: 2,
        name: "PU College Band (Three-piece)",
        url: "",
        role: "Electric Guitarist",
        activeYears: "2016 — 2017",
        location: "Udupi",
        achievements: [
          "Won the music category at the annual talent show in 2016 and 2017.",
          "Performed at Annual Day Events.",
        ],
      },
      {
        order: 1,
        name: "Tie Guys",
        url: "",
        role: "Acoustic Guitarist",
        activeYears: "2013 — 2016",
        location: "Udupi",
        achievements: [
          "Performed at multiple school cultural events.",
          "Won first place in a school-level anti-tobacco jingle competition.",
          "Performed at Fortune Inn Valley View, Manipal.",
        ],
      },
    ],
  },
};
