export default function Experience() {
  const experiences = [
    {
      company: 'OddsCharts',
      role: 'Lead UI/UX Designer',
      period: 'Jan 2024 - Present',
      location: 'Remote',
      description: 'Spearheaded the complete redesign of a complex sports betting platform. Transformed high-density data tables into an intuitive, responsive dashboard, significantly reducing cognitive load for users.',
      tags: ['Product Design', 'Design Systems']
    },
    {
      company: 'Data Annotation',
      role: 'AI Trainer & Content Evaluator',
      period: 'Oct 2023 - Oct 2024',
      location: 'Remote',
      description: 'Collaborated on RLHF (Reinforcement Learning from Human Feedback) initiatives to improve LLM reasoning and natural language generation capabilities.',
      tags: ['AI/ML', 'Data Quality']
    },
    {
      company: 'Amazon Mechanical Turk',
      role: 'Research Contributor',
      period: 'June 2022 - Jan 2023',
      location: 'Remote',
      description: 'Participated in large-scale data collection and user behavior research studies.',
      tags: ['Research', 'Data Collection']
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-white dark:bg-black relative overflow-hidden">
      {/* Subtle Background Blob */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative">
        <div className="mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm">Career</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Experience
          </h2>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group animate-fade-in-up delay-100">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-10 bottom-[-64px] w-px bg-gray-200 dark:bg-gray-800 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900 transition-colors duration-500" />
              )}
              
              <div className="flex gap-8">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 mt-1.5 relative">
                  <div className="w-6 h-6 rounded-full border-4 border-white dark:border-black bg-indigo-100 dark:bg-indigo-900 z-10 relative shadow-sm group-hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 font-mono mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="text-base font-medium text-gray-700 dark:text-gray-300 mb-4">
                    {exp.company}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 max-w-2xl">
                    {exp.description}
                  </p>

                  <div className="flex gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
