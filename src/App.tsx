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
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { CursorLens } from './components/CursorLens';
import { Reveal } from './components/Reveal';
import {
  DEFAULT_PROFILE,
  DEFAULT_PROJECTS,
  DEFAULT_EXPERIENCE,
  DEFAULT_SKILL_GROUPS
} from './data/defaultData';
import { UserProfile, Project } from './types/portfolio';
import { Sparkles, Menu, X, ArrowDown, FileText, Mail, Phone, CheckCircle, Video, MessageCircle, ExternalLink } from 'lucide-react';

// When the cursor lens loads a hidden copy of this page in the opposite theme, it adds
// ?lens-theme=light|dark. That copy must not save its theme or create another lens.
const LENS_PARAM =
  typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('lens-theme') : null;
const IS_LENS_FRAME = LENS_PARAM === 'dark' || LENS_PARAM === 'light';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (IS_LENS_FRAME) return LENS_PARAM === 'dark';
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

  const [activeSection, setActiveSection] = useState('');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      if (!IS_LENS_FRAME) localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      if (!IS_LENS_FRAME) localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Pause the cursor lens while the resume modal is open, so the copy of the page
  // underneath doesn't show through the popup.
  useEffect(() => {
    const root = document.documentElement;
    if (isResumeOpen) {
      root.setAttribute('data-lens-paused', 'true');
    } else {
      root.removeAttribute('data-lens-paused');
    }
    return () => root.removeAttribute('data-lens-paused');
  }, [isResumeOpen]);

  // Track active section for sidebar highlighting (excluding 'top' so Home stays unhighlighted unless clicked/hovered)
  // Uses getBoundingClientRect so it stays accurate even when sections are wrapped in animated containers.
  useEffect(() => {
    const sections = ['highlight', 'method', 'services', 'work', 'simulator', 'experience', 'skills', 'contact'];
    const handleScroll = () => {
      if (window.scrollY < 300) {
        setActiveSection('');
        return;
      }
      const probeLine = 220; // px from the top of the viewport
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= probeLine && rect.bottom > probeLine) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div id="top" className="min-h-screen bg-[#f5f7fc] dark:bg-[#0c1017] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-600 selection:text-white transition-colors">
      {/* Mobile Top Header */}
      <header className="lg:hidden sticky top-0 z-40 w-full px-5 py-3.5 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shrink-0 bg-white dark:bg-zinc-800">
            <img
              src="/assets/aistudio/image_05d5a87d.png"
              alt="Regi Manabat"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-zinc-950 dark:text-zinc-50 font-display">
              {profile.name}
            </div>
            <div className="text-[10px] text-zinc-500 font-mono">
              @regimanabat · 9 Years Virtual Assistant
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href="https://wa.me/61414998826"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/60"
            title="Chat on WhatsApp (+61 414 998 826)"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href="#highlight"
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-lg border border-blue-200 dark:border-blue-900"
          >
            <Video className="w-3.5 h-3.5 text-blue-600" />
            <span>Video</span>
          </a>
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            aria-label={mobileSidebarOpen ? 'Close menu' : 'Open menu'}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Main Two-Column Layout */}
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
          />
        </div>

        {/* Right Main Content Viewport.
            max-w-6xl was removed: it capped everything at 1152px and left the right side empty.
            The outer container (max-w-[1520px]) already limits ultra-wide screens.
            min-w-0 lets the content shrink properly inside the flex row. */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 space-y-10 sm:space-y-12">
          {/* Hero Welcome Banner */}
          <section className="space-y-4">
            <Reveal variant="down">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold uppercase tracking-wider">
                <span>Technical Operations & Systems Integration · 9 Years Virtual Assistant</span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={80}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 font-display leading-[1.15] text-balance">
                Building systems that run without you.
              </h1>
            </Reveal>

            <Reveal variant="up" delay={160}>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
                Technical virtual assistant and automation specialist with 9 years of experience helping agencies and service businesses streamline operations through CRM automation, systems integration and workflow optimization.
              </p>
            </Reveal>

            {/* Quick action buttons */}
            <Reveal variant="up" delay={240}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#highlight"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-xs"
                >
                  <Video className="w-4 h-4" />
                  <span>Watch Client Integration Video Walkthrough</span>
                </a>

                <a
                  href="https://wa.me/61414998826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 rounded-xl transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>WhatsApp: +61 414 998 826</span>
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
            </Reveal>

            {/* Stats At A Glance strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
              {profile.stats.map((st, i) => (
                <Reveal key={i} variant="scale" delay={300 + i * 90} className="h-full">
                  <div className="h-full bg-white/80 dark:bg-zinc-900/80 rounded-2xl p-4 border border-zinc-200/70 dark:border-zinc-800 shadow-2xs">
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
                </Reveal>
              ))}
            </div>
          </section>

          {/* Video Walkthrough Section */}
          <Reveal variant="up">
            <VideoHighlightSection />
          </Reveal>

          {/* THE METHOD + Services */}
          <Reveal variant="up">
            <TheMethodSection />
          </Reveal>

          {/* REAL BUILDS & WORKFLOWS (animates its own header, tabs and cards) */}
          <ProjectsSection projects={projects} />

          {/* INTERACTIVE TRADIE CRM SIMULATOR */}
          <Reveal variant="up">
            <InteractivePlayground />
          </Reveal>

          {/* PROFESSIONAL CAREER HISTORY */}
          <Reveal variant="up">
            <ExperienceSection
              experience={experience}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          </Reveal>

          {/* TECHNICAL EXPERTISE MATRIX */}
          <Reveal variant="up">
            <SkillsSection skillGroups={skillGroups} industries={profile.industries} />
          </Reveal>

          {/* DIRECT CONTACT & INQUIRY FORM */}
          <Reveal variant="up">
            <ContactSection
              profile={profile}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          </Reveal>

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

      {/* Cursor lens: shows the real opposite theme under the mouse. Keep it last, at the top level. */}
      {!IS_LENS_FRAME && <CursorLens />}
    </div>
  );
}