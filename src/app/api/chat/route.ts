import { NextRequest, NextResponse } from 'next/server';
import { portfolioData } from '@/lib/data/portfolio-data';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_BASE_URL = 'https://api.groq.com/openai/v1';

// Validate API key is present
if (!GROQ_API_KEY) {
  console.error('GROQ_API_KEY is not set in environment variables');
}

// Available models in order of preference (fallback chain)
// Using Groq's available models - will fallback if model name is incorrect
const MODELS = [
  'llama-3.1-70b-versatile',
  'llama-3.1-8b-instant',
  'qwen/qwen3-32b', // Qwen3 model - confirmed available on Groq
  'moonshotai/kimi-k2-instruct', // Kimi K2 model - confirmed available on Groq
  'deepseek-r1-distill-llama-70b', // DeepSeek model (may be deprecated, but will try)
  'llama-3.1-70b',
  'llama-3.1-8b',
  'mixtral-8x7b-32768',
  'gemma-7b-it',
];

// Create system prompt with portfolio context
function createSystemPrompt(): string {
  const { personal, skills, experience, education, projects, certifications } = portfolioData;
  
  return `You are an AI agent representing ${personal.name}, a ${personal.title}. Your role is to answer questions about ${personal.name} based on the following portfolio information. Always be professional, friendly, and helpful.

PERSONAL INFORMATION:
- Name: ${personal.name}
- Title: ${personal.title}
- Location: ${personal.location}
- Email: ${personal.email}
- Phone: ${personal.phone}
- Website: ${personal.website}
- Availability: ${personal.availability}
- Bio: ${personal.bio}
- Story: ${personal.story}

SKILLS:
- Frontend: ${skills.frontend.join(', ')}
- Backend: ${skills.backend.join(', ')}
- Database: ${skills.database.join(', ')}
- Tools: ${skills.tools.join(', ')}
- Soft Skills: ${skills.softSkills.join(', ')}

EXPERIENCE:
${experience.map(exp => `
- ${exp.position} at ${exp.company} (${exp.duration})
  Location: ${exp.location}
  Type: ${exp.type}
  Description: ${exp.description}
  Technologies: ${exp.technologies.join(', ')}
  Achievements: ${exp.achievements.join('; ')}
`).join('\n')}

EDUCATION:
${education.map(edu => `
- ${edu.degree} from ${edu.institution} (${edu.duration})
  Location: ${edu.location}
  GPA: ${edu.gpa}
  Description: ${edu.description}
`).join('\n')}

PROJECTS:
${projects.map(proj => `
- ${proj.title}
  Description: ${proj.description}
  Status: ${proj.status}
  Technologies: ${proj.technologies.join(', ')}
  ${proj.demoUrl ? `Demo: ${proj.demoUrl}` : ''}
`).join('\n')}

IMPORTANT RULES:
1. ONLY answer questions based on the information provided above. If asked about something not in the portfolio, acknowledge that it's not in your current knowledge base.
2. For questions about topics not covered in the portfolio, emphasize ${personal.name}'s soft skills: ${skills.softSkills.join(', ')}. Mention that ${personal.name} is very flexible, has quick learning ability, and can easily adapt to new technologies and challenges.
3. For personal questions that require direct contact, provide the contact information: Email: ${personal.email}, Phone: ${personal.phone}, or suggest reaching out via LinkedIn: ${personal.social.linkedin}
4. Always maintain a professional yet friendly tone.
5. If asked about availability, mention: "${personal.availability}"
6. Keep responses concise but informative.
7. Never make up information that's not in the portfolio data.`;
}

async function callGroqAPI(model: string, messages: any[]): Promise<{ response: string; model: string }> {
  const response = await fetch(`${GROQ_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 1000,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    // Check for rate limit errors
    if (response.status === 429) {
      const errorMessage = data.error?.message || 'Rate limit exceeded';
      if (errorMessage.includes('daily') || errorMessage.includes('day')) {
        throw new Error('DAILY_LIMIT_EXCEEDED');
      } else if (errorMessage.includes('hourly') || errorMessage.includes('hour')) {
        throw new Error('HOURLY_LIMIT_EXCEEDED');
      } else {
        throw new Error('RATE_LIMIT_EXCEEDED');
      }
    }
    
    // Check for model-specific errors
    if (response.status === 400 || response.status === 404) {
      throw new Error('MODEL_ERROR');
    }

    throw new Error(data.error?.message || `API error: ${response.status}`);
  }

  return {
    response: data.choices[0]?.message?.content || 'Sorry, I could not generate a response.',
    model: data.model || model,
  };
}

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'API key is not configured. Please set GROQ_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    const { message, conversationHistory } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const systemPrompt = createSystemPrompt();
    const messages = [
      { role: 'system', content: systemPrompt },
      ...(conversationHistory || []),
      { role: 'user', content: message },
    ];

    // Try models in order until one works
    let lastError: Error | null = null;
    
    for (const model of MODELS) {
      try {
        const result = await callGroqAPI(model, messages);
        return NextResponse.json({
          response: result.response,
          model: result.model,
        });
      } catch (error) {
        lastError = error as Error;
        
        // If it's a rate limit error, don't try other models
        if (error instanceof Error && (
          error.message === 'DAILY_LIMIT_EXCEEDED' ||
          error.message === 'HOURLY_LIMIT_EXCEEDED' ||
          error.message === 'RATE_LIMIT_EXCEEDED'
        )) {
          break;
        }
        
        // If it's a model error, try the next model
        if (error instanceof Error && error.message === 'MODEL_ERROR') {
          continue;
        }
        
        // For other errors, try next model
        continue;
      }
    }

    // If all models failed, return appropriate error
    if (lastError) {
      if (lastError.message === 'DAILY_LIMIT_EXCEEDED') {
        return NextResponse.json(
          { error: 'Daily API limit has been reached. Please try again tomorrow.' },
          { status: 429 }
        );
      } else if (lastError.message === 'HOURLY_LIMIT_EXCEEDED') {
        return NextResponse.json(
          { error: 'Hourly API limit has been reached. Please try again in an hour.' },
          { status: 429 }
        );
      } else if (lastError.message === 'RATE_LIMIT_EXCEEDED') {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again in a moment.' },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      { error: 'All models failed. Please try again later.' },
      { status: 500 }
    );
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

