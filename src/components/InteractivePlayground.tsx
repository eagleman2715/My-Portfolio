import React, { useState, useMemo } from 'react';
import { Workflow, RefreshCw, Send, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Database, Zap } from 'lucide-react';

export const InteractivePlayground: React.FC = () => {
  const [triggerEvent, setTriggerEvent] = useState<'quote-sent' | 'job-completed' | 'form-submitted' | 'emergency-call'>('quote-sent');
  const [platform, setPlatform] = useState<'n8n' | 'ghl' | 'zapier'>('n8n');
  const [jobSoftware, setJobSoftware] = useState<'servicem8' | 'simpro' | 'servicetitan' | 'aroflo'>('servicem8');
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState(3);

  // Compute realistic simulation scenarios based on selected parameters
  const scenario = useMemo(() => {
    let title = '';
    let triggerText = '';
    let conditionText = '';
    let actionText = '';
    let sampleSms = '';
    let timeSaved = '15 hrs / wk';
    let conversionImpact = '+34% Quote Acceptance';

    if (triggerEvent === 'quote-sent') {
      title = 'Automated Quote Follow-Up & Deposit Link';
      triggerText = `${jobSoftware.toUpperCase()} Quote Sent ($2,450) webhook received`;
      conditionText = 'No client acceptance response after 48 hours';
      actionText = 'Dispatches personalized 2-touch SMS + Email sequence with 1-click accept link';
      sampleSms = `"Hi David, following up on quote #1042 for your Hot Water replacement from Service Core. Click here to review & approve: s-core.io/q1042"`;
      timeSaved = '18 hrs / wk';
      conversionImpact = '+38% Quote Acceptance';
    } else if (triggerEvent === 'job-completed') {
      title = 'Gated Review Generation & Satisfaction Filter';
      triggerText = `${jobSoftware.toUpperCase()} status updated to 'Job Completed'`;
      conditionText = 'Automated 1-10 survey: Score >= 8 triggers Google Review; Score < 8 alerts Owner internally';
      actionText = 'Only happy clients reach Google Reviews; unhappy tradie clients routed to instant internal SMS alert';
      sampleSms = `"Thanks for choosing Service Core today! How was our technician John? Rate us 1-10 to let us know."`;
      timeSaved = '12 hrs / wk';
      conversionImpact = '4.9★ Public Reputation';
    } else if (triggerEvent === 'form-submitted') {
      title = 'Instant Lead Ingestion & Work Order Creation';
      triggerText = 'Website GHL landing form submitted: Plumbing Enquiry';
      conditionText = 'Deduplicate against existing CRM contact record & verify service address';
      actionText = `Creates Quote in ${jobSoftware.toUpperCase()}, notifies technician on mobile, and sends instant confirmation SMS`;
      sampleSms = `"Hi Sarah, we received your plumbing enquiry. Technician Mark has been assigned and will arrive tomorrow at 9:00 AM."`;
      timeSaved = '22 hrs / wk';
      conversionImpact = '100% Leads Answered in < 60s';
    } else {
      title = 'After-Hours Emergency Routing & Dispatch';
      triggerText = 'Inbound emergency call after 6:00 PM';
      conditionText = 'Check on-call technician schedule in Google Calendar';
      actionText = 'Creates high-priority emergency work order with SMS push notification to on-call phone';
      sampleSms = `"URGENT: New emergency dispatch for Burst Pipe at 42 Richmond St. On-call technician notified."`;
      timeSaved = '10 hrs / wk';
      conversionImpact = 'Zero Missed Emergency Jobs';
    }

    return {
      title,
      triggerText,
      conditionText,
      actionText,
      sampleSms,
      timeSaved,
      conversionImpact
    };
  }, [triggerEvent, platform, jobSoftware]);

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setActiveStep(1);
    setTimeout(() => setActiveStep(2), 250);
    setTimeout(() => {
      setActiveStep(3);
      setIsSimulating(false);
    }, 500);
  };

  return (
    <section id="simulator" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/40 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
            Interactive Workflow Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 font-display">
            Tradie Automation & Systems Simulator
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
            Experience how automated event hooks between GoHighLevel and job management software eliminate manual chasing, qualify leads, and protect your reputation.
          </p>
        </div>

        {/* Workbench Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Control Panel (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Parameter 1: Inbound Event Trigger */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                  01. Inbound Event Trigger
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1 bg-zinc-100 dark:bg-zinc-800/70 rounded-xl">
                  <button
                    onClick={() => setTriggerEvent('quote-sent')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer text-left ${
                      triggerEvent === 'quote-sent'
                        ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-100 shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
                    }`}
                  >
                    <div className="font-semibold">Quote Sent</div>
                    <div className="text-[10px] opacity-75">48h unaccepted</div>
                  </button>

                  <button
                    onClick={() => setTriggerEvent('job-completed')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer text-left ${
                      triggerEvent === 'job-completed'
                        ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-100 shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
                    }`}
                  >
                    <div className="font-semibold">Job Done</div>
                    <div className="text-[10px] opacity-75">Review trigger</div>
                  </button>

                  <button
                    onClick={() => setTriggerEvent('form-submitted')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer text-left ${
                      triggerEvent === 'form-submitted'
                        ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-100 shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
                    }`}
                  >
                    <div className="font-semibold">Web Form</div>
                    <div className="text-[10px] opacity-75">Instant lead</div>
                  </button>

                  <button
                    onClick={() => setTriggerEvent('emergency-call')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer text-left ${
                      triggerEvent === 'emergency-call'
                        ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-100 shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
                    }`}
                  >
                    <div className="font-semibold">After-Hours</div>
                    <div className="text-[10px] opacity-75">Emergency call</div>
                  </button>
                </div>
              </div>

              {/* Parameter 2: Automation Platform Engine */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                  02. Automation Engine
                </label>
                <div className="grid grid-cols-3 gap-2 p-1 bg-zinc-100 dark:bg-zinc-800/70 rounded-xl">
                  <button
                    onClick={() => setPlatform('n8n')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer text-left ${
                      platform === 'n8n'
                        ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-100 shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
                    }`}
                  >
                    <div className="font-semibold">n8n Engine</div>
                    <div className="text-[11px] opacity-75">Self-hosted webhooks</div>
                  </button>

                  <button
                    onClick={() => setPlatform('ghl')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer text-left ${
                      platform === 'ghl'
                        ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-100 shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
                    }`}
                  >
                    <div className="font-semibold">GoHighLevel</div>
                    <div className="text-[11px] opacity-75">Native Workflow Tree</div>
                  </button>

                  <button
                    onClick={() => setPlatform('zapier')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer text-left ${
                      platform === 'zapier'
                        ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-100 shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
                    }`}
                  >
                    <div className="font-semibold">Zapier Paths</div>
                    <div className="text-[11px] opacity-75">Multi-Path LeadConnector</div>
                  </button>
                </div>
              </div>

              {/* Parameter 3: Target Field Management Software */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                  03. Target Job & Field Software
                </label>
                <div className="grid grid-cols-4 gap-2 p-1 bg-zinc-100 dark:bg-zinc-800/70 rounded-xl text-center">
                  {(['servicem8', 'simpro', 'servicetitan', 'aroflo'] as const).map((sw) => (
                    <button
                      key={sw}
                      onClick={() => setJobSoftware(sw)}
                      className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer uppercase font-mono ${
                        jobSoftware === sw
                          ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-100 shadow-xs font-bold'
                          : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
                      }`}
                    >
                      {sw === 'servicem8' ? 'ServiceM8' : sw === 'simpro' ? 'simPRO' : sw === 'servicetitan' ? 'ServiceTitan' : 'AroFlo'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trigger Simulator Action */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className="px-4 py-2.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? 'Tracing Webhook Nodes...' : 'Execute Workflow Trace'}</span>
                </button>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  Reflects Regi's actual n8n & GHL logic
                </span>
              </div>
            </div>

            {/* Results & Live Simulation Screen (5 cols) */}
            <div className="lg:col-span-5 bg-zinc-50 dark:bg-zinc-950/80 rounded-xl p-5 border border-zinc-200 dark:border-zinc-800 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  {scenario.title}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">Live Simulation</span>
              </div>

              {/* Step-by-Step Flow Display */}
              <div className="space-y-2 text-xs">
                <div className={`p-2.5 rounded-lg border transition-all ${activeStep >= 1 ? 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700' : 'opacity-40 border-transparent'}`}>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-800 dark:text-zinc-200" />
                    <span>Step 1: Webhook Ingestion</span>
                  </div>
                  <div className="text-zinc-500 dark:text-zinc-400 font-mono text-[11px] mt-1 pl-5">
                    {scenario.triggerText}
                  </div>
                </div>

                <div className={`p-2.5 rounded-lg border transition-all ${activeStep >= 2 ? 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700' : 'opacity-40 border-transparent'}`}>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-800 dark:text-zinc-200" />
                    <span>Step 2: Logic & Gating Condition</span>
                  </div>
                  <div className="text-zinc-500 dark:text-zinc-400 font-mono text-[11px] mt-1 pl-5">
                    {scenario.conditionText}
                  </div>
                </div>

                <div className={`p-2.5 rounded-lg border transition-all ${activeStep >= 3 ? 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700' : 'opacity-40 border-transparent'}`}>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-800 dark:text-zinc-200" />
                    <span>Step 3: Automated Action & Pipeline Sync</span>
                  </div>
                  <div className="text-zinc-500 dark:text-zinc-400 font-mono text-[11px] mt-1 pl-5">
                    {scenario.actionText}
                  </div>
                </div>
              </div>

              {/* Sample SMS preview card */}
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Simulated Client SMS Delivery:</span>
                </div>
                <div className="text-xs font-mono text-zinc-800 dark:text-zinc-200 italic leading-relaxed">
                  {scenario.sampleSms}
                </div>
              </div>

              {/* Measured Business Outcome */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-2.5 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Admin Hours Saved</div>
                  <div className="text-sm font-bold font-mono text-zinc-950 dark:text-zinc-50 mt-0.5">
                    {scenario.timeSaved}
                  </div>
                </div>
                <div className="p-2.5 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Measured Outcome</div>
                  <div className="text-sm font-bold font-mono text-zinc-950 dark:text-zinc-50 mt-0.5">
                    {scenario.conversionImpact}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
