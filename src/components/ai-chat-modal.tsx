'use client';

import { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Download, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { portfolioData } from '@/lib/data/portfolio-data';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function AIChatModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          conversationHistory: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      const errorResponse: Message = {
        role: 'assistant',
        content: `Sorry, I encountered an error: ${errorMessage}. Please try again later.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const downloadChatAsPDF = () => {
    if (messages.length === 0) return;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Chat with ${portfolioData.personal.name}'s AI Agent</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      line-height: 1.6;
      color: #333;
    }
    h1 {
      color: #6366f1;
      border-bottom: 2px solid #6366f1;
      padding-bottom: 10px;
    }
    .meta {
      color: #666;
      font-size: 14px;
      margin-bottom: 30px;
    }
    .message {
      margin-bottom: 25px;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid;
    }
    .user-message {
      background-color: #f0f4ff;
      border-left-color: #6366f1;
    }
    .assistant-message {
      background-color: #f9fafb;
      border-left-color: #10b981;
    }
    .message-header {
      font-weight: 600;
      margin-bottom: 8px;
      font-size: 14px;
    }
    .user-message .message-header {
      color: #6366f1;
    }
    .assistant-message .message-header {
      color: #10b981;
    }
    .message-time {
      font-size: 12px;
      color: #999;
      margin-top: 8px;
    }
    .message-content {
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    hr {
      border: none;
      border-top: 1px solid #e5e7eb;
      margin: 20px 0;
    }
    @media print {
      body {
        margin: 0;
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <h1>Chat with ${portfolioData.personal.name}'s AI Agent</h1>
  <div class="meta">
    Generated on ${new Date().toLocaleString()}
  </div>
  ${messages.map((msg) => {
    const time = msg.timestamp.toLocaleTimeString();
    const role = msg.role === 'user' ? 'You' : 'AI Agent';
    const messageClass = msg.role === 'user' ? 'user-message' : 'assistant-message';
    return `
      <div class="message ${messageClass}">
        <div class="message-header">${role}</div>
        <div class="message-content">${msg.content.replace(/\n/g, '<br>')}</div>
        <div class="message-time">${time}</div>
      </div>
    `;
  }).join('')}
</body>
</html>
    `.trim();

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-with-${portfolioData.personal.name.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show a message that they can print to PDF
    setTimeout(() => {
      alert('Chat downloaded! Open the HTML file and use your browser\'s "Print to PDF" feature to save as PDF.');
    }, 100);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-[80vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <Bot className="h-6 w-6 text-primary relative z-10" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
                  AI-Powered Agent
                  <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                </DialogTitle>
                <DialogDescription className="text-xs mt-1">
                  Chat with {portfolioData.personal.name.split(' ')[0]}'s intelligent assistant
                </DialogDescription>
              </div>
            </div>
            {messages.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={downloadChatAsPDF}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                Download Chat
              </Button>
            )}
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                <Bot className="h-16 w-16 text-primary relative z-10" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <h3 className="text-lg font-semibold">Welcome! 👋</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  I'm {portfolioData.personal.name.split(' ')[0]}'s AI agent. Ask me anything about my experience, 
                  projects, skills, or availability. I'm here to help!
                </p>
              </motion.div>
            </div>
          ) : (
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.role === 'user' && (
                        <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                      <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                    </div>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {message.role === 'user' && (
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 justify-start"
                >
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg px-4 py-2">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin text-primary" />
                      <span className="text-sm text-muted-foreground">Thinking...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </AnimatePresence>
          )}
        </div>

        {error && (
          <div className="px-6">
            <div className="bg-destructive/10 text-destructive text-xs p-2 rounded">
              {error}
            </div>
          </div>
        )}

        <div className="px-6 pb-6 pt-4 border-t">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about Protik..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

