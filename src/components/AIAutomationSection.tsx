import React from 'react';
import { Headphones, Phone, Filter, FileSearch } from 'lucide-react';

const demos = [
  {
    icon: Headphones,
    title: 'AI Customer Support Assistant',
    body: 'Answers common customer questions and routes conversations to the right person.',
    example: 'Customer: "Can I change my booking?" → Assistant checks the request type and hands it to scheduling.',
  },
  {
    icon: Phone,
    title: 'AI Voice Receptionist',
    body: 'Takes incoming calls, captures customer details and helps with booking requests.',
    example: 'Call in → details captured → enquiry created in the CRM for the office to confirm.',
  },
  {
    icon: Filter,
    title: 'AI Lead Qualification',
    body: 'Reviews new enquiries, categorises them and starts the right CRM workflow.',
    example: 'Form submitted → urgent repair vs. quote request → different pipeline stage and follow-up.',
  },
  {
    icon: FileSearch,
    title: 'AI Document Processing',
    body: 'Pulls key details out of service reports and invoices to reduce admin work.',
    example: 'Service report uploaded → job, date and result extracted → record updated.',
  },
];

export const AIAutomationSection: React.FC = () => (
  <section id="ai" className="w-full space-y-6 scroll-mt-6">
    <div>
      <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 font-display">
        AI Automation
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-balance text-zinc-950 dark:text-zinc-50 font-display max-w-3xl">
        AI-Powered Business Automation
      </h2>
      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
        Where AI fits into the CRM and workflow systems I already build. The examples below are concepts, not
        finished client projects.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {demos.map((d) => {
        const Icon = d.icon;
        return (
          <div
            key={d.title}
            className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                Concept · Not a client project
              </span>
            </div>
            <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-50 font-display">{d.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">{d.body}</p>
            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 font-mono leading-relaxed">
              <span className="font-sans font-semibold text-zinc-700 dark:text-zinc-300">Illustrative example: </span>
              {d.example}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);