'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  Award, 
  Code,
  Target,
  Star,
  Laptop,
  Database,
  GitBranch,
  Brain
} from 'lucide-react';
import Link from 'next/link';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { portfolioData } from '@/lib/data/portfolio-data';

// Map skills to icons for the Skills Snapshot section
const skillIcons = {
  'PHP': <Laptop className="h-5 w-5 text-primary" />,
  'JavaScript': <Laptop className="h-5 w-5 text-primary" />,
  'Python': <Laptop className="h-5 w-5 text-primary" />,
  'Laravel': <Code className="h-5 w-5 text-primary" />,
  'Next.js': <Code className="h-5 w-5 text-primary" />,
  'Vue.js': <Code className="h-5 w-5 text-primary" />,
  'Nest.js': <Code className="h-5 w-5 text-primary" />,
  'MySQL': <Database className="h-5 w-5 text-primary" />,
  'MongoDB': <Database className="h-5 w-5 text-primary" />,
  'Git': <GitBranch className="h-5 w-5 text-primary" />,
  'Docker': <GitBranch className="h-5 w-5 text-primary" />,
  'GitHub': <GitBranch className="h-5 w-5 text-primary" />,
  'GitLab': <GitBranch className="h-5 w-5 text-primary" />,
  'Bitbucket': <GitBranch className="h-5 w-5 text-primary" />,
  'Jira': <GitBranch className="h-5 w-5 text-primary" />,
  'Trello': <GitBranch className="h-5 w-5 text-primary" />,
  'GitHub Copilot': <Brain className="h-5 w-5 text-primary" />,
  'ChatGPT': <Brain className="h-5 w-5 text-primary" />,
  'Perplexity': <Brain className="h-5 w-5 text-primary" />,
  'Blackbox': <Brain className="h-5 w-5 text-primary" />,
  'Communication': <Star className="h-5 w-5 text-primary" />,
  'Quick Learning': <Star className="h-5 w-5 text-primary" />,
  'Collaboration': <Star className="h-5 w-5 text-primary" />,
  'Leadership': <Star className="h-5 w-5 text-primary" />
};

export default function ExperiencePage() {
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
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Experience</span>
              {' & Achievements'}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              My journey as a Full Stack Developer, crafting scalable e-commerce platforms, marketplaces, and innovative tech solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="text-blue-400">💼</span>
                Professional Roles
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-400">🏆</span>
                Key Contributions
              </span>
              <span className="flex items-center gap-2">
                <span className="text-purple-400">🚀</span>
                Tech Innovations
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience (Vertical Timeline) */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of my contributions to innovative tech solutions
            </p>
          </motion.div>

          {/* Timeline Wrapper with semi-transparent background */}
          <div className="relative p-6 rounded-xl bg-card/95 shadow-lg">
            <VerticalTimeline lineColor="hsl(var(--primary))">
              {portfolioData.experience.map((exp, index) => (
                <VerticalTimelineElement
                  key={exp.id}
                  date={exp.duration}
                  iconStyle={{ background: 'hsl(var(--primary))', color: '#fff' }}
                  icon={<Briefcase className="h-6 w-6" />}
                  contentStyle={{ background: 'hsl(var(--card))', color: 'hsl(var(--foreground))', boxShadow: '0 3px 0 hsl(var(--primary))' }}
                  contentArrowStyle={{ borderRight: '7px solid hsl(var(--card))' }}
                >
                  <h3 className="text-lg font-semibold text-primary">{exp.position}</h3>
                  <h4 className="text-md font-medium">{exp.company}</h4>
                  <p className="text-sm text-muted-foreground">
                    {exp.location} | {exp.type}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                  <div className="mt-4">
                    <h5 className="font-semibold text-sm flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="font-semibold text-sm flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>


      {/* Skills Snapshot */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Skills Snapshot</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core technologies and tools I’ve mastered through my professional journey
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'PHP', 'JavaScript', 'Python', 'Laravel', 'Next.js', 'Vue.js', 'Nest.js', 'MySQL', 'MongoDB',
              'Git', 'Docker', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'GitHub Copilot',
              'Communication', 'Quick Learning', 'Collaboration', 'Leadership'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex items-center justify-center gap-2 py-4">
                    {skillIcons[skill as keyof typeof skillIcons]}
                    <span className="text-sm font-medium">{skill}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Career Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones from my work in e-commerce, marketplaces, and tech solutions
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 text-center">
                  <Star className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">{portfolioData.stats.yearsOfExperience}+</h3>
                  <p className="text-muted-foreground">Years of Experience</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">{portfolioData.stats.projectsCompleted}+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 text-center">
                  <Code className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">{portfolioData.stats.technologiesMastered}+</h3>
                  <p className="text-muted-foreground">Technologies Mastered</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">{portfolioData.stats.existingProjectsEnhanced}+</h3>
                  <p className="text-muted-foreground">Projects Enhanced</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
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
            <h2 className="text-3xl font-bold mb-6">Let’s Build Something Great</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With hands-on experience in full-stack development, I’m ready to deliver scalable e-commerce platforms, marketplaces, and tech solutions. Let’s collaborate on your next big idea!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/projects">
                  <Code className="mr-2 h-4 w-4" />
                  View My Projects
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Briefcase className="mr-2 h-4 w-4" />
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