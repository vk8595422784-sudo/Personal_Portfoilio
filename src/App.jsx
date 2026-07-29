import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const SECTION_IDS = ['top', 'about', 'skills', 'education', 'projects', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('top');

  // Highlight the current section in the navbar as the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      let current = 'top';
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade-and-rise reveal animation for cards/pills as they enter the viewport
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.info-card, .skill-card, .commit-item, .pill, .avatar-card'
    );
    targets.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
