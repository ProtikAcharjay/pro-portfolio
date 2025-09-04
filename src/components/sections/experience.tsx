// components/sections/experience.tsx
'use client';

import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Code, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/lib/data/portfolio-data';

export function ExperienceSection() {
  return (
    <section className="py-16 bg-muted/10">
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
            My contributions to innovative tech solutions and software projects
          </p>
        </motion.div>

        <div className="relative p-6 rounded-xl bg-card/95 shadow-lg">
          <VerticalTimeline lineColor="hsl(var(--primary))">
            {portfolioData.experience.map((exp) => (
              <VerticalTimelineElement
                key={exp.id}
                date={exp.duration}
                iconStyle={{ background: 'hsl(var(--primary))', color: '#fff' }}
                icon={<Briefcase className="h-6 w-6" />}
                contentStyle={{
                  background: 'hsl(var(--card))',
                  color: 'hsl(var(--foreground))',
                  boxShadow: '0 3px 0 hsl(var(--primary))'
                }}
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
  );
}
