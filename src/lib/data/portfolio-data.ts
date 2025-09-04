import { fa } from "zod/v4/locales";

export const portfolioData = {
  personal: {
    name: "Protik Acharjay",
    title: "Full Stack Developer",
    subtitle: "Building exceptional digital experiences",
    bio: "I am a passionate full-stack developer with expertise in modern web technologies. I love creating scalable applications that solve real-world problems and deliver exceptional user experiences.",
    location: "Dhaka, Bangladesh",
    email: "protik7777777@gmail.com",
    phone: "+880 1798-141488",
    website: "https://protik.vercel.app/",
    availability: "Available for new projects",
    resumeUrl: "projects/resume.pdf",
    social: {
      github: "https://github.com/ProtikAcharjay",
      linkedin: "https://linkedin.com/in/protik-acharjay",
      facebook: "https://www.facebook.com/Protik7777777",
    },
    story:`I am a passionate full-stack developer with expertise in modern web technologies like PHP, JavaScript, MySQL, Laravel, Vue.js, and NestJS. I love building scalable and maintainable applications that solve real-world problems and deliver seamless user experiences.

    Over the years, I\’ve had the privilege of working with amazing teams and projects, enhancing existing systems, shipping new features, and architecting solutions that balance performance and usability. I thrive on clean code, efficient workflows with Git, GitHub, GitLab, and project management tools like Jira and Trello, and continuous learning to stay ahead in the ever-evolving tech landscape.

    When I’m not coding, I enjoy staying positive, collaborating with others, and singing as a creative outlet.`
  },
  
  skills: {
    frontend: ["JavaScript", "Next.js", "Vue.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "React", "shadcn/ui", "Bootstrap"],
    backend: ["Laravel", "PHP", "Python", "Django", "Node.js", "Nest.js", "Express.js", "C#"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "SQLite",],
    tools: ["Git", "Docker", "AWS", "Vercel", "Postman", "VS Code", "Linux"],
    softSkills: ["Communication", "Quick Learning", "Collaboration", "Leadership"]
  },
  
experience: [
  {
    id: 1,
    position: "Software Engineer",
    company: "Techtime Business Solutions Ltd",
    duration: "2025 – Present",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description: "Currently working at Techtime, maintaining the Next.js frontend and Laravel backend of the e-commerce platform, enhancing existing features, and ensuring smooth performance.",
    achievements: [
      "Developed InfluencerHub end-to-end and successfully deployed it.",
      "Maintaining and improving the multi-vendor e-commerce platform.",
      "Enhancing features and collaborating on internal ERP tools.",
      "Excitedly contributing to future tech prospects and internal projects."
    ],
    technologies: ["Laravel", "Next.js", "MySQL", "Tailwind CSS", "REST API", "MinIO", "Git"]
  },

  {
    id: 2,
    position: "Software Engineer (Augmented)",
    company: "Sheba (Client via Workspace InfoTech Ltd)",
    duration: "2024 – 2025",
    location: "Dhaka, Bangladesh",
    type: "Augmented Contract",
    description: "Maintained and enhanced Sheba’s internal Laravel-based admin panel, APIs, and microservices.",
    achievements: [
      "Maintained and optimized internal admin panels and REST APIs.",
      "Worked on Nest.js microservices for Ad Manager and Ad Analytics.",
      "Contributed to frontend development for Marketplace project using Nuxt.js.",
      "Resolved high-priority production bugs and improved system stability."
    ],
    technologies: ["Laravel", "Nest.js", "Nuxt.js", "MySQL", "Docker", "Microservices", "REST API"]
  },
  {
    id: 3,
    position: "Junior Software Engineer",
    company: "Workspace InfoTech Ltd",
    duration: "2023 – 2025",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description: "Progressed from Laravel Developer Intern to Junior Software Engineer, contributing to multiple projects.",
    achievements: [
      "Worked on Monezsoft project for car dealership management (Admin & Dealer Site).",
      "Implemented lead auto-assignment, OCR API for watermark removal, and invoicing features.",
      "Resolved 250+ tickets, improved UI/UX, and optimized backend processes.",
      "Collaborated in agile sprints with cross-functional teams."
    ],
    technologies: ["Laravel", "MySQL", "Vue.js", "JavaScript", "OCR API"]
  },
  {
    id: 4,
    position: "Laravel Developer Intern",
    company: "Workspace InfoTech Ltd",
    duration: "06/2023 – 09/2023",
    location: "Dhaka, Bangladesh",
    type: "Internship",
    description: "Initial internship role focusing on backend development with Laravel and assisting in ongoing projects.",
    achievements: [
      "Supported senior developers in resolving critical bugs.",
      "Assisted in Monezsoft feature implementation and UI fixes.",
      "Gained hands-on experience with Git, Jira, and code review practices."
    ],
    technologies: ["Laravel", "MySQL", "Git", "Jira"]
  }
],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "American International University-Bangladesh (AIUB)",
      duration: "2020 - 2023",
      location: "Dhaka, Bangladesh",
      gpa: "3.7/4.0",
      description: "Focused on software engineering, data structures, algorithms, and web development.",
      coursework: [
        "Software Engineering",
        "Advanced Web Technologies",
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Software Development & Project Management",
        "Software Testing & Quality Assurance"
      ],
      achievements: [
        "Communication Lead of ESAB AIUB Unit Face",
        "Participated in Hackathon 2023"
      ]
    }
  ],
  
  certifications: [
    {
      id: 1,
      name: "The Python Developer Essentials 2023 Immersive Bootcamp",
      issuer: "Udemy",
      date: "2021",
      credentialId: "UC-1b22f4ab-8db7-4cdc-bd3a-023f024979cd",
      url: "https://www.udemy.com/certificate/UC-1b22f4ab-8db7-4cdc-bd3a-023f024979cd/?trk=public_profile_see-credential"
    },
    {
      id: 2,
      name: "Learn Machine Learning in 21 Days",
      issuer: "Udemy",
      date: "2021",
      credentialId: "UC-34571f1d-443d-475f-97f6-535435ddc6ea",
      url: "https://www.udemy.com/certificate/UC-34571f1d-443d-475f-97f6-535435ddc6ea/?trk=public_profile_see-credential"
    },
    {
      id: 3,
      name: "Diversity, Tolerance & Pluralism",
      issuer: "University of Liberal Arts Bangladesh",
      date: "2021",
      credentialId: "122230-165-357-1095",
      url: "https://drive.google.com/file/d/1nDxIY-K_Ndl1j2pSsVpJP6nYgKz1MDvi/view?trk=public_profile_see-credential"
    },
    {
      id: 4,
      name: "Personal Leadership",
      issuer: "MuktoPaath",
      date: "2021",
      credentialId: "MC-Z378411N578659G198U",
      url: "https://certificate.muktopaath.gov.bd/storage/uploads/certificates/7b489f7c94dc91ebaab0ab4d6deeff07.jpg?trk=public_profile_see-credential"
    }
  ],
  
  projects:[
  {
      id: 1,
      title: "Techtime E-Commerce Website",
      description: "Maintaining and improving the backend and frontend of an e-commerce platform.",
      longDescription: "Working on both Laravel backend and frontend of Techtime, implementing new features, resolving bugs, and optimizing system performance. Focused on smooth user experience, secure payment integrations, and responsive design improvements.",
      image: "/projects/techtime.png",
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
      category: "Full-Stack",
      status: "Live",
      featured: true,
      demoUrl: "https://techtime.com.bd",
      githubUrl: "ttps://techtime.com.bd",
      features: [
        "Implemented new features on existing system",
        "Bug fixing and performance optimization",
        "Payment integration",
        "Admin dashboard improvements",
        "Responsive design enhancements"
      ]
    },
    {
      id: 2,
      title: "Sheba Internal Admin & Marketplace",
      description: "Contributed to internal admin panel, APIs, and marketplace features.",
      longDescription: "Worked on Sheba's Laravel-based admin panel, REST APIs, and Nuxt.js frontend to improve marketplace functionalities. Developed and enhanced features like ad manager, dynamic marketing campaigns, and microservice backend for ad analytics using Nest.js.",
      image: "/projects/sheba.png",
      technologies: ["Laravel", "Nuxt.js", "Nest.js", "MySQL", "Docker", "JavaScript", "Vue.js"],
      category: "Full-Stack",
      status: "Live",
      featured: true,
      demoUrl: "https://sheba.xyz",
      githubUrl: "https://sheba.xyz",
      features: [
        "Maintained internal admin panel and APIs",
        "Enhanced marketplace and ad management features",
        "Developed microservices for ad analytics",
        "Improved system integration and performance",
        "Bug fixing and feature enhancements"
      ]
    },
    {
      id: 3,
      title: "Car Dealer Management System",
      description: "Admin and dealer portals to manage car listings, finance, and operations.",
      longDescription: "Developed features for a car dealership management system including lead auto-assignment, OCR-based image processing, invoicing, warranty document generation, and data scraping for car listings. Worked on both Laravel backend and frontend, enhancing usability and operational efficiency.",
      image: "/projects/drivegood.png",
      technologies: ["Laravel", "PHP", "JavaScript", "OCR", "MySQL", "Tailwind CSS"],
      category: "Full-Stack",
      status: "Live",
      featured: true,
      demoUrl: "https://dealers.drivegood.com/",
      githubUrl: "https://dealers.drivegood.com/",
      features: [
        "Lead auto-assign feature",
        "OCR-based image enhancement",
        "Invoicing and warranty document generation",
        "Data scraping for car listings",
        "UI/UX improvements and bug fixes"
      ]
    },
    {
      id: 4,
      title: "InfluencerHub Platform",
      description: "A portal for influencers to track orders, manage rewards, and collaborate with brands.",
      longDescription: "Developed the full-stack InfluencerHub platform with a Laravel backend and Next.js frontend. Built features for order tracking, reward management, and dashboards for both influencers and brands. Maintained and enhanced existing functionalities while ensuring smooth performance and usability.",
      image: "/projects/influencerhub.png",
      technologies: ["Laravel", "Next.js", "MySQL", "Tailwind CSS", "Git"],
      category: "Full-Stack",
      status: "Live",
      featured: true,
      demoUrl: "https://myportal.movr.store/",
      githubUrl: "https://myportal.movr.store/",
      features: [
        "Order tracking and analytics",
        "Reward management system",
        "Brand-influencer dashboards",
        "Enhanced existing features and fixed bugs",
        "Responsive design"
      ]
    },
    
    {
      id: 5,
      title: "Ghorchai - Rental Information Portal",
      description: "A Django-based platform to provide rental information for Dhaka city.",
      longDescription: "Built a personal project in Django to solve rental information accessibility in Dhaka. Implemented search, filtering, and listing features to provide users accurate and up-to-date rental information.",
      image: "/projects/ghorchai.jpeg",
      technologies: ["Django", "Python", "PostgreSQL", "Bootstrap", "Tailwind CSS"],
      category: "Full-Stack",
      status: "Not Live",
      featured: true,
      demoUrl: "https://github.com/ProtikAcharjay/GhorChai",
      githubUrl: "https://github.com/ProtikAcharjay/GhorChai",
      features: [
        "Rental property listings",
        "Search and filter functionality",
        "Responsive design",
        "Data accuracy and reliability",
        "User-friendly interface"
      ]
    },
    {
      id: 6,
      title: "Buakoi - Urban Maid Finder",
      description: "A C# project to help find maids in urban areas.",
      longDescription: "Collaborated on Buakoi, a C# project aimed at connecting users with reliable maids in urban cities. Implemented key features for search, filtering, and service booking.",
      image: "/projects/buakoi.jpg",
      technologies: ["C#", ".NET", "SQL Server", "Bootstrap"],
      category: "Full-Stack",
      status: "Not Live",
      featured: true,
      demoUrl: "https://youtu.be/jY-XqpanAQk?si=lTJjutxtke-71Re1",
      githubUrl: "https://github.com/ProtikAcharjay/BuaKoi",
      features: [
        "Search and filtering of service providers",
        "Service booking system",
        "Responsive UI",
        "Data management for maids",
        "Collaborative development"
      ]
    },
    { id: 7, title: "Portfolio Website", description: "A modern, responsive portfolio website built with Next.js and Framer Motion animations.", longDescription: "Created a stunning portfolio website showcasing my work and skills. Features smooth animations, responsive design, contact forms, and a content management system for easy updates.", image: "/projects/portfolio.png", technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"], category: "Frontend", status: "Live", featured: false, demoUrl: "https://protik.vercel.app/", githubUrl: "https://github.com/ProtikAcharjay/pro-portfolio", features: [ "Smooth animations", "Responsive design", "Contact form", "SEO optimized", "Dark/light mode", "Fast loading" ] },
  ],

  
  stats: {
    yearsOfExperience: 2,
    projectsCompleted: 25,
    technologiesMastered: 20,
    existingProjectsEnhanced: 10 
  },
  
  testimonials: [
    {
      id: 1,
      name: "John Smith",
      position: "Project Manager",
      company: "Tech Company Inc.",
      content: "Outstanding developer who consistently delivers high-quality work on time. Great communication skills and always goes above and beyond.",
      rating: 5,
      image: "/testimonials/john.jpg"
    }
  ]
};

export type PortfolioData = typeof portfolioData;
export type Project = typeof portfolioData.projects[0];
export type Experience = typeof portfolioData.experience[0];
export type Education = typeof portfolioData.education[0];
