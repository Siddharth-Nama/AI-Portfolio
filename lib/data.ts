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
];

export const MY_STACK = {
    frontend: [
        { name: 'HTML', icon: '/logo/html.png' },
        { name: 'CSS', icon: '/logo/css.png' },
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'React Native', icon: '/logo/react.png' }, // Reusing react icon for now
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Vite', icon: '/logo/vite.svg' }, // Assuming vite logo exists or will be added, fallback to generic if broken? Sticking to likely existing or generic.
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
    ],
    backend: [
        { name: 'Django', icon: '/logo/django.svg' }, // Assuming django exists or placeholder
        { name: 'Python', icon: '/logo/python.png' },
        { name: 'C++', icon: '/logo/cpp.png' },
        { name: 'C', icon: '/logo/c.png' },
    ],
    database: [
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'SQLite', icon: '/logo/sqlite.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Github', icon: '/logo/github.svg' },
        { name: 'VS Code', icon: '/logo/vscode.svg' },
        { name: 'Postman', icon: '/logo/postman.svg' },
        { name: 'Vercel', icon: '/logo/vercel.svg' },
        { name: 'Pythonanywhere', icon: '/logo/pythonanywhere.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Scripty',
        slug: 'scripty',
        techStack: ['Python', 'Tesseract OCR', 'Deepseek API', 'Gemini API', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
        thumbnail: '/projects/thumbnail/pinewheel.png', // Placeholder
        images: ['/projects/images/pinewheel1.png', '/projects/images/pinewheel2.jpeg'], // Placeholders
        year: 2024, // Assumed year based on recent projects
        description: `
        Developed an AI-powered PDF-to-handwritten conversion tool with 1,000 + active users, improving text processing speed by 70%.<br/><br/>
        Key Features:<br/>
        <ul>
            <li>📄 Customized PDF Generation: Enabled customizable PDF generation with a handwriting font, reducing manual note-taking effort by 80% for 1,000 + professionals.</li>
            <li>🚀 AI Integration: Utilized Deepseek and Gemini APIs alongside Tesseract OCR for accurate text extraction and conversion.</li>
        </ul>
        `,
        role: 'Full-Stack Developer',
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
        description: 'Spearheaded Suvidha Manch (Road Taxonomy and InfraTracker) to digitise 25,000+ roads. Promoted mid-program for exceptional performance; led a team and coordinated with officials.', // Added description field to object if accepted by UI, else it's just extra data
    },
    {
        title: 'SDE Intern',
        company: 'Mercato Agency',
        duration: 'June 2025 – August 2025',
        description: 'Designed and optimised web interfaces using React and RESTful APIs from 10,000+ users. Redesigned scalable front-end and back-end modules, reducing page load time by 40%.',
    },
    {
        title: 'Full-Stack Developer Intern',
        company: 'Esaral Ventures, Kota',
        duration: 'May 2024 – July 2024',
        description: 'Built and deployed 3+ full-stack web/mobile apps using Django, REST APIs, and React/React Native. Redesigned database schemas increasing query efficiency.',
    },
];

export const EDUCATION = [
    {
        degree: 'Bachelor of Technology in Computer Science Engineering',
        institution: 'Indian Institute of Information Technology Bhagalpur',
        duration: 'November 2022 – July 2026',
        details: 'CGPA: 7.78 (absolute). Coursework: Data Structures & Algorithms, OOP, DBMS, Software Engineering, OS, Computer Networks.',
    }
];

export const ACHIEVEMENTS = [
    'Led the organization and execution of the SGC Elections 2025 at IIIT Bhagalpur (1,000+ students).',
    'Co-authored a RESEARCH PAPER on AI-Powered Monitoring & Optimization of Student Activities Online.',
    'Documented 270+ days of coding progress on Twitter.',
    'Solved 500+ Coding Questions: 200+ on CodeChef (3 Star), 130+ on LeetCode, 150+ on Codeforces.',
];
