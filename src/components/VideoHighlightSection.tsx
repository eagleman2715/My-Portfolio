import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, Maximize, Clock, CheckCircle2, Sparkles, Workflow, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const VideoHighlightSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { time: 0, label: '00:00', title: 'The Problem: Tradies with Zero Automated Systems' },
    { time: 68, label: '01:08', title: 'ServiceM8 Workflows & Quote Tracking in GHL' },
    { time: 200, label: '03:20', title: 'Gated Review Generation (4-5★ Google vs 0-3★ Internal)' },
    { time: 280, label: '04:40', title: 'The n8n Multi-Node Webhook Backbone' },
    { time: 338, label: '05:38', title: 'Inbound Multi-Channel Ingestion & Forms' },
    { time: 435, label: '07:15', title: 'Long-Term Job Re-engagement (Hot Water, Drain, Gutter)' },
    { time: 610, label: '10:10', title: 'The Outcome: Client Used It as Their Core Business Model' },
  ];

  const handleSeek = (timeInSeconds: number, index: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeInSeconds;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      setActiveChapter(index);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="highlight" className="scroll-mt-6">
      {/* Container with Cozy card styling matching attached reference */}
      <div className="bg-gradient-to-b from-blue-50/70 via-white to-white dark:from-blue-950/20 dark:via-zinc-900 dark:to-zinc-900 border border-blue-200/60 dark:border-blue-900/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Highlight Kicker & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-200 dark:border-blue-800/60">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Flagship Project & Core Business Model</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight font-display text-balance">
              The Integration Engine That Became a Client's Business Model
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-2 max-w-3xl leading-relaxed">
              Watch the full 11-minute walkthrough where I explain how I architected an entire two-way synchronization between GoHighLevel and Australian trade management software (ServiceM8 & simPRO) from scratch—which the client adopted as the cornerstone offering for their agency.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-white/80 dark:bg-zinc-800/80 px-3 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-700/80">
            <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>11:13 Full Walkthrough</span>
          </div>
        </div>

        {/* Video Player Card */}
        <div className="relative z-10 rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-950 shadow-md group">
          <video
            ref={videoRef}
            controls
            playsInline
            preload="metadata"
            className="w-full aspect-video object-contain bg-zinc-950"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/assets/aistudio/Workflow___Integration_Sample_ae21504c.mp4" type="video/mp4" />
            <source src="/assets/aistudio/Workflow___Integration_Sample_ae21504c" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Interactive Video Chapters Bar */}
        <div className="mt-6 pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80 relative z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-display">
              Jump Directly to Video Chapters:
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 hidden sm:inline">
              Click any chapter to seek video instantly
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => handleSeek(ch.time, idx)}
                className={`p-2.5 rounded-xl text-left transition-all duration-150 flex items-start gap-2.5 cursor-pointer border ${
                  activeChapter === idx
                    ? 'bg-blue-50/90 dark:bg-blue-950/60 border-blue-300 dark:border-blue-700 text-blue-950 dark:text-blue-100 shadow-2xs'
                    : 'bg-white/80 dark:bg-zinc-800/60 border-zinc-200/70 dark:border-zinc-700/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                }`}
              >
                <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-700/80 text-zinc-700 dark:text-zinc-200 shrink-0">
                  {ch.label}
                </span>
                <span className="text-xs font-medium leading-tight line-clamp-2">
                  {ch.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Deep Context & Key Takeaways Grid */}
        <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
          <div className="p-4 rounded-2xl bg-white/90 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-zinc-900 dark:text-zinc-100 font-display">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Two-Way Live Sync</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Not just a 1-way zap. Tradies create quotes and jobs in GHL or ServiceM8, and statuses, work orders, and invoices sync automatically in real-time.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/90 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-zinc-900 dark:text-zinc-100 font-display">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Reputation Shield</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Automated survey gates 4-5★ scores directly to public Google Review links, while 0-3★ scores alert the owner internally before any public post.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/90 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-zinc-900 dark:text-zinc-100 font-display">
              <Workflow className="w-4 h-4 text-blue-500" />
              <span>Long-Term Follow-Ups</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Automates annual backflow prevention, hot water maintenance, drain re-inspection, and gutter clean campaigns without any manual chasing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
