export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Full Stack Developer",
    subtitle: "Building exceptional digital experiences",
    bio: "I am a passionate full-stack developer with expertise in modern web technologies. I love creating scalable applications that solve real-world problems and deliver exceptional user experiences.",
    location: "Your City, Country",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    website: "https://yourwebsite.com",
    availability: "Available for new projects",
    resumeUrl: "/resume.pdf",
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername",
      instagram: "https://instagram.com/yourusername"
    }
  },
  
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Vue.js", "Angular", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "Python", "Django", "PHP", "Laravel", "Java", "Spring Boot"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "Postman", "VS Code", "Linux"],
    mobile: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  
  experience: [
    {
      id: 1,
      company: "Tech Company Inc.",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and improved team productivity by 40%.",
      achievements: [
        "Built and deployed 10+ production applications",
        "Reduced application load time by 60%",
        "Led a team of 5 developers"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"]
    },
    {
      id: 2,
      company: "Startup Solutions",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      location: "New York, NY",
      type: "Full-time",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers to deliver pixel-perfect applications.",
      achievements: [
        "Delivered 15+ client projects on time",
        "Implemented responsive designs for mobile-first approach",
        "Integrated third-party APIs and payment systems"
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"]
    }
  ],
  
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      duration: "2016 - 2020",
      location: "Your City, Country",
      gpa: "3.8/4.0",
      description: "Focused on software engineering, data structures, algorithms, and web development.",
      coursework: [
        "Data Structures and Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "Computer Networks"
      ],
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "President of Computer Science Society",
        "Winner of University Hackathon 2019"
      ]
    }
  ],
  
  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "ABC123XYZ",
      url: "https://aws.amazon.com/certification/"
    },
    {
      id: 2,
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP456DEF",
      url: "https://cloud.google.com/certification"
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with admin dashboard, payment integration, and inventory management.",
      longDescription: "Built a comprehensive e-commerce solution from scratch using React and Node.js. Features include user authentication, shopping cart, payment processing with Stripe, order management, and an admin dashboard for inventory and sales tracking.",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "Full-Stack",
      status: "Live",
      featured: true,
      demoUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/yourusername/ecommerce",
      features: [
        "User authentication and profiles",
        "Shopping cart and wishlist",
        "Payment processing with Stripe",
        "Admin dashboard",
        "Inventory management",
        "Order tracking"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      longDescription: "Developed a modern task management application similar to Trello with drag-and-drop functionality, real-time updates using WebSockets, team collaboration, and advanced filtering options.",
      image: "/projects/taskmanager.jpg",
      technologies: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "shadcn/ui"],
      category: "Full-Stack",
      status: "Live",
      featured: true,
      demoUrl: "https://task-manager-demo.com",
      githubUrl: "https://github.com/yourusername/taskmanager",
      features: [
        "Drag and drop interface",
        "Real-time collaboration",
        "Team management",
        "File attachments",
        "Advanced filtering",
        "Mobile responsive"
      ]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Framer Motion animations.",
      longDescription: "Created a stunning portfolio website showcasing my work and skills. Features smooth animations, responsive design, contact forms, and a content management system for easy updates.",
      image: "/projects/portfolio.jpg",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      category: "Frontend",
      status: "Live",
      featured: false,
      demoUrl: "https://your-portfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio",
      features: [
        "Smooth animations",
        "Responsive design",
        "Contact form",
        "SEO optimized",
        "Dark/light mode",
        "Fast loading"
      ]
    }
  ],
  
  stats: {
    yearsOfExperience: 4,
    projectsCompleted: 25,
    happyClients: 15,
    codeCommits: 1500
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
