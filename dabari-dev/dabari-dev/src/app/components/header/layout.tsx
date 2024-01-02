"use client";

import React from "react";
import MainNav from "../main-nav";
import { usePathname } from "next/navigation";
import { cn } from "../../../../lib/utils";

export default function HeaderLayout() {
  const pathName = usePathname();

  return (
    <div
      className={cn(
        pathName === "/getStarted" || pathName === "/login" ? "hidden" : "block"
      )}
    >
      <div
        className={cn(
          "lg:px-4 xl:px-32 lg:flex h-24  items-center justify-between py-4 hidden md:border-b",
          pathName === "/" ? "bg-[#3d4b5a41]" : "bg-[#3D4B5A]"
        )}
      >
        <MainNav />
      </div>
      <div
        className={cn(
          "md:px-20 flex h-24 items-center justify-between py-4 lg:hidden",
          pathName === "/" ? "bg-[#3d4b5a41]" : "bg-[#3D4B5A]"
        )}
      >
        <MainNav />
      </div>
    </div>
  );
}
