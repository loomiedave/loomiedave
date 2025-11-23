'use client';

import { useState, useEffect } from 'react';

import { useScrollTrigger, scrollToSection } from '@/utils/scroll-utils';
import { SITE_CONFIG } from '@/config/site';

import GeometricNavigation from '@/components/ui/nav/Nav';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ExperienceSection';
import ExperienceSection from '@/components/sections/ProjectSection';
// import ContactSection from '@/components/sections/ContactSection';
import Line from './ui/Line';

export default function Portfolio() {
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
      {/* <LiquidAss /> */}
      <div className="min-h-screen relative pt-12 md:px-4">
        <GeometricNavigation
          activeSection={activeSection}
          onSectionClick={scrollToSection}
          alwaysShow={true}
        />

        <div className="absolute inset-0 pointer-events-none">
          <div className="fixed left-4 md:left-8 z-10 top-0 bottom-0 w-px bg-border"></div>
          <div className="fixed right-4 md:right-8 z-10 top-0 bottom-0 w-px bg-border"></div>
        </div>

        <Line />

        <HeroSection isVisible={visibleSections.has('hero')} />

        <Line />
        <AboutSection isVisible={visibleSections.has('about')} />

        <Line />
        <ProjectsSection isVisible={visibleSections.has('projects')} />

        <Line />

        <ExperienceSection isVisible={visibleSections.has('experience')} />

        <Line />
      </div>
    </>
  );
}
