import React from "react";

export function FoodCardSkeleton() {
  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden bg-white shadow-md animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 w-full bg-gray-200" />

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-5 w-3/4 rounded bg-gray-200" />
        <div className="h-4 w-1/3 rounded bg-gray-200" />

        <div className="flex gap-2 pt-2">
          <div className="h-10 flex-1 rounded-xl bg-gray-200" />
          <div className="h-10 flex-1 rounded-xl bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
