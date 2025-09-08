'use client';

import { useState, useEffect } from 'react';

import { useScrollTrigger, scrollToSection } from '@/utils/scroll-utils';
import { SITE_CONFIG } from '@/config/site';

import GeometricNavigation from '@/components/ui/nav/GeometricNavigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';

const Line = () => {
  return <div className="absolute left-0 right-0 h-px bg-border"></div>;
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const visibleSections = useScrollTrigger();

  useEffect(() => {
    const handleScroll = () => {
      const sections = SITE_CONFIG.sections;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen relative">
        <GeometricNavigation
          activeSection={activeSection}
          onSectionClick={scrollToSection}
          alwaysShow={true}
        />

        <div className="absolute inset-0 pointer-events-none">
          <div className="fixed left-8 top-0 bottom-0 w-px bg-border"></div>
          <div className="fixed right-8 top-0 bottom-0 w-px bg-border"></div>
        </div>

        <div className="mx-4 md:mx-8 lg:mx-16 my-12">
          <Line />
          <HeroSection isVisible={visibleSections.has('hero')} />

          <Line />
          <AboutSection isVisible={visibleSections.has('about')} />

          <Line />
          <ProjectsSection isVisible={visibleSections.has('projects')} />

          <Line />

          <ExperienceSection isVisible={visibleSections.has('experience')} />

          <Line />

          <ContactSection isVisible={visibleSections.has('contact')} />

          <Line />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
