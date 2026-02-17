import Button from '@/components/ui/Button';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradients - Unified Canvas Style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <span className="text-primary dark:text-primary-light font-semibold tracking-wider uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Ready to Build Products That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Users Love?</span>
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
          <Button 
            href="mailto:Reneem9797@gmail.com"
            external
            variant="primary"
          >
            Send Me a Message ✉️
          </Button>
          <Button 
            href="https://drive.google.com/file/d/1ThKcGhDYec3pfmMqsfs20lRvEwXg3yDE/view?usp=drive_link"
            external
            variant="outline"
          >
            Download Resume 📄
          </Button>
        </div>

        <div className="mt-12 animate-fade-in-up delay-400">
            <p className="text-sm text-gray-500 dark:text-gray-400">
                Prefer LinkedIn? <a href="https://www.linkedin.com/in/renee-martinez-9b63a725b" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light font-semibold hover:underline decoration-2 underline-offset-2">Connect with me there</a>.
            </p>
        </div>
      </div>
    </section>
  );
}
