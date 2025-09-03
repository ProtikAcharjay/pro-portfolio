// Tech-specific colors for skill badges
export const techColors: Record<string, { bg: string; text: string; border: string }> = {
  // Frontend Technologies
  'React': { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30' },
  'Next.js': { bg: 'bg-gray-800/20', text: 'text-gray-300', border: 'border-gray-600/30' },
  'Vue.js': { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
  'Angular': { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30' },
  'TypeScript': { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
  'JavaScript': { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/30' },
  'HTML5': { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30' },
  'CSS3': { bg: 'bg-blue-600/20', text: 'text-blue-400', border: 'border-blue-600/30' },
  'Tailwind CSS': { bg: 'bg-teal-500/20', text: 'text-teal-400', border: 'border-teal-500/30' },
  'Sass': { bg: 'bg-pink-500/20', text: 'text-pink-400', border: 'border-pink-500/30' },

  // Backend Technologies
  'Node.js': { bg: 'bg-green-600/20', text: 'text-green-400', border: 'border-green-600/30' },
  'Express.js': { bg: 'bg-gray-700/20', text: 'text-gray-300', border: 'border-gray-700/30' },
  'Python': { bg: 'bg-blue-600/20', text: 'text-blue-400', border: 'border-blue-600/30' },
  'Django': { bg: 'bg-green-700/20', text: 'text-green-400', border: 'border-green-700/30' },
  'PHP': { bg: 'bg-indigo-600/20', text: 'text-indigo-400', border: 'border-indigo-600/30' },
  'Laravel': { bg: 'bg-red-600/20', text: 'text-red-400', border: 'border-red-600/30' },
  'Java': { bg: 'bg-orange-600/20', text: 'text-orange-400', border: 'border-orange-600/30' },
  'Spring Boot': { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },

  // Databases
  'MySQL': { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
  'PostgreSQL': { bg: 'bg-blue-700/20', text: 'text-blue-400', border: 'border-blue-700/30' },
  'MongoDB': { bg: 'bg-green-600/20', text: 'text-green-400', border: 'border-green-600/30' },
  'Redis': { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30' },
  'Firebase': { bg: 'bg-yellow-600/20', text: 'text-yellow-400', border: 'border-yellow-600/30' },
  'Supabase': { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' },

  // Tools & Cloud
  'Git': { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30' },
  'Docker': { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
  'AWS': { bg: 'bg-yellow-600/20', text: 'text-yellow-400', border: 'border-yellow-600/30' },
  'Vercel': { bg: 'bg-gray-800/20', text: 'text-gray-300', border: 'border-gray-800/30' },
  'Figma': { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },
  'VS Code': { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
  'Linux': { bg: 'bg-gray-600/20', text: 'text-gray-300', border: 'border-gray-600/30' },

  // Mobile
  'React Native': { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30' },
  'Flutter': { bg: 'bg-blue-400/20', text: 'text-blue-400', border: 'border-blue-400/30' },
  'Swift': { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30' },
  'Kotlin': { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },

  // Default fallback
  'default': { bg: 'bg-gray-500/20', text: 'text-gray-400', border: 'border-gray-500/30' }
};

export const getTechColor = (tech: string) => {
  return techColors[tech] || techColors.default;
};
