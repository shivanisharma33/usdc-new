import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ApplyForm from '../../components/ApplyForm';
import { getJobBySlug, getJobSlugs } from '@/lib/careers/jobs';

type Params = {
  slug: string;
};

export function generateStaticParams(): Params[] {
  return getJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {
      title: 'Apply | Careers | USDC',
      description: 'Apply for open positions at USDC.',
    };
  }

  return {
    title: `Apply: ${job.title} | Careers | USDC`,
    description: `Submit your application for the ${job.title} role.`,
    openGraph: {
      title: `Apply: ${job.title} | Careers | USDC`,
      description: `Submit your application for the ${job.title} role.`,
      type: 'website',
      url: `/careers/${job.slug}/apply`,
    },
  };
}

export default async function CareersApplyBySlugPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-cyan-400" />
            <span className="text-xs font-black tracking-[0.3em] text-cyan-600 uppercase">Apply</span>
          </div>
          <h1 className="text-4xl leading-tight font-black tracking-tight text-slate-900 uppercase md:text-6xl">
            Apply for {job.title}
          </h1>
          <p className="max-w-3xl text-base text-slate-600 md:text-lg">
            Share your experience and we will contact you if your profile matches the role.
          </p>
        </div>

        <ApplyForm jobTitle={job.title} jobSlug={job.slug} />
      </div>
    </div>
  );
}
