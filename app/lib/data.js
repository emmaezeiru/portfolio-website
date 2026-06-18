export const profile = {
  name: "Ezeiru-Elias Chukwubuikem Emma",
  shortName: "Emma Ezeiru",
  title: "Software Engineer",
  headline: "Hi I'm Emma",
  subheadline:  "Node.js and Java Software Engineer | Cloud & DevOps Enthusiast",
  valueProposition:
    // "I design and build production grade microservices, API gateways and event-driven backends for teams that need reliability at scale.",
    "I build scalable backend systems with Node js, Springboot and Microservices. I solve business problems with software. I'm exploring system design, DevOps and modern Architecture",
  email: "✉️ Say Hi!",
  location: "Lagos, Nigeria",
  timezone: "WAT (UTC+1)",
  availability: "Open to remote backend roles",
  resumeUrl: "/ezeiru-elias-emma-resume.pdf",
  social: [
    {
      name: "GitHub",
      href: "https://github.com/emmaezeiru",
      label: "@emmaezeiru",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/emma-ezeiru-elias-538871296/",
      label: "Ezeiru-Elias Chuwkubuikem Emma",
    },
    {
      name: "Stack Overflow",
      href: "https://stackoverflow.com/users/19101534/ezeiruemma",
      label: "emmaezeiru",
    },
    {
      name: "X",
      href: "https://x.com/emmaezeiru",
      label: "@emmaezeiru",
    },
    { name: "Instagram",
      href: "https://instagram.com/emmaezeiru",
      label:"@emmaezeiru,"
    },
    {
      name: "Discord",
      href: "https://discord.com/users/emmaezeiru",
      label: "emmaezeiru"
    }
  ],
};

export const about = {
  bio: [
    "I'm a software engineer focused on building distributed systems that stay fast, secure, and maintainable under real production load.",
    "My work spans Node js, Java Springboot microservices, PostgreSQL and MySql data layers, Redis caching, and Kafka event pipelines — with API gateway patterns that keep services decoupled and teams shipping independently.",
    "Before writing code, I clarify the business problem targets, failure modes, auth boundaries, and what \"done\" means for stakeholders. Then I ship with observability, tests, and documentation so the system can be owned long after launch.",
    "Based in Lagos and experienced working async with international teams. I'm targeting remote backend and software engineering roles at fintech companies and product-led startups.",
  ],
  // highlights: [
  //   { label: "REST API endpoints built", value: "80+" },
  //   { label: "Production services optimized", value: "5+" },
  //   { label: "Fintech platform users served", value: "1000s" },
  //   { label: "Backend experience", value: "3+ yrs" },
  // ],
};

export const experience = [
  {
    company: "Redtech Limited",
    role: "Backend Developer",
    period: "Jan 2025 — May 2026",
    type: "Full-time",
    summary:
      "Built and maintained backend systems for Redpay fintech and enterprise products — mobile payments, reconciliation workflows, super-app architecture, and reporting services.",
    achievements: [
      "Developed and maintained 80+ RESTful API endpoints and microservices supporting the Redpay fintech platform used by thousands of users across mobile and web.",
      "Built secure authentication and authorization using JWT and RBAC, protecting all platform endpoints across user, admin, and support roles.",
      "Architected and refactored Redpay mobile backend modules — bank transfers, automated reconciliation and recovery, bill payments, virtual accounts, KYC onboarding, notifications, and admin management — using Node.js and Express.js, reducing manual intervention through workflow automation.",
      "Integrated OPay and internal Redpay pay-with-code flows using Java and Spring Boot, adding merchant checkout and payment features that expanded platform revenue streams.",
      "Developed reporting services and middleware for the Pro Track enterprise management application using NestJS and Java Spring Boot.",
      "Built the request engine architecture for the HeirsOne Super App with NestJS, improving service communication and request processing reliability.",
      "Designed and optimized database schemas, migrations, and queries with PostgreSQL, Prisma, and Knex.js across 5+ services in a high-volume production environment.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Prisma",
      "Knex.js",
      "Microservices",
    ],
  },
  {
    company: "MTN Nigeria",
    role: "Developer & IT Support Engineer",
    period: "Nov 2023 — Aug 2024",
    type: "Full-time",
    summary:
      "Contributed to consumer-facing mobile features for millions of subscribers while supporting infrastructure, device provisioning, and production troubleshooting.",
    achievements: [
      "Contributed to the MyMTN next-gen mobile app, implementing the Prestige feature and an in-app chatbot that improved self-service capability for millions of subscribers.",
      "Assisted in integration and configuration of the Thryve bundle within MTN digital platforms, supporting product testing and deployment readiness.",
      "Supported end users by troubleshooting software, hardware, and network-related issues, and managed device provisioning and system setup for newly onboarded staff.",
    ],
    technologies: [
      "Mobile development",
      "Chatbot integration",
      "IT support",
      "Network troubleshooting",
      "Device provisioning",
    ],
  },
  {
    company: "ALX Africa",
    role: "Backend Software Engineer (Bootcamp)",
    period: "Sept 2022 — Oct 2023",
    type: "Intensive program",
    summary:
      "Intensive backend engineering program focused on scalable Node.js applications, security, Agile delivery, and cloud deployment practices.",
    achievements: [
      "Built scalable backend applications using Node.js, Express.js, MongoDB, and RESTful API architecture, including full authentication and authorization with industry-standard security practices.",
      "Collaborated with distributed teams on full-stack projects following Agile methodologies, with hands-on experience in Docker, CI/CD pipelines, Git workflows, and cloud deployment.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Docker",
      "CI/CD",
      "Git",
      "JWT",
    ],
  },
];

