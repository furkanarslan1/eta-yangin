export default function Loading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Banner skeleton */}
      <div className="h-48 w-full bg-neutral-800" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 overflow-hidden">
              <div className="h-48 bg-neutral-200" />
              <div className="px-4 py-3 flex items-center justify-between gap-3">
                <div className="h-4 bg-neutral-200 rounded w-3/4" />
                <div className="h-4 w-4 bg-neutral-200 rounded shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}