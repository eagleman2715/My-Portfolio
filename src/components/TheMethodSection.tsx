import React from 'react';
import {
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Cpu,
  Workflow,
  Share2,
  Sparkles,
  TrendingUp,
  LayoutTemplate,
  BarChart3,
  Bot
} from 'lucide-react';

export const TheMethodSection: React.FC = () => {
  const services = [
    {
      index: '01 / 06',
      category: 'CRM SYSTEMS & AUTOMATION',
      title: 'GoHighLevel CRM & Workflow Automation',
      tagline: 'Build and optimise CRM systems that manage your leads, customers, and day-to-day business processes.',
      badge: 'GHL EXPERT',
      icon: Workflow,
      points: [
        'Custom pipelines, workflows, and automation triggers',
        'Automated lead nurturing and customer journeys',
        'CRM setup, custom fields, tags, and opportunity management'
      ],
      whatsappMsg: 'Hi Regi, I am interested in GoHighLevel CRM & Workflow Automation for my business.'
    },
    {
      index: '02 / 06',
      category: 'AI-POWERED AUTOMATION',
      title: 'AI Agents & Intelligent Business Automation',
      tagline: 'Use AI to handle repetitive tasks, improve customer interactions, and streamline business processes.',
      badge: 'SMART AI',
      icon: Bot,
      points: [
        'AI-powered website chat and lead qualification',
        'Automated enquiry handling and customer responses',
        'AI-assisted workflows and business process automation'
      ],
      whatsappMsg: 'Hi Regi, I am interested in AI Agents & Intelligent Business Automation.'
    },
    {
      index: '03 / 06',
      category: 'SYSTEM INTEGRATION',
      title: 'CRM & Third-Party Integrations',
      tagline: 'Connect your business tools so information flows between platforms without unnecessary manual data entry.',
      badge: '2-WAY LIVE SYNC',
      icon: Cpu,
      points: [
        'ServiceM8, simPRO, ServiceTitan, and AroFlo integrations',
        'API, webhook, Zapier, and n8n integrations',
        'Automated data synchronisation and status updates'
      ],
      whatsappMsg: 'Hi Regi, I want to connect my CRM with field software like ServiceM8 / simPRO / ServiceTitan via n8n.'
    },
    {
      index: '04 / 06',
      category: 'SALES & REVENUE AUTOMATION',
      title: 'Lead, Quote & Invoice Follow-ups',
      tagline: 'Build automated follow-up systems that help businesses convert more enquiries, secure more jobs, and collect payments faster.',
      badge: 'REVENUE ACCELERATOR',
      icon: TrendingUp,
      points: [
        'Automated lead response and quote follow-ups',
        'Invoice reminders and overdue payment sequences',
        'Lead reactivation and customer retention campaigns'
      ],
      whatsappMsg: 'Hi Regi, I would like to set up automated Lead, Quote & Invoice Follow-up sequences.'
    },
    {
      index: '05 / 06',
      category: 'FUNNELS & CONVERSION SYSTEMS',
      title: 'Landing Pages, Funnels & Booking Automation',
      tagline: 'Build high-converting pages and automated booking systems that turn interest into booked jobs and paid services.',
      badge: 'BUILT TO CONVERT',
      icon: LayoutTemplate,
      points: [
        'Custom landing pages and appointment booking funnels',
        'Calendar integration, SMS reminders, and schedule management',
        'Pre-qualification forms, payment links, and conversion tracking'
      ],
      whatsappMsg: 'Hi Regi, I need a high-converting landing page and appointment booking funnel.'
    },
    {
      index: '06 / 06',
      category: 'CUSTOMER EXPERIENCE & REPORTING',
      title: 'Reputation Management & Business Intelligence',
      tagline: 'Automate post-job workflows, customer feedback collection, and custom operational reporting.',
      badge: 'REPUTATION & DATA',
      icon: BarChart3,
      points: [
        'Automated review requests & smart review gating (4-5★ to Google)',
        'Customer feedback, post-job surveys & referral loops',
        'Custom reporting dashboards, n8n data aggregation & BI reports'
      ],
      whatsappMsg: 'Hi Regi, I am looking for Reputation Management and Business Intelligence reporting dashboards.'
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

      {/* Capabilities & Services requested by user */}
      <div id="services" className="space-y-4 scroll-mt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 font-display">
              CAPABILITIES & SERVICES
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight font-display">
              Automation that works for your business.
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1 max-w-2xl">
              From lead capture to job management, I build connected systems that help businesses save time, respond faster, and operate more efficiently.
            </p>
          </div>
          <a
            href="https://wa.me/61414998826?text=Hi%20Regi,%20I'd%20like%20to%20discuss%20an%20automation%20project%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span className="font-semibold text-zinc-500 dark:text-zinc-400">{item.index}</span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-[10px] font-sans font-bold text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/40">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                    {item.category}
                  </div>

                  <div className="flex items-start gap-2.5 mb-2">
                    <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shrink-0 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-zinc-950 dark:text-zinc-50 font-display leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 space-y-3">
                  <div className="space-y-1.5">
                    {item.points.map((p, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{p}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/61414998826?text=${encodeURIComponent(item.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-3 py-2 text-xs font-semibold rounded-xl bg-zinc-50 hover:bg-emerald-50 dark:bg-zinc-800/60 dark:hover:bg-emerald-950/40 text-zinc-700 hover:text-emerald-700 dark:text-zinc-300 dark:hover:text-emerald-300 border border-zinc-200/70 hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800 transition-colors cursor-pointer group/cta"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Inquire via WhatsApp</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

