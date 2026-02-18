import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import SkillsTools from '@/components/sections/SkillsTools';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import InquiryForm from '@/components/sections/InquiryForm';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Hero />
        <About />
        <Experience />
        <SkillsTools />
        <Projects />
        <Contact />
        <InquiryForm />
      </main>
    </div>
  );
}
