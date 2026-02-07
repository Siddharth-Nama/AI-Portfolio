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
        title: 'Smart Campus - IIITBH',
        slug: 'smart-campus-iiitbh',
        techStack: ['Django', 'Python', 'PostgreSQL', 'Rest API', 'React', 'HTML', 'CSS', 'JavaScript'],
        thumbnail: '/projects/thumbnail/hollywood.jpeg', // Placeholder
        images: ['/projects/images/hollywood1.png', '/projects/images/hollywood2.png'], // Placeholders
        year: 2024,
        description: `
        A comprehensive campus management suite consisting of multiple modules.<br/><br/>
        Key Modules:<br/>
        <ul>
            <li>🗳️ Election Portal IIITBH: Enabled 1,000 + users with secure digital voting, automated tallying, live results, and history tracking.</li>
            <li>🏫 PreAbs (Attendance Portal): Role-based system for 800 + users across 40 + classes, reducing errors using teacher-generated codes.</li>
            <li>💊 Meditrack IIITBH: Built as sole developer, managing 500 + medicines for 1,000 + students with 60% efficiency improvement and full restocking.</li>
        </ul>
        `,
        role: 'Full-Stack Developer',
    },
    {
        title: 'UsersDB',
        slug: 'usersdb',
        techStack: ['React Native', 'TypeScript', 'Python', 'Django', 'PostgreSQL', 'REST API'],
        thumbnail: '/projects/thumbnail/soulvedic.jpeg', // Placeholder
        images: ['/projects/images/soulvedic1.png', '/projects/images/soulvedic2.png'], // Placeholders
        year: 2024,
        description: `
        Built the UsersDB App with a seamless Android/iOS experience.<br/><br/>
        Key Achievements:<br/>
        <ul>
            <li>🖼️ Advanced Image Compression: Implemented compression (from 10 MB to 100 KB) to reduce load time by 90%.</li>
            <li>📱 Responsive Usability: Ensured responsive multi-device usability and smooth performance across varying network conditions.</li>
        </ul>
        `,
        role: 'Mobile & Full-Stack Developer',
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
