export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-indigo-600 dark:bg-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
          Let&apos;s Create Something Amazing
        </h2>
        <p className="text-xl text-indigo-100 mb-10">
          I&apos;m currently available for freelance projects and full-time opportunities.
          <br />
          If you&apos;re looking for a designer who values clarity and user intent, let&apos;s talk.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:Reneem9797@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-indigo-600 bg-white hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
          >
            Say Hello 👋
          </a>
          <a
            href="https://www.linkedin.com/in/renee-martinez-9b63a725b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-200 text-lg font-bold rounded-full text-white hover:bg-indigo-700 transition-all"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
