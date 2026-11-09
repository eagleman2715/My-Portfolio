import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { UserProfile, ExperienceItem, SkillGroup } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  experience: ExperienceItem[];
  skillGroups: SkillGroup[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  experience,
  skillGroups
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 shrink-0">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <span>Official Curriculum Vitae</span>
            <span aria-hidden="true">·</span>
            <span>{profile.name} (Reginald Manabat)</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.cvPdfUrl}
              download="Reginald_Manabat_CV_2026.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close resume view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Content */}
        <div className="overflow-y-auto px-8 sm:px-12 py-10 space-y-8 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-sans">
          {/* Resume Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 id="resume-title" className="text-3xl font-extrabold tracking-tight font-display">
                  Regi Manabat
                </h1>
                <p className="text-sm font-semibold tracking-wide uppercase text-zinc-600 dark:text-zinc-400 mt-1">
                  [ Technical Operations & Automation Specialist ]
                </p>
              </div>

              <div className="text-right sm:text-right space-y-1 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Philippines · Remote Global</span>
                </div>
              </div>
            </div>

            {/* At A Glance CV Bar */}
            <div className="grid grid-cols-3 gap-4 mt-5 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 text-center sm:text-left">
              <div>
                <div className="text-xl font-bold font-mono text-zinc-950 dark:text-zinc-100">9 Yrs</div>
                <div className="text-xs text-zinc-500">Remote experience</div>
              </div>
              <div>
                <div className="text-xl font-bold font-mono text-zinc-950 dark:text-zinc-100">350+</div>
                <div className="text-xs text-zinc-500">Agency users supported</div>
              </div>
              <div>
                <div className="text-xl font-bold font-mono text-zinc-950 dark:text-zinc-100">8</div>
                <div className="text-xs text-zinc-500">Industries served</div>
              </div>
            </div>
          </div>

          {/* Section 01: Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-display">
              01 // Professional Summary
            </h2>
            <div className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1 font-display">
              Building systems that run without you
            </div>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Technical virtual assistant and automation specialist with nearly nine years of remote experience helping agencies and service businesses streamline operations through CRM automation, systems integration and workflow optimization. Experienced in GoHighLevel, job-management software integrations, technical support, lead generation and business process improvement.
            </p>
          </div>

          {/* Section 02: Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-display">
              02 // Work History & Experience
            </h2>

            {experience.map((item) => (
              <div key={item.id} className="space-y-2 border-b border-zinc-100 dark:border-zinc-800/60 pb-5 last:border-b-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="text-sm font-bold text-zinc-950 dark:text-zinc-50">
                      {item.role}
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 font-medium ml-1.5">
                      — {item.company}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono tabular-nums">
                    {item.period} · {item.location}
                  </span>
                </div>

                {item.careerHighlight && (
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 font-medium flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span><strong>Career Highlight:</strong> {item.careerHighlight}</span>
                  </div>
                )}

                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
                  {item.description}
                </p>

                <ul className="space-y-1.5 pt-1">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                      <span className="text-zinc-400 font-mono">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-1 text-[11px] font-mono text-zinc-500">
                  Technologies: {item.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Section 03: Selected Work Highlight */}
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-display">
              03 // Featured Project: GHL & Job Management Software Integration
            </h2>
            <div className="text-xs font-mono text-zinc-500">
              ServiceM8 · simPRO · ServiceTitan · AroFlo
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                <div className="font-bold text-zinc-900 dark:text-zinc-100">Quote follow-up automation</div>
                <div className="text-zinc-600 dark:text-zinc-400 mt-1">
                  Increased quote acceptance rates by automatically following up on sent quotes, removing the need to chase leads manually.
                </div>
              </div>
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                <div className="font-bold text-zinc-900 dark:text-zinc-100">Invoice reminder automation</div>
                <div className="text-zinc-600 dark:text-zinc-400 mt-1">
                  Eliminated manual invoice follow-ups and reduced payment collection cycles.
                </div>
              </div>
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                <div className="font-bold text-zinc-900 dark:text-zinc-100">Review generation automation</div>
                <div className="text-zinc-600 dark:text-zinc-400 mt-1">
                  Automated review requests while filtering out unhappy customers, so only positive reviews reach public Google review pages.
                </div>
              </div>
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                <div className="font-bold text-zinc-900 dark:text-zinc-100">Customer journey automation</div>
                <div className="text-zinc-600 dark:text-zinc-400 mt-1">
                  Gave tradie business owners a sophisticated, end-to-end system for guiding customers through their journey.
                </div>
              </div>
            </div>
          </div>

          {/* Section 04: Core Expertise */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 font-display">
              04 // Core Technical Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                <div className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">CRM & Automation</div>
                <div className="text-zinc-600 dark:text-zinc-300">
                  GoHighLevel · Zapier · Make (Integromat) · n8n · Pabbly Connect
                </div>
              </div>
              <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                <div className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">Systems Integration</div>
                <div className="text-zinc-600 dark:text-zinc-300">
                  ServiceM8 · ServiceTitan · simPRO · AroFlo · API Troubleshooting & Webhooks
                </div>
              </div>
              <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                <div className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">Lead Generation</div>
                <div className="text-zinc-600 dark:text-zinc-300">
                  LinkedIn Sales Navigator · Email Campaigns · Appointment Setting
                </div>
              </div>
              <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                <div className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">Operations & Support</div>
                <div className="text-zinc-600 dark:text-zinc-300">
                  Technical Recruitment · Bookkeeping · Client Support · Training & SOPs
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 flex justify-between items-center text-xs text-zinc-500">
          <span>Official CV of Regi Manabat (2026)</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white border border-zinc-300 dark:border-zinc-700 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
