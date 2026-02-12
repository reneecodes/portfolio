export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradients - Unified Canvas Style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Ready to Build Products That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Users Love?</span>
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-gray-900 dark:text-gray-100 font-medium mb-6 max-w-2xl mx-auto animate-fade-in-up delay-100">
          I help teams turn complex requirements into intuitive, polished designs.
        </p>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          I&apos;m currently seeking full-time opportunities where I can make an immediate impact. 
          If you value systematic design thinking, clear communication, and a collaborative spirit, 
          I&apos;d love to discuss how I can contribute to your team&apos;s success.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href="mailto:Reneem9797@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
          >
            Send Me a Message ✉️
          </a>
          <a
            href="#resume-google-doc-link-placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 dark:border-gray-800 text-base font-bold rounded-full text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300"
          >
            Download Resume 📄
          </a>
        </div>

        <div className="mt-12 animate-fade-in-up delay-400">
            <p className="text-sm text-gray-500 dark:text-gray-400">
                Prefer LinkedIn? <a href="https://www.linkedin.com/in/renee-martinez-9b63a725b" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline decoration-2 underline-offset-2">Connect with me there</a>.
            </p>
        </div>
      </div>
    </section>
  );
}
