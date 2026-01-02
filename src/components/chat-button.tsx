'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AIChatModal } from '@/components/ai-chat-modal';
import { MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

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
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 blur-xl group-hover:bg-white/30 transition-colors" />
          <MessageCircle className="h-6 w-6 relative z-10" />
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
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute right-16 top-1/2 -translate-y-1/2 bg-background border rounded-lg px-3 py-1.5 shadow-lg whitespace-nowrap flex items-center gap-2"
        >
          <Sparkles className="h-3 w-3 text-primary" />
          <span className="text-xs font-medium">AI-Powered Chat</span>
        </motion.div>
      </motion.div>
      <AIChatModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}

