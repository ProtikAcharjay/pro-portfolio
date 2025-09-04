# Portfolio Customization Guide

## 🎯 Essential Customizations

### 1. Personal Information (**REQUIRED**)
Edit `src/lib/data/portfolio-data.ts`:

```typescript
personal: {
  name: "YOUR ACTUAL NAME",
  title: "YOUR JOB TITLE",
  subtitle: "YOUR TAGLINE",
  bio: "YOUR PROFESSIONAL BIO",
  location: "YOUR CITY, COUNTRY",
  email: "your.actual.email@domain.com",
  phone: "+1 (555) 123-4567",
  website: "https://yourdomain.com",
  availability: "Available for new projects", // or your status
  resumeUrl: "/your-resume.pdf",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername",
    facebook: "https://www.facebook.com/yourusername"
  }
}
```

### 2. Skills & Technologies
Update the skills section with your actual technologies:

```typescript
skills: {
  frontend: ["React", "Next.js", "TypeScript", "Vue.js", ...],
  backend: ["Node.js", "Python", "Java", ...],
  database: ["PostgreSQL", "MongoDB", ...],
  tools: ["Git", "Docker", "AWS", ...],
  mobile: ["React Native", "Flutter", ...]
}
```

### 3. Work Experience
Replace with your actual work history:

```typescript
experience: [
  {
    id: 1,
    company: "YOUR COMPANY NAME",
    position: "YOUR POSITION",
    duration: "START YEAR - END YEAR (or Present)",
    location: "CITY, STATE/COUNTRY",
    type: "Full-time", // or "Contract", "Part-time", etc.
    description: "Your role description...",
    achievements: [
      "Specific achievement 1",
      "Specific achievement 2",
      "Specific achievement 3"
    ],
    technologies: ["Tech1", "Tech2", "Tech3"]
  },
  // Add more experiences
]
```

### 4. Education
Update with your educational background:

```typescript
education: [
  {
    id: 1,
    degree: "YOUR DEGREE",
    institution: "YOUR UNIVERSITY/SCHOOL",
    duration: "START YEAR - END YEAR",
    location: "CITY, COUNTRY",
    gpa: "X.X/4.0", // optional
    description: "Brief description of your studies",
    coursework: [
      "Relevant Course 1",
      "Relevant Course 2",
      // ... add your actual coursework
    ],
    achievements: [
      "Your academic achievements",
      "Dean's List", 
      "Honors", 
      // ... add your actual achievements
    ]
  }
]
```

### 5. Projects (**VERY IMPORTANT**)
Replace with your actual projects:

```typescript
projects: [
  {
    id: 1,
    title: "YOUR PROJECT NAME",
    description: "Brief project description for cards",
    longDescription: "Detailed description of the project...",
    image: "/projects/your-project-image.jpg", // Add actual image
    technologies: ["React", "Node.js", "MongoDB"], // Your actual tech stack
    category: "Full-Stack", // "Frontend", "Backend", "Mobile"
    status: "Live", // "Development", "Completed"
    featured: true, // true for your best projects
    demoUrl: "https://your-live-project.com",
    githubUrl: "https://github.com/yourusername/project",
    features: [
      "Feature 1 of your project",
      "Feature 2 of your project",
      "Feature 3 of your project",
      // ... add actual features
    ]
  },
  // Add all your projects
]
```

### 6. Statistics
Update with your actual numbers:

```typescript
stats: {
  yearsOfExperience: YOUR_YEARS,
  projectsCompleted: YOUR_PROJECT_COUNT,
  happyClients: YOUR_CLIENT_COUNT,
  codeCommits: YOUR_COMMIT_COUNT
}
```

## 📸 Visual Assets

### Required Images:
1. **Add your resume**: Place `resume.pdf` in the `public/` folder
2. **Project screenshots**: Add images to `public/projects/`
3. **Favicon**: Replace default favicon with yours
4. **Profile photo**: Optional - add to hero section if desired

### Image Requirements:
- **Project images**: 800x600px or 16:9 aspect ratio
- **File formats**: JPG, PNG, WebP
- **File names**: Use descriptive names (e.g., `ecommerce-dashboard.jpg`)

## 🎨 Styling Customization

### Colors
Edit `src/app/globals.css` to change the color scheme:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%; /* Change this for main color */
  --primary-foreground: 210 40% 98%;
  /* ... other color variables */
}
```

### Fonts
The project uses Inter font. To change it, update `src/app/layout.tsx`:

```typescript
import { YourChosenFont } from 'next/font/google';

const yourFont = YourChosenFont({
  subsets: ['latin'],
  variable: '--font-sans',
});
```

## 📝 Content Tips

### Writing Effective Descriptions:
1. **Be specific**: Use numbers and metrics
2. **Show impact**: What problems did you solve?
3. **Use action verbs**: "Built", "Developed", "Implemented", "Optimized"
4. **Keep it concise**: 1-2 sentences for project descriptions

### Project Selection:
- Choose 4-6 of your **best** projects
- Include diverse project types
- Show progression in complexity
- Include live demos when possible

## 🔧 Technical Customizations

### Contact Form
The contact form currently simulates submission. To make it functional:

1. **Use a service like**:
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - [EmailJS](https://www.emailjs.com/)

2. **Or build a backend endpoint** and update the form submission in `src/app/contact/page.tsx`

### Analytics
Add Google Analytics or similar:

1. **Install analytics package**:
```bash
npm install @next/third-parties
```

2. **Add to layout.tsx**:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      </body>
    </html>
  )
}
```

## 🚀 Deployment Checklist

Before deploying:

- [ ] ✅ All personal information updated
- [ ] ✅ Real projects added with live demos
- [ ] ✅ Resume PDF uploaded
- [ ] ✅ Social media links verified
- [ ] ✅ Contact information correct
- [ ] ✅ Images optimized and uploaded
- [ ] ✅ Contact form working (if needed)
- [ ] ✅ SEO meta tags updated
- [ ] ✅ Domain configured (if custom domain)

## 🎯 Quick Start Checklist

**Immediate (5 minutes):**
- [ ] Update personal name and title
- [ ] Update contact information
- [ ] Update social media links

**Short term (30 minutes):**
- [ ] Add 2-3 real projects
- [ ] Update skills list
- [ ] Add work experience

**Complete setup (2 hours):**
- [ ] Add all projects with images
- [ ] Complete education section
- [ ] Upload resume
- [ ] Customize colors/styling
- [ ] Test all functionality

## 💡 Tips for Success

1. **Start simple**: Update basic info first, then add complexity
2. **Use real data**: Fake projects are obvious - use your actual work
3. **Keep it updated**: Regular updates show you're active
4. **Test thoroughly**: Check all links and forms before deploying
5. **Mobile first**: Always test on mobile devices
6. **Get feedback**: Ask others to review before launching

## 🆘 Common Issues

**Build errors?**
- Check TypeScript types in `portfolio-data.ts`
- Ensure all required fields are filled

**Images not loading?**
- Images must be in the `public/` folder
- Use correct paths (e.g., `/projects/image.jpg`)

**Styling issues?**
- Check Tailwind class names
- Ensure custom CSS is in `globals.css`

---

**Remember**: A great portfolio shows your actual work and tells your story. Focus on quality over quantity! 🌟
