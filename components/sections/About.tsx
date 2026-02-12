export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Design Philosophy
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-400 leading-relaxed space-y-6">
          <p>
            I&apos;m a UX Designer who specializes in turning &quot;information overload&quot; into intuitive digital experiences. 
            I&apos;m a firm believer that the best designs are the ones that feel like they aren&apos;t even there.
          </p>
          <p>
            My journey involves a deep commitment to understanding user intent and simplifying complex workflows. 
            Whether it&apos;s a data-heavy sports betting platform or training AI models to communicate more naturally, 
            my goal remains the same: to create products that are polished, responsive, and human-centric.
          </p>
        </div>
      </div>
    </section>
  );
}
