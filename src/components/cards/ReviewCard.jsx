"use client";

import React, { useState } from "react";

export function ReviewCard({ review }) {
  const [likes, setLikes] = useState(review.likes?.length || 0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) return;
    setLikes((prev) => prev + 1);
    setLiked(true);
  };

  return (
    <div className="w-full rounded-2xl bg-white p-5 shadow-md transition hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={review.photo}
          alt={review.user}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">
            {review.user}
          </h4>
          <p className="text-sm text-gray-500">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>

        {/* Rating */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-lg ${
                i < review.rating
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review */}
      <p className="mt-4 text-gray-700 leading-relaxed">
        {review.review}
      </p>

      {/* Like Button */}
      <div className="mt-5">
        <button
          onClick={handleLike}
          disabled={liked}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition
            ${
              liked
                ? "bg-green-100 text-green-700 cursor-not-allowed"
                : "border border-gray-300 text-gray-700 hover:bg-gray-100"
            }
          `}
        >
          👍 Like
          <span>({likes})</span>
        </button>
      </div>
    </div>
  );
}
