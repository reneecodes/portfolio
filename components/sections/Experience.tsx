export default function Experience() {
  const experiences = [
    {
      company: 'OddsCharts',
      role: 'Lead UI/UX Designer',
      period: 'Jan 2024 - Present',
      location: 'Remote, California',
      description: 'Led the end-to-end redesign of a data-heavy platform for sports bettors. Transformed the product from a mid-fidelity concept to a polished, responsive web application.',
    },
    {
      company: 'Data Annotation',
      role: 'AI Trainer & Content Evaluator',
      period: 'Oct 2023 - Oct 2024',
      location: 'Remote, California',
      description: 'Taught Large Language Models (LLMs) to communicate more naturally and accurately by evaluating the nuance of human intent.',
    },
    {
      company: 'Amazon Mechanical Turk',
      role: 'Research Contributor',
      period: 'June 2022 - Jan 2023',
      location: 'Remote, California',
      description: 'Contributed to various research tasks and data collection initiatives.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Career</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Experience
          </p>
        </div>

        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6 md:ml-10 relative">
              <span className="flex absolute -left-[35px] md:-left-[52px] justify-center items-center w-8 h-8 md:w-10 md:h-10 bg-indigo-100 rounded-full ring-8 ring-white dark:ring-black dark:bg-indigo-900">
                <span className="text-indigo-600 dark:text-indigo-400 text-lg">•</span>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {exp.role} 
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 ml-3">
                  {exp.company}
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {exp.period} | {exp.location}
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
