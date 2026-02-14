import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients - New Modern Palette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-coral-500/10 dark:bg-coral-500/5 blur-[100px] rounded-full -z-10 animate-fade-in" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-lavender-500/10 dark:bg-lavender-500/5 blur-[80px] rounded-full -z-10 animate-fade-in delay-300" />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <div className="animate-fade-in-up">
              <span className="inline-block py-1 px-3 rounded-full bg-coral-50 dark:bg-coral-900/30 text-coral-600 dark:text-coral-400 text-sm font-semibold tracking-wide uppercase mb-6 border border-coral-100 dark:border-coral-800">
                Senior UX Designer
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-warmgray-900 dark:text-warmgray-100 mb-6 leading-[1.1]">
                Designing for <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-coral-600 to-lavender-600 dark:from-coral-400 dark:to-lavender-400">
                  human clarity.
                </span>
              </h1>
            </div>
            
            <p className="animate-fade-in-up delay-100 text-xl md:text-2xl text-warmgray-600 dark:text-warmgray-400 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0 font-light">
              Hi, I'm Renee. I specialize in turning complex data into intuitive, 
              <span className="text-warmgray-900 dark:text-warmgray-200 font-medium"> invisible </span> 
              digital experiences.
            </p>
            
            <div className="animate-fade-in-up delay-200 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-full text-white bg-warmgray-900 dark:bg-warmgray-100 dark:text-warmgray-900 overflow-hidden transition-transform hover:scale-105"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-coral-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              </Link>
              <a
                href="#resume-google-doc-link-placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-warmgray-200 dark:border-warmgray-800 text-base font-medium rounded-full text-warmgray-600 dark:text-warmgray-300 hover:bg-warmgray-50 dark:hover:bg-warmgray-900 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in-up delay-300">
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
              <div className="absolute inset-0 bg-gradient-to-tr from-coral-500/20 to-lavender-500/20 z-10 mix-blend-overlay pointer-events-none" />
              <Image
                src="/images/Profile-photo.jpg"
                alt="Renee Martinez - Senior UX Designer"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
