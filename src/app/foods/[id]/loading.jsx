export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Image Skeleton */}
        <div className="h-[420px] w-full rounded-2xl bg-gray-200" />

        {/* Content Skeleton */}
        <div className="space-y-5">
          {/* Category */}
          <div className="h-6 w-32 rounded-full bg-gray-200" />

          {/* Title */}
          <div className="h-10 w-3/4 rounded bg-gray-200" />

          {/* Area */}
          <div className="h-5 w-1/2 rounded bg-gray-200" />

          {/* Price */}
          <div className="h-8 w-40 rounded bg-gray-200" />

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <div className="h-12 w-40 rounded-xl bg-gray-200" />
            <div className="h-12 w-40 rounded-xl bg-gray-200" />
          </div>
        </div>

      </div>
    </div>
  );
}
