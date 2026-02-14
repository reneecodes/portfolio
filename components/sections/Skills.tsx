export default function Skills() {
  const skillCategories = [
    {
      title: 'Design',
      skills: ['UI/UX Design', 'Interaction Design', 'Wireframing', 'Prototyping', 'Design Systems', 'User Research'],
    },
    {
      title: 'Tools',
      skills: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision', 'Miro', 'Notion'],
    },
    {
      title: 'Soft Skills',
      skills: ['User Advocacy', 'Problem Solving', 'Communication', 'Empathy', 'Cross-functional Collaboration'],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-16">
           <span className="text-primary dark:text-primary-light font-semibold tracking-wider uppercase text-sm">Expertise</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Skills & Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              className={`bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-primary-light/30 dark:hover:border-primary-light/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up`}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-gray-50 text-gray-700 hover:bg-primary-light/10 hover:text-primary dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-light/10 dark:hover:text-primary-light transition-colors cursor-default border border-gray-100 dark:border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
