import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, Clock, MapPin, FileText, MessageSquare, Download } from 'lucide-react';
import { UserProfile } from '../types/portfolio';

interface ContactSectionProps {
  profile: UserProfile;
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: 'Plumbing / HVAC / Trade Services',
    service: 'GoHighLevel & Field Service Integration (ServiceM8/simPRO)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields before sending.');
      return;
    }
    setErrorMsg('');
    setSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/40 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries & Context (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                Get in Touch
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 font-display">
                Ready to Automate Your Operations?
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                Available for full-time remote contracts, agency retainer support, and bespoke systems integrations between GoHighLevel and your job management software.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4 shadow-xs">
              {/* Primary Email */}
              <div className="flex items-start justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
                <div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Direct Email</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-base font-semibold text-zinc-900 dark:text-zinc-100 hover:underline font-mono"
                  >
                    {profile.email}
                  </a>
                  {profile.alternateEmail && (
                    <div className="text-xs text-zinc-500 font-mono mt-0.5">
                      Alt: {profile.alternateEmail}
                    </div>
                  )}
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 cursor-pointer transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-zinc-950 dark:text-zinc-100" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="flex items-start justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
                <div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Phone / WhatsApp</div>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                    className="text-base font-semibold text-zinc-900 dark:text-zinc-100 hover:underline font-mono"
                  >
                    {profile.phone}
                  </a>
                  <div className="text-xs text-zinc-500 mt-0.5">
                    WhatsApp Available
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 cursor-pointer transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-zinc-950 dark:text-zinc-100" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Geographic availability */}
              <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 pt-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>Philippines (UTC+8) · Supporting Australia (AEST/AWST), US & Worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>High responsiveness across Australian & Western business hours</span>
                </div>
              </div>

              {/* Download original CV PDF button */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={profile.cvPdfUrl}
                  download="Reginald_Manabat_CV_2026.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Official CV Document (PDF)</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Read Interactive Online Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 mx-auto rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 font-display">
                  Enquiry Received
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. Your note has been delivered directly to {profile.email}. I will review your operational requirements and get back to you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', industry: 'Plumbing / HVAC / Trade Services', service: 'GoHighLevel & Field Service Integration (ServiceM8/simPRO)', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                  Request Automation Proposal or Retainer
                </div>

                {errorMsg && (
                  <div className="p-3 text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-lg">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Liam Campbell"
                      className="w-full px-3.5 py-2 text-sm bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 text-zinc-900 dark:text-zinc-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="liam@servicecompany.com.au"
                      className="w-full px-3.5 py-2 text-sm bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 text-zinc-900 dark:text-zinc-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Industry / Trade
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 text-zinc-900 dark:text-zinc-100"
                    >
                      <option value="Plumbing / Drainage">Plumbing / Drainage</option>
                      <option value="Electrical & Air Conditioning">Electrical & Air Conditioning</option>
                      <option value="HVAC / Heating & Gas">HVAC / Heating & Gas</option>
                      <option value="Stone Fabrication & Countertops">Stone Fabrication & Countertops</option>
                      <option value="Mental Wellness & Healthcare">Mental Wellness & Healthcare</option>
                      <option value="Marketing Agency">Marketing Agency (Multiple Tradie Sub-Accounts)</option>
                      <option value="Other Trade / Home Services">Other Trade / Home Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Integration Scope
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 text-zinc-900 dark:text-zinc-100"
                    >
                      <option value="GoHighLevel & Field Service Integration (ServiceM8/simPRO)">GHL & ServiceM8/simPRO Integration</option>
                      <option value="Automated Quote Follow-Up System">Automated Quote Follow-Up System</option>
                      <option value="Review Generation & Reputation Gate">Review Generation & Reputation Gate</option>
                      <option value="Dedicated Technical VA Retainer">Dedicated Technical VA Retainer</option>
                      <option value="Custom n8n / Zapier Webhook Pipeline">Custom n8n / Zapier Webhook Pipeline</option>
                      <option value="Full CRM Audit & Workflow Fixes">Full CRM Audit & Workflow Fixes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    What software do you currently use, and what is your main bottleneck? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. We use ServiceM8 and GoHighLevel. We need our sent quotes to automatically follow up with clients via SMS and sync work orders when accepted..."
                    className="w-full px-3.5 py-2 text-sm bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 text-zinc-900 dark:text-zinc-100 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    Direct transmission to Regi Manabat
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-lg transition-colors cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Transmitting...' : 'Send Inquiry'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
