"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch("");
    searchRef?.current.blur();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="pt-4 px-6 sm:px-8 max-w-6xl mx-auto flex items-center space-x-2"
    >
      <input
        type="text"
        placeholder="Search Keyword..."
        ref={searchRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-transparent p-y outline-none border-none "
      />
      <button
        className="text-amber-600 disabled:text-gray-300"
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
}
