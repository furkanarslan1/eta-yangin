export default function Loading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Back link skeleton */}
        <div className="h-4 w-36 bg-neutral-200 rounded mb-10" />

        {/* Title skeleton */}
        <div className="h-9 w-72 bg-neutral-200 rounded mb-12" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-neutral-100 overflow-hidden shadow-sm">
              <div className="h-52 bg-neutral-200" />
              <div className="p-4 flex flex-col gap-3">
                <div className="h-4 bg-neutral-200 rounded w-full" />
                <div className="h-4 bg-neutral-200 rounded w-2/3" />
                <div className="h-10 bg-neutral-200 rounded-xl mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}