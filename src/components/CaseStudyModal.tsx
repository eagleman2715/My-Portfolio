import React, { useEffect, useState } from 'react';
import { X, ExternalLink, CheckCircle2, Eye } from 'lucide-react';
import { Project } from '../types/portfolio';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

type TabId = 'overview' | 'architecture' | 'workflows';

const TYPE_STYLES: Record<Project['projectType'], string> = {
  'Client Implementation':
    'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  Demonstration: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20',
};

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset the view whenever a different project is opened.
  useEffect(() => {
    if (project) {
      setActiveImageIndex(0);
      setActiveTab('overview');
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const allImages = [project.image, ...(project.additionalImages || [])];
  const currentImage = allImages[activeImageIndex] || project.image;

  const tabs: { id: TabId; label: string }[] = [
    { id: 'overview', label: 'Problem & Solution' },
    { id: 'architecture', label: 'Architecture & Tools' },
  ];
  if (project.keyWorkflows && project.keyWorkflows.length > 0) {
    tabs.push({ id: 'workflows', label: 'Key Workflows' });
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-900/90 shrink-0">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400 min-w-0">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.clientOrContext}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
              >
                <span>Live Funnel</span>
                <ExternalLink className="w-3.5 h-3.5 animate-arrow-slide" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-7">
          {/* Title */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {project.featured && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-600 text-white">
                  Flagship
                </span>
              )}
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${TYPE_STYLES[project.projectType]}`}
              >
                {project.projectType}
              </span>
            </div>
            <h2
              id="case-study-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 font-display mb-2"
            >
              {project.title}
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              {project.tagline}
            </p>
            {project.myRole && (
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">My role: </span>
                {project.myRole}
              </p>
            )}
          </div>

          {/* If Paired Comparison Exists: Render Aligned Comparison Layout */}
          {project.pairedComparison ? (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 rounded-lg text-xs text-blue-900 dark:text-blue-200 flex items-start gap-2.5">
                <span className="font-bold shrink-0">System Architecture:</span>
                <span>{project.pairedComparison.description}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Photo 1: n8n Automation Engine */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      {project.pairedComparison.titleA}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">Backend Flow</span>
                  </div>
                  <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 p-2 group">
                    <img
                      src={project.pairedComparison.imageA}
                      alt={project.pairedComparison.titleA}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                    Webhook ingress verifies client authorization token, aggregates customer contact IDs, and dynamically compiles service due dates.
                  </p>
                </div>

                {/* Photo 2: Customized Annual Report */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      {project.pairedComparison.titleB}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">Client Dashboard</span>
                  </div>
                  <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 p-2 group">
                    <img
                      src={project.pairedComparison.imageB}
                      alt={project.pairedComparison.titleB}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                    Client-facing compliance report portal showing exact annual due services (smoke alarms, switchboard, safety inspections) by month.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Media Frame & Gallery Selector for Standard Projects */
            <div className="space-y-3">
              <div className="relative w-full aspect-16/10 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 group">
                <img
                  src={currentImage}
                  alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                  className="w-full h-full object-contain bg-zinc-950/90"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-mono bg-black/75 text-zinc-300 backdrop-blur-xs rounded-md border border-zinc-700/60 flex items-center gap-1.5 pointer-events-none">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Screenshot {activeImageIndex + 1} of {allImages.length}</span>
                </div>
              </div>

              {/* Thumbnail switcher if multiple images exist */}
              {allImages.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`Show screenshot ${idx + 1}`}
                      className={`relative w-24 h-16 rounded-md overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-zinc-900 dark:border-zinc-100 shadow-xs'
                          : 'border-zinc-300 dark:border-zinc-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-zinc-100/70 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800/80">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{m.label}</div>
                <div className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 font-mono mt-0.5">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div role="tablist" aria-label="Case study sections" className="border-b border-zinc-200 dark:border-zinc-800 flex gap-2 overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={activeTab === t.id}
                onClick={() => setActiveTab(t.id)}
                className={`pb-2.5 px-3 text-xs font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === t.id
                    ? 'text-zinc-950 dark:text-zinc-50 border-b-2 border-zinc-950 dark:border-zinc-50'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Problem & Solution */}
          {activeTab === 'overview' && (
            <div role="tabpanel" className="space-y-6">
              {project.liveUrl && (
                <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                      Live Funnel Link
                    </div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                      Open the live appointment booking funnel in your browser
                    </div>
                    <div className="text-xs text-zinc-500 font-mono mt-0.5 truncate max-w-md">
                      {project.liveUrl}
                    </div>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors shrink-0"
                  >
                    <span>Launch Live Funnel</span>
                    <ExternalLink className="w-3.5 h-3.5 animate-arrow-slide" />
                  </a>
                </div>
              )}

              <div>
                <h3 className="text-xs font-semibold text-zinc-950 dark:text-zinc-100 uppercase tracking-wider mb-2 font-display">
                  The Business Problem
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-zinc-950 dark:text-zinc-100 uppercase tracking-wider mb-2 font-display">
                  The Solution
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{project.solution}</p>
              </div>

              {project.businessImpact && project.businessImpact.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-zinc-950 dark:text-zinc-100 uppercase tracking-wider mb-2 font-display">
                    Business Impact
                  </h3>
                  <ul className="space-y-2">
                    {project.businessImpact.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-3 font-mono">
                    Qualitative outcomes. Measured results are added only when client data is available.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Architecture & Tools */}
          {activeTab === 'architecture' && (
            <div role="tabpanel" className="space-y-5">
              <h3 className="text-xs font-semibold text-zinc-950 dark:text-zinc-100 uppercase tracking-wider font-display">
                Key Integration Features & Technical Decisions
              </h3>
              <div className="space-y-3">
                {project.architectureHighlights.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                  Tools & Platforms Used
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="font-mono">
                      {tech}
                      {idx < project.techStack.length - 1 && <span className="text-zinc-400 ml-2">/</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Key Workflows */}
          {activeTab === 'workflows' && project.keyWorkflows && (
            <div role="tabpanel" className="space-y-4">
              <h3 className="text-xs font-semibold text-zinc-950 dark:text-zinc-100 uppercase tracking-wider font-display">
                How it runs, step by step
              </h3>
              <ol className="space-y-2">
                {project.keyWorkflows.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="w-5 h-5 shrink-0 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[11px] font-bold font-mono flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-900/90 flex items-center justify-between shrink-0">
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            Press <kbd className="px-1.5 py-0.5 text-[11px] font-mono bg-zinc-200 dark:bg-zinc-800 rounded">ESC</kbd> to close
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};