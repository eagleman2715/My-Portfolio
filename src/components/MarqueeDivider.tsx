import React from 'react';

export const MarqueeDivider: React.FC = () => {
  const items = [
    'GoHighLevel Workflows',
    'ServiceM8 Integration',
    'simPRO Synchronization',
    'n8n Webhook Engines',
    'ServiceTitan & AroFlo',
    'Zapier Multi-Path Logic',
    'Quote Follow-Up Automations',
    'Review Generation & Reputation Filtering',
    'Tradie Operations & Funnels',
    '350+ Agency Users Supported'
  ];

  return (
    <div className="w-full py-4 bg-zinc-100/70 dark:bg-zinc-900/60 border-y border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden select-none">
      <div className="flex w-max animate-marquee space-x-6 text-xs sm:text-sm font-medium tracking-wide uppercase text-zinc-600 dark:text-zinc-400">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 whitespace-nowrap shrink-0">
            <span>{text}</span>
            <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};
