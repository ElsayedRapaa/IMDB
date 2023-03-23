"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center my-24 space-y-4">
      <h2>Something went wrong!</h2>
      <button
        className="bg-gray-600 py-2 px-4 rounded-md cursor-pointer hover:bg-amber-600 transition-colors"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
