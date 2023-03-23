import Link from "next/link";
import React from "react";

export default function MenuItem({ title, url, icon }) {
  return (
    <Link href={url}>
      <span className="hidden sm:inline font-semibold hover:text-amber-400 transition-colors">
        {title}
      </span>
      <span className="inline sm:hidden text-2xl hover:text-amber-400 transition-colors">
        {icon}
      </span>
    </Link>
  );
}
