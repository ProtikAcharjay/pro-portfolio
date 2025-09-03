'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioData } from '@/lib/data/portfolio-data';

export function FeaturedProjectsSection() {
  const featuredProjects = portfolioData.projects.filter(project => project.featured);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work that demonstrates my skills and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg">
                {/* Project Image */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Badge variant="secondary" className="bg-white/90 text-black">
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/20 group-hover:text-white/30 transition-colors duration-300">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button size="sm" variant="outline" asChild className="group/btn">
                      <Link href={project.demoUrl} target="_blank">
                        <ExternalLink className="mr-2 h-3 w-3 group-hover/btn:rotate-45 transition-transform" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="ghost" asChild className="group/btn">
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="mr-2 h-3 w-3 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" asChild className="group">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
