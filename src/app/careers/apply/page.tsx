import type { Metadata } from 'next';
import ApplyForm from '../components/ApplyForm';
import { getJobBySlug } from '@/lib/careers/jobs';

type ApplySearchParams = {
  job?: string;
  slug?: string;
};

export const metadata: Metadata = {
  title: 'Apply | Careers | USDC',
  description: 'Submit your application to join USDC.',
  openGraph: {
    title: 'Apply | Careers | USDC',
    description: 'Submit your application to join USDC.',
    type: 'website',
    url: '/careers/apply',
  },
};

export default async function CareersApplyPage({
  searchParams,
}: {
  searchParams: Promise<ApplySearchParams>;
}) {
  const resolvedSearchParams = await searchParams;

  const fromSlug = resolvedSearchParams.slug ? getJobBySlug(resolvedSearchParams.slug) : undefined;
  const fromJob = !fromSlug && resolvedSearchParams.job ? getJobBySlug(resolvedSearchParams.job) : undefined;
  const selectedJob = fromSlug ?? fromJob;

  const jobTitle = selectedJob?.title ?? resolvedSearchParams.job ?? 'General Application';

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-cyan-400" />
            <span className="text-xs font-black tracking-[0.3em] text-cyan-600 uppercase">Careers Apply</span>
          </div>
          <h1 className="text-4xl leading-tight font-black tracking-tight text-slate-900 uppercase md:text-6xl">
            Job Application Form
          </h1>
          <p className="max-w-3xl text-base text-slate-600 md:text-lg">
            Complete this form and our recruiting team will review your background.
          </p>
        </div>

        <ApplyForm jobTitle={jobTitle} jobSlug={selectedJob?.slug} />
      </div>
    </div>
  );
}
