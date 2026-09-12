export type Project = {
  slug: string;
  name: string;
  category: string;
  period: string;
  description: string;
  overview: string;
  role: string;
  contributions: readonly string[];
  technicalHighlights: readonly string[];
  technologies: readonly string[];
};

export const projects = [
  {
    slug: "bayanatihub",
    name: "BayanatiHub",
    category: "Enterprise Data Governance",
    period: "September 2025 – Present",

    description:
      "Enterprise data catalog, governance, lineage, and collaboration platform for discovering and managing organizational data assets.",

    overview:
      "BayanatiHub is a centralized enterprise data governance platform designed to support metadata management, data discovery, lineage visualization, governance workflows, collaboration, and enterprise data operations.",

    role:
      "Senior Full Stack Engineer responsible for designing and shipping frontend and backend capabilities across governance, metadata, collaboration, integrations, and platform workflows.",

    contributions: [
      "Designed and shipped enterprise governance and metadata-management capabilities for centralized data operations.",
      "Built lineage visualization experiences for improving visibility into relationships between organizational data assets.",
      "Developed scalable APIs and enterprise integrations for Power BI, Qlik Sense, metadata connectors, and pipeline systems.",
      "Implemented Active Directory and ADFS authentication workflows for enterprise environments.",
      "Delivered collaboration capabilities including Teams, Planner & Tasks, shared workspaces, comments, chat, and project collaboration workflows.",
      "Contributed to AI-assisted metadata experiences including AI-generated descriptions and profiling workflows.",
      "Worked across frontend and backend systems to deliver modular platform capabilities as the product evolved.",
    ],

    technicalHighlights: [
      "React-based frontend with Redux Toolkit and RTK Query for application state and API interaction.",
      "React Flow used for lineage visualization and graph-oriented data relationships.",
      "Socket.IO used for real-time collaboration and communication capabilities.",
      "Node.js and Express.js used for backend APIs and application services.",
      "Sequelize and MSSQL Server used for data persistence and backend data access.",
      "Enterprise integrations connected the platform with external analytics, metadata, identity, and pipeline systems.",
    ],

    technologies: [
      "React",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "React Flow",
      "Socket.IO",
      "Node.js",
      "Express.js",
      "Sequelize",
      "MSSQL Server",
    ],
  },

  {
    slug: "ingage-pfm",
    name: "Ingage PFM",
    category: "Fintech / Personal Finance",
    period: "July 2023 – March 2025",

    description:
      "Personal finance platform supporting transaction insights, budgeting, savings, notifications, and intelligent financial workflows in enterprise banking environments.",

    overview:
      "Ingage PFM is a personal finance management platform used in enterprise banking environments to provide customers with financial insights and tools around transactions, budgeting, savings, notifications, and other financial workflows.",

    role:
      "Software Engineer focused heavily on backend systems, distributed processing, financial workflows, integrations, and production banking services.",

    contributions: [
      "Designed and shipped distributed backend modules powering transaction insights, budgeting systems, notifications, savings goals, and financial workflows.",
      "Worked across scalable microservices architectures involving service components, background processors, and message adapters.",
      "Built production-grade APIs and backend workflows supporting customer-facing financial products.",
      "Worked on open-banking integrations supporting financial data and banking workflows.",
      "Implemented RabbitMQ-based distributed messaging for asynchronous processing and service communication.",
      "Worked with Kubernetes-powered containerized deployments for production banking services.",
      "Collaborated with cross-functional engineering teams to deliver production-ready backend enhancements within agile release cycles.",
    ],

    technicalHighlights: [
      "Node.js and Express.js used for production backend services and APIs.",
      "TypeScript and Python used across backend modules and supporting services.",
      "RabbitMQ provided distributed messaging and asynchronous processing capabilities.",
      "Kubernetes and Docker supported containerized production deployments.",
      "MSSQL Server and ODBC supported data access and financial application workflows.",
      "REST APIs supported communication between services and customer-facing financial modules.",
    ],

    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Python",
      "RabbitMQ",
      "Kubernetes",
      "MSSQL Server",
      "ODBC",
      "REST APIs",
      "Docker",
    ],
  },

  {
    slug: "rubix",
    name: "Rubix",
    category: "Digital Banking",
    period: "February 2022 – June 2023",

    description:
      "Enterprise digital banking platform supporting retail and corporate banking operations through interconnected financial services and workflows.",

    overview:
      "Rubix is an enterprise digital banking platform supporting retail and corporate banking operations through interconnected services covering accounts, payroll, transfers, standing orders, beneficiaries, and back-office workflows.",

    role:
      "Software Engineer focused on backend services, banking workflows, APIs, microservices, and distributed financial systems.",

    contributions: [
      "Designed and shipped backend services supporting enterprise digital banking workflows.",
      "Built APIs and modules for account management, payroll systems, transfer services, standing orders, and beneficiary management.",
      "Worked on back-office workflows supporting day-to-day banking operations.",
      "Worked across dozens of interconnected microservices and service-oriented backend systems.",
      "Supported production transaction-processing workflows across distributed financial services.",
      "Improved backend maintainability and scalability through modular architectures and reusable service patterns.",
      "Used Redis caching and GraphQL APIs to improve backend service capabilities.",
    ],

    technicalHighlights: [
      "Node.js and NestJS used for backend services and modular application architecture.",
      "TypeScript used for strongly typed backend development.",
      "Microservices and SOA patterns supported interconnected banking services.",
      "GraphQL APIs supported communication between application components.",
      "Redis provided caching capabilities within backend workflows.",
      "Knex and MSSQL Server supported database access and persistence.",
    ],

    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "SOA",
      "Microservices",
      "GraphQL",
      "Redis",
      "Knex",
      "MSSQL Server",
    ],
  },
] as const;