/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { VideoHighlightSection } from './components/VideoHighlightSection';
import { TheMethodSection } from './components/TheMethodSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractivePlayground } from './components/InteractivePlayground';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { CustomizeDrawer } from './components/CustomizeDrawer';
import { ExportModal } from './components/ExportModal';
import {
  DEFAULT_PROFILE,
  DEFAULT_PROJECTS,
  DEFAULT_EXPERIENCE,
  DEFAULT_SKILL_GROUPS,
  DEFAULT_TESTIMONIALS
} from './data/defaultData';
import { UserProfile, Project } from './types/portfolio';
import { Sparkles, Menu, X, ArrowDown, FileText, Mail, Phone, CheckCircle, Video, Rocket } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved) return saved === 'dark';
    return false; // Default to cozy airy light theme similar to the attached screenshots
  });

  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('portfolio_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name && parsed.name.includes('Adrian')) {
          localStorage.removeItem('portfolio_profile');
          return DEFAULT_PROFILE;
        }
        return { ...DEFAULT_PROFILE, ...parsed };
      }
    } catch (e) {
      console.warn('Failed to parse saved profile:', e);
    }
    return DEFAULT_PROFILE;
  });

  const [projects] = useState<Project[]>(DEFAULT_PROJECTS);
  const [experience] = useState(DEFAULT_EXPERIENCE);
  const [skillGroups] = useState(DEFAULT_SKILL_GROUPS);
  const [testimonials] = useState(DEFAULT_TESTIMONIALS);

  const [activeSection, setActiveSection] = useState('');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Track active section for sidebar highlighting (excluding 'top' so Home stays unhighlighted unless clicked/hovered)
  useEffect(() => {
    const sections = ['highlight', 'method', 'services', 'work', 'simulator', 'experience', 'skills', 'testimonials', 'contact'];
    const handleScroll = () => {
      if (window.scrollY < 300) {
        setActiveSection('');
        return;
      }
      const scrollPos = window.scrollY + 220;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleSaveProfile = (updated: UserProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem('portfolio_profile', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save profile to localStorage:', e);
    }
  };

  const handleResetProfile = () => {
    setProfile(DEFAULT_PROFILE);
    localStorage.removeItem('portfolio_profile');
  };

  return (
    <div id="top" className="min-h-screen bg-[#f5f7fc] dark:bg-[#0c1017] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-600 selection:text-white transition-colors">
      {/* Mobile Top Header */}
      <header className="lg:hidden sticky top-0 z-40 w-full px-5 py-3.5 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
            RM
          </div>
          <div>
            <div className="text-sm font-bold text-zinc-950 dark:text-zinc-50 font-display">
              {profile.name}
            </div>
            <div className="text-[10px] text-zinc-500 font-mono">
              Automation & Systems Specialist
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExportOpen(true)}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-blue-600 text-white rounded-lg shadow-xs"
            title="Export / Go live outside AI Studio"
          >
            <Rocket className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Go Live</span>
          </button>
          <a
            href="#highlight"
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-lg border border-blue-200 dark:border-blue-900"
          >
            <Video className="w-3.5 h-3.5 text-blue-600" />
            <span>Video</span>
          </a>
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Main Two-Column Layout matching image_eb8d8854.png & image_864a9858.png */}
      <div className="max-w-[1520px] mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Left Sticky Sidebar (Desktop & Drawer Mobile) */}
        <div className={`${mobileSidebarOpen ? 'block' : 'hidden lg:block'}`}>
          <Sidebar
            profile={profile}
            activeSection={activeSection}
            darkMode={darkMode}
            onToggleDarkMode={handleToggleDarkMode}
            onOpenResume={() => {
              setMobileSidebarOpen(false);
              setIsResumeOpen(true);
            }}
            onOpenCustomize={() => {
              setMobileSidebarOpen(false);
              setIsCustomizeOpen(true);
            }}
            onOpenExport={() => {
              setMobileSidebarOpen(false);
              setIsExportOpen(true);
            }}
          />
        </div>

        {/* Right Main Content Viewport */}
        <main className="flex-1 px-4 sm:px-8 lg:px-12 py-6 sm:py-10 space-y-12 sm:space-y-16 max-w-6xl">
          {/* Hero Welcome Banner */}
          <section className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold uppercase tracking-wider">
              <span>Technical Operations & Systems Integration</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 font-display leading-[1.15] text-balance">
              Building systems that run without you.
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
              Technical virtual assistant and automation specialist with nearly nine years of remote experience helping agencies and service businesses streamline operations through CRM automation, systems integration and workflow optimization.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#highlight"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-xs"
              >
                <Video className="w-4 h-4" />
                <span>Watch Client Integration Video Walkthrough</span>
              </a>

              <a
                href={profile.cvPdfUrl}
                download="Reginald_Manabat_CV_2026.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl transition-colors"
              >
                <FileText className="w-4 h-4 text-zinc-500" />
                <span>Download CV (PDF)</span>
              </a>
            </div>

            {/* Stats At A Glance strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
              {profile.stats.map((st, i) => (
                <div key={i} className="bg-white/80 dark:bg-zinc-900/80 rounded-2xl p-4 border border-zinc-200/70 dark:border-zinc-800 shadow-2xs">
                  <div className="text-2xl font-black text-zinc-950 dark:text-zinc-50 font-mono tabular-nums">
                    {st.value}
                  </div>
                  <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                    {st.label}
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {st.detail}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* THE HIGHLIGHT OF EVERYTHING: Video Walkthrough Section */}
          <VideoHighlightSection />

          {/* THE METHOD: Capture. Route. Automate. + Services (From image_eb8d8854.png) */}
          <TheMethodSection />

          {/* REAL BUILDS & WORKFLOWS (From image_864a9858.png) */}
          <ProjectsSection projects={projects} />

          {/* INTERACTIVE TRADIE CRM SIMULATOR */}
          <InteractivePlayground />

          {/* PROFESSIONAL CAREER HISTORY */}
          <ExperienceSection
            experience={experience}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* TECHNICAL EXPERTISE MATRIX */}
          <SkillsSection skillGroups={skillGroups} industries={profile.industries} />

          {/* TESTIMONIALS & ENDORSEMENTS */}
          <TestimonialsSection testimonials={testimonials} />

          {/* DIRECT CONTACT & INQUIRY FORM */}
          <ContactSection
            profile={profile}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* Minimal Viewport Bottom Footer */}
          <footer className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div>
              Handcrafted for Regi Manabat · Technical Operations & Automation Specialist
            </div>
            <div className="flex items-center gap-4">
              <a href="#top" className="hover:underline">Back to top ↑</a>
            </div>
          </footer>
        </main>
      </div>

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        experience={experience}
        skillGroups={skillGroups}
      />

      {/* Customize Portfolio Drawer */}
      <CustomizeDrawer
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onResetToDefaults={handleResetProfile}
      />

      {/* Export / Go Live Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}
