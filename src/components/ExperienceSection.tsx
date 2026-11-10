import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award } from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
  onOpenResume: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience, onOpenResume }) => {
  const [expandedId, setExpandedId] = useState<string | null>(experience[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="w-full space-y-8 scroll-mt-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 font-display">
            Career History
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-balance text-zinc-950 dark:text-zinc-50 font-display max-w-3xl">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
            Almost nine years of technical support, CRM automation and business operations, with the last five
            focused on trade and service businesses.
          </p>
        </div>

        <button
          onClick={onOpenResume}
          className="self-start md:self-end px-4 py-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          View Curriculum Vitae
        </button>
      </div>

      {/* Experience List */}
      <ol className="space-y-3">
        {experience.map((item, idx) => {
          const isExpanded = expandedId === item.id;
          const panelId = `exp-panel-${item.id}`;
          return (
            <li
              key={item.id}
              className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 overflow-hidden shadow-xs"
            >
              {/* Header row */}
              <button
                onClick={() => toggleExpand(item.id)}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                className="w-full p-5 sm:p-6 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-mono">{item.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.location}</span>
                    {idx === 0 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-zinc-50 font-display">
                    {item.role}
                    <span className="text-zinc-500 dark:text-zinc-400 font-normal ml-2">@ {item.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 hidden sm:inline">
                    {isExpanded ? 'Hide details' : 'Show details'}
                  </span>
                  <div className="p-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              {/* Expanded Details Body */}
              {isExpanded && (
                <div
                  id={panelId}
                  className="px-5 sm:px-6 pb-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-5 animate-in fade-in duration-200"
                >
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>

                  {item.careerHighlight && (
                    <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Highlight:</span> {item.careerHighlight}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5">
                      Responsibilities
                    </div>
                    <ul className="space-y-2">
                      {item.achievements.map((ach, achIdx) => (
                        <li key={achIdx} className="text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2.5">
                          <span className="text-zinc-400 dark:text-zinc-500 font-mono text-xs mt-1 shrink-0">—</span>
                          <span className="leading-relaxed">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies list */}
                  <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300 font-sans">Tools:</span>
                    {item.technologies.map((tech, techIdx) => (
                      <span key={techIdx}>
                        {tech}
                        {techIdx < item.technologies.length - 1 && <span className="text-zinc-400 ml-3">/</span>}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
};