'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  Download, 
  Award, 
  Target,
  Heart,
  Code2,
  Users,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '@/lib/data/portfolio-data';

const proficiencyLevels = [
  { category: 'Frontend Development', level: 95 },
  { category: 'Backend Development', level: 90 },
  { category: 'Database Design', level: 85 },
  { category: 'DevOps & Cloud', level: 80 },
  { category: 'Mobile Development', level: 75 },
  { category: 'UI/UX Design', level: 70 }
];

const coreValues = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, readable, and efficient code that stands the test of time.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with teams to deliver exceptional results through communication.'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description: 'Staying updated with the latest technologies and best practices in development.'
  },
  {
    icon: Target,
    title: 'Problem Solving',
    description: 'Analyzing complex problems and creating innovative solutions that drive business value.'
  }
];

const interests = [
  'Open Source Contributions',
  'Tech Blogging',
  'Mentoring',
  'Photography',
  'Travel',
  'Gaming'
];

export default function AboutPage() {
  return (
    <div className="pt-20 pb-12">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(80, 35, 140, 0.14) 0%, transparent 42%),
              radial-gradient(circle at 75% 75%, rgba(70, 32, 130, 0.12) 0%, transparent 42%),
              radial-gradient(circle at 50% 50%, rgba(95, 45, 150, 0.1) 0%, transparent 62%),
              linear-gradient(135deg, hsl(240, 12%, 1.8%) 0%, hsl(240, 10%, 3.2%) 100%)
            `
        }}
      />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Computer Science Engineer & Full-Stack Developer with {portfolioData.stats.yearsOfExperience} years of experience in software development, web technologies, and system architecture
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <span className="text-cyan-400">🎓</span>
                Computer Science & Engineering
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-400">💻</span>
                Software Development
              </span>
              <span className="flex items-center gap-2">
                <span className="text-purple-400">🌐</span>
                Web Development Expert
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{portfolioData.personal.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{portfolioData.personal.phone}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={portfolioData.personal.resumeUrl} target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl font-bold text-primary/30">
                    {portfolioData.personal.name.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 hover:bg-green-600">
                    {portfolioData.personal.availability}
                  </Badge>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">My Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {portfolioData.personal.bio}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Over the years, I&apos;ve had the privilege of working with amazing teams and clients, 
                  building everything from small business websites to large-scale enterprise applications. 
                  My passion for clean code, user experience, and continuous learning drives me to 
                  deliver exceptional results in every project.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-primary">{portfolioData.stats.yearsOfExperience}+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-primary">{portfolioData.stats.projectsCompleted}+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-primary">{portfolioData.stats.happyClients}+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-primary">{portfolioData.stats.codeCommits}+</div>
                  <div className="text-sm text-muted-foreground">Commits</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Proficiency */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Technical Proficiency</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My expertise levels across different technology domains
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {proficiencyLevels.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{skill.category}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my work and professional relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4 mx-auto">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm text-center leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests & Hobbies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Beyond Code</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              When I&apos;m not coding, you&apos;ll find me exploring these interests
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {interests.map((interest, index) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge variant="outline" className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                  <Heart className="mr-2 h-3 w-3" />
                  {interest}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities and interesting projects. 
              Let&apos;s connect and see how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Start a Conversation
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">
                  <Award className="mr-2 h-4 w-4" />
                  View My Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
