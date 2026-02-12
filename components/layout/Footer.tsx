import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-base text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Renee Martinez. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Designed with <span className="text-red-500">♥</span> and Next.js
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a
            href="mailto:Reneem9797@gmail.com"
            className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/renee-martinez-9b63a725b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net/reneemartinez6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
          >
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}
