export default function CareersLoading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="animate-pulse space-y-8">
        <div className="h-10 w-2/3 bg-slate-200" />
        <div className="h-5 w-1/2 bg-slate-100" />
        <div className="space-y-4 pt-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-28 border border-slate-200 bg-white" />
          ))}
        </div>
      </div>
    </div>
  );
}
