'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  ExternalLink,
  BookOpen,
  Trophy,
  Star,
  Target
} from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '@/lib/data/portfolio-data';

const continuousLearning = [
  {
    title: 'Advanced React Patterns',
    provider: 'Frontend Masters',
    date: '2024',
    description: 'Deep dive into advanced React patterns, performance optimization, and architectural decisions.'
  },
  {
    title: 'AWS Solutions Architect Associate',
    provider: 'Amazon Web Services',
    date: '2023',
    description: 'Comprehensive cloud architecture and AWS services training program.'
  },
  {
    title: 'System Design Fundamentals',
    provider: 'Educative.io',
    date: '2023',
    description: 'Learning scalable system design principles and distributed systems architecture.'
  },
  {
    title: 'Docker & Kubernetes Masterclass',
    provider: 'Udemy',
    date: '2023',
    description: 'Container orchestration and microservices deployment strategies.'
  }
];

export default function EducationPage() {
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
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Education</span>
              {' & Learning'}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              My Computer Science & Engineering foundation and commitment to continuous learning in software development
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="text-blue-400">🎓</span>
                Computer Science Education
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-400">📋</span>
                Professional Certifications
              </span>
              <span className="flex items-center gap-2">
                <span className="text-purple-400">💡</span>
                Continuous Learning
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formal Education */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Formal Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey and foundational knowledge in computer science
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="mb-8 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-primary mb-2">{edu.degree}</CardTitle>
                        <h3 className="text-lg font-semibold mb-2">{edu.institution}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4" />
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>

                    {/* Coursework */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Trophy className="h-4 w-4 mr-2" />
                        Achievements & Honors
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Professional Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-recognized certifications that validate my technical expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {portfolioData.certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {cert.name}
                        </CardTitle>
                        <p className="text-muted-foreground mt-1">{cert.issuer}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Issued</span>
                        <span className="font-medium">{cert.date}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Credential ID</span>
                        <span className="font-medium font-mono text-xs">{cert.credentialId}</span>
                      </div>
                      <Separator />
                      <Button size="sm" variant="outline" asChild className="w-full group/btn">
                        <Link href={cert.url} target="_blank">
                          <ExternalLink className="mr-2 h-3 w-3 group-hover/btn:rotate-45 transition-transform" />
                          Verify Credential
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Learning */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Continuous Learning</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recent courses and training programs to stay current with technology trends
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {continuousLearning.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors flex-1">
                        {course.title}
                      </CardTitle>
                      <Badge variant="outline">{course.date}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.provider}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Learning Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Technology evolves rapidly, and I believe in lifelong learning. I stay curious, 
              experiment with new technologies, and constantly challenge myself to grow. 
              Whether it's through formal education, online courses, or hands-on projects, 
              I'm always expanding my knowledge and skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/projects">
                  <Trophy className="mr-2 h-4 w-4" />
                  View My Projects
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Discuss Opportunities
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
