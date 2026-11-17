import { useState, useEffect, type FormEvent } from 'react';
import {
  Mail,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Info,
} from 'lucide-react';
import { servicesList, type ServiceId } from '../data/agencyData';
import { siteConfig } from '../config/siteConfig';

interface ContactSectionProps {
  preselectedService: ServiceId | '';
}

interface FormValues {
  name: string;
  email: string;
  service: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  description?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactSection({ preselectedService }: ContactSectionProps) {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    service: preselectedService || '',
    description: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setValues((prev) => ({ ...prev, service: preselectedService }));
      setSubmittedData(null);
    }
  }, [preselectedService]);

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!data.name.trim() || data.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    if (!data.email.trim() || !EMAIL_REGEX.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!data.service) {
      nextErrors.service = 'Please select a service or inquiry topic.';
    }
    if (!data.description.trim() || data.description.trim().length < 15) {
      nextErrors.description =
        'Please share a brief project description (at least 15 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmittedData({
      name: values.name.trim(),
      email: values.email.trim(),
      service: values.service,
      description: values.description.trim(),
    });
  };

  const selectedServiceLabel =
    servicesList.find((s) => s.id === (submittedData?.service || values.service))?.title ||
    (submittedData?.service === 'general' ? 'General Consultation' : submittedData?.service || '');

  const buildInquiryText = (data: FormValues) => {
    const svcTitle =
      servicesList.find((s) => s.id === data.service)?.title || 'General Consultation';
    return [
      `Project Inquiry — ${siteConfig.companyName}`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Service: ${svcTitle}`,
      `Project Description:\n${data.description}`,
    ].join('\n\n');
  };

  const handleCopySummary = async () => {
    if (!submittedData) return;
    try {
      await navigator.clipboard.writeText(buildInquiryText(submittedData));
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    } catch {
      setCopiedSummary(false);
    }
  };

  const handleCopyEmailPlaceholder = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contactEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleReset = () => {
    setValues({ name: '', email: '', service: '', description: '' });
    setErrors({});
    setSubmittedData(null);
    setCopiedSummary(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 border-b border-[#131F38]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-sm font-medium text-blue-400 mb-2">Contact Us</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white [text-wrap:balance] mb-4">
                Start a Conversation About Your Software Project
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Share what you are looking to automate or build. We respond with practical next
                steps, clear scope questions, and honest technical feedback.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Configurable Email Placeholder Card */}
              <div className="rounded-xl bg-[#0B1324] border border-[#192847] p-5">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600/12 border border-blue-500/25 text-blue-400 shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-400 mb-0.5">
                        Direct Email {siteConfig.isEmailConfigured ? '' : '(Placeholder)'}
                      </p>
                      {siteConfig.isEmailConfigured ? (
                        <a
                          href={`mailto:${siteConfig.contactEmail}`}
                          className="text-sm sm:text-base font-medium text-white hover:text-blue-400 transition-colors break-all"
                        >
                          {siteConfig.contactEmail}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base font-mono text-slate-200 break-all">
                          {siteConfig.contactEmail}
                        </p>
                      )}
                      {!siteConfig.isEmailConfigured && (
                        <p className="text-xs text-slate-400 mt-1.5">
                          Replace in <span className="font-mono text-slate-300">siteConfig.ts</span>{' '}
                          with your business Gmail address.
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmailPlaceholder}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-[#101C36] hover:bg-[#16264A] border border-[#1E3156] rounded-md transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#0B1324] border border-[#192847] p-6 sm:p-8">
              {submittedData ? (
                <div className="space-y-6" role="status" aria-live="polite">
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        Inquiry Prepared &amp; Validated
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Your project details passed validation. Because no automated email backend is
                        connected on this preview yet, no message has been transmitted automatically.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-[#070D1A] border border-[#192847] p-4 sm:p-5 space-y-2.5 text-sm">
                    <div>
                      <span className="text-slate-400">Name: </span>
                      <span className="text-white font-medium">{submittedData.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Email: </span>
                      <span className="text-white font-medium">{submittedData.email}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Service: </span>
                      <span className="text-white font-medium">{selectedServiceLabel}</span>
                    </div>
                    <div className="pt-1 border-t border-[#16233F]">
                      <span className="text-slate-400 block mb-1">Project Description:</span>
                      <p className="text-slate-200 whitespace-pre-line leading-relaxed">
                        {submittedData.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
                    >
                      {copiedSummary ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Summary Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Inquiry Summary</span>
                        </>
                      )}
                    </button>

                    {siteConfig.isEmailConfigured && (
                      <a
                        href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
                          `Project Inquiry: ${selectedServiceLabel}`
                        )}&body=${encodeURIComponent(buildInquiryText(submittedData))}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-[#101C36] hover:bg-[#16264A] border border-[#1E3156] rounded-lg transition-colors"
                      >
                        <Mail className="w-4 h-4 text-blue-400" />
                        <span>Open in Email App</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Edit or Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-slate-200 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. Sarah Ahmed"
                        value={values.name}
                        onChange={(e) => {
                          setValues((prev) => ({ ...prev, name: e.target.value }));
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070D1A] border text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          errors.name ? 'border-red-500/80' : 'border-[#1E2E4D] hover:border-[#2C4473]'
                        }`}
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-slate-200 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={values.email}
                        onChange={(e) => {
                          setValues((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070D1A] border text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          errors.email ? 'border-red-500/80' : 'border-[#1E2E4D] hover:border-[#2C4473]'
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-sm font-medium text-slate-200 mb-2"
                    >
                      Service Needed
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={values.service}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, service: e.target.value }));
                        if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
                      }}
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? 'contact-service-error' : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070D1A] border text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.service
                          ? 'border-red-500/80'
                          : 'border-[#1E2E4D] hover:border-[#2C4473]'
                      }`}
                    >
                      <option value="" className="bg-[#0B1324] text-slate-400">
                        Select a service...
                      </option>
                      {servicesList.map((service) => (
                        <option
                          key={service.id}
                          value={service.id}
                          className="bg-[#0B1324] text-white"
                        >
                          {service.title}
                        </option>
                      ))}
                      <option value="general" className="bg-[#0B1324] text-white">
                        General Software Consultation
                      </option>
                    </select>
                    {errors.service && (
                      <p
                        id="contact-service-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-description"
                      className="block text-sm font-medium text-slate-200 mb-2"
                    >
                      Project Description
                    </label>
                    <textarea
                      id="contact-description"
                      name="description"
                      rows={4}
                      placeholder="Briefly describe your workflow, product idea, timeline, or technical goals..."
                      value={values.description}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, description: e.target.value }));
                        if (errors.description)
                          setErrors((prev) => ({ ...prev, description: undefined }));
                      }}
                      aria-invalid={Boolean(errors.description)}
                      aria-describedby={errors.description ? 'contact-description-error' : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070D1A] border text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-y ${
                        errors.description
                          ? 'border-red-500/80'
                          : 'border-[#1E2E4D] hover:border-[#2C4473]'
                      }`}
                    />
                    {errors.description && (
                      <p
                        id="contact-description-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.description}</span>
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    <p className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                      <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>Client-side validated preview form (no backend mailer connected yet).</span>
                    </p>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      Prepare Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
