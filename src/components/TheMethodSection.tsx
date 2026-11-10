import React from 'react';
import {
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Cpu,
  Workflow,
  BarChart3,
  Bot,
  Wrench,
  Headset
} from 'lucide-react';

export const TheMethodSection: React.FC = () => {
  const services = [
    {
      index: 'A',
      category: 'CRM Automation & Management',
      title: 'GoHighLevel CRM, built and maintained',
      tagline: 'CRM systems that manage your leads, customers and day-to-day follow-up.',
      icon: Workflow,
      points: [
        'GoHighLevel setup and customization',
        'Pipeline and opportunity management',
        'Workflow automation, lead capture and nurturing',
        'SMS and email automation, CRM maintenance'
      ],
      whatsappMsg: 'Hi Regi, I am interested in CRM automation and GoHighLevel setup for my business.'
    },
    {
      index: 'B',
      category: 'AI & Workflow Automation',
      title: 'AI-assisted workflows and automation',
      tagline: 'Automation that handles repetitive tasks and first-line customer enquiries.',
      icon: Bot,
      points: [
        'AI-powered workflow automation',
        'AI chatbots and conversational workflows',
        'Automated lead qualification and AI-assisted support',
        'n8n, Zapier, API and webhook automation'
      ],
      whatsappMsg: 'Hi Regi, I am interested in AI and workflow automation for my business.'
    },
    {
      index: 'C',
      category: 'Business Software Integration',
      title: 'Connect the tools you already use',
      tagline: 'Information moves between platforms without manual data entry.',
      icon: Cpu,
      points: [
        'GoHighLevel integrations',
        'ServiceM8, simPRO, ServiceTitan and AroFlo integrations',
        'Data synchronization',
        'Integration troubleshooting'
      ],
      whatsappMsg: 'Hi Regi, I want to connect my CRM with ServiceM8 / simPRO / ServiceTitan / AroFlo.'
    },
    {
      index: 'D',
      category: 'Field Service Management Automation',
      title: 'Job, quote and customer workflows',
      tagline: 'Customer communication that follows the job, from quote to review.',
      icon: Wrench,
      points: [
        'Job management workflows and job status synchronization',
        'Quote and invoice follow-ups',
        'Customer journey automation',
        'Annual service reminders, review and feedback requests'
      ],
      whatsappMsg: 'Hi Regi, I would like to automate quote follow-ups, invoice reminders and reviews.'
    },
    {
      index: 'E',
      category: 'Reporting & Process Optimization',
      title: 'See what is happening in the business',
      tagline: 'Reports and reviews that show where leads, quotes and invoices stand.',
      icon: BarChart3,
      points: [
        'Automated reporting',
        'Lead and conversion tracking',
        'Quote approval monitoring and outstanding invoice tracking',
        'Workflow performance reviews and process improvement'
      ],
      whatsappMsg: 'Hi Regi, I am looking for automated reporting and process improvement.'
    },
    {
      index: 'F',
      category: 'Technical Virtual Assistance',
      title: 'Hands-on technical support',
      tagline: 'Someone who looks after the CRM and software day to day.',
      icon: Headset,
      points: [
        'CRM administration and support',
        'Technical troubleshooting and software configuration',
        'Customer and job data management',
        'Email, phone and ticket support, ongoing system maintenance'
      ],
      whatsappMsg: 'Hi Regi, I am looking for a technical virtual assistant to look after my CRM and systems.'
    }
  ];

  const steps = [
    {
      n: '1',
      title: 'Capture.',
      body: 'Web forms, chat, calls and ad enquiries are saved in the CRM so no enquiry slips through.',
      chips: ['Web Forms', 'Chat Widgets', 'Facebook Ads', 'Phone Calls']
    },
    {
      n: '2',
      title: 'Route.',
      body: 'n8n webhooks sync contacts, quotes and jobs between the CRM and field service software.',
      chips: ['ServiceM8', 'simPRO', 'ServiceTitan', 'n8n']
    },
    {
      n: '3',
      title: 'Automate.',
      body: 'Quote follow-ups, review requests and annual service reminders run on their own.',
      chips: ['SMS Reminders', 'Google Reviews', 'Rebooking']
    }
  ];

  return (
    <section id="method" className="space-y-10 scroll-mt-6">
      {/* The Tradie Sync Method: Capture. Route. Automate. */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-8">
        <div className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300 mb-2 font-display">
          THE TRADIE SYNC METHOD
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight font-display">
          Capture. Route. Automate. In that order.
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1 mb-8">
          Do the three steps in order and field service operations need far less manual work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-zinc-50 dark:bg-zinc-950/60 rounded-lg p-5 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="w-8 h-8 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-sm mb-3">
                {s.n}
              </div>
              <div className="text-base font-bold text-zinc-950 dark:text-zinc-50 font-display">{s.title}</div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 mb-4 leading-relaxed">{s.body}</p>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-300">
                {s.chips.map((c) => (
                  <span
                    key={c}
                    className="px-2 py-0.5 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700/60"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What I Can Do For Your Business */}
      <div id="services" className="space-y-4 scroll-mt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 font-display">
              CAPABILITIES & SERVICES
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight font-display">
              What I Can Do For Your Business
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1 max-w-2xl">
              From lead capture to job management, I build connected systems that save time, speed up
              follow-up and keep your software working together.
            </p>
          </div>
          <a
            href="https://wa.me/61414998826?text=Hi%20Regi,%20I'd%20like%20to%20discuss%20an%20automation%20project%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.index}
                className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-500 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded bg-blue-50 dark:bg-blue-950/60 text-xs font-bold text-blue-700 dark:text-blue-300 flex items-center justify-center font-mono">
                      {item.index}
                    </span>
                    <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shrink-0 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-zinc-950 dark:text-zinc-50 font-display leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">{item.tagline}</p>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 space-y-3">
                  <div className="space-y-1.5">
                    {item.points.map((p) => (
                      <div key={p} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{p}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/61414998826?text=${encodeURIComponent(item.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-3 py-2 text-xs font-semibold rounded-lg bg-zinc-50 hover:bg-emerald-50 dark:bg-zinc-800/60 dark:hover:bg-emerald-950/40 text-zinc-700 hover:text-emerald-700 dark:text-zinc-300 dark:hover:text-emerald-300 border border-zinc-200/70 hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800 transition-colors cursor-pointer group/cta"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Ask about this on WhatsApp</span>
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