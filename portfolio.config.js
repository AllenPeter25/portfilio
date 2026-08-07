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
    resume: "/Resume.pdf",
    tagline: "I turn complex product requirements into fast, intuitive web experiences.",
    summary:
      "Software Engineer with 4 years of experience building enterprise web applications, specializing in Angular, TypeScript, and RxJS. I work across the stack, connect thoughtful interfaces to reliable APIs, and enjoy making complex systems feel simple.",
    focus: "Angular · TypeScript · Product engineering",
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],

  stats: [
    { value: "4", suffix: " yrs", label: "Professional Experience" }
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
      items: ["Java", "Spring Boot", "REST APIs", "GraphQL", "PostgreSQL"],
    },
    {
      title: "Ways of working",
      description: "Quality delivery through collaboration and iteration.",
      items: ["Git", "Postman", "Vercel", "Code Reviews", "Agile", "POC Development"],
    },
  ],

  experience: [
    {
      company: "Netcracker Technology",
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
        "Frontend feature development, API optimization, reporting visualizations, release delivery, and Spring Boot feature support.",
      technologies: ["Angular", "RxJS", "GraphQL", "Highcharts", "Spring Boot"],
      accent: "mint",
      icon: "enterprise",
    },
    {
      number: "02",
      title: "Cloud Kitchen Platform",
      type: "Freelance Project · Full Stack",
      description:
        "A responsive customer-facing experience and an admin portal with complete CRUD content management for a cloud-kitchen business.",
      contribution:
        "Built reusable Angular components, routing and reactive forms, plus a Spring Boot and PostgreSQL backend exposing REST APIs. Set up custom-domain deployment and Git-based delivery on Vercel.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "REST", "Vercel"],
      accent: "violet",
      icon: "kitchen",
      url: "https://www.jinroskitchens.co.in/",
      linkLabel: "Visit Jinros Kitchens",
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
};
