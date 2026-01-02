'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AIChatModal } from '@/components/ai-chat-modal';
import { MessageCircle, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/lib/data/portfolio-data';

const ROTATING_MESSAGES = [
  "Chat with Protik's AI Assistant",
  "AI will help to get specific information about Protik",
  "AI Powered Chat with Protik",
  "Ask me anything about Protik",
  "Discover Protik's expertise",
];

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTooltipDismissed, setIsTooltipDismissed] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const dismissed = localStorage.getItem('chat-tooltip-dismissed');
    if (dismissed === 'true') {
      setIsTooltipDismissed(true);
    }
  }, []);

  // Rotate messages every 3 seconds
  useEffect(() => {
    if (isTooltipDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % ROTATING_MESSAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isTooltipDismissed]);

  const handleDismiss = () => {
    setIsTooltipDismissed(true);
    localStorage.setItem('chat-tooltip-dismissed', 'true');
  };

  const currentMessage = ROTATING_MESSAGES[currentMessageIndex];

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-18 w-18 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 group relative overflow-hidden"
          style={{ height: '4.5rem', width: '4.5rem' }}
        >
          <div className="absolute inset-0 bg-white/20 blur-xl group-hover:bg-white/30 transition-colors" />
          <MessageCircle className="h-7 w-7 relative z-10" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full border-2 border-white/30"
          />
        </Button>
        <AnimatePresence>
          {!isTooltipDismissed && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.9 }}
              transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
              className="absolute right-20 top-1/2 -translate-y-1/2 bg-background border rounded-lg px-3 py-2 shadow-xl whitespace-nowrap flex items-center gap-2 group/tooltip"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentMessageIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs font-medium"
                >
                  {currentMessage}
                </motion.span>
              </AnimatePresence>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDismiss();
                }}
                className="ml-1 opacity-60 hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-muted"
                aria-label="Dismiss tooltip"
              >
                <X className="h-3 w-3" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <AIChatModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}

