export function ReviewCardSkeleton() {
  return (
    <div className="w-full rounded-2xl bg-white p-5 shadow-md animate-pulse">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gray-200" />

        <div className="flex-1 space-y-2">
          <div className="h-4 w-40 rounded bg-gray-200" />
          <div className="h-3 w-24 rounded bg-gray-200" />
        </div>

        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-4 w-4 rounded bg-gray-200" />
          ))}
        </div>
      </div>

      {/* Text */}
      <div className="mt-4 space-y-2">
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-3/4 rounded bg-gray-200" />
      </div>

      {/* Button */}
      <div className="mt-5">
        <div className="h-9 w-28 rounded-full bg-gray-200" />
      </div>
    </div>
  );
}
