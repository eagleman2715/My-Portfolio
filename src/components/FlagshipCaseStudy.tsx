import React, { useState } from 'react';
import {
  ArrowRight,
  Database,
  Workflow,
  Users,
  Zap,
  FileText,
  Star,
  RefreshCw,
  RefreshCcw,
  ImageOff,
  CheckCircle2,
} from 'lucide-react';

// ---- Edit these as needed -------------------------------------------------
// Replace with your exact scope before publishing, e.g. "Built the n8n layer and GHL workflows".
const MY_SCOPE = '[Add: your exact role on this project]';

// Real screenshots already used in the ghl-servicem8-sync project. Check each caption matches the image.
const SCREENSHOTS = [
  { src: '/assets/aistudio/GHL_to_ServiceM8_-_n8n_integration_04786b84.png', alt: 'n8n workflow from GoHighLevel to ServiceM8', caption: 'n8n workflow: GoHighLevel → ServiceM8' },
  { src: '/assets/aistudio/ServiceM8_to_GHL_-_n8n_Integration_f402b862.png', alt: 'n8n workflow from ServiceM8 to GoHighLevel', caption: 'n8n workflow: ServiceM8 → GoHighLevel' },
  { src: '/assets/aistudio/ServiceM8_fd868cea.jpeg', alt: 'ServiceM8 screenshot', caption: 'ServiceM8' },
];

const PLACEHOLDER_SHOTS = [{ label: 'GoHighLevel pipeline view', hint: 'Add a GHL pipeline screenshot' }];
// ---------------------------------------------------------------------------

const architecture = [
  { icon: Database, title: 'ServiceM8', body: 'Jobs, quotes, clients and job status', tone: 'blue' },
  { icon: Workflow, title: 'n8n Integration Layer', body: 'Webhooks, data mapping and sync rules', tone: 'blue' },
  { icon: Users, title: 'GoHighLevel / Service Core', body: 'Contacts, pipelines, SMS and email', tone: 'blue' },
  { icon: Zap, title: 'Automated Workflows', body: 'Follow-ups, reviews and reminders', tone: 'emerald' },
];

const workflows = [
  {
    id: 'quotes',
    label: 'Quote Follow-ups',
    icon: FileText,
    summary: 'Quote status in ServiceM8 drives what the customer receives in GoHighLevel.',
    steps: [
      'Quote sent in ServiceM8 → opportunity created or moved in the GHL pipeline',
      'Quote still pending → SMS and email follow-ups go out',
      'Quote accepted → pipeline updates and follow-ups stop',
      'Quote declined → customer moves to a separate stage for later reactivation',
    ],
  },
  {
    id: 'status',
    label: 'Job Status Updates',
    icon: RefreshCw,
    summary: 'Job and customer data stay aligned between both systems.',
    steps: [
      'Job status changes in ServiceM8 → n8n receives the update',
      'n8n maps the job and customer fields to the matching GHL contact',
      'GHL pipeline stage and tags update to match',
      'Customer communication triggers off the new status',
    ],
  },
  {
    id: 'reviews',
    label: 'Review Requests',
    icon: Star,
    summary: 'Completed jobs trigger feedback collection, with different paths by rating.',
    steps: [
      'Job completed → feedback request sent by SMS or email',
      'Rating 4–5 → customer is asked to leave a Google review',
      'Rating 1–3 → internal notification so the team can follow up privately',
    ],
  },
  {
    id: 'retention',
    label: 'Customer Retention',
    icon: RefreshCcw,
    summary: 'Past customers are brought back through scheduled outreach.',
    steps: [
      'Completed job data is held against the customer in GHL',
      'Service-due dates trigger reminder campaigns',
      'Customers who respond are routed back into the booking flow',
    ],
  },
];

