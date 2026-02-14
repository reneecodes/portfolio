export default function Skills() {
  const skillCategories = [
    {
      id: 'design',
      title: 'Product Design & UX',
      description: 'Creating intuitive and delightful user experiences.',
      icon: '🎨',
      color: 'coral',
      items: [
        { name: 'Figma', level: 'Expert', desc: 'My digital canvas for everything from wireframes to high-fidelity prototypes.', context: 'Used daily for all design work' },
        { name: 'User Research', level: 'Proficient', desc: 'Understanding user needs through interviews, personas, and journey mapping.', context: 'Foundation of my design process' },
        { name: 'Wireframing', level: 'Expert', desc: 'Rapidly visualizing ideas and structural concepts before visual design.', context: 'Low-fidelity layouts' },
        { name: 'Prototyping', level: 'Expert', desc: 'Building interactive flows to test and validate interactions.', context: 'Advanced auto-layout & smart animate' },
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Bringing designs to life with clean, semantic code.',
      icon: '✨',
      color: 'lavender',
      items: [
        { name: 'HTML5 & CSS3', level: 'Proficient', desc: 'Building accessible, semantic, and responsive web structures.', context: 'The building blocks' },
        { name: 'Tailwind CSS', level: 'Intermediate', desc: 'Rapidly styling custom designs with utility-first CSS.', context: 'Used in this portfolio!' },
        { name: 'React', level: 'Learning', desc: 'Understanding component-based architecture and state management.', context: 'Currently exploring hooks & props' },
        { name: 'JavaScript', level: 'Intermediate', desc: 'Adding interactivity and dynamic logic to web pages.', context: 'DOM manipulation & basic logic' },
      ]
    },
    {
      id: 'tools',
      title: 'Workflow & Tools',
      description: 'The ecosystem that powers my productivity.',
      icon: '🚀',
      color: 'sage',
      items: [
        { name: 'VS Code', level: 'Proficient', desc: 'My code editor of choice, customized for efficiency.', context: 'With Prettier & ESLint' },
        { name: 'Git & GitHub', level: 'Intermediate', desc: 'Version control to track changes and collaborate safely.', context: 'Branching & committing' },
        { name: 'Vercel', level: 'Familiar', desc: 'Seamless deployment and hosting for frontend projects.', context: 'Hosting this site' },
        { name: 'Notion', level: 'Expert', desc: 'Organizing documentation, tasks, and life.', context: 'Project management hub' },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert': return 'bg-coral-100 text-coral-700 border-coral-200 dark:bg-coral-900/30 dark:text-coral-300 dark:border-coral-800';
      case 'proficient': return 'bg-lavender-100 text-lavender-700 border-lavender-200 dark:bg-lavender-900/30 dark:text-lavender-300 dark:border-lavender-800';
      case 'intermediate': return 'bg-sage-100 text-sage-700 border-sage-200 dark:bg-sage-900/30 dark:text-sage-300 dark:border-sage-800';
      default: return 'bg-warmgray-100 text-warmgray-700 border-warmgray-200 dark:bg-warmgray-800 dark:text-warmgray-300 dark:border-warmgray-700';
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-coral-300/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-lavender-300/20 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-coral-100 text-coral-700 text-xs font-bold tracking-wider uppercase mb-4 animate-fade-in-up">
            My Toolbox
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in-up delay-100">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-600 to-lavender-600">Superpowers</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in-up delay-200">
            A curated list of the tools and technologies I use to bring creative visions to life. 
            From pixel-perfect designs to clean code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.id} 
              className="flex flex-col gap-6 animate-fade-in-up"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              {/* Category Header */}
              <div className={`p-6 rounded-2xl bg-white/50 dark:bg-warmgray-900/50 backdrop-blur-sm border border-white/50 dark:border-white/5 shadow-sm`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 pl-1">
                  {category.description}
                </p>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-4">
                {category.items.map((skill, skillIdx) => (
                  <div 
                    key={skill.name}
                    className="group relative bg-white/80 dark:bg-warmgray-900/60 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:border-coral-200 dark:hover:border-coral-900 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-coral-600 dark:group-hover:text-coral-400 transition-colors">
                        {skill.name}
                      </h4>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                      {skill.desc}
                    </p>
                    
                    <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2">
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                        Used for:
                      </span>
                      <span className="text-xs text-gray-700 dark:text-gray-300 font-medium bg-gray-50 dark:bg-white/5 px-2 py-0.5 rounded">
                        {skill.context}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
