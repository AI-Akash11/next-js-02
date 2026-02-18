import React from "react";

export function generateStaticParams() {
  return [{ id: "52898" }, { id: "52955" }, { id: "52926" }];
}

/* ------------------ data fetch ------------------ */
const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.details;
};

/* ------------------ page ------------------ */
const Page = async ({ params }) => {
  const { id } = await params;

  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h2 className="text-2xl font-semibold text-red-500">Food Not Found</h2>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src={food.foodImg}
            alt={food.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-5">
          <span className="inline-block rounded-full bg-yellow-100 px-4 py-1 text-sm font-medium text-yellow-700">
            {food.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-800">{food.title}</h1>

          <p className="text-lg text-gray-600">
            Area: <span className="font-medium">{food.area}</span>
          </p>

          <p className="text-2xl font-semibold text-green-600">₹{food.price}</p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button className="rounded-xl bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-700 transition">
              Add to Cart
            </button>

            {food.video && (
              <a
                href={food.video}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100 transition"
              >
                Watch Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
