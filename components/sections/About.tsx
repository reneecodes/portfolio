export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="animate-fade-in-up">
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm">About Me</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            I believe the best designs feel like they <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">aren't even there.</span>
          </h2>
        </div>
        
        <div className="mt-12 text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-light space-y-8 animate-fade-in-up delay-100">
          <p>
            I'm a UX Designer who specializes in turning "information overload" into intuitive digital experiences. 
          </p>
          <p>
            My journey involves a deep commitment to understanding user intent and simplifying complex workflows. 
            Whether it's a data-heavy sports betting platform or training AI models to communicate more naturally, 
            my goal remains the same: to create products that are <span className="font-medium text-gray-900 dark:text-white">polished</span>, <span className="font-medium text-gray-900 dark:text-white">responsive</span>, and <span className="font-medium text-gray-900 dark:text-white">human-centric</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
