import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'siddharthnama.work@gmail.com',
    emailSubject: "Let's build together...",
    emailBody: 'Hi Siddharth, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'linktree', url: 'https://linktr.ee/siddharthnama' },
    { name: 'github', url: 'https://github.com/Siddharth-Nama' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/siddharth-nama' },
    { name: 'x', url: 'https://www.x.com/siddharthnama26' },
    { name: 'leetcode', url: 'https://www.leetcode.com/u/Siddharth-Nama' },
];

export const MY_STACK = {
    frontend: [
        { name: 'HTML', icon: '/logo/html.png' },
        { name: 'CSS', icon: '/logo/css.png' },
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'React Native', icon: '/logo/react.png' }, 
        { name: 'Redux', icon: '/logo/redux.png' }, 
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Vite', icon: '/logo/vite.png' }, 
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
    ],
    backend: [
        { name: 'Django', icon: '/logo/django.png' },
        { name: 'Python', icon: '/logo/python.png' },
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'C++', icon: '/logo/c++.png' },
        { name: 'C', icon: '/logo/c.png' },
    ],
    database: [
        { name: 'SQL', icon: '/logo/sql.png' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'SQLite', icon: '/logo/sqlite.png' },
        { name: 'MongoDB', icon: '/logo/mongodb.png' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Github', icon: '/logo/github.png' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'VS Code', icon: '/logo/vscode.png' },
        { name: 'Postman', icon: '/logo/postman.png' },
        { name: 'Vercel', icon: '/logo/vercel.png' },
        { name: 'AWS', icon: '/logo/aws.png' },
        { name: 'Pythonanywhere', icon: '/logo/pythonanywhere.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Scripty',
        slug: 'scripty',
        techStack: ['Python', 'Tesseract OCR', 'Deepseek API', 'Gemini API', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
        thumbnail: '/projects/thumbnail/scripty.png', 
        images: ['/projects/images/scripty1.png', '/projects/images/scripty2.png'], 
        year: 2025, 
        description: `
        Scripty is an AI-powered smart assignment generator that converts handwritten or text-based PDFs into clean, editable, and submission-ready handwritten-style documents. It leverages OCR to extract text from uploaded PDFs, uses AI models to rewrite or generate well-structured answers, and renders the final output in natural handwritten fonts with ruled-paper styling, allowing users to make last-minute edits before exporting polished PDFs.
        <br/> <br/>Key Features:<br/>
        <ul>
            <li>100+ handwritten fonts with the ability to create and use your own handwriting font.</li>
            <li>100% customization of layout, spacing, font style, and formatting.</li>
            <li>Reduces assignment preparation time by up to 80%.</li>
            <li>AI-powered processing for clean, editable, submission-ready documents.</li>
        </ul>
        `,
        role: 'Built Scripty from scratch end-to-end and validated it with 100+ students, improving accuracy and usability through real feedback.',
        sourceCode: 'https://github.com/Siddharth-Nama/Scripty',
        liveUrl: 'https://scripty.vercel.app',
    },
    {
        title: 'DroneX',
        slug: 'DroneX',
        techStack: ['React.js', 'Django', 'Python', 'JavaScript', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'PythonAnywhere'],
        thumbnail: '/projects/thumbnail/dronex.png', 
        images: ['/projects/images/dronex1.png', '/projects/images/dronex2.png'], 
        year: 2026, 
        description: `
        DroneX is a full-stack application designed as a scalable ground control station (GCS) for planning and managing autonomous drone survey missions. The system enables users to define survey areas and flight paths, visualize mission progress, monitor drone fleet status, and generate mission reports through an intuitive dashboard. Built with modern frontend and backend technologies, it emphasizes real-time visualization, responsive UI, and extensible architecture suitable for operational drone control workflows. 
        <br/> <br/>Key Features:<br/>
        <ul>
            <li>Full mission planning and configuration with interactive path creation</li>
            <li>Live drone status and fleet visualization on dashboard components.</li>
            <li>Mission progress tracking with real-time updates.</li>
            <li>Comprehensive reporting and analytics for completed surveys.</li>
        </ul>
        `,
        role: 'Implemented the project end-to-end, developing both the backend APIs and frontend interface, integrating real-time mission visualization and dashboard components, and ensuring a scalable architecture ready for further enhancements.',
        sourceCode: 'https://github.com/Siddharth-Nama/flytbase-assessment',
        liveUrl: 'https://flytbase-assessment.vercel.app/',
    },
    {
        title: 'PreAbs - Attendance Portal',
        slug: 'preabs',
        techStack: ['React.js', 'Django', 'Python', 'JavaScript', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'PythonAnywhere'],
        thumbnail: '/projects/thumbnail/preabs.png', // Placeholder
        images: ['/projects/images/preabs1.png', '/projects/images/preabs2.png'], // Placeholders
        year: 2024,
        description: `
        PreAbs is an intelligent attendance management system built to streamline how attendance is recorded, tracked, and reported for academic use. The platform allows instructors to easily mark and monitor student attendance, generate reports, and download attendance summaries. It emphasizes user-friendly interfaces and robust backend logic to ensure accurate tracking and persistence of records. Designed for scalability and customization, PreAbs can be extended to support role-based access, analytics, and notifications.
        <br/> <br/>
        Key Modules:<br/>
        <ul>
            <li>Role-Based Access Control (RBAC): Ensures separate access rights for teachers and students.</li>
            <li>6-Digit Unique Code Generation: Teachers can generate shareable codes (via WhatsApp or other platforms) for attendance.</li>
            <li>Real-Time Attendance Management: Automatically records and stores attendance securely in the database after teacher approval.</li>
            <li>User-Friendly Interface: Intuitive design for seamless navigation across functionalities.</li>
        </ul>
        `,
        role: 'Developed the PreAbs portal end-to-end, implementing frontend views and backend APIs, integrating PostgreSQL for reliable data storage, and ensuring responsive UI and seamless attendance workflows.',
        sourceCode: 'https://github.com/Siddharth-Nama/PreAbs-AttendancePortalIIITBH',
        liveUrl: 'https://siddharthattendanceportal.pythonanywhere.com/accounts/login/',
    },
    {
        title: 'Mercato Agency',
        slug: 'mercato',
        techStack: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'Vercel'],
        thumbnail: '/projects/thumbnail/mercato.png', // Placeholder
        images: ['/projects/images/mercato1.png', '/projects/images/mercato2.png'], // Placeholders
        year: 2025,
        description: `
        Built a modern, high-performance marketing website for Mercato Agency during my internship, focused on clearly showcasing services and converting visitors into leads. The site presents the agency’s offerings—including content creation, graphic design, video editing, SEO, and Shopify store setup—through a clean UI, smooth animations, and responsive layouts. It includes reusable UI components, contact forms with email integration, and optimized pages designed for real-world business use.
        <br/> <br/>
        Key Modules:<br/>
        <ul>
            <li>Business-focused landing pages highlighting agency services.</li>
            <li>Responsive, modern UI with smooth animations</li>
            <li>Reusable component-based design system.</li>
            <li>Contact forms with email/lead capture integration.</li>
        </ul>
        `,
        role: 'Developed the landing page end-to-end using Next.js, implemented responsive layouts and animations, built reusable UI components, and integrated contact forms to capture and manage client leads.',
        sourceCode: 'https://github.com/Siddharth-Nama/Mercato_Agency',
        liveUrl: 'https://www.mercato.agency/',
    },
    {
        title: 'Suvidha Manch',
        slug: 'suvidhamanch',
        techStack: ['Python', 'Django', 'Django REST', 'JWT', 'PostgreSQL', 'React', 'TypeScript', 'Vite', 'Material UI', 'PWA (Service Worker)', 'Nginx', 'Gunicorn'],
        thumbnail: '/projects/thumbnail/suvidha.png', // Placeholder
        images: ['/projects/images/suvidha1.png', '/projects/images/suvidha2.png'], // Placeholders
        year: 2025,
        description: `
        Built a full-stack municipal infrastructure tracking system during C4GT 2025 to manage roads, contractors, and public works. The platform supports role-based access (JE, AE, XEN, etc.), periodic work updates with image/PDF uploads, inter-department request workflows, and complete audit trails. Designed for real-world government usage with secure authentication, CSV bulk uploads, email notifications, and production-ready deployment.
        Key Achievements:<br/>
        <ul>
            <li>Roads, Contractors, Infra Works CRUD APIs</li>
            <li>PWA-enabled frontend with auto token refresh</li>
            <li>Inter-department request & status workflow</li>
            <li>Audit logging & aggregated reporting API</li>
        </ul>
        `,
        role: 'Full Stack Developer',
        sourceCode: 'https://github.com/ADC-Mahendragarh-C4GT',
        liveUrl: 'https://adcfrontend.vercel.app/',
    },
    {
        title: 'Weavy AI Clone',
        slug: 'weavy.ai',
        techStack: ['Next.js (App Router)', 'React', 'TypeScript', 'Tailwind CSS', 'Google Gemini API', 'Trigger.dev', 'PostgreSQL', 'Clerk Auth', 'Zustand', 'FFmpeg', 'Transloadit'],
        thumbnail: '/projects/thumbnail/weavy.png', // Placeholder
        images: ['/projects/images/weavy1.png', '/projects/images/weavy2.png'], // Placeholders
        year: 2026,
        description: `
Built a high-performance Visual AI Workflow Builder(Weavi.ai clone), enabling users to orchestrate multi-modal LLM workflows using an intuitive drag-and-drop infinite canvas. The platform integrates Google Gemini for AI processing, Trigger.dev for serverless background execution, and PostgreSQL for workflow/run persistence. Designed with strict separation of concerns, real-time execution feedback, and production-grade architecture.
        Key Modules:<br/>
        <ul>
            <li>Infinite canvas workflow builder (React Flow) with mini-map & zoom controls</li>
            <li>6 node types: Text, Image Upload, Video Upload, LLM (Gemini), Crop Image, Extract Frame</li>
            <li>Clerk-based authentication with protected user workspaces</li>
            <li>Serverless execution engine with parallel DAG processing (Trigger.dev)</li>
        </ul>
        `,
        role: 'Full stack developer',
        sourceCode: 'https://github.com/Siddharth-Nama/galaxy.ai_assessment',
        liveUrl: 'https://siddharthgalxyassignment.vercel.app/',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Intern (Code for Government Tech 2025)',
        company: 'Haryana Government and Samagra Governance',
        duration: 'June 2025 – August 2025',
        description1: 'Spearheaded Suvidha Manch (Road Taxonomy and InfraTracker), entrusted by the Commissioner of Rohtak to digitise 25,000 + roads, laying the foundation for a nationwide rollout.', 
        description2: 'Promoted mid-program for exceptional performance; led a team and coordinated with 2 government officials to drive large-scale adoption and ensure end-to-end digitisation logistics.'
    },
    {
        title: 'SDE Intern',
        company: 'Mercato Agency',
        duration: 'June 2025 – August 2025',
        description1: 'Designed and optimised web interfaces using React and RESTful APIs to improve user experience and efficiently handle 10,000+ users, resulting in a 30% increase in site performance.',
        description2: 'Redesigned scalable front-end and back-end modules, reducing page load time by 40% and enhancing responsiveness across multiple devices.',
    },
    {
        title: 'Full-Stack Developer Intern',
        company: 'Esaral Ventures, Kota',
        duration: 'May 2024 – July 2024',
        description1: 'Built and deployed 3 + full-stack web/mobile apps using Django, REST APIs, and React/React Native, delivering scalable solutions that streamlined development workflows.',
        description2: 'Redesigned database schemas and restructured microservices, increasing query efficiency and enabling 30% rise in user engagement,enhanced features to boost performance by 25%.',
    },
    
];

export const EDUCATION = [
    {
        degree: 'Bachelor of Technology in Computer Science Engineering',
        institution: 'Indian Institute of Information Technology Bhagalpur',
        duration: 'November 2022 – July 2026',
        details1: 'CGPA: 7.78 (absolute), 8.17 (Highest SGPA)',
        details2: 'Coursework: Data Structures & Algorithms, OOP, DBMS, Software Engineering, OS, Computer Networks.',
    }
];

export const ACHIEVEMENTS = [
    'Led the organization and execution of the SGC Elections 2025 at IIIT Bhagalpur (1,000+ students).',
    'Co-authored a RESEARCH PAPER on AI-Powered Monitoring & Optimization of Student Activities Online.',
    'Documented 300 + days of coding progress on Twitter, demonstrating consistency and growth mindset.',
    'Solved 500+ Coding Questions: 200+ on CodeChef (3 Star), 130+ on LeetCode, 150+ on Codeforces.',
    'Won the C4GT- 2025 Open-Source Hackathon among 8,000+ participants by delivering production-ready open-source contribution',
];
