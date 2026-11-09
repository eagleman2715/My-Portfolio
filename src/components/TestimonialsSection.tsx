import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types/portfolio';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
            Endorsements & Social Proof
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 font-display">
            Direct Engineering Feedback
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
            Reflections from engineering leaders and product design executives who worked alongside Adrian on high-stakes systems.
          </p>
        </div>

        {/* 3-Column Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div>
                <Quote className="w-5 h-5 text-zinc-400 dark:text-zinc-600 mb-4" />
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                <div className="text-sm font-bold text-zinc-950 dark:text-zinc-100 font-display">
                  {item.name}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  {item.role} · {item.company}
                </div>
                <div className="mt-2 text-[11px] font-mono text-zinc-600 dark:text-zinc-300 font-medium">
                  Impact: {item.outcomeMetric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
