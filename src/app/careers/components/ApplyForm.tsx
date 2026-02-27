'use client';

import { useState } from 'react';

type ApplyFormProps = {
  jobTitle: string;
  jobSlug?: string;
};

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  linkedInUrl: string;
  portfolioUrl: string;
  coverLetter: string;
};

type FormErrors = Partial<Record<keyof FormValues | 'resume', string>>;

const INITIAL_VALUES: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  linkedInUrl: '',
  portfolioUrl: '',
  coverLetter: '',
};

function isValidUrl(value: string): boolean {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function validate(values: FormValues, resume: File | null): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required.';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.';
  }

  if (!values.linkedInUrl.trim()) {
    errors.linkedInUrl = 'LinkedIn URL is required.';
  } else if (!isValidUrl(values.linkedInUrl)) {
    errors.linkedInUrl = 'Please enter a valid URL.';
  }

  if (values.portfolioUrl.trim() && !isValidUrl(values.portfolioUrl)) {
    errors.portfolioUrl = 'Please enter a valid URL.';
  }

  if (!values.coverLetter.trim()) {
    errors.coverLetter = 'Cover letter is required.';
  }

  if (!resume) {
    errors.resume = 'Resume is required.';
  } else if (resume.size > 5 * 1024 * 1024) {
    errors.resume = 'Resume must be smaller than 5MB.';
  }

  return errors;
}

const ApplyForm = ({ jobTitle, jobSlug }: ApplyFormProps) => {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }));
  };

  const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] ?? null;
    setResume(selectedFile);

    setErrors((currentErrors) => ({
      ...currentErrors,
      resume: undefined,
    }));
  };

  const resetForm = () => {
    setValues(INITIAL_VALUES);
    setResume(null);
    setErrors({});
    setIsSuccess(false);
    setSubmitError(null);
    setApplicationId(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values, resume);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData();
      formData.append('jobTitle', jobTitle);
      if (jobSlug) {
        formData.append('jobSlug', jobSlug);
      }
      formData.append('fullName', values.fullName);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('linkedInUrl', values.linkedInUrl);
      formData.append('portfolioUrl', values.portfolioUrl);
      formData.append('coverLetter', values.coverLetter);
      if (resume) {
        formData.append('resume', resume);
      }

      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        body: formData,
      });

      const payload: {
        success?: boolean;
        message?: string;
        applicationId?: string;
      } = await response.json();

      if (!response.ok || !payload.success) {
        setSubmitError(payload.message ?? 'Unable to submit application right now.');
        return;
      }

      setApplicationId(payload.applicationId ?? null);
      setIsSuccess(true);
      setValues(INITIAL_VALUES);
      setResume(null);
      setErrors({});
    } catch {
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="border border-emerald-300 bg-emerald-50 p-8">
        <h2 className="text-2xl font-black tracking-tight text-emerald-900 uppercase">
          Application Submitted
        </h2>
        <p className="mt-3 text-sm text-emerald-800 md:text-base">
          Thanks for applying for {jobTitle}. Our team will review your profile shortly.
        </p>
        {applicationId ? (
          <p className="mt-2 text-sm font-semibold tracking-wide text-emerald-900 uppercase">
            Reference: {applicationId}
          </p>
        ) : null}
        <button
          type="button"
          onClick={resetForm}
          className="mt-6 bg-emerald-700 px-6 py-3 text-sm font-black tracking-widest text-white uppercase transition hover:bg-emerald-600"
        >
          Submit Another
        </button>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-slate-200 bg-white p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="jobTitle" className="text-xs font-black tracking-widest text-slate-500 uppercase">
            Job Title
          </label>
          <input
            id="jobTitle"
            name="jobTitle"
            value={jobTitle}
            readOnly
            className="w-full border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-medium text-slate-800"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="fullName" className="text-xs font-black tracking-widest text-slate-500 uppercase">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={handleInputChange}
            aria-invalid={Boolean(errors.fullName)}
            className="w-full border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500"
          />
          {errors.fullName ? <p className="text-xs text-rose-600">{errors.fullName}</p> : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-black tracking-widest text-slate-500 uppercase">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleInputChange}
            aria-invalid={Boolean(errors.email)}
            className="w-full border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500"
          />
          {errors.email ? <p className="text-xs text-rose-600">{errors.email}</p> : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-black tracking-widest text-slate-500 uppercase">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleInputChange}
            aria-invalid={Boolean(errors.phone)}
            className="w-full border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500"
          />
          {errors.phone ? <p className="text-xs text-rose-600">{errors.phone}</p> : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="linkedInUrl"
            className="text-xs font-black tracking-widest text-slate-500 uppercase"
          >
            LinkedIn URL
          </label>
          <input
            id="linkedInUrl"
            name="linkedInUrl"
            type="url"
            placeholder="https://linkedin.com/in/username"
            value={values.linkedInUrl}
            onChange={handleInputChange}
            aria-invalid={Boolean(errors.linkedInUrl)}
            className="w-full border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500"
          />
          {errors.linkedInUrl ? <p className="text-xs text-rose-600">{errors.linkedInUrl}</p> : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="portfolioUrl"
            className="text-xs font-black tracking-widest text-slate-500 uppercase"
          >
            Portfolio URL (Optional)
          </label>
          <input
            id="portfolioUrl"
            name="portfolioUrl"
            type="url"
            placeholder="https://your-portfolio.com"
            value={values.portfolioUrl}
            onChange={handleInputChange}
            aria-invalid={Boolean(errors.portfolioUrl)}
            className="w-full border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500"
          />
          {errors.portfolioUrl ? <p className="text-xs text-rose-600">{errors.portfolioUrl}</p> : null}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="resume" className="text-xs font-black tracking-widest text-slate-500 uppercase">
            Resume
          </label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
            aria-invalid={Boolean(errors.resume)}
            className="w-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 file:mr-4 file:border-0 file:bg-slate-100 file:px-3 file:py-1 file:text-sm file:font-medium file:text-slate-700"
          />
          {errors.resume ? <p className="text-xs text-rose-600">{errors.resume}</p> : null}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label
            htmlFor="coverLetter"
            className="text-xs font-black tracking-widest text-slate-500 uppercase"
          >
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows={6}
            value={values.coverLetter}
            onChange={handleInputChange}
            aria-invalid={Boolean(errors.coverLetter)}
            className="w-full border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500"
          />
          {errors.coverLetter ? <p className="text-xs text-rose-600">{errors.coverLetter}</p> : null}
        </div>
      </div>

      {submitError ? <p className="mt-4 border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">{submitError}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 bg-cyan-500 px-8 py-3 text-sm font-black tracking-widest text-slate-950 uppercase transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
};

export default ApplyForm;
