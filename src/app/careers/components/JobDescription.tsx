import Link from 'next/link';
import type { Job } from '@/lib/careers/jobs';

type JobDescriptionProps = {
  job: Job;
};

const JobDescription = ({ job }: JobDescriptionProps) => {
  return (
    <div className="space-y-14">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#22d3ee_1px,transparent_1px)] bg-[length:28px_28px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-cyan-400" />
            <p className="text-xs font-black tracking-[0.3em] text-cyan-300 uppercase">Open Position</p>
          </div>

          <h1 className="max-w-4xl text-5xl leading-[0.95] font-black tracking-tight uppercase md:text-7xl">
            {job.title}
          </h1>

          <p className="max-w-3xl text-base text-slate-300 md:text-lg">{job.description}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            {[job.team, job.location, job.employmentType, job.workplaceType].map((item) => (
              <span
                key={item}
                className="inline-flex items-center border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-white/90 uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 uppercase">Responsibilities</h2>
          <ul className="space-y-3">
            {job.responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-2 h-2 w-2 shrink-0 bg-cyan-500" aria-hidden="true" />
                <span className="text-sm leading-relaxed md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-black tracking-tight text-slate-900 uppercase">Requirements</h2>
            <ul className="space-y-3">
              {job.requirements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-cyan-500" aria-hidden="true" />
                  <span className="text-sm leading-relaxed md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black tracking-tight text-slate-900 uppercase">Nice to Have</h2>
            <ul className="space-y-3">
              {job.niceToHave.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-cyan-500" aria-hidden="true" />
                  <span className="text-sm leading-relaxed md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="relative overflow-hidden bg-slate-900 p-10 text-white">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,#40D1FB_1px,transparent_1px)] bg-[length:30px_30px]" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="space-y-2">
              <h3 className="text-3xl font-black tracking-tight uppercase">Ready to Apply?</h3>
              <p className="text-sm tracking-wide text-slate-300 uppercase">
                Submit your application and our recruiting team will reach out.
              </p>
            </div>
            <Link
              href={`/careers/${job.slug}/apply`}
              className="bg-cyan-500 px-8 py-3 text-sm font-black tracking-widest text-slate-950 uppercase transition hover:bg-white"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDescription;
