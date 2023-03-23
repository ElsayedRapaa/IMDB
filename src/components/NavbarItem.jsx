"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, params }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Link
      href={`/?genre=${params}`}
      className={`font-semibold text-lg hover:text-amber-600 transition-colors p-2 ${
        genre &&
        genre === params &&
        "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
      }`}
    >
      {title}
    </Link>
  );
}
