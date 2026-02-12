import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m Renee Martinez <span className="text-indigo-600 wave-emoji inline-block">👋</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              UX Designer specializing in intuitive digital experiences.
              <br className="hidden md:block" />
              I turn <span className="text-indigo-600 font-semibold">information overload</span> into clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </Link>
              <a
                href="#resume-google-doc-link-placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-200 dark:border-gray-700 text-base font-medium rounded-full text-gray-700 dark:text-gray-200 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 md:py-4 md:text-lg transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              {/* Placeholder Image */}
              <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 flex items-center justify-center">
                <span className="text-6xl">👩🏻‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
