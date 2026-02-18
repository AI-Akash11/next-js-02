"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchValue = form.search.value;

    const newParams = new URLSearchParams(params.toString());

    newParams.set("search", searchValue);

    router.push(`?${newParams.toString()}`)


  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="px-4 py-2 border-2 rounded w-2xl"
          type="text"
          name="search"
          placeholder="Enter Food Name"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
