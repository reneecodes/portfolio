import React from 'react';

interface Tool {
  name: string;
  icon: React.ReactNode;
  color: string;
  description?: string;
}

interface SkillCategory {
  title: string;
  tools: Tool[];
  accentColor: string;
  gradientColor: string;
}

// Custom SVG Icons - Hand-coded for that perfect ✨ designer touch
const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M15 12c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>
    <path d="M24 9c0-1.66-1.34-3-3-3s-3 1.34-3 3c0 .74.27 1.41.71 1.93C18.53 12.7 18 14.23 18 16c0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.57-1.53-4.7-3.71-5.07C23.73 10.41 24 9.74 24 9z"/>
    <path d="M12 3c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    <path d="M6 9c0-1.66-1.34-3-3-3S0 7.34 0 9s1.34 3 3 3 3-1.34 3-3z"/>
    <path d="M6 15c0-1.66-1.34-3-3-3s-3 1.34-3 3c0 .74.27 1.41.71 1.93C1.53 17.7 1 19.23 1 21c0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.57-1.53-4.7-3.71-5.07C5.73 16.41 6 15.74 6 15z"/>
  </svg>
);

const AdobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12.1 1.5L3.5 22.5h3.5l2.3-5.8h6.4l2.3 5.8h3.5L15.9 1.5h-3.8zm-.3 8.4l2.3 5.8h-4.6l2.3-5.8z"/>
  </svg>
);

const UserPersonaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const WireframeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <line x1="9" y1="9" x2="15" y2="9"/>
    <line x1="9" y1="13" x2="15" y2="13"/>
    <line x1="9" y1="17" x2="11" y2="17"/>
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2L8.5 6.5L4 8L6.5 12.5L4 17L8.5 15.5L12 19L15.5 15.5L20 17L17.5 12.5L20 8L15.5 9.5L12 2z"/>
  </svg>
);

const ChatGPTIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M8 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

const TraeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);

const PromptEngineeringIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const TechHandoffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    <path d="M12 10v4"/>
    <path d="M10 12h4"/>
  </svg>
);

const ComponentArchitectureIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <rect x="3" y="3" width="7" height="7"/>
    <rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/>
  </svg>
);

const WebStandardsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const FramerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h16V4H4zm4 4h8v2H8V8zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/>
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2L2 19.5h20L12 2z"/>
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521 2.52 2.528 2.528 0 0 1-2.521 2.523V15.165zM8.58 12.363a2.528 2.528 0 0 1 2.523-2.52 2.528 2.528 0 0 1 2.523 2.52v6.313A2.528 2.528 0 0 1 11.103 21a2.528 2.528 0 0 1-2.522-2.522v-6.315zM10.852 9.6a2.528 2.528 0 0 1-2.523 2.52 2.527 2.527 0 0 1-2.52-2.52A2.527 2.527 0 0 1 8.33 7.08a2.528 2.528 0 0 1 2.522 2.52zM13.12 12.363a2.527 2.527 0 0 1-2.522 2.52 2.528 2.528 0 0 1-2.522-2.52 2.528 2.528 0 0 1 2.522-2.523h2.522v2.523zM14.39 10.09a2.528 2.528 0 0 1 2.523 2.522 2.528 2.528 0 0 1-2.523 2.52V10.09zM16.658 7.323a2.528 2.528 0 0 1 2.523-2.52 2.527 2.527 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.523h-2.523V7.324zM18.928 4.56a2.528 2.528 0 0 1-2.523 2.52 2.527 2.527 0 0 1-2.52-2.52 2.527 2.527 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.523 2.522z"/>
  </svg>
);

const NotionIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M4.459 4.596a.75.75 0 0 1 .746-.596h13.59a.75.75 0 0 1 .746.596v13.59a.75.75 0 0 1-.746.596H5.205a.75.75 0 0 1-.746-.596V4.596zM5.205 3A2.205 2.205 0 0 0 3 5.205v13.59A2.205 2.205 0 0 0 5.205 21h13.59A2.205 2.205 0 0 0 21 18.795V5.205A2.205 2.205 0 0 0 18.795 3H5.205z"/>
    <path d="M7.5 6.5A1.5 1.5 0 0 1 9 5h1.5a.5.5 0 0 1 0 1H9a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H9a.5.5 0 0 1 0 1H9A1.5 1.5 0 0 1 7.5 15v-9zM13.5 6.5a1.5 1.5 0 0 1 1.5-1.5H16a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 16 17h-1.5a.5.5 0 0 1 0-1H16a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1 0-1h1z"/>
  </svg>
);

