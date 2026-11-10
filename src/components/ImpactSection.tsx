import React from 'react';
import { CheckCircle2 } from 'lucide-react';

// Fill in `value` only with real, verifiable figures. "—" renders as a placeholder.
const metrics = [
  { label: 'Time Saved', value: '—' },
  { label: 'Quote Conversion', value: '—' },
  { label: 'Follow-up Coverage', value: '—' },
  { label: 'Reviews Generated', value: '—' },
  { label: 'Integration Reliability', value: '—' },
];

const impacts = [
  'Reduced manual follow-up work',
  'Better visibility of pending quotes',
  'Better tracking of outstanding invoices',
  'Consistent customer communication',
  'Improved customer retention',
  'More organised job management',
  'Better review collection',
  'Reduced manual data entry',
  'Better connection between business systems',
];

export const ImpactSection: React.FC = () => (
  <section id="impact" className="w-full space-y-6 scroll-mt-6">
    <div>
      <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 font-display">
        Business Impact
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-balance text-zinc-950 dark:text-zinc-50 font-display max-w-3xl">
        Beyond Automation: The Business Impact
      </h2>
    </div>

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {impacts.map((t) => (
        <li
          key={t}
          className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <span>{t}</span>
        </li>
      ))}
    </ul>

    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4"
        >
          <div className="text-2xl font-black font-mono tabular-nums text-zinc-400 dark:text-zinc-600">{m.value}</div>
          <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-1">{m.label}</div>
          {m.value === '—' && <div className="text-[11px] text-zinc-500 mt-0.5">Placeholder · add real data</div>}
        </div>
      ))}
    </div>
  </section>
);