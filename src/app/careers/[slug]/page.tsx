import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JobDescription from '../components/JobDescription';
import { getJobBySlug, getJobSlugs } from '@/lib/careers/jobs';

type Params = {
  slug: string;
};

function toSchemaEmploymentType(value: string): string {
  if (value.toLowerCase() === 'full-time') {
    return 'FULL_TIME';
  }

  if (value.toLowerCase() === 'part-time') {
    return 'PART_TIME';
  }

  if (value.toLowerCase() === 'contract') {
    return 'CONTRACTOR';
  }

  return 'INTERN';
}

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
      title: 'Role Not Found | Careers | USDC',
      description: 'The requested job posting could not be found.',
    };
  }

  return {
    title: `${job.title} | Careers | USDC`,
    description: job.shortDescription,
    openGraph: {
      title: `${job.title} | Careers | USDC`,
      description: job.shortDescription,
      type: 'article',
      url: `/careers/${job.slug}`,
    },
  };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: `${job.description} Responsibilities: ${job.responsibilities.join(' ')}`,
    datePosted: job.postedAt,
    validThrough: job.validThrough,
    employmentType: toSchemaEmploymentType(job.employmentType),
    hiringOrganization: {
      '@type': 'Organization',
      name: 'USDC',
      sameAs: 'https://usdc.com',
    },
    jobLocationType: job.workplaceType === 'Remote' ? 'TELECOMMUTE' : undefined,
    jobLocation:
      job.workplaceType === 'Remote'
        ? undefined
        : {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: job.location,
              addressCountry: 'US',
            },
          },
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'United States',
    },
  };

  return (
    <div className="bg-white pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <Link
          href="/careers"
          className="inline-flex items-center text-xs font-black tracking-[0.2em] text-slate-500 uppercase transition hover:text-cyan-600"
        >
          Back to Open Positions
        </Link>
      </div>
      <JobDescription job={job} />
    </div>
  );
}
