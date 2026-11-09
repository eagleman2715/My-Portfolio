import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { UserProfile } from '../types/portfolio';

interface FooterProps {
  profile: UserProfile;
  onOpenResume: () => void;
  onOpenCustomize: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenResume, onOpenCustomize }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-zinc-100 dark:border-zinc-900">
          <div>
            <div className="text-base font-bold text-zinc-950 dark:text-zinc-50 font-display">
              {profile.name}
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {profile.role} · {profile.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
              About
            </a>
            <a href="#work" className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
              Workflows & Samples
            </a>
            <a href="#simulator" className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
              Integration Lab
            </a>
            <a href="#experience" className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
              Expertise
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              Resume
            </button>
            <button
              onClick={onOpenCustomize}
              className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              Customize
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-zinc-500 dark:text-zinc-400">
          <div>
            © {new Date().getFullYear()} {profile.name}. Handcrafted with precision.
          </div>

          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 cursor-pointer ml-2 transition-colors"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
