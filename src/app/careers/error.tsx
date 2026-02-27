'use client';

import { useEffect } from 'react';

export default function CareersError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="text-3xl font-black tracking-tight text-slate-900 uppercase">Unable to Load Careers</h2>
      <p className="mt-3 text-sm text-slate-600 md:text-base">
        Something went wrong while loading this page. Please retry.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 bg-slate-900 px-6 py-3 text-sm font-black tracking-widest text-white uppercase transition hover:bg-slate-700"
      >
        Retry
      </button>
    </div>
  );
}
