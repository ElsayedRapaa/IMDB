import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 sm:px-8">
      <div className="flex gap-4 items-center">
        <MenuItem title="HOME" url="/" icon={<AiFillHome />} />
        <MenuItem title="ABOUT" url="/about" icon={<AiFillInfoCircle />} />
      </div>
      <div className="">
        <Link href="/" className="flex items-center">
          <span className="bg-amber-300 text-2xl font-bold py-1 px-2 rounded-lg">
            IMDB
          </span>
          <span className="hidden sm:inline pl-1 text-xl">Movies</span>
        </Link>
      </div>
    </header>
  );
}
