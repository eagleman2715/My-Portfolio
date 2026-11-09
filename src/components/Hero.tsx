import React, { useState } from 'react';
import { ArrowDown, Copy, Check, FileText, Mail, Phone, ExternalLink, Workflow, MessageCircle } from 'lucide-react';
import { UserProfile } from '../types/portfolio';

interface HeroProps {
  profile: UserProfile;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <section id="about" className="pt-6 pb-16 md:pt-10 md:pb-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed kicker metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-4">
              <span>Technical Virtual Assistant & Automation Specialist</span>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
              <span className="text-zinc-800 dark:text-zinc-200">9 Years Virtual Assistant</span>
            </div>

            {/* Display Headline - verbatim from CV */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.12] mb-6 font-display text-balance">
              Building systems that run without you.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mb-6 font-normal">
              {profile.leadParagraph}
            </p>

            {/* Industries Served Ribbon - Clean unboxed text with separators */}
            <div className="mb-8 p-3.5 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 text-xs">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200 mr-2">
                Specialized Trade & Service Verticals:
              </span>
              <span className="text-zinc-600 dark:text-zinc-400">
                {profile.industries.join(' · ')}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-lg transition-colors shadow-xs cursor-pointer"
              >
                <span>View Integration Samples</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="https://wa.me/61414998826"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={profile.cvPdfUrl}
                download="Reginald_Manabat_CV_2026.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 rounded-lg transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-zinc-500" />
                <span>Download CV (PDF)</span>
              </a>
            </div>

            {/* Quick Contact & Direct Access Row */}
            <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center gap-6 text-xs text-zinc-600 dark:text-zinc-400">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors cursor-pointer py-1"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>{profile.email}</span>
                {copiedEmail ? (
                  <span className="inline-flex items-center gap-1 text-[11px] text-zinc-900 dark:text-zinc-100 font-sans ml-1 font-semibold">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3 h-3 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200" />
                )}
              </button>

              <a
                href="https://wa.me/61414998826"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-700 dark:text-emerald-400 hover:underline transition-colors cursor-pointer py-1"
                title="Chat directly on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>WhatsApp: +61 414 998 826</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors cursor-pointer py-1"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <span>+61 414 998 826</span>
                {copiedPhone ? (
                  <span className="inline-flex items-center gap-1 text-[11px] text-zinc-900 dark:text-zinc-100 font-sans ml-1 font-semibold">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3 h-3 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Visual of Real n8n & ServiceM8 Workflow Architecture */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900 group shadow-sm flex flex-col justify-between">
              {/* Actual integration screenshot from user assets */}
              <div className="relative flex-1 overflow-hidden">
                <img
                  src="/assets/aistudio/GHL_to_ServiceM8_-_n8n_integration_04786b84.png"
                  alt="GoHighLevel to ServiceM8 n8n workflow integration by Regi Manabat"
                  className="w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
              </div>

              {/* Bottom Card Overlay with Exact Project Highlight */}
              <div className="p-5 text-white bg-zinc-950/90 border-t border-zinc-800 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
                    <Workflow className="w-3.5 h-3.5 text-zinc-300" />
                    <span>n8n Multi-Way Automation</span>
                  </div>
                  <p className="text-sm font-semibold tracking-tight">GHL ↔ ServiceM8 Work Order Sync</p>
                  <p className="text-xs text-zinc-400">Quote triggers, contact deduplication & field dispatch</p>
                </div>
                <div className="text-right text-[11px] text-zinc-400 font-mono">
                  Production Built
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Quantitative Proof Strip Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {profile.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 font-mono tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
