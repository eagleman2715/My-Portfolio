import React, { useState } from 'react';
import { SkillGroup } from '../types/portfolio';

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
  industries?: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillGroups, industries = [] }) => {
  const [selectedGroupIdx, setSelectedGroupIdx] = useState(0);

  return (
    <section id="skills" className="py-10 md:py-14 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/30 dark:bg-zinc-950/30">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
            Core Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 font-display">
            Technical Stack & Operational Expertise
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-3xl">
            Proficiencies across CRM architecture, multi-tiered webhook routing, field service integration, and business operations.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Category Nav Selector */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {skillGroups.map((group, idx) => {
              const isSelected = selectedGroupIdx === idx;
              return (
                <button
                  key={group.category}
                  onClick={() => setSelectedGroupIdx(idx)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 shadow-xs'
                      : 'bg-transparent border-transparent hover:bg-zinc-200/40 dark:hover:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  <div className={`text-sm font-bold font-display ${isSelected ? 'text-zinc-950 dark:text-zinc-50' : ''}`}>
                    {group.category}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-1">
                    {group.description}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Skill Breakdown */}
          <div className="lg:col-span-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 shadow-xs">
            <div className="mb-5 pb-4 border-b border-zinc-100 dark:border-zinc-800">
              <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 font-display">
                {skillGroups[selectedGroupIdx]?.category}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {skillGroups[selectedGroupIdx]?.description}
              </p>
            </div>

            <div className="space-y-4">
              {skillGroups[selectedGroupIdx]?.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 font-sans">
                      {skill.name}
                    </span>
                    <span className="font-mono text-zinc-500 dark:text-zinc-400 tabular-nums">
                      {skill.level}% Proficiency
                    </span>
                  </div>

                  {/* Level bar: subtle hairline track and bar */}
                  <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-zinc-900 dark:bg-zinc-200 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    {skill.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Specialization note */}
            <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                Specialized Verticals:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <span>Plumbing</span>
                <span aria-hidden="true">·</span>
                <span>Electrical</span>
                <span aria-hidden="true">·</span>
                <span>HVAC</span>
                <span aria-hidden="true">·</span>
                <span>Gas & Heating</span>
                <span aria-hidden="true">·</span>
                <span>Stone Fabrication</span>
                <span aria-hidden="true">·</span>
                <span>Mental Wellness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};