export const projects = [
  {
    id: "hr-management",
    name: "HR Management System",
    tagline: "Scalable APIs for organizational and employee management",
    problem:
      "A growing organization needed centralized system to manage employees, departments, attendance and leave requests — with strict role-based access so admins, managers, and staff see only what they're permitted to.",
    solution:
      "Built a NestJS backend with JWT-secured REST endpoints, RBAC across all modules, and Prisma ORM on PostgreSQL for type-safe data access and clean schema migrations.",
    architecture:
      "Client apps → NestJS API (auth middleware, RBAC guards) → Employee / Department / Designation / Leave modules → PostgreSQL via Prisma.",
    stack: ["NestJS", "PostgreSQL", "Prisma", "JWT", "RBAC", "TypeScript"],
    challenges: [
      "Implemented role-based access controls across employee, department, designation, and leave modules",
      "Designed normalized PostgreSQL schemas for organizational hierarchy and leave workflows",
      "Secured all endpoints with JWT authentication and permission-scoped route guards",
    ],
    impact:
      "Delivered scalable APIs for user and organizational management — authentication, RBAC, and core HR modules ready for production deployment.",
    
// "Enabled parallel feature delivery across teams and supported 500+ employee records with sub-200ms reads on core endpoints.",
    links: { live: null, github: "https://github.com/emmaezeiru" },
  },
  {
    id: "personalflow",
    name: "PersonalFlow",
    tagline: "CRM backend for small teams",
    problem:
      "Small teams lack affordable tools to track customer interactions, manage sales pipelines, and stay organized without enterprise CRM overhead.",
    solution:
      "Developed a Java Spring Boot backend with PostgreSQL, exposing REST APIs for customer records, interaction history, and sales process management.",
    architecture:
      "Web/mobile clients → Spring Boot REST API → Service layer → PostgreSQL (customers, interactions, sales stages).",
    stack: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Maven"],
    challenges: [
      "Modeled customer relationship data with clear entity relationships and query efficiency",
      "Built RESTful endpoints for tracking interactions and sales pipeline stages",
      "Structured the application for small teams with straightforward onboarding and data entry flows",
    ],
    impact:
      "A CRM application helping small teams manage customer interactions and sales processes efficiently through a reliable, maintainable backend.",
    links: { live: null, github: "https://github.com/emmaezeiru" },
  },
];


export const architectureDiagrams = [
  {
    id: "microservices",
    title: "Microservices Architecture",
    description:
      "Domain-driven services with independent deployment pipelines, isolated databases, and clear service boundaries for scalability and resilience.",
  },
  {
    id: "gateway",
    title: "API Gateway Architecture",
    description:
      "Centralized authentication, request routing, rate limiting, API signing, and observability across distributed services.",
  },
  {
    id: "auth-flow",
    title: "Authentication & Authorization Flow",
    description:
      "JWT lifecycle management, refresh token rotation, RBAC enforcement, and secure access control across the platform.",
  },
  {
    id: "events",
    title: "Event-Driven System Design",
    description:
      "Kafka-powered asynchronous communication enabling notifications, reporting, and personalization services to operate independently.",
  },
];

export const skills = {
  "Backend & Frameworks": [
    "Node.js",
    "Express.js",
    "NestJS",
    "JavaScript",
    "TypeScript",
    "Java",
    "Spring Boot",
    "REST APIs",
    "Microservices",
  ],
  Databases: [
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Prisma ORM",
    "Knex.js",
    "TypeORM",
  ],
  "Cloud & DevOps": [
    "AWS S3",
    "Docker",
    "Kubernetes",
    "Linux",
    "CI/CD",
    "Jenkins",
    "GitHub Actions",
  ],
  Security: ["JWT", "OAuth patterns", "RBAC", "bcrypt"],
  "Developer Tools": ["Postman", "IntelliJ", "VS Code", "Jira", "Git"],
};

export const trust = {
  githubHighlights: [
    { label: "Public repositories", value: "15+" },
    { label: "Primary languages", value: "TypeScript, JavaScript" },
    { label: "Focus areas", value: "Backend, APIs, Node.js" },
  ],
  certifications: [
    { name: "Backend Development — In progress", issuer: "Add your cert here" },
    { name: "Docker & Containerization", issuer: "Self-directed / Add credential" },
  ],
  testimonials: [
    {
      quote:
        "Emma consistently delivered backend features with clean API contracts and thoughtful error handling. Reliable in async standups and code reviews.",
      author: "Engineering Lead",
      company: "Placeholder — replace with real testimonial",
    },
  ],
  openSource: [
    "Contributing NestJS API patterns and backend utilities on GitHub",
    "Active on Stack Overflow answering Node.js and backend architecture questions",
  ],
};

export const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Architecture", id: "architecture" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];
