import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import StatsSection from '@/components/StatsSection';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <StatsSection />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
