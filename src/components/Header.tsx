import React, { useState, useEffect } from 'react';
import { Sun, Moon, SlidersHorizontal, Menu, X, FileText, Phone, Mail } from 'lucide-react';
import { UserProfile } from '../types/portfolio';

interface HeaderProps {
  profile: UserProfile;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenCustomize: () => void;
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  darkMode,
  onToggleDarkMode,
  onOpenCustomize,
  onOpenResume,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-zinc-50/92 dark:bg-zinc-950/92 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 py-3.5 shadow-xs'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#top"
          className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors whitespace-nowrap shrink-0 font-display"
        >
          {profile.name}
        </a>

        {/* Zone 2: 4-5 Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a
            href="#about"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            About
          </a>
          <a
            href="#work"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Workflows & Samples
          </a>
          <a
            href="#simulator"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Integration Lab
          </a>
          <a
            href="#experience"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Expertise
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action + Utility controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick theme toggle */}
          <button
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer"
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* CV Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-zinc-50 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-500" />
            <span className="whitespace-nowrap">View CV</span>
          </button>

          {/* Primary CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
          >
            Get in Touch
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/98 dark:bg-zinc-950/98 px-6 py-5 transition-all">
          <nav className="flex flex-col gap-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              About
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              Workflows & Samples
            </a>
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              Integration Lab
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              Expertise
            </a>
            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="text-xs font-medium text-zinc-800 dark:text-zinc-200 py-1.5 px-3 border border-zinc-200 dark:border-zinc-800 rounded-md"
              >
                View CV (PDF)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomize();
                }}
                className="text-xs font-medium text-zinc-800 dark:text-zinc-200 py-1.5 px-3 border border-zinc-200 dark:border-zinc-800 rounded-md flex items-center gap-1.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Customize Profile
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
