import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'OddsCharts Redesign',
      description: 'Led the end-to-end redesign of a data-heavy sports betting platform, improving usability and visual hierarchy.',
      tags: ['UI/UX', 'Web App', 'Data Viz'],
      link: 'https://www.behance.net/reneemartinez6',
      color: 'bg-blue-500', // Placeholder for card gradient/color
    },
    {
      title: 'Recipe Page',
      description: 'A clean, accessible recipe page design focusing on clarity and typography.',
      tags: ['UI Design', 'Typography'],
      link: 'https://www.behance.net/reneemartinez6',
      color: 'bg-green-500',
    },
    {
      title: 'Coca-Cola App Concept',
      description: 'A responsive application concept for a major beverage brand.',
      tags: ['Mobile App', 'Branding'],
      link: 'https://www.behance.net/reneemartinez6',
      color: 'bg-red-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Selected Work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link 
              href={project.link} 
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`h-48 ${project.color} bg-opacity-10 dark:bg-opacity-20 w-full object-cover flex items-center justify-center`}>
                <span className="text-4xl opacity-50">✨</span>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                  View Case Study
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://www.behance.net/reneemartinez6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            View All Projects on Behance
          </a>
        </div>
      </div>
    </section>
  );
}
