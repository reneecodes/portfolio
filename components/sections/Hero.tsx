import Link from 'next/link';
import { Sparkle, Squiggle, Blob, StarBurst } from '@/components/ui/Stickers';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[100px] rounded-full -z-10 animate-fade-in" />
      
      {/* Decorative Stickers */}
      <div className="absolute top-20 right-[10%] w-12 h-12 text-yellow-400/30 animate-pulse delay-700 hidden md:block">
        <Sparkle className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 left-[5%] w-32 h-32 text-purple-300/10 -z-10 animate-fade-in-up delay-500 hidden md:block">
        <Blob className="w-full h-full" />
      </div>
      <div className="absolute top-40 left-[15%] w-8 h-8 text-indigo-400/20 animate-bounce delay-1000 duration-[3000ms] hidden md:block">
        <StarBurst className="w-full h-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 text-center md:text-left relative">
            <div className="animate-fade-in-up relative">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide uppercase mb-6 border border-indigo-100 dark:border-indigo-800 relative z-10">
                Senior UX Designer
              </span>
              
              {/* Floating Squiggle near Badge */}
              <div className="absolute -top-6 -left-6 w-12 h-6 text-indigo-300/40 -rotate-12 hidden md:block">
                 <Squiggle className="w-full h-full" />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
                Designing for <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  human clarity.
                </span>
              </h1>
            </div>
            
            <p className="animate-fade-in-up delay-100 text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0 font-light">
              Hi, I'm Renee. I specialize in turning complex data into intuitive, 
              <span className="text-gray-900 dark:text-gray-200 font-medium"> invisible </span> 
              digital experiences.
            </p>
            
            <div className="animate-fade-in-up delay-200 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-full text-white bg-gray-900 dark:bg-white dark:text-gray-900 overflow-hidden transition-transform hover:scale-105"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              </Link>
              <a
                href="#resume-google-doc-link-placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-200 dark:border-gray-800 text-base font-medium rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in-up delay-300">
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 z-10" />
              {/* Placeholder Image */}
              <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative">
                <span className="text-8xl filter grayscale hover:grayscale-0 transition-all duration-500">👩🏻‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
