import React, { useState, useEffect } from 'react';
import { X, Download, Globe, Rocket, Terminal, Copy, Check, ExternalLink, Sparkles, FolderArchive, Code2, Server } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'netlify' | 'vercel' | 'local'>('netlify');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-900/90 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <Rocket className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-zinc-950 dark:text-zinc-50 font-display">
                Go Live Outside AI Studio
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Export your portfolio and host it on your custom domain for free
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Download Packages Banner */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-display">
              1. Download Your Files
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Option A: Production Build */}
              <div className="p-4 rounded-2xl border-2 border-blue-500/40 bg-blue-50/50 dark:bg-blue-950/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 rounded-xl bg-blue-600 text-white shadow-2xs">
                      <FolderArchive className="w-4 h-4" />
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white rounded">
                      Ready To Deploy
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-zinc-950 dark:text-zinc-100">
                    Production Build ZIP (dist.zip)
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1">
                    Pre-compiled HTML, CSS, JavaScript, 11-min walkthrough video, and all assets. No npm build needed.
                  </p>
                </div>

                <a
                  href="/regi-manabat-portfolio-dist.zip"
                  download="regi-manabat-portfolio-dist.zip"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Production ZIP (~55 MB)</span>
                </a>
              </div>

              {/* Option B: Source Code */}
              <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-800/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 rounded-xl bg-zinc-800 dark:bg-zinc-700 text-white">
                      <Code2 className="w-4 h-4" />
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded">
                      Full Source
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-zinc-950 dark:text-zinc-100">
                    Full Source Code ZIP (source.zip)
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                    Complete React 19 + TypeScript + Vite project for GitHub and local development.
                  </p>
                </div>

                <a
                  href="/regi-manabat-portfolio-source.zip"
                  download="regi-manabat-portfolio-source.zip"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-xl transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Download Source Code (~58 MB)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hosting Instructions Tabs */}
          <div className="space-y-4 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-display">
              2. Choose Where to Host (Free & Instant)
            </div>

            <div className="flex gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-1">
              <button
                onClick={() => setActiveTab('netlify')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'netlify'
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950'
                }`}
              >
                Netlify Drop (1 Minute, No Terminal)
              </button>
              <button
                onClick={() => setActiveTab('vercel')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'vercel'
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950'
                }`}
              >
                Vercel + GitHub
              </button>
              <button
                onClick={() => setActiveTab('local')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'local'
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950'
                }`}
              >
                Run Locally (npm run dev)
              </button>
            </div>

            {/* Tab 1: Netlify */}
            {activeTab === 'netlify' && (
              <div className="space-y-3 bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-xs">
                <div className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center justify-between">
                  <span>Fastest method — zero configuration needed:</span>
                  <a
                    href="https://app.netlify.com/drop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Open Netlify Drop <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  <li>Download the <strong>Production Build ZIP (dist.zip)</strong> above.</li>
                  <li>Extract the ZIP on your computer. You will have a folder with <code className="font-mono bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">index.html</code> and an <code className="font-mono bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">assets</code> folder.</li>
                  <li>Go to <strong>app.netlify.com/drop</strong> in your browser.</li>
                  <li>Drag and drop the extracted folder into the upload circle.</li>
                  <li><strong>Your site is live!</strong> Netlify will give you a free HTTPS web address immediately.</li>
                  <li>Under <em>Site Settings &gt; Domain management</em>, you can add your custom domain (e.g. <code className="font-mono text-blue-600">regimanabat.com</code>).</li>
                </ol>
              </div>
            )}

            {/* Tab 2: Vercel */}
            {activeTab === 'vercel' && (
              <div className="space-y-3 bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-xs">
                <div className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center justify-between">
                  <span>Deploy with automatic git CI/CD on Vercel:</span>
                  <a
                    href="https://vercel.com/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Go to Vercel <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  <li>Download and extract <strong>Full Source Code ZIP</strong>.</li>
                  <li>Push the folder to your GitHub account:
                    <div className="relative mt-1">
                      <pre className="p-2.5 bg-zinc-950 text-zinc-200 rounded-lg font-mono text-[11px] overflow-x-auto">
                        git init && git add . && git commit -m "Initial commit" && git push
                      </pre>
                    </div>
                  </li>
                  <li>In Vercel, click <strong>Add New Project</strong> and select your GitHub repo.</li>
                  <li>Vercel automatically detects <strong>Vite</strong>. Just click <strong>Deploy</strong>!</li>
                </ol>
              </div>
            )}

            {/* Tab 3: Local */}
            {activeTab === 'local' && (
              <div className="space-y-3 bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-xs">
                <div className="font-bold text-zinc-900 dark:text-zinc-100">
                  Run locally on your Mac or PC:
                </div>
                <ol className="list-decimal list-inside space-y-2 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  <li>Extract <strong>Full Source Code ZIP</strong>.</li>
                  <li>Open terminal in that folder and run:
                    <div className="relative mt-1">
                      <pre className="p-2.5 bg-zinc-950 text-zinc-200 rounded-lg font-mono text-[11px] overflow-x-auto">
                        npm install
                      </pre>
                    </div>
                  </li>
                  <li>Start the local Vite development server:
                    <div className="relative mt-1">
                      <pre className="p-2.5 bg-zinc-950 text-zinc-200 rounded-lg font-mono text-[11px] overflow-x-auto">
                        npm run dev
                      </pre>
                    </div>
                  </li>
                  <li>Open <code className="font-mono bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded text-blue-600">http://localhost:5173</code> in your browser.</li>
                </ol>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-900/90 flex items-center justify-between shrink-0">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Also saved as <code className="font-mono text-zinc-700 dark:text-zinc-300">DEPLOYMENT.md</code> in project root
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white border border-zinc-300 dark:border-zinc-700 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
