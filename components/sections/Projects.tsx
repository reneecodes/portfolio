import Link from 'next/link';
import { Donut, Cross, Sparkle } from '@/components/ui/Stickers';

export default function Projects() {
  const projects = [
    {
      title: 'OddsCharts Redesign',
      description: 'Led the end-to-end redesign of a data-heavy sports betting platform, improving usability and visual hierarchy.',
      tags: ['UI/UX', 'Web App', 'Data Viz'],
      link: 'https://www.behance.net/reneemartinez6',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      icon: '📊'
    },
    {
      title: 'Recipe Page',
      description: 'A clean, accessible recipe page design focusing on clarity and typography.',
      tags: ['UI Design', 'Typography'],
      link: 'https://www.behance.net/reneemartinez6',
      gradient: 'from-green-500/20 to-emerald-500/20',
      icon: '🥗'
    },
    {
      title: 'Coca-Cola App Concept',
      description: 'A responsive application concept for a major beverage brand.',
      tags: ['Mobile App', 'Branding'],
      link: 'https://www.behance.net/reneemartinez6',
      gradient: 'from-red-500/20 to-orange-500/20',
      icon: '📱'
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute top-20 right-10 w-12 h-12 text-pink-300/20 animate-spin-slow hidden md:block">
        <Donut className="w-full h-full" />
      </div>
      <div className="absolute bottom-40 left-10 w-8 h-8 text-indigo-300/20 rotate-45 hidden md:block">
        <Cross className="w-full h-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-16 md:mb-24 relative">
          <div className="absolute -left-10 top-0 w-6 h-6 text-yellow-400/40 animate-pulse hidden md:block">
            <Sparkle className="w-full h-full" />
          </div>
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <Link 
              href={project.link} 
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
              className={`group block rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-indigo-100 dark:hover:border-indigo-900/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 animate-fade-in-up`}
            >
              <div className={`h-64 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-700`}>
                <span className="text-6xl filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500">{project.icon}</span>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-semibold text-sm group-hover:underline decoration-2 underline-offset-4">
                  View Case Study
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a
            href="https://www.behance.net/reneemartinez6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 dark:border-gray-800 text-base font-medium rounded-full text-gray-900 dark:text-white bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900 transition-all hover:scale-105"
          >
            View All Projects on Behance
          </a>
        </div>
      </div>
    </section>
  );
}
