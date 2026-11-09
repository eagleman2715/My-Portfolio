import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, MapPin, Award } from 'lucide-react';
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
    <section id="experience" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              Career History
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 font-display">
              Professional Experience
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
              Nine years of remote technical support, CRM automation engineering, and operational systems administration.
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="self-start md:self-end px-4 py-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Review Curriculum Vitae (PDF)
          </button>
        </div>

        {/* Experience List */}
        <div className="space-y-4">
          {experience.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 transition-all duration-200 overflow-hidden shadow-xs"
              >
                {/* Header row */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full p-6 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                      <span className="font-mono text-zinc-400 dark:text-zinc-500">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span>{item.period}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.location}</span>
                    </div>

                    <div className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-zinc-50 font-display">
                      {item.role}
                      <span className="text-zinc-500 dark:text-zinc-400 font-normal ml-2">
                        @ {item.company}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 hidden sm:inline">
                      {isExpanded ? 'Hide Highlights' : 'View Impact & Stack'}
                    </span>
                    <div className="p-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 space-y-5 animate-in fade-in duration-200">
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                      {item.description}
                    </p>

                    {item.careerHighlight && (
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                        <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">Career Highlight:</span> {item.careerHighlight}
                        </div>
                      </div>
                    )}

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5">
                        Core Responsibilities & Deliverables
                      </div>
                      <ul className="space-y-2">
                        {item.achievements.map((ach, achIdx) => (
                          <li
                            key={achIdx}
                            className="text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2.5"
                          >
                            <span className="text-zinc-400 dark:text-zinc-500 font-mono text-xs mt-1 shrink-0">
                              —
                            </span>
                            <span className="leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies list */}
                    <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                      <span className="font-semibold text-zinc-700 dark:text-zinc-300 font-sans">
                        Stack & Tools:
                      </span>
                      {item.technologies.map((tech, techIdx) => (
                        <span key={techIdx}>
                          {tech}
                          {techIdx < item.technologies.length - 1 && (
                            <span className="text-zinc-400 ml-3">/</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
