import React from 'react';
import { SkillGroup } from '../types/portfolio';

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
  industries?: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillGroups, industries = [] }) => {
  return (
    <section id="skills" className="w-full space-y-8 scroll-mt-6">
      {/* Section Header */}
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 font-display">
          Technical Stack
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-balance text-zinc-950 dark:text-zinc-50 font-display max-w-3xl">
          Tools and skills, grouped by what they are used for.
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
          CRM automation, field service software, integrations, AI and the operations work around them.
        </p>
      </div>

      {/* Grouped skill cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-xs"
          >
            <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-50 font-display">{group.category}</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 mb-4 leading-relaxed">{group.description}</p>

            <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {group.skills.map((skill) => (
                <li key={skill.name} className="py-2.5 first:pt-0 last:pb-0">
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{skill.name}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">{skill.note}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Industries */}
      {industries.length > 0 && (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-600 dark:text-zinc-400">
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">Industries supported:</span>
          {industries.map((industry, idx) => (
            <React.Fragment key={industry}>
              <span>{industry}</span>
              {idx < industries.length - 1 && (
                <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </section>
  );
};