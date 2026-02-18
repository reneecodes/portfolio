import React from 'react';

type Proficiency = 'Expert' | 'Proficient' | 'Intermediate' | 'Familiar';

interface Skill {
  name: string;
  proficiency: Proficiency;
}

interface SkillSubsection {
  title: string;
  skills: Skill[];
}

interface SkillCategory {
  title: string;
  accentColor: string; // e.g., 'coral', 'sage', 'lavender'
  subsections: SkillSubsection[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Design & Research',
    accentColor: 'coral',
    subsections: [
      {
        title: 'Design',
        skills: [
          { name: 'Figma', proficiency: 'Expert' },
          { name: 'Wireframing', proficiency: 'Expert' },
          { name: 'Prototyping', proficiency: 'Expert' },
          { name: 'Design Systems', proficiency: 'Proficient' },
        ],
      },
      {
        title: 'Research',
        skills: [
          { name: 'User Research', proficiency: 'Expert' },
        ],
      },
    ],
  },
  {
    title: 'Tools & Workflow',
    accentColor: 'lavender',
    subsections: [
      {
        title: 'Development',
        skills: [
          { name: 'Git & GitHub', proficiency: 'Proficient' },
          { name: 'VS Code', proficiency: 'Proficient' },
        ],
      },
      {
        title: 'Management',
        skills: [
          { name: 'Agile/Scrum', proficiency: 'Familiar' },
          { name: 'Notion', proficiency: 'Expert' },
        ],
      },
    ],
  },
];

const ProficiencyBadge = ({ level, color }: { level: Proficiency; color: string }) => {
  const colorClasses: Record<string, string> = {
    coral: 'bg-coral-50 text-coral-700 border-coral-200 dark:bg-coral-900/30 dark:text-coral-300 dark:border-coral-800',
    sage: 'bg-sage-50 text-sage-700 border-sage-200 dark:bg-sage-900/30 dark:text-sage-300 dark:border-sage-800',
    lavender: 'bg-lavender-50 text-lavender-700 border-lavender-200 dark:bg-lavender-900/30 dark:text-lavender-300 dark:border-lavender-800',
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border ${colorClasses[color]}`}>
      {level}
    </span>
  );
};

export default function Skills() {
  const colorClasses = {
    coral: {
      border: 'border-t-4 border-t-coral-500',
      bullet: 'bg-coral-500',
    },
    sage: {
      border: 'border-t-4 border-t-sage-500',
      bullet: 'bg-sage-500',
    },
    lavender: {
      border: 'border-t-4 border-t-lavender-500',
      bullet: 'bg-lavender-500',
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
            A comprehensive overview of my technical toolkit, organized by domain.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIdx) => {
            const colors = colorClasses[category.accentColor as keyof typeof colorClasses];
            
            return (
              <div 
                key={category.title}
                className={`bg-white dark:bg-gray-800/50 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 ${colors.border} p-8 animate-fade-in-up hover:-translate-y-1 transition-transform duration-300`}
                style={{ animationDelay: `${categoryIdx * 150}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  {category.title}
                </h3>

                <div className="space-y-8">
                  {category.subsections.map((subsection) => (
                    <div key={subsection.title}>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                        {subsection.title}
                      </h4>
                      <ul className="space-y-3">
                        {subsection.skills.map((skill) => (
                          <li key={skill.name} className="flex items-center justify-between group">
                            <div className="flex items-center gap-3">
                              <span className={`w-1.5 h-1.5 rounded-full ${colors.bullet} group-hover:scale-125 transition-transform`}></span>
                              <span className="text-gray-700 dark:text-gray-200 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <ProficiencyBadge level={skill.proficiency} color={category.accentColor} />
                          </li>
                        ))}
                      </ul>
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