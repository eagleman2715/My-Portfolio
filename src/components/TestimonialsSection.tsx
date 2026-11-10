import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types/portfolio';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="w-full space-y-8">
      {/* Section Header */}
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 font-display">
          Social Proof
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-balance text-zinc-950 dark:text-zinc-50 font-display max-w-3xl">
          What clients say
        </h2>
      </div>

      {testimonials.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 p-8 text-center">
          <Quote className="w-5 h-5 text-zinc-400 dark:text-zinc-600 mx-auto mb-3" />
          <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Client testimonials are coming soon.</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Placeholder: add real testimonials, with permission, in data/defaultData.ts.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 p-6 flex flex-col justify-between shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <blockquote>
                <Quote className="w-5 h-5 text-zinc-400 dark:text-zinc-600 mb-4" />
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">“{item.content}”</p>
              </blockquote>

              <figcaption className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                <div className="text-sm font-bold text-zinc-950 dark:text-zinc-100 font-display">{item.name}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  {item.role} · {item.company}
                </div>
                {item.outcomeMetric && (
                  <div className="mt-2 text-[11px] font-mono text-zinc-600 dark:text-zinc-300 font-medium">
                    Result: {item.outcomeMetric}
                  </div>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
};