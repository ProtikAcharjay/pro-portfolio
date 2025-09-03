# Modern Portfolio Website

A stunning, modern portfolio website built with Next.js 15, TypeScript, shadcn/ui, and Framer Motion. Features responsive design, smooth animations, and all the essential pages for a professional developer portfolio.

## ✨ Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive Design**: Mobile-first approach, works on all devices
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Professional Pages**:
  - 🏠 **Homepage**: Hero section, skills showcase, featured projects
  - 👤 **About**: Professional bio, statistics, core values, interests
  - 🎓 **Education**: Degrees, certifications, continuous learning
  - 💼 **Projects**: Interactive filtering, detailed project cards
  - 📧 **Contact**: Working contact form with validation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

```bash
# Start development server
npm run dev

# Open your browser
# Navigate to http://localhost:3000
```

## 🎨 Customization Guide

### 1. Personal Information

Edit `src/lib/data/portfolio-data.ts` to customize all your content:

```typescript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio...",
    email: "your.email@example.com",
    // ... update all fields
  },
  // ... update skills, experience, education, projects, etc.
};
```

### 2. Colors & Styling

The project uses Tailwind CSS with shadcn/ui. To customize colors, update `src/app/globals.css`.

### 3. Adding New Sections

1. Create components in `src/components/sections/`
2. Import and use in your pages
3. Update navigation if needed

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── about/             # About page
│   │   ├── education/         # Education page
│   │   ├── projects/          # Projects page
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── layout/            # Layout components
│   │   └── sections/          # Page sections
│   └── lib/
│       └── data/              # Portfolio data
├── public/                    # Static assets
└── package.json
```

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation
- [Lucide React](https://lucide.dev/) - Icons

## 📝 Content Checklist

Before launching, make sure to update:

- [ ] Personal information in `portfolio-data.ts`
- [ ] Profile pictures and project screenshots
- [ ] Resume/CV file in `public/`
- [ ] Social media links
- [ ] Contact form submission endpoint
- [ ] Favicon and meta images

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Or deploy via GitHub by importing in Vercel dashboard.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js and shadcn/ui**
