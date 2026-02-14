export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, accessible, and performant web interfaces.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-coral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: 'React & Next.js', level: 'Proficient', description: 'Building dynamic SPAs and SSG/SSR applications with the latest features.' },
        { name: 'Tailwind CSS', level: 'Expert', description: 'Rapidly styling custom designs with a utility-first approach.' },
        { name: 'TypeScript', level: 'Familiar', description: 'Ensuring type safety and code maintainability in component architecture.' },
        { name: 'HTML5 & CSS3', level: 'Expert', description: 'Semantic markup and modern styling techniques (Flexbox, Grid).' },
        { name: 'Framer Motion', level: 'Proficient', description: 'Creating smooth, declarative animations for enhanced UX.' },
      ],
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive user journeys and beautiful visual systems.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      skills: [
        { name: 'Figma', level: 'Expert', description: 'End-to-end design from wireframes to high-fidelity prototypes.' },
        { name: 'User Research', level: 'Proficient', description: 'Conducting interviews, usability testing, and persona creation.' },
        { name: 'Design Systems', level: 'Proficient', description: 'Creating and maintaining consistent component libraries.' },
        { name: 'Adobe Creative Suite', level: 'Proficient', description: 'Asset creation and manipulation using Photoshop & Illustrator.' },
        { name: 'Accessibility (a11y)', level: 'Proficient', description: 'Ensuring WCAG 2.1 compliance and inclusive design practices.' },
      ],
    },
    {
      title: 'Tools & Workflow',
      description: 'Streamlining development and collaboration processes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-lavender-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      skills: [
        { name: 'Git & GitHub', level: 'Proficient', description: 'Version control, branching strategies, and collaborative code reviews.' },
        { name: 'VS Code', level: 'Expert', description: 'Efficient coding with extensions, debugging, and snippets.' },
        { name: 'Vercel', level: 'Proficient', description: 'Seamless deployment, previews, and performance monitoring.' },
        { name: 'Agile Methodology', level: 'Familiar', description: 'Iterative development, sprints, and cross-functional teamwork.' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-coral-100/40 rounded-full blur-3xl mix-blend-multiply animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-sage-100/40 rounded-full blur-3xl mix-blend-multiply animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
           <span className="inline-block py-1 px-3 rounded-full bg-coral-50 text-coral-600 border border-coral-100 font-semibold tracking-wider uppercase text-xs mb-4 animate-fade-in">
             Expertise
           </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in delay-100">
            Skills & Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in delay-200 leading-relaxed">
            A comprehensive overview of my technical stack and design capabilities, bridging the gap between creative vision and functional reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              className="group bg-white/80 dark:bg-warmgray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-coral-500/5 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="mb-8 pb-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed pl-16">
                  {category.description}
                </p>
              </div>

              {/* Skills List */}
              <div className="flex-grow space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="relative pl-4 border-l-2 border-gray-100 dark:border-gray-700 hover:border-coral-300 dark:hover:border-coral-500 transition-colors duration-300">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        {skill.name}
                      </h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        skill.level === 'Expert' ? 'bg-sage-100 text-sage-700 dark:bg-sage-900/30 dark:text-sage-300' :
                        skill.level === 'Proficient' ? 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300' :
                        'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">
                      {skill.description}
                    </p>
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
