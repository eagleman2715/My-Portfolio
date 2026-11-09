import React, { useState } from 'react';
import { ArrowUpRight, Workflow, ExternalLink, MousePointerClick } from 'lucide-react';
import { Project } from '../types/portfolio';
import { CaseStudyModal } from './CaseStudyModal';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Systems Integration',
    'CRM & Automation',
    'Funnels & Landing Pages',
    'Custom Workflows & Scripts'
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="space-y-6 scroll-mt-6">
      {/* Section Header matching image_864a9858.png */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 font-display">
            PROJECTS & WORKFLOWS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 font-display">
            Real workflows, funnels and GHL builds you can open.
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
            Everything here shipped to production. Open any card to walk through the system architecture at full size.
          </p>
        </div>

        {/* Small instruction badge from image_864a9858.png */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200/80 dark:border-zinc-700/80 self-start md:self-end">
          <MousePointerClick className="w-3.5 h-3.5 text-zinc-500" />
          <span>Click a card to open full-size</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1 p-1 bg-zinc-200/60 dark:bg-zinc-800/60 rounded-xl w-fit">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeFilter === category
                ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-100 shadow-2xs font-semibold'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dynamic Bento Grid Layout matching image_864a9858.png */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project, idx) => {
          const isWide = idx === 0 || idx === 1;
          const hasPair = !!project.pairedComparison;

          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 overflow-hidden cursor-pointer shadow-xs hover:shadow-md ${
                isWide ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              {/* Media Container: Either Paired Dual-Preview or High-Res Snapshot */}
              {hasPair && project.pairedComparison ? (
                <div className="relative w-full aspect-video sm:aspect-16/10 overflow-hidden bg-zinc-950 p-2 sm:p-3">
                  <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-2xl overflow-hidden relative">
                    {/* Image A: n8n Workflow */}
                    <div className="relative h-full bg-zinc-900 border border-zinc-800/90 rounded-xl overflow-hidden group/sub flex items-center justify-center p-2">
                      <img
                        src={project.pairedComparison.imageA}
                        alt={project.pairedComparison.titleA}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-102"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-mono font-bold bg-zinc-950/85 text-blue-300 rounded-md border border-blue-900/60 backdrop-blur-xs">
                        1. n8n Automation Engine
                      </div>
                    </div>

                    {/* Image B: Customized Annual Report */}
                    <div className="relative h-full bg-zinc-900 border border-zinc-800/90 rounded-xl overflow-hidden group/sub flex items-center justify-center p-2">
                      <img
                        src={project.pairedComparison.imageB}
                        alt={project.pairedComparison.titleB}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-102"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-mono font-bold bg-zinc-950/85 text-emerald-300 rounded-md border border-emerald-900/60 backdrop-blur-xs">
                        2. Annual Due Services Portal
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white tracking-wide">
                        Inspect Paired Automation & Report at Full Size <ArrowUpRight className="w-3.5 h-3.5 animate-arrow-slide" />
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full aspect-video sm:aspect-16/10 overflow-hidden bg-zinc-950 p-2 sm:p-3">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain bg-zinc-950 transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white tracking-wide">
                        Inspect Workflow Nodes & Full Blueprint <ArrowUpRight className="w-3.5 h-3.5 animate-arrow-slide" />
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Card Content Area */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.clientOrContext}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                    {project.liveUrl && (
                      <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Live Funnel Available
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-display mb-1.5">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                <div>
                  {/* Primary metric indicator & action bar */}
                  <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <span key={mIdx} className="text-zinc-600 dark:text-zinc-400">
                          <span className="font-bold text-zinc-900 dark:text-zinc-200 font-mono tabular-nums">
                            {m.value}
                          </span>{' '}
                          {m.label}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 hover:underline px-2 py-1 rounded bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/80"
                        >
                          Visit Live <ExternalLink className="w-3 h-3 animate-arrow-slide" />
                        </a>
                      )}
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 transition-colors">
                        Inspect <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform animate-arrow-slide" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full-screen Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
