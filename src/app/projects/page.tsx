'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Code, 
  ExternalLink, 
  Github, 
  Search,
  Filter,
  Sparkles,
  Zap,
  Globe,
  Smartphone
} from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '@/lib/data/portfolio-data';
import { getTechColor } from '@/lib/tech-colors';

const categoryIcons = {
  'Full-Stack': Code,
  'Frontend': Globe,
  'Backend': Zap,
  'Mobile': Smartphone
};

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Get unique categories and statuses
  const categories = ['All', ...Array.from(new Set(portfolioData.projects.map(p => p.category)))];
  const statuses = ['All', ...Array.from(new Set(portfolioData.projects.map(p => p.status)))];

  // Filter projects
  const filteredProjects = portfolioData.projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="pt-20 pb-12">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background/50 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A collection of software engineering projects showcasing full-stack development, web technologies, and computer science principles
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="text-cyan-400">💻</span>
                Software Engineering
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-400">🌐</span>
                Web Development
              </span>
              <span className="flex items-center gap-2">
                <span className="text-purple-400">🔧</span>
                System Architecture
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4" />
                <span>{portfolioData.projects.length} Total Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>{portfolioData.projects.filter(p => p.featured).length} Featured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>{portfolioData.projects.filter(p => p.status === 'Live').length} Live Projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter Projects</span>
              </div>
              <div className="text-sm text-muted-foreground">
                {filteredProjects.length} of {portfolioData.projects.length} projects shown
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Status Filter */}
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-16"
              >
                <div className="inline-flex p-4 rounded-full bg-muted mb-6">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search criteria or filters
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedStatus('All');
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="projects-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => {
                  const CategoryIcon = categoryIcons[project.category] || Code;
                  
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      layout
                    >
                      <Card className="group h-full hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg relative">
                        {project.featured && (
                          <div className="absolute top-4 left-4 z-10">
                            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0">
                              <Sparkles className="mr-1 h-3 w-3" />
                              Featured
                            </Badge>
                          </div>
                        )}
                        
                        {/* Project Image/Header */}
                        <div className="relative h-48 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20" />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                          
                          <div className="absolute top-4 right-4 z-10 flex space-x-2">
                            <Badge 
                              variant={project.status === 'Live' ? 'default' : 'secondary'}
                              className={project.status === 'Live' ? 'bg-green-500 hover:bg-green-600' : ''}
                            >
                              {project.status}
                            </Badge>
                          </div>
                          
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <CategoryIcon className="h-12 w-12 text-white/30 mx-auto mb-2" />
                              <div className="text-4xl font-bold text-white/20 group-hover:text-white/30 transition-colors duration-300">
                                {project.title.split(' ').map(word => word[0]).join('')}
                              </div>
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

                        <CardContent className="space-y-4 flex-1">
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 3).map((tech) => {
                              const techColor = getTechColor(tech);
                              return (
                                <Badge 
                                  key={tech} 
                                  className={`text-xs px-2 py-1 border transition-all duration-300 ${
                                    techColor.bg
                                  } ${
                                    techColor.text
                                  } ${
                                    techColor.border
                                  }`}
                                >
                                  {tech}
                                </Badge>
                              );
                            })}
                            {project.technologies.length > 3 && (
                              <Badge variant="secondary" className="text-xs px-2 py-1">
                                +{project.technologies.length - 3}
                              </Badge>
                            )}
                          </div>

                          {/* Key Features */}
                          <div>
                            <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {project.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-2 pt-4">
                            <Button size="sm" variant="outline" asChild className="group/btn flex-1">
                              <Link href={project.demoUrl} target="_blank">
                                <ExternalLink className="mr-2 h-3 w-3 group-hover/btn:rotate-45 transition-transform" />
                                Demo
                              </Link>
                            </Button>
                            <Button size="sm" variant="ghost" asChild className="group/btn flex-1">
                              <Link href={project.githubUrl} target="_blank">
                                <Github className="mr-2 h-3 w-3 group-hover/btn:rotate-12 transition-transform" />
                                Code
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Like What You See?</h2>
            <p className="text-muted-foreground mb-8">
              These projects represent just a fraction of what I can do. Let's discuss how I can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Start a Project
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">
                  <Code className="mr-2 h-4 w-4" />
                  Learn About Me
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
