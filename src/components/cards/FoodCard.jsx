import Link from "next/link";

export function FoodCard({ food }) {
    console.log('from foodcard', food.id)
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition">
      {/* Image */}
      <div className="relative h-48 w-full">
        <img
          src={food.foodImg}
          alt={food.title}
          className="h-full w-full object-cover"
        />
        <span className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
          {food.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {food.title}
        </h3>

        <p className="text-gray-600 font-medium">
          ₹{food.price}
        </p>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <button
            className="flex-1 rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition"
          >
            Add to Cart
          </button>

          <Link
          href={`/foods/${food.id}`}
            className="flex-1 rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