export const FlagshipCaseStudy: React.FC = () => {
  const [active, setActive] = useState(workflows[0].id);
  const current = workflows.find((w) => w.id === active) ?? workflows[0];

  return (
    <section id="flagship" className="w-full space-y-8 scroll-mt-6">
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-display">
            Flagship Project
          </span>
          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            Client Implementation
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-balance text-zinc-950 dark:text-zinc-50 font-display max-w-3xl">
          End-to-End Field Service Management & CRM Integration
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3 max-w-3xl leading-relaxed">
          A business integration connecting ServiceM8 with GoHighLevel / Service Core to automate customer
          journeys, job status updates, quote follow-ups and post-job communication.
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 font-mono">My scope: {MY_SCOPE}</p>
      </div>

      {/* Architecture */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 sm:p-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
          Integration architecture
        </div>
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-3 lg:gap-2">
          {architecture.map((node, i) => {
            const Icon = node.icon;
            const green = node.tone === 'emerald';
            return (
              <React.Fragment key={node.title}>
                <div
                  className={`flex-1 rounded-lg border p-4 ${
                    green
                      ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-950/30'
                      : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 mb-2 ${
                      green ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'
                    }`}
                  />
                  <div className="text-sm font-bold text-zinc-950 dark:text-zinc-50 font-display">{node.title}</div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-snug">{node.body}</div>
                </div>
                {i < architecture.length - 1 && (
                  <div className="flex items-center justify-center text-zinc-400 dark:text-zinc-600" aria-hidden="true">
                    <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Workflow examples */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
        <div role="tablist" aria-label="Workflow examples" className="flex overflow-x-auto border-b border-zinc-200 dark:border-zinc-800">
          {workflows.map((w) => {
            const Icon = w.icon;
            const on = w.id === active;
            return (
              <button
                key={w.id}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(w.id)}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-semibold whitespace-nowrap cursor-pointer border-b-2 transition-colors ${
                  on
                    ? 'border-blue-600 text-zinc-950 dark:text-zinc-50'
                    : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {w.label}
              </button>
            );
          })}
        </div>
        <div role="tabpanel" className="p-5 sm:p-6 space-y-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-300">{current.summary}</p>
          <ol className="space-y-2">
            {current.steps.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="w-5 h-5 shrink-0 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[11px] font-bold font-mono flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{s}</span>
              </li>
            ))}
          </ol>
          <p className="text-[11px] text-amber-700 dark:text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-md px-3 py-2">
            Draft: these steps follow the standard pattern for this integration. Replace with your exact client
            logic (timings, conditions, message rules) before publishing.
          </p>
        </div>
      </div>

      {/* Screenshots */}
      <div className="space-y-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Screenshots
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SCREENSHOTS.map((s) => (
            <figure key={s.src} className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950">
              <img src={s.src} alt={s.alt} loading="lazy" className="w-full h-40 object-cover object-left-top" />
              <figcaption className="px-3 py-2 text-[11px] text-zinc-400 font-mono border-t border-zinc-800">
                {s.caption}
              </figcaption>
            </figure>
          ))}
          {PLACEHOLDER_SHOTS.map((p) => (
            <div
              key={p.label}
              className="rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col items-center justify-center text-center p-4 h-40 md:h-auto bg-zinc-50 dark:bg-zinc-900/50"
            >
              <ImageOff className="w-5 h-5 text-zinc-400 mb-2" />
              <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{p.label}</div>
              <div className="text-[11px] text-zinc-500 mt-1">Placeholder · {p.hint}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 sm:p-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
          What this gives the business
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            'Less manual follow-up on quotes',
            'Pending quotes visible in one pipeline',
            'Consistent customer communication after each job',
            'Less double entry between ServiceM8 and the CRM',
            'A repeatable process for collecting Google reviews',
            'Past customers brought back for repeat work',
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[11px] text-zinc-500 mt-4 font-mono">
          Measured results: [Add real figures from the client if you have permission to share them]
        </p>
      </div>

      <div className="flex flex-wrap gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400 font-mono">
        {['ServiceM8', 'n8n', 'GoHighLevel', 'Service Core', 'Webhooks', 'REST API'].map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </section>
  );
};