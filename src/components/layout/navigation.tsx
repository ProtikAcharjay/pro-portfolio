'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/lib/data/portfolio-data';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Education', href: '/education' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm border-b border-border' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {portfolioData.personal.name.split(' ').map(word => word[0]).join('')}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                    pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      layoutId="activeNav"
                      initial={false}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links & CTA */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="ghost" asChild>
                <Link href={portfolioData.personal.social.github} target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="sm" variant="ghost" asChild>
                <Link href={portfolioData.personal.social.linkedin} target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Button size="sm" asChild>
              <Link href="/contact">
                <Mail className="h-4 w-4 mr-2" />
                Hire Me
              </Link>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="text-center">
                    <h2 className="text-xl font-bold">{portfolioData.personal.name}</h2>
                    <p className="text-sm text-muted-foreground">{portfolioData.personal.title}</p>
                  </div>
                  
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          pathname === item.href
                            ? 'text-primary bg-primary/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-center space-x-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={portfolioData.personal.social.github} target="_blank">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={portfolioData.personal.social.linkedin} target="_blank">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Link>
                      </Button>
                    </div>
                    <Button asChild>
                      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        <Mail className="h-4 w-4 mr-2" />
                        Hire Me
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
