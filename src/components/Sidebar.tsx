import React from 'react';
import {
  Home,
  Video,
  Layers,
  Workflow,
  Cpu,
  Briefcase,
  Award,
  MessageSquare,
  Mail,
  Phone,
  FileText,
  Sun,
  Moon,
  CheckCircle,
  ExternalLink,
  SlidersHorizontal,
  Download,
  Rocket
} from 'lucide-react';
import { UserProfile } from '../types/portfolio';

interface SidebarProps {
  profile: UserProfile;
  activeSection: string;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenResume: () => void;
  onOpenCustomize: () => void;
  onOpenExport: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  profile,
  activeSection,
  darkMode,
  onToggleDarkMode,
  onOpenResume,
  onOpenCustomize,
  onOpenExport,
}) => {
  const [clickedNavId, setClickedNavId] = React.useState<string | null>(null);

  const navItems = [
    { id: 'top', label: 'Home', icon: Home },
    { id: 'highlight', label: 'Video Walkthrough', icon: Video, isHighlight: true },
    { id: 'method', label: 'The Method', icon: Layers },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'work', label: 'Workflows & Builds', icon: Workflow },
    { id: 'simulator', label: 'Integration Lab', icon: Cpu },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Expertise', icon: Award },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <aside className="w-full lg:w-64 xl:w-72 shrink-0 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between p-6 border-b lg:border-b-0 lg:border-r border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md z-30 transition-colors">
      {/* Top Profile Card */}
      <div>
        <div className="flex items-center gap-3.5 mb-5">
          {/* Cozy Avatar with Verified Badge */}
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white dark:border-zinc-800 shadow-sm bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
              <span className="text-xl font-extrabold text-blue-900 dark:text-blue-200 font-display">
                RM
              </span>
            </div>
            {/* Verified Badge */}
            <div
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs"
              title="Verified Technical Specialist"
            >
              <CheckCircle className="w-3.5 h-3.5 fill-current" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base text-zinc-950 dark:text-zinc-50 font-display">
                {profile.name}
              </span>
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              @regimanabat · 9 Yrs Remote Experience
            </div>
          </div>
        </div>

        {/* Quick Social & Control Row */}
        <div className="flex items-center gap-1.5 pb-5 border-b border-zinc-200/80 dark:border-zinc-800/80">
          <a
            href={`mailto:${profile.email}`}
            className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Email Regi Manabat"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, '')}`}
            className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Phone / WhatsApp"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={profile.cvPdfUrl}
            download="Reginald_Manabat_CV_2026.pdf"
            className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Download CV Document"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer ml-auto"
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Vertical Nav List matching image_eb8d8854.png */}
        <nav className="mt-5 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            // Home is NOT highlighted by default or scroll position; only when explicitly clicked or hovered
            const isHome = item.id === 'top';
            const isActive = isHome
              ? clickedNavId === 'top'
              : (clickedNavId === item.id || activeSection === item.id);

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setClickedNavId(item.id)}
                className={`flex items-center gap-3 px-3.5 py-2 text-xs font-medium rounded-xl transition-all duration-150 ${
                  item.isHighlight
                    ? 'bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-semibold border border-blue-200/80 dark:border-blue-900/50'
                    : isActive
                    ? 'bg-zinc-100 dark:bg-zinc-800/90 text-zinc-950 dark:text-zinc-50 font-semibold shadow-2xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${item.isHighlight ? 'text-blue-600 dark:text-blue-400 animate-pulse' : ''}`} />
                <span>{item.label}</span>
                {item.isHighlight && (
                  <span className="ml-auto px-1.5 py-0.5 text-[9px] font-bold uppercase rounded bg-blue-600 text-white tracking-wider">
                    Video
                  </span>
                )}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile Footer */}
      <div className="pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
        <button
          onClick={onOpenExport}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer shadow-xs"
        >
          <Rocket className="w-3.5 h-3.5" />
          <span>Go Live Outside AI Studio</span>
        </button>

        <button
          onClick={onOpenResume}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl transition-colors cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Curriculum Vitae</span>
        </button>

        <button
          onClick={onOpenCustomize}
          className="w-full flex items-center justify-center gap-2 px-3 py-1.5 text-[11px] text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
        >
          <SlidersHorizontal className="w-3 h-3" />
          <span>Edit Profile Data</span>
        </button>

        <div className="text-[11px] text-zinc-400 dark:text-zinc-600 leading-tight">
          © {new Date().getFullYear()} Regi Manabat.<br />All rights reserved.
        </div>
      </div>
    </aside>
  );
};
