'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Smartphone, Settings } from 'lucide-react';
import { portfolioData } from '@/lib/data/portfolio-data';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: portfolioData.skills.frontend,
    color: 'text-blue-500'
  },
  {
    title: 'Backend Development',
    icon: Settings,
    skills: portfolioData.skills.backend,
    color: 'text-green-500'
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    skills: portfolioData.skills.database,
    color: 'text-purple-500'
  },
  {
    title: 'Mobile & Tools',
    icon: Smartphone,
    skills: [...portfolioData.skills.mobile, ...portfolioData.skills.tools],
    color: 'text-orange-500'
  }
];

export function SkillsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I work with modern technologies to build scalable and efficient solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className={`inline-flex p-3 rounded-full bg-muted mb-4`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">All Technologies</h3>
            <p className="text-muted-foreground">Interactive overview of all my technical skills</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(portfolioData.skills).flat().map((skill, index) => (
              <motion.div
                key={`${skill}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.02 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  rotateZ: [-1, 1, -1],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge 
                  variant="outline" 
                  className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
