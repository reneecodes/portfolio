import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients - New Modern Palette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-light/10 dark:bg-primary/5 blur-[100px] rounded-full -z-10 animate-fade-in" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-accent/10 dark:bg-accent/5 blur-[80px] rounded-full -z-10 animate-fade-in delay-300" />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <div className="animate-fade-in-up">
              <span className="inline-block py-1 px-3 rounded-full bg-primary-light/10 text-primary dark:text-primary-light text-sm font-semibold tracking-wide uppercase mb-6 border border-primary-light/20">
                Senior UX Designer
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-warmgray-900 dark:text-warmgray-100 mb-6 leading-[1.1]">
                Designing for <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
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
              <Button href="#projects" variant="primary">
                View My Work
              </Button>
              <Button 
                href="https://drive.google.com/file/d/1ThKcGhDYec3pfmMqsfs20lRvEwXg3yDE/view?usp=drive_link"
                external
                variant="outline"
              >
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in-up delay-300">
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 z-10 mix-blend-overlay pointer-events-none" />
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
