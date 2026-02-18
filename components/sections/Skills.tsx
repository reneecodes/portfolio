import React from 'react';

interface Tool {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  accentColor: string;
  tools: Tool[];
}

// SVG Icons for each tool
const icons = {
  figma: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm0 0c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm-3-6c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm6 0c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zM6 18c0-1.654 1.346-3 3-3h3v3c0 1.654-1.346 3-3 3s-3-1.346-3-3zm12 0c0-1.654-1.346-3-3-3h-3v3c0 1.654 1.346 3 3 3s3-1.346 3-3z"/>
    </svg>
  ),
  adobe: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M15.1 6.9c0 1.4-.8 2.6-2.1 3.2 1.4.6 2.3 2.2 2.3 3.8 0 2.3-1.8 4.1-4.1 4.1H4.9V3.8h5.5c2.3 0 4.1 1.8 4.1 4.1zM12 6.9c-1.4 0-2.5-1.1-2.5-2.5S10.6 1.9 12 1.9s2.5 1.1 2.5 2.5S13.4 6.9 12 6.9z"/>
    </svg>
  ),
  userPersonas: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  ),
  wireframing: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M9 3v2H7V3h2m4 0v2h-2V3h2m4 0v2h-2V3h2M9 7v2H7V7h2m4 0v2h-2V7h2m4 0v2h-2V7h2M9 11v2H7v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2M9 15v2H7v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2M9 19v2H7v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2z"/>
    </svg>
  ),
  gemini: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2L8.5 7h7L12 2zm0 20l3.5-5h-7L12 22zm-6.5-8h13l-6.5 4.5L5.5 14z"/>
    </svg>
  ),
  chatgpt: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  trae: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
    </svg>
  ),
  promptEngineering: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M9.5 3A6.5 6.5 0 0016 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 009.5 16 6.5 6.5 0 003 9.5 6.5 6.5 0 009.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.1.73-.24.73-.53v-1.84c-3.03.66-3.67-1.46-3.67-1.46-.5-1.27-1.22-1.61-1.22-1.61-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.56 1.2 3.18.92.1-.72.38-1.2.7-1.48-2.42-.27-4.96-1.2-4.96-5.38 0-1.19.42-2.16 1.13-2.92-.1-.27-.48-1.38.12-2.88 0 0 .9-.28 3.08 1.12a10.63 10.63 0 015.6 0c2.18-1.4 3.08-1.12 3.08-1.12.6 1.5.22 2.6.12 2.88.7.76 1.13 1.73 1.13 2.92 0 4.18-2.54 5.11-4.98 5.38.4.34.73.96.73 1.94v2.88c0 .29.18.63.73.53A11 11 0 0012 1.27z"/>
    </svg>
  ),
  technicalHandoff: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
    </svg>
  ),
  componentArchitecture: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
    </svg>
  ),
  webStandards: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  ),
  framer: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h4v2H8v-2z"/>
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2L2 19h20L12 2zm0 3.5L18.5 18h-13L12 5.5z"/>
    </svg>
  ),
  slack: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.966 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.695 8.834a2.528 2.528 0 0 1-2.522 2.521 2.528 2.528 0 0 1-2.522-2.521V2.522A2.528 2.528 0 0 1 15.173 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.173 18.966a2.528 2.528 0 0 1 2.522 2.522A2.528 2.528 0 0 1 15.173 24a2.528 2.528 0 0 1-2.522-2.522v-2.522h2.522zM15.173 17.695a2.528 2.528 0 0 1-2.522-2.522 2.528 2.528 0 0 1 2.522-2.522h6.312A2.528 2.528 0 0 1 24 15.173a2.528 2.528 0 0 1-2.522 2.522h-6.305z"/>
    </svg>
  ),
  notion: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M4.459 4.596c-.06-.279-.08-.552-.06-.833C4.398 2.5 5.0 2 5.5 2h13c.5 0 1.5.5 1.5 1.5 0 .833-.5 1.5-1.5 1.5h-13c-.5 0-1.5-.5-1.5-1.5 0-.167.02-.333.06-.5zM6.5 7h11c.5 0 1 .5 1 1v11c0 .5-.5 1.5-1.5 1.5h-13c-.5 0-1.5-.5-1.5-1.5V8c0-.5.5-1 1-1z"/>
    </svg>
  ),
};