const skillsData: SkillCategory[] = [
  {
    title: 'Design & Research',
    accentColor: 'coral',
    gradientColor: 'from-coral-400 to-coral-600',
    tools: [
      { name: 'Figma', icon: <FigmaIcon />, color: 'text-coral-500' },
      { name: 'Adobe Creative Suite', icon: <AdobeIcon />, color: 'text-coral-500' },
      { name: 'User Personas', icon: <UserPersonaIcon />, color: 'text-coral-500' },
      { name: 'Wireframing', icon: <WireframeIcon />, color: 'text-coral-500' },
    ]
  },
  {
    title: 'AI-Powered Workflow',
    accentColor: 'lavender',
    gradientColor: 'from-lavender-400 to-lavender-600',
    tools: [
      { name: 'Gemini', icon: <GeminiIcon />, color: 'text-lavender-500' },
      { name: 'ChatGPT', icon: <ChatGPTIcon />, color: 'text-lavender-500' },
      { name: 'Trae', icon: <TraeIcon />, color: 'text-lavender-500' },
      { name: 'Prompt Engineering', icon: <PromptEngineeringIcon />, color: 'text-lavender-500' },
    ]
  },
  {
    title: 'Tech & Collaboration',
    accentColor: 'sage',
    gradientColor: 'from-sage-400 to-sage-600',
    tools: [
      { name: 'GitHub', icon: <GitHubIcon />, color: 'text-sage-500' },
      { name: 'Technical Handoff', icon: <TechHandoffIcon />, color: 'text-sage-500' },
      { name: 'Component Architecture', icon: <ComponentArchitectureIcon />, color: 'text-sage-500' },
      { name: 'Web Standards', icon: <WebStandardsIcon />, color: 'text-sage-500' },
    ]
  },
  {
    title: 'Tools & Platforms',
    accentColor: 'sky',
    gradientColor: 'from-sky-400 to-sky-600',
    tools: [
      { name: 'Framer', icon: <FramerIcon />, color: 'text-sky-500' },
      { name: 'Vercel', icon: <VercelIcon />, color: 'text-sky-500' },
      { name: 'Slack', icon: <SlackIcon />, color: 'text-sky-500' },
      { name: 'Notion', icon: <NotionIcon />, color: 'text-sky-500' },
    ]
  },
];

export default function SkillsTools() {
  return (
    <section id="skills-tools" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration - subtle animated blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-coral-300/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay opacity-70 animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sage-300/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-lavender-300/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header ✨ */}
        <div className="mb-16 text-center">
          <span className="text-coral-600 dark:text-coral-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
            My Creative Toolbox
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            The Magic Kit 🎨
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            A curated collection of tools and technologies that bring design visions to life with pixel-perfect precision ✨
          </p>
        </div>

        {/* Bento Box Grid Layout 🍱 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group relative"
              style={{
                gridRow: categoryIndex === 0 || categoryIndex === 3 ? 'span 2' : 'span 1',
              }}
            >
              {/* Category Card */}
              <div className={`
                h-full bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm
                rounded-2xl border border-white/20 dark:border-gray-700/30
                p-6 md:p-8 transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-2xl hover:shadow-${category.accentColor}-500/20
                hover:border-${category.accentColor}-300/30 dark:hover:border-${category.accentColor}-500/30
                group-hover:scale-[1.02]
              `}>
                {/* Gradient Header */}
                <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${category.gradientColor}/10 group-hover:${category.gradientColor}/20 transition-all duration-300`}>
                  <h3 className={`text-xl md:text-2xl font-bold text-${category.accentColor}-600 dark:text-${category.accentColor}-400 mb-2`}>
                    {category.title}
                  </h3>
                  <div className={`h-1 w-12 bg-gradient-to-r ${category.gradientColor} rounded-full transition-all duration-300 group-hover:w-20`}></div>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={tool.name}
                      className={`
                        relative p-4 rounded-xl bg-white/40 dark:bg-gray-700/30
                        border border-white/30 dark:border-gray-600/30
                        transition-all duration-300 ease-out
                        hover:bg-white/60 dark:hover:bg-gray-600/40
                        hover:scale-105 hover:shadow-lg
                        group-hover:delay-${toolIndex * 100}
                      `}
                    >
                      <div className={`${tool.color} mb-3 transition-transform duration-300 group-hover:scale-110`}>
                        {tool.icon}
                      </div>
                      <h4 className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-100 leading-tight">
                        {tool.name}
                      </h4>
                      
                      {/* Subtle glow effect on hover */}
                      <div className={`
                        absolute inset-0 rounded-xl opacity-0
                        bg-gradient-to-br ${category.gradientColor}/5
                        transition-opacity duration-300
                        group-hover:opacity-100
                      `}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating particles effect ✨ */}
              <div className="absolute -top-2 -right-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`w-2 h-2 bg-${category.accentColor}-400 rounded-full animate-ping`}></div>
                <div className={`w-1 h-1 bg-${category.accentColor}-300 rounded-full absolute top-3 left-1 animate-bounce`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call-to-Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-coral-100 via-lavender-100 to-sage-100 dark:from-coral-900/30 dark:via-lavender-900/30 dark:to-sage-900/30 border border-white/20 dark:border-gray-700/30">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Always learning, always evolving 🌱
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-coral-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-lavender-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-sage-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}