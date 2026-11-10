import React, { useState } from 'react';
import { Copy, Check, Send, Clock, MapPin, FileText, MessageSquare, Download, ExternalLink } from 'lucide-react';
import { UserProfile } from '../types/portfolio';

interface ContactSectionProps {
  profile: UserProfile;
  onOpenResume: () => void;
}

/**
 * Optional: set VITE_CONTACT_ENDPOINT (for example a Formspree form URL) to send the form
 * straight to your inbox. Without it, the form opens the visitor's email app with the message filled in.
 */
const CONTACT_ENDPOINT: string | undefined = (import.meta as any).env?.VITE_CONTACT_ENDPOINT;

const DEFAULT_FORM = {
  name: '',
  email: '',
  industry: 'Plumbing / HVAC / Trade Services',
  service: 'GoHighLevel & Field Service Integration (ServiceM8/simPRO)',
  message: '',
};

// Skip social links that are only a site's home page (placeholders).
const isRealProfileLink = (url?: string): url is string =>
  !!url && !/^https?:\/\/(www\.)?(linkedin|github)\.com\/?$/i.test(url);

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_FORM);
  const [submitted, setSubmitted] = useState<null | 'sent' | 'mailto'>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete your name, email and message before sending.');
      return;
    }
    setErrorMsg('');
    setSubmitting(true);

    if (CONTACT_ENDPOINT) {
      try {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        setSubmitted('sent');
      } catch {
        setErrorMsg(`The message did not send. Please email ${profile.email} or message me on WhatsApp instead.`);
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // Fallback: open the visitor's email app with the message filled in.
    const subject = `Enquiry from ${formData.name}: ${formData.service}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Industry: ${formData.industry}`,
      `Scope: ${formData.service}`,
      '',
      formData.message,
    ].join('\n');
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitting(false);
    setSubmitted('mailto');
  };

  const inputClass =
    'w-full px-3.5 py-2 text-sm bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 text-zinc-900 dark:text-zinc-100';

  const socials = [
    { label: 'LinkedIn', url: profile.linkedin },
    { label: 'GitHub', url: profile.github },
  ].filter((s) => isRealProfileLink(s.url));

  return (
    <section id="contact" className="w-full scroll-mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Inquiries & Context */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 font-display">
              Get in Touch
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-balance text-zinc-950 dark:text-zinc-50 font-display">
              Ready to Automate Your Operations?
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
              Whether you need a CRM system built from scratch, existing workflows optimized, or your business
              software connected, let's discuss how I can help.
            </p>
          </div>

          {/* Direct Contact Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4 shadow-xs">
            {/* Primary Email */}
            <div className="flex items-start justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <div className="min-w-0">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Email</div>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-base font-semibold text-zinc-900 dark:text-zinc-100 hover:underline font-mono break-all"
                >
                  {profile.email}
                </a>
                {profile.alternateEmail && (
                  <div className="text-xs text-zinc-500 font-mono mt-0.5 break-all">Alt: {profile.alternateEmail}</div>
                )}
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 cursor-pointer transition-colors shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="flex items-start justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">WhatsApp / Phone</div>
                <a
                  href="https://wa.me/61414998826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-emerald-600 dark:text-emerald-400 hover:underline font-mono"
                >
                  +61 414 998 826
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <a
                  href="https://wa.me/61414998826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 cursor-pointer transition-colors"
                  title="Open WhatsApp chat"
                  aria-label="Open WhatsApp chat"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 cursor-pointer transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social links (only shown when real profile URLs are set) */}
            {socials.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800 text-xs">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-zinc-700 dark:text-zinc-300 hover:underline"
                  >
                    {s.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            )}

            {/* Geographic availability */}
            <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>Philippines (UTC+8) · Supporting Australia (AEST/AWST), US & worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>Available across Australian business hours</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/61414998826"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-900 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={profile.cvPdfUrl}
                download="Reginald_Manabat_CV_2026.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV (PDF)</span>
              </a>
              <button
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Read the online CV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in" role="status">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 font-display">
                {submitted === 'sent' ? 'Message sent' : 'Check your email app'}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                {submitted === 'sent'
                  ? `Thanks, ${formData.name}. I will review your message and reply to ${formData.email}.`
                  : `Your email app should have opened with your message ready to send to ${profile.email}. If nothing opened, email me or message me on WhatsApp directly.`}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(null);
                    setFormData(DEFAULT_FORM);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                >
                  Write another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                Request a proposal or ongoing support
              </div>

              {errorMsg && (
                <div
                  role="alert"
                  className="p-3 text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-lg"
                >
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Liam Campbell"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Email address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="liam@servicecompany.com.au"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-industry" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Industry / trade
                  </label>
                  <select
                    id="contact-industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className={inputClass}
                  >
                    <option value="Plumbing / HVAC / Trade Services">Plumbing / HVAC / Trade Services</option>
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
                  <label htmlFor="contact-service" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    What do you need?
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={inputClass}
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
                <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  What software do you use, and what is your main bottleneck? *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. We use ServiceM8 and GoHighLevel. We need sent quotes to follow up with clients by SMS and sync work orders when accepted..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  {CONTACT_ENDPOINT ? 'Sent straight to my inbox' : 'Opens your email app with the message ready'}
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-xs disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{submitting ? 'Sending...' : CONTACT_ENDPOINT ? 'Send message' : 'Write email'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};