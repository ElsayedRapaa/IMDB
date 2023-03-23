import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center space-x-2 py-2 dark:bg-gray-600 bg-amber-100">
      <NavbarItem title="Trending" params="fetchTrending" />
      <NavbarItem title="Top Rated" params="fetchTopRated" />
    </div>
  );
}
