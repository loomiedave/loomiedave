import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import { navigationItems } from './config/navigationItems';
import { NavigationProps } from '@/types/type';
import { SITE_CONFIG } from '@/config/site';

import ProfileImage from './ProfileImage';
import { ThemeToggle } from './ThemeToggle';

const GeometricNavigation = ({
  activeSection,
  onSectionClick,
  alwaysShow = false,
}: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-500 ease-out ${
          alwaysShow || isScrolled
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <ProfileImage src="/spiderman.jpg" alt="BD" />
            <div className="flex items-center space-x-2">
              <span className="font-medium text-foreground">
                {SITE_CONFIG.personal.user_name}
              </span>
            </div>
          </div>

          <ThemeToggle />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        <div
          className={`absolute top-full right-6 w-48 bg-popover/95 backdrop-blur-sm border border-border rounded-lg shadow-lg transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 transform translate-y-2'
              : 'opacity-0 transform translate-y-0 pointer-events-none'
          }`}
        >
          <div className="p-3 space-y-1">
            {navigationItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 flex items-center space-x-3 text-sm ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent hover:text-accent-foreground text-popover-foreground'
                }`}
              >
                <div
                  className={`w-2 h-2 border transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-primary-foreground border-primary-foreground rotate-45'
                      : 'border-muted-foreground'
                  }`}
                />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default GeometricNavigation;
