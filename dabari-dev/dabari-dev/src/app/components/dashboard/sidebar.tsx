"use client";

import Link from "next/link";
import { useState } from "react";

import VideoPlayerIcon from "../svg/videoPlayerIcon";
import PdfIcon from "../svg/pdfIcon";
import Menu from "./menu";
import { cn } from "../../../../lib/utils";
import { X } from "lucide-react";
import Hamburger from "../svg/hamburger";
import Image from "next/image";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex md:hidden items-center justify-between px-[1rem] py-[1rem]">
        <Link href="/dashboard">
          <Image
            src="/banners/horizontal-logo.png"
            width={688}
            height={135}
            alt=""
            className="h-[40px] w-auto"
          />
        </Link>

        <button type="button" onClick={() => setIsOpen(true)}>
          <Hamburger />
        </button>
      </header>
      <SidebarContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

function SidebarContent({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <div
      className={cn(
        "md:relative px-[1rem] md:px-[2rem] pt-[1rem] md:py-[2.5rem]",
        "w-full md:w-[350px] h-full md:flex flex-col items-stretch",
        "bg-[#F8F8F8] md:bg-[#F8F8F89C]",
        {
          "fixed z-50 inset-0": isOpen,
          "hidden ": !isOpen,
        }
      )}
    >
      <header className="flex items-center justify-between mb-[2rem] md:mb-[4rem]">
        <Link href="/dashboard" onClick={() => setIsOpen(false)}>
          <Image
            src="/banners/horizontal-logo.png"
            width={688}
            height={135}
            alt=""
            className="h-[40px] w-auto"
          />
        </Link>

        {isOpen && (
          <button type="button" onClick={() => setIsOpen(false)}>
            <X />
          </button>
        )}
      </header>

      <div className="flex-1 overflow-y-auto">
        <Menu
          closeSidebar={() => {
            setIsOpen(false);
          }}
        />
        <div className="flex items-center gap-6 mt-[3.5rem]">
          <button
            type="button"
            className="w-[4.812rem] aspect-square bg-[#9CAABA] rounded-full flex items-center justify-center"
          >
            <VideoPlayerIcon />
          </button>

          <button
            type="button"
            className="w-[4.812rem] aspect-square bg-[#9CAABA] rounded-full flex items-center justify-center"
          >
            <PdfIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
