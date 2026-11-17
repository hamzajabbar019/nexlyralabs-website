export type ServiceId =
  | 'ai-automation'
  | 'ai-chatbots'
  | 'python-fastapi'
  | 'custom-web'
  | 'flutter-mobile'
  | 'ml-data';

export interface ServiceItem {
  id: ServiceId;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  deliverables: string[];
  stack: string;
  spanClass: string;
  iconName: 'Workflow' | 'BotMessageSquare' | 'Server' | 'Globe' | 'Smartphone' | 'Cpu';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full-Stack & Mobile' | 'AI & Automation' | 'Machine Learning';
  originLabel: string;
  summary: string;
  description: string;
  architectureNotes: string[];
  stack: string[];
  imageSrc: string;
  imageAlt: string;
  githubUrl: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  details: string;
  output: string;
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

export const servicesList: ServiceItem[] = [
  {
    id: 'ai-automation',
    number: '01.',
    title: 'AI Automation and Workflow Integration',
    shortTitle: 'AI Automation & Workflows',
    description:
      'Replace repetitive manual tasks with dependable, automated operational pipelines that connect your existing tools, documents, and internal processes.',
    deliverables: [
      'End-to-end process orchestration',
      'Document & data extraction pipelines',
      'Webhook & third-party tool synchronization',
    ],
    stack: 'Python · Orchestration Pipelines · REST Webhooks · Scheduled Agents',
    spanClass: 'lg:col-span-7',
    iconName: 'Workflow',
  },
  {
    id: 'ai-chatbots',
    number: '02.',
    title: 'AI Chatbots and API Integration',
    shortTitle: 'AI Chatbots & API Integration',
    description:
      'Build custom conversational assistants and connect third-party language models directly to your product data, knowledge bases, and customer workflows.',
    deliverables: [
      'Context-aware knowledge retrieval',
      'Structured tool-calling & API routing',
      'Guardrails & clean web widget integration',
    ],
    stack: 'LLM APIs · Retrieval Pipelines · FastAPI · Streaming Responses',
    spanClass: 'lg:col-span-5',
    iconName: 'BotMessageSquare',
  },
  {
    id: 'python-fastapi',
    number: '03.',
    title: 'Python, FastAPI and Backend Development',
    shortTitle: 'Python, FastAPI & Backend',
    description:
      'Engineer clean, well-documented backend architectures, REST APIs, and relational databases designed for reliability, security, and long-term maintainability.',
    deliverables: [
      'High-throughput REST & async APIs',
      'PostgreSQL schema design & migrations',
      'Authentication, validation & role access',
    ],
    stack: 'Python · FastAPI · PostgreSQL · SQLAlchemy · Docker',
    spanClass: 'lg:col-span-5',
    iconName: 'Server',
  },
  {
    id: 'custom-web',
    number: '04.',
    title: 'Custom Web Application Development',
    shortTitle: 'Custom Web Applications',
    description:
      'Develop responsive, modern web platforms, client portals, and internal operational dashboards tailored specifically to how your business runs.',
    deliverables: [
      'Responsive React & TypeScript interfaces',
      'Role-based admin & client portals',
      'Clean API integration & state management',
    ],
    stack: 'React · TypeScript · Tailwind CSS · Modern REST Integration',
    spanClass: 'lg:col-span-7',
    iconName: 'Globe',
  },
  {
    id: 'flutter-mobile',
    number: '05.',
    title: 'Flutter Mobile App Development',
    shortTitle: 'Flutter Mobile Apps',
    description:
      'Deliver cross-platform mobile applications for iOS and Android from a single clean codebase, backed by synchronized APIs and intuitive mobile ergonomics.',
    deliverables: [
      'Cross-platform iOS & Android builds',
      'Clean mobile navigation & local persistence',
      'Seamless backend & push integration',
    ],
    stack: 'Flutter · Dart · FastAPI Backends · Cross-Platform UI',
    spanClass: 'lg:col-span-6',
    iconName: 'Smartphone',
  },
  {
    id: 'ml-data',
    number: '06.',
    title: 'Machine Learning and Data Solutions',
    shortTitle: 'Machine Learning & Data',
    description:
      'Apply practical machine learning, computer vision, and structured data processing to solve concrete classification, detection, and analytical problems.',
    deliverables: [
      'Computer vision & image analysis prototypes',
      'Data cleaning & feature engineering pipelines',
      'Model evaluation & API deployment',
    ],
    stack: 'Python · Computer Vision · Scikit-learn · Model Serving',
    spanClass: 'lg:col-span-6',
    iconName: 'Cpu',
  },
];

export const projectsList: ProjectItem[] = [
  {
    id: 'agewell',
    title: 'AgeWell',
    category: 'Full-Stack & Mobile',
    originLabel: 'Founder & University Build',
    summary: 'An elder-care application built using Flutter, FastAPI and PostgreSQL.',
    description:
      'AgeWell was designed as a practical elder-care coordination platform connecting senior wellness routines with caregiver visibility. Built end-to-end across mobile and backend layers with structured health schedules and persistent relational storage.',
    architectureNotes: [
      'Cross-platform mobile client implemented in Flutter with clear, accessible typography for senior usability.',
      'Modular FastAPI backend exposing structured REST endpoints with schema validation.',
      'PostgreSQL relational database managing user profiles, care schedules, and activity records.',
    ],
    stack: ['Flutter', 'FastAPI', 'PostgreSQL', 'Python'],
    imageSrc: '/src/assets/images/project_agewell_1794827368765.jpg',
    imageAlt: 'AgeWell mobile wellness interface on dark slate surface',
    githubUrl: 'https://github.com/hamzajabbar019/AgeWell_zab',
  },
  {
    id: 'linkedin-ai-agent',
    title: 'LinkedIn AI Agent',
    category: 'AI & Automation',
    originLabel: 'Founder R&D Build',
    summary: 'An AI-powered content research and publishing automation project.',
    description:
      'An automated editorial workflow built to streamline topic research, structured drafting, and publishing preparation for professional LinkedIn content—demonstrating practical multi-step agent orchestration.',
    architectureNotes: [
      'Automated research stage gathering and structuring relevant industry topics into clear briefs.',
      'Prompt-engineered drafting pipeline maintaining consistent tone and readable post formatting.',
      'Human-in-the-loop review and scheduling preparation before final publication.',
    ],
    stack: ['Python', 'AI Workflows', 'API Integration', 'Automation'],
    imageSrc: '/src/assets/images/project_linkedin_agent_1794827368872.jpg',
    imageAlt: 'Isometric visualization of an automated AI research and publishing pipeline',
    githubUrl: 'https://github.com/hamzajabbar019/linkedin-ai-agent',
  },
  {
    id: 'ml-projects',
    title: 'Machine Learning Projects',
    category: 'Machine Learning',
    originLabel: 'Academic & Applied R&D',
    summary: 'Demonstrations of machine learning and computer vision work.',
    description:
      'A focused body of applied machine learning and computer vision implementations exploring visual recognition, data preprocessing, model training workflows, and inference pipelines.',
    architectureNotes: [
      'Structured dataset preprocessing, normalization, and validation splits for reproducible training.',
      'Computer vision experiments covering object/feature detection and classification workflows.',
      'Modular Python inference scripts designed to integrate cleanly into FastAPI services.',
    ],
    stack: ['Python', 'Computer Vision', 'Machine Learning', 'Data Pipelines'],
    imageSrc: '/src/assets/images/project_ml_vision_1794827369539.jpg',
    imageAlt: 'Technical visualization of computer vision spatial analysis and coordinate grids',
    githubUrl: 'https://github.com/hamzajabbar019/Object-Detection-using-ML',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    summary: 'Understand your goals, workflows, and constraints.',
    details:
      'We start by mapping your operational bottlenecks, user needs, and technical requirements so every engineering decision solves a real business problem.',
    output: 'Clear scope brief & technical priorities',
  },
  {
    number: '02',
    title: 'Planning',
    summary: 'Define architecture, stack, and realistic milestones.',
    details:
      'Before writing code, we design the database structure, API contracts, and user flows, establishing transparent timelines and deliverables.',
    output: 'System architecture & milestone roadmap',
  },
  {
    number: '03',
    title: 'Development',
    summary: 'Build modular, clean, and maintainable software.',
    details:
      'Iterative engineering across backend APIs, automation agents, web interfaces, or mobile apps with regular progress demos and clean version control.',
    output: 'Working builds & documented source code',
  },
  {
    number: '04',
    title: 'Testing',
    summary: 'Verify edge cases, validation, and reliability.',
    details:
      'Thorough functional checks across API endpoints, user inputs, responsive layouts, and error handling so the product behaves predictably in real use.',
    output: 'Verified release candidate',
  },
  {
    number: '05',
    title: 'Delivery',
    summary: 'Deploy cleanly and hand over full documentation.',
    details:
      'Smooth production rollout, environment setup, and clear walkthroughs so your team can operate the software confidently from day one.',
    output: 'Production launch & handover guide',
  },
  {
    number: '06',
    title: 'Support',
    summary: 'Ongoing refinements and long-term partnership.',
    details:
      'Post-launch maintenance, feature iterations, and technical guidance as your business operations and user requirements evolve.',
    output: 'Continuous maintenance & iteration',
  },
];

export const heroStudioImage =
  '/src/assets/images/hero_ai_software_engineering_1794832486390.jpg';
