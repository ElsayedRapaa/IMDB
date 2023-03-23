"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function DarkMode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          className="text-xl hover:text-amber-500 cursor-pointer transition-colors"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdDarkMode
          className="text-xl hover:text-amber-500 cursor-pointer transition-colors "
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
