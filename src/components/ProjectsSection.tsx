import React, { useMemo, useState } from 'react';
import { ArrowUpRight, ExternalLink, MousePointerClick } from 'lucide-react';
import { Project } from '../types/portfolio';
import { CaseStudyModal } from './CaseStudyModal';
import { Reveal } from './Reveal';

interface ProjectsSectionProps {
  projects: Project[];
}

/**
 * Layout uses a 6-column grid on large screens so every row fills edge to edge:
 *  - span 6: featured card (paired comparisons), full width, image left / text right
 *  - span 2: standard card, three per row
 *  - span 3: used when two cards are left over at the end of a run
 *  - span 6: used when one card is left over (so no empty slot is ever left on the right)
 */
type Span = 2 | 3 | 6;

const LG_SPAN: Record<Span, string> = {
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  6: 'lg:col-span-6',
};

const MD_SPAN: Record<Span, string> = {
  2: 'md:col-span-1',
  3: 'md:col-span-1',
  6: 'md:col-span-2',
};

const getSpans = (items: Project[]): Span[] => {
  const spans: Span[] = new Array(items.length).fill(2);
  let run: number[] = [];

  const flush = () => {
    const remainder = run.length % 3;
    const full = run.length - remainder;
    run.forEach((itemIdx, i) => {
      if (i < full) spans[itemIdx] = 2;
      else spans[itemIdx] = remainder === 1 ? 6 : 3;
    });
    run = [];
  };

  items.forEach((p, i) => {
    if (p.pairedComparison) {
      flush();
      spans[i] = 6;
    } else {
      run.push(i);
    }
  });
  flush();

  return spans;
};

const categories = [
  'All',
  'Systems Integration',
  'CRM & Automation',
  'Funnels & Landing Pages',
  'Custom Workflows & Scripts',
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)),
    [projects, activeFilter]
  );

  const spans = useMemo(() => getSpans(filteredProjects), [filteredProjects]);

  return (
    <section id="work" className="w-full space-y-8 scroll-mt-6">
      {/* Section Header */}
      <Reveal variant="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 font-display">
              PROJECTS & WORKFLOWS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-balance text-zinc-950 dark:text-zinc-50 font-display max-w-3xl">
              Real workflows, funnels and GHL builds you can open.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
              Everything here shipped to production. Open any card to walk through the system architecture at full size.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200/80 dark:border-zinc-700/80 self-start md:self-end whitespace-nowrap">
            <MousePointerClick className="w-3.5 h-3.5 text-zinc-500" />
            <span>Click a card to open full-size</span>
          </div>
        </div>
      </Reveal>

      {/* Filter Tabs */}
      <Reveal variant="up" delay={100}>
        <div className="max-w-full overflow-x-auto">
          <div className="flex items-center gap-1 p-1 bg-zinc-200/60 dark:bg-zinc-800/60 rounded-xl w-fit">
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
        </div>
      </Reveal>

      {/* Card grid: fills the full width, no empty slots */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-6">
        {filteredProjects.map((project, idx) => {
          const span = spans[idx];
          const wide = span === 6;
          const paired = !!project.pairedComparison;

          return (
            <Reveal
              key={project.id}
              variant="up"
              delay={(idx % 3) * 90}
              className={`${MD_SPAN[span]} ${LG_SPAN[span]}`}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.target !== e.currentTarget) return;
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className={`group relative flex h-full flex-col ${
                  wide ? 'lg:flex-row' : ''
                } bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 hover:border-blue-400 dark:hover:border-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-all duration-300 overflow-hidden cursor-pointer shadow-xs hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1`}
              >
                {/* Media */}
                <div
                  className={`relative shrink-0 overflow-hidden bg-zinc-950 aspect-video ${
                    wide ? 'lg:aspect-auto lg:w-[60%] lg:min-h-[26rem]' : 'sm:aspect-16/10'
                  }`}
                >
                  <div className="absolute inset-0 p-2 sm:p-3">
                    {paired && project.pairedComparison ? (
                      <div className="w-full h-full grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="relative h-full bg-zinc-900 border border-zinc-800/90 rounded-xl overflow-hidden flex items-center justify-center p-1.5 sm:p-2">
                          <img
                            src={project.pairedComparison.imageA}
                            alt={project.pairedComparison.titleA}
                            loading="lazy"
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          <div className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-mono font-bold bg-zinc-950/85 text-blue-300 rounded-md border border-blue-900/60 backdrop-blur-xs">
                            1. n8n Automation Engine
                          </div>
                        </div>

                        <div className="relative h-full bg-zinc-900 border border-zinc-800/90 rounded-xl overflow-hidden flex items-center justify-center p-1.5 sm:p-2">
                          <img
                            src={project.pairedComparison.imageB}
                            alt={project.pairedComparison.titleB}
                            loading="lazy"
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          <div className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-mono font-bold bg-zinc-950/85 text-emerald-300 rounded-md border border-emerald-900/60 backdrop-blur-xs">
                            2. Annual Due Services Portal
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full rounded-2xl overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-contain bg-zinc-950 transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-5 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white tracking-wide">
                        {paired
                          ? 'Inspect Paired Automation & Report at Full Size'
                          : 'Inspect Workflow Nodes & Full Blueprint'}
                        <ArrowUpRight className="w-3.5 h-3.5 animate-arrow-slide" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`p-5 sm:p-6 flex flex-col flex-1 justify-between gap-5 ${
                    wide ? 'lg:w-[40%] lg:p-8 lg:justify-center lg:gap-6' : ''
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.clientOrContext}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    {project.liveUrl && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 mb-3 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Live Funnel Available
                      </span>
                    )}

                    <h3
                      className={`font-bold tracking-tight text-zinc-950 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-display mb-2 ${
                        wide ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl'
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed ${
                        wide ? 'lg:text-base' : 'line-clamp-2'
                      }`}
                    >
                      {project.tagline}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Metric pills */}
                    {project.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.metrics.slice(0, wide ? 3 : 2).map((m, mIdx) => (
                          <span
                            key={mIdx}
                            className="inline-flex items-baseline gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-xs text-zinc-600 dark:text-zinc-400"
                          >
                            <span className="font-bold text-zinc-900 dark:text-zinc-100 font-mono tabular-nums">
                              {m.value}
                            </span>
                            {m.label}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <span className="font-semibold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1">
                        Inspect
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform animate-arrow-slide" />
                      </span>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 hover:underline px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/80"
                        >
                          Visit Live <ExternalLink className="w-3 h-3 animate-arrow-slide" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Full-screen Case Study Modal */}
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};