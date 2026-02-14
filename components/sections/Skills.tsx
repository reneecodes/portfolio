import React from 'react';

type Proficiency = 'Expert' | 'Proficient' | 'Intermediate' | 'Familiar';

interface Skill {
  name: string;
  proficiency: Proficiency;
  description: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  description: string;
  accentColor: string; // e.g., 'coral', 'sage', 'lavender'
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Design & Research',
    description: 'Creating intuitive, user-centered experiences through rigorous research and meticulous design.',
    accentColor: 'coral',
    skills: [
      {
        name: 'Figma',
        proficiency: 'Expert',
        description: 'My primary design tool for everything from wireframes to high-fidelity prototypes and design systems.',
      },
      {
        name: 'User Research',
        proficiency: 'Expert',
        description: 'Conducting interviews, surveys, and usability testing to validate design decisions and understand user needs.',
      },
      {
        name: 'Wireframing',
        proficiency: 'Expert',
        description: 'Translating concepts into structural blueprints for clear communication and rapid iteration.',
      },
      {
        name: 'Prototyping',
        proficiency: 'Expert',
        description: 'Creating interactive experiences to test flows and interactions before development.',
      },
      {
        name: 'Design Systems',
        proficiency: 'Proficient',
        description: 'Building scalable component libraries for consistency and efficiency across products.',
      },
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Translating designs into responsive, accessible, and performant web interfaces.',
    accentColor: 'sage',
    skills: [
      {
        name: 'HTML5',
        proficiency: 'Intermediate',
        description: 'Structuring semantic and accessible web content for better SEO and usability.',
      },
      {
        name: 'CSS3',
        proficiency: 'Intermediate',
        description: 'Styling layouts with modern techniques like Flexbox, Grid, and responsive design principles.',
      },
      {
        name: 'JavaScript',
        proficiency: 'Intermediate',
        description: 'Adding interactivity and logic to web interfaces using modern ES6+ syntax.',
      },
      {
        name: 'React',
        proficiency: 'Familiar',
        description: 'Building component-based UIs (like this portfolio!) and managing state effectively.',
      },
      {
        name: 'Tailwind CSS',
        proficiency: 'Familiar',
        description: 'Rapidly styling with utility classes while maintaining a consistent design system.',
      },
    ],
  },
  {
    title: 'Tools & Workflow',
    description: 'Leveraging modern tools to streamline development and collaboration processes.',
    accentColor: 'lavender',
    skills: [
      {
        name: 'Git & GitHub',
        proficiency: 'Proficient',
        description: 'Version control for tracking changes and collaborating with other developers.',
      },
      {
        name: 'VS Code',
        proficiency: 'Proficient',
        description: 'My code editor of choice, customized with extensions for productivity.',
      },
      {
        name: 'Agile/Scrum',
        proficiency: 'Familiar',
        description: 'Working in iterative sprints and cross-functional teams to deliver value incrementally.',
      },
      {
        name: 'Notion',
        proficiency: 'Expert',
        description: 'Organizing documentation, tasks, and project roadmaps for efficient project management.',
      },
    ],
  },
];

const SkillIcon = ({ name, className }: { name: string; className?: string }) => {
  // Simple SVG placeholders for now, can be expanded with specific icons later
  const iconProps = { className: `w-6 h-6 ${className}`, strokeWidth: 1.5 };
  
  switch (name) {
    case 'Figma': return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 12V6a3 3 0 00-3 3 3 3 0 003 3zm0 0v6a3 3 0 01-3-3 3 3 0 013-3zm0 0h6a3 3 0 003-3 3 3 0 00-3-3h-6zm0 0h-6a3 3 0 01-3-3 3 3 0 013-3h6z" /></svg>;
    case 'User Research': return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
    case 'Wireframing': return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>;
    case 'Prototyping': return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case 'Design Systems': return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
    case 'HTML5': return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
    case 'CSS3': return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>;
    case 'JavaScript': return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>; // Reusing code icon for now
    case 'React': return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a9 9 0 019 9v1a9 9 0 01-9 9 9 9 0 01-9-9V11a9 9 0 019-9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>;
    case 'Tailwind CSS': return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    case 'Git & GitHub': return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
    default: return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;
  }
};

const ProficiencyBadge = ({ level, color }: { level: Proficiency; color: string }) => {
  const colorClasses: Record<string, string> = {
    coral: 'bg-coral-50 text-coral-700 border-coral-200 dark:bg-coral-900/30 dark:text-coral-300 dark:border-coral-800',
    sage: 'bg-sage-50 text-sage-700 border-sage-200 dark:bg-sage-900/30 dark:text-sage-300 dark:border-sage-800',
    lavender: 'bg-lavender-50 text-lavender-700 border-lavender-200 dark:bg-lavender-900/30 dark:text-lavender-300 dark:border-lavender-800',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorClasses[color]}`}>
      {level}
    </span>
  );
};

export default function Skills() {
  const colorClasses = {
    coral: {
      gradient: 'from-coral-200 dark:from-coral-800',
      border: 'hover:border-coral-300 dark:hover:border-coral-700',
      iconBg: 'bg-coral-50 dark:bg-coral-900/20',
      iconText: 'text-coral-600 dark:text-coral-400',
      titleHover: 'group-hover:text-coral-600',
    },
    sage: {
      gradient: 'from-sage-200 dark:from-sage-800',
      border: 'hover:border-sage-300 dark:hover:border-sage-700',
      iconBg: 'bg-sage-50 dark:bg-sage-900/20',
      iconText: 'text-sage-600 dark:text-sage-400',
      titleHover: 'group-hover:text-sage-600',
    },
    lavender: {
      gradient: 'from-lavender-200 dark:from-lavender-800',
      border: 'hover:border-lavender-300 dark:hover:border-lavender-700',
      iconBg: 'bg-lavender-50 dark:bg-lavender-900/20',
      iconText: 'text-lavender-600 dark:text-lavender-400',
      titleHover: 'group-hover:text-lavender-600',
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-coral-300/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay opacity-70 animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sage-300/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-16 text-center md:text-left">
          <span className="text-coral-600 dark:text-coral-400 font-semibold tracking-wider uppercase text-sm">Expertise</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Skills & Tools
          </h2>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A comprehensive overview of my technical toolkit. While design is my superpower, 
            I'm continuously expanding my frontend development capabilities to bridge the gap between vision and reality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {skillsData.map((category, categoryIdx) => {
            const colors = colorClasses[category.accentColor as keyof typeof colorClasses];
            
            return (
              <div key={category.title} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className={`text-2xl font-bold text-gray-900 dark:text-white`}>
                    {category.title}
                  </h3>
                  <div className={`h-px flex-1 bg-gradient-to-r ${colors.gradient} to-transparent`}></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div 
                      key={skill.name}
                      className={`group relative bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-100 dark:border-gray-700 
                        ${colors.border}
                        shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 
                        flex flex-col h-full animate-fade-in-up`}
                      style={{ animationDelay: `${(categoryIdx * 200) + (skillIdx * 50)}ms` }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className={`p-2 rounded-lg ${colors.iconBg} ${colors.iconText}`}>
                          <SkillIcon name={skill.name} />
                        </div>
                        <ProficiencyBadge level={skill.proficiency} color={category.accentColor} />
                      </div>
                      
                      <h4 className={`text-lg font-semibold text-gray-900 dark:text-white mb-2 ${colors.titleHover} transition-colors`}>
                        {skill.name}
                      </h4>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