const skillsData: SkillCategory[] = [
  {
    title: 'Design & Research',
    accentColor: 'coral',
    tools: [
      { name: 'Figma', icon: icons.figma, color: 'coral' },
      { name: 'Adobe Creative Suite', icon: icons.adobe, color: 'coral' },
      { name: 'User Personas', icon: icons.userPersonas, color: 'coral' },
      { name: 'Wireframing', icon: icons.wireframing, color: 'coral' },
    ],
  },
  {
    title: 'AI-Powered Workflow',
    accentColor: 'lavender',
    tools: [
      { name: 'Gemini', icon: icons.gemini, color: 'lavender' },
      { name: 'ChatGPT', icon: icons.chatgpt, color: 'lavender' },
      { name: 'Trae', icon: icons.trae, color: 'lavender' },
      { name: 'Prompt Engineering', icon: icons.promptEngineering, color: 'lavender' },
    ],
  },
  {
    title: 'Tech & Collaboration',
    accentColor: 'sage',
    tools: [
      { name: 'GitHub', icon: icons.github, color: 'sage' },
      { name: 'Technical Handoff', icon: icons.technicalHandoff, color: 'sage' },
      { name: 'Component Architecture', icon: icons.componentArchitecture, color: 'sage' },
      { name: 'Web Standards', icon: icons.webStandards, color: 'sage' },
    ],
  },
  {
    title: 'Tools & Platforms',
    accentColor: 'sky',
    tools: [
      { name: 'Framer', icon: icons.framer, color: 'sky' },
      { name: 'Vercel', icon: icons.vercel, color: 'sky' },
      { name: 'Slack', icon: icons.slack, color: 'sky' },
      { name: 'Notion', icon: icons.notion, color: 'sky' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-coral-300/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay opacity-70 animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sage-300/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-16 text-center">
          <span className="text-coral-600 dark:text-coral-400 font-semibold tracking-wider uppercase text-sm">My Creative Toolbox</span>
          <h2 className="mt-2 text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            The Magic Kit ✨
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A curated collection of tools and technologies that bring my design visions to life
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {skillsData.map((category, categoryIndex) => (
            <React.Fragment key={category.title}>
              {/* Category Header Card */}
              <div className={`col-span-1 md:col-span-2 lg:col-span-4 lg:col-start-1 lg:col-end-5 bg-gradient-to-br from-${category.accentColor}-50 to-${category.accentColor}-100 dark:from-${category.accentColor}-900/20 dark:to-${category.accentColor}-800/10 rounded-2xl p-8 border border-${category.accentColor}-200 dark:border-${category.accentColor}-700/30 hover:shadow-2xl hover:shadow-${category.accentColor}-500/10 hover:-translate-y-2 transition-all duration-500 ease-out group`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${category.accentColor}-400 to-${category.accentColor}-600 flex items-center justify-center shadow-lg shadow-${category.accentColor}-500/20 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-xl font-bold">{categoryIndex + 1}</span>
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-bold text-${category.accentColor}-700 dark:text-${category.accentColor}-300`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={tool.name}
                      className={`group/tool relative bg-white/70 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-${tool.color}-300 dark:hover:border-${tool.color}-600 hover:shadow-xl hover:shadow-${tool.color}-500/20 hover:-translate-y-1 transition-all duration-300 ease-out backdrop-blur-sm`}
                      style={{ animationDelay: `${toolIndex * 100}ms` }}
                    >
                      {/* Glow effect on hover */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${tool.color}-400/10 to-${tool.color}-600/10 opacity-0 group-hover/tool:opacity-100 transition-opacity duration-300 -z-10`}></div>
                      
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${tool.color}-100 to-${tool.color}-200 dark:from-${tool.color}-900/30 dark:to-${tool.color}-800/20 flex items-center justify-center group-hover/tool:scale-110 transition-transform duration-300 shadow-md shadow-${tool.color}-500/10`}>
                          <div className={`text-${tool.color}-600 dark:text-${tool.color}-400 group-hover/tool:text-${tool.color}-700 dark:group-hover/tool:text-${tool.color}-300 transition-colors duration-300`}>
                            {tool.icon}
                          </div>
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover/tool:text-gray-800 dark:group-hover/tool:text-gray-50 transition-colors duration-300">
                          {tool.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}