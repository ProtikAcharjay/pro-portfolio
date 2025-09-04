'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '@/lib/data/portfolio-data';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  projectType: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: portfolioData.personal.email,
    description: 'Best for detailed discussions',
    action: 'mailto:' + portfolioData.personal.email
  },
  {
    icon: Phone,
    title: 'Phone',
    value: portfolioData.personal.phone,
    description: 'For quick conversations',
    action: 'tel:' + portfolioData.personal.phone
  },
  {
    icon: MapPin,
    title: 'Location',
    value: portfolioData.personal.location,
    description: 'Available for local meetings',
    action: null
  }
];

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    url: portfolioData.personal.social.github,
    description: 'View my code repositories'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: portfolioData.personal.social.linkedin,
    description: 'Professional networking'
  },
  {
    icon: Twitter,
    name: 'Twitter',
    url: portfolioData.personal.social.twitter,
    description: 'Follow my tech journey'
  }
];

const faqs = [
  {
    question: 'What is your typical response time?',
    answer: 'I typically respond to all inquiries within 24 hours, often much sooner during business hours.'
  },
  {
    question: 'Do you work on weekends?',
    answer: 'While I maintain work-life balance, I\'m available for urgent project needs and can accommodate different time zones.'
  },
  {
    question: 'What types of projects do you take on?',
    answer: 'I work on web applications, mobile apps, API development, and full-stack solutions. I\'m particularly interested in innovative projects.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, I offer maintenance and support packages for projects I\'ve developed to ensure long-term success.'
  }
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Let's <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to build something amazing? Let's discuss your software development needs, web applications, or technical consulting requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="text-cyan-400">💻</span>
                Software Development
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-400">🌐</span>
                Web Applications
              </span>
              <span className="flex items-center gap-2">
                <span className="text-purple-400">💡</span>
                Technical Consulting
              </span>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">{portfolioData.personal.availability}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Usually responds within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send me a message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      {/* Name & Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            {...register('name')}
                            placeholder="John Doe"
                            className={errors.name ? 'border-red-500' : ''}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            placeholder="john@example.com"
                            className={errors.email ? 'border-red-500' : ''}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          {...register('subject')}
                          placeholder="Project Discussion"
                          className={errors.subject ? 'border-red-500' : ''}
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          {...register('message')}
                          placeholder="Tell me about your project, timeline, and any specific requirements..."
                          rows={6}
                          className={errors.message ? 'border-red-500' : ''}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      {/* Submit Status */}
                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg"
                        >
                          <CheckCircle className="h-5 w-5" />
                          <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                        </motion.div>
                      )}

                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
                        >
                          <AlertCircle className="h-5 w-5" />
                          <span>Failed to send message. Please try again or email me directly.</span>
                        </motion.div>
                      )}

                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="w-full group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-3">
                          <div className="inline-flex p-2 rounded-lg bg-primary/10">
                            <method.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-1">
                              {method.description}
                            </p>
                            {method.action ? (
                              <Link 
                                href={method.action}
                                className="text-sm text-primary hover:underline"
                              >
                                {method.value}
                              </Link>
                            ) : (
                              <p className="text-sm">{method.value}</p>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Button variant="outline" size="sm" asChild className="w-full justify-start">
                        <Link href={social.url} target="_blank">
                          <social.icon className="mr-3 h-4 w-4" />
                          <div className="text-left">
                            <div className="font-medium">{social.name}</div>
                            <div className="text-xs text-muted-foreground">{social.description}</div>
                          </div>
                          <ExternalLink className="ml-auto h-3 w-3" />
                        </Link>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">Current Status</span>
                  </div>
                  <Badge className="bg-green-500 hover:bg-green-600 mb-2">
                    {portfolioData.personal.availability}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    I&apos;m currently accepting new projects and would love to discuss your ideas.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about working with me
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
