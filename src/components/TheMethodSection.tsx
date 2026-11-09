import React from 'react';
import { Download, RefreshCw, Send, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const TheMethodSection: React.FC = () => {
  const services = [
    {
      index: '01 / 05',
      title: 'Two-Way Systems Integration',
      tagline: 'ServiceM8, simPRO, ServiceTitan & AroFlo connected directly with GoHighLevel.',
      badge: '2-WAY LIVE SYNC',
      points: [
        'Quotes created in GHL sync to job software',
        'Status updates sync back automatically',
        'Zero manual data re-entry for tradies'
      ]
    },
    {
      index: '02 / 05',
      title: 'GoHighLevel Automations',
      tagline: 'Multi-branch customer journeys and lead follow-up that runs on its own 24/7.',
      badge: 'RUNS 24/7',
      points: [
        'Instant SMS & email response < 60s',
        'Leads move through pipeline stages',
        'Eliminates missed inquiry drop-off'
      ]
    },
    {
      index: '03 / 05',
      title: 'Quote & Invoice Follow-ups',
      tagline: 'Automated chasing that dramatically boosts quote acceptance rates.',
      badge: '+34% CONVERSION',
      points: [
        'Automated reminders on sent quotes',
        '1-click digital approval & deposit links',
        'Eliminates awkward Friday manual chasing'
      ]
    },
    {
      index: '04 / 05',
      title: 'Tradie Funnels & Websites',
      tagline: 'Fast, conversion-focused landing pages engineered for plumbers, electricians & HVAC.',
      badge: 'BUILT TO CONVERT',
      points: [
        'High-converting mobile-first layout',
        'Integrated with live calendar booking',
        'Clean VSL & social proof widgets'
      ]
    },
    {
      index: '05 / 05',
      title: 'Review Gating & Reputation',
      tagline: 'Smart sentiment gate ensuring only 4-5★ ratings reach public Google review pages.',
      badge: 'REPUTATION SHIELD',
      points: [
        'Scores 4-5★ guided directly to Google',
        'Scores 0-3★ routed to private owner alert',
        'Builds 4.9+ star public authority'
      ]
    }
  ];

  return (
    <section id="method" className="space-y-10 scroll-mt-6">
      {/* The Tradie Sync Method: Capture. Route. Automate. */}
      <div className="bg-gradient-to-r from-blue-50/90 via-sky-50/60 to-indigo-50/70 dark:from-blue-950/30 dark:via-zinc-900/80 dark:to-indigo-950/30 border border-blue-200/80 dark:border-blue-900/50 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300 mb-2 font-display">
          THE TRADIE SYNC METHOD
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight font-display">
          Capture. Route. Automate. Always in that order.
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1 mb-8">
          Do the three steps in order and field service operations run smoothly on their own.
        </p>

        {/* 3 Step Flow matching image_eb8d8854.png */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {/* Step 01 */}
          <div className="bg-white/95 dark:bg-zinc-900/90 rounded-2xl p-5 border border-blue-200/60 dark:border-zinc-800 shadow-2xs relative">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <span className="text-2xl font-black text-zinc-200 dark:text-zinc-800 font-mono">01</span>
            </div>
            <div className="text-base font-bold text-zinc-950 dark:text-zinc-50 font-display">
              Capture.
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 mb-4 leading-relaxed">
              Every tradie lead, web form, phone call, and ad enquiry gets saved. Zero missed leads.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-300">
              <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700/60">Web Forms</span>
              <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700/60">Chat Widgets</span>
              <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700/60">Facebook Ads</span>
              <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700/60">Phone Calls</span>
            </div>
          </div>

          {/* Step 02 */}
          <div className="bg-white/95 dark:bg-zinc-900/90 rounded-2xl p-5 border border-blue-200/60 dark:border-zinc-800 shadow-2xs relative">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <span className="text-2xl font-black text-zinc-200 dark:text-zinc-800 font-mono">02</span>
            </div>
            <div className="text-base font-bold text-zinc-950 dark:text-zinc-50 font-display">
              Route.
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 mb-4 leading-relaxed">
              Two-way n8n webhook sync maps contacts, creates quotes, and dispatches field work orders.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-300">
              <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700/60">ServiceM8</span>
              <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700/60">simPRO</span>
              <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700/60">ServiceTitan</span>
              <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700/60">n8n Engine</span>
            </div>
          </div>

          {/* Step 03 */}
          <div className="bg-white/95 dark:bg-zinc-900/90 rounded-2xl p-5 border border-blue-200/60 dark:border-zinc-800 shadow-2xs relative">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <span className="text-2xl font-black text-zinc-200 dark:text-zinc-800 font-mono">03</span>
            </div>
            <div className="text-base font-bold text-zinc-950 dark:text-zinc-50 font-display">
              Automate.
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 mb-4 leading-relaxed">
              Quote follow-ups, gated 5-star review requests, and annual re-inspections happen automatically.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-300">
              <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700/60">SMS Reminders</span>
              <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700/60">Google Reviews</span>
              <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700/60">Rebooking</span>
            </div>
          </div>
        </div>
      </div>

      {/* What I can do for you. Pick one or stack a few. (From image_eb8d8854.png) */}
      <div id="services" className="space-y-4 scroll-mt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1 font-display">
              CAPABILITIES & SERVICES
            </div>
            <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight font-display">
              What I can do for you. <span className="text-zinc-500 font-normal text-lg">Pick one or stack a few.</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span>{item.index}</span>
                  <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[10px] font-sans font-bold text-zinc-700 dark:text-zinc-300">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-zinc-950 dark:text-zinc-50 font-display mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {item.tagline}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 space-y-1.5">
                {item.points.map((p, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
