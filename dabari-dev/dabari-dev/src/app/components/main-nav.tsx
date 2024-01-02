"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { MobileNav } from "./mobile-nav";
import { cn } from "../../../lib/utils";
import Image from "next/image";
import HeaderLogo from "../../../public/icons/logo/header-logo.svg";
import HeaderLogo2 from "../../../public/icons/logo/header-logo2.svg";

import { usePathname } from "next/navigation";
import {
  menuConfig,
  menuConfigLeft,
  menuConfigRight,
} from "../../../config/menu";
import { ButtonWithIcon, buttonVariants } from "./ui/button";

interface MainNavProps {
  children?: React.ReactNode;
}

export default function MainNav({ children }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const pathName = usePathname();

  function checkMenuTextColor() {
    if (pathName === "/" || pathName === "/responsibility") return "text-white";
    if (pathName === "/company") return "text-black";
    return "text-black";
  }

  const onLinkClick = (itemPath: string) => {
    if (itemPath === "/sections/#ourFocusArea") {
      window.scrollTo({ top: 962, left: 0, behavior: "auto" });
    }
    if (itemPath === "/sections/#solutions") {
      window.scrollTo({ top: 962, left: 0, behavior: "auto" });
    }
    if (itemPath === "/sections/#responsibility") {
      window.scrollTo({ top: 962, left: 0, behavior: "auto" });
    }

    return null;
  };

  return (
    <div className="flex gap-4 md:gap-0 w-full md:justify-end md:items-end bg-transparent text-white">
      <div className="hidden lg:flex items-end w-full ">
        <nav className={cn("gap-10 flex")}>
          {menuConfigRight.mainNav?.map((item, index) => (
            <Link
              onClick={() => onLinkClick(item?.href)}
              key={index}
              href={item.disabled ? "/" : item.href}
              className={cn(
                "lg:text-[0.84rem] xl:text-base uppercase whitespace-nowrap",
                pathName === item?.href && " border-b-2"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="hidden lg:flex items-start justify-center mx-4 shrink-0">
        <Link href="/">
          <Image src={HeaderLogo} alt="logo" loading="lazy" height={60} />
        </Link>
      </div>

      <div className="hidden lg:flex items-center  w-full justify-center">
        <nav className={cn("gap-10 flex justify-center items-center")}>
          {menuConfigLeft.mainNav?.map((item, index) => (
            <Link
              onClick={() => onLinkClick(item?.href)}
              key={index}
              href={item.disabled ? "/" : item.href}
              className={cn(
                "lg:text-[0.84rem] xl:text-sm uppercase whitespace-nowrap",
                {
                  "border-b-2": pathName === item?.href,
                }
              )}
            >
              {item.title}
            </Link>
          ))}

          <Link
            href="/getStarted"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "whitespace-nowrap space-x-3 h-7 bg-gradient-to-tr from-[#567da8] to-[#85AED5] rounded-md"
            )}
          >
            <p className="text-sm">GET STARTED</p>
          </Link>
        </nav>

        {/* <nav className="space-x-3 lg:flex hidden justify-center items-center">
          <div className="lg:px-4 px-10 xl:px-20 flex h-20 items-center  py-4 ">
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4 bg-gradient-to-tr from-[#5f6878] to-[#717d90] rounded-xl gap-2"
              )}
            >
              <User />
              <span>Sign up</span>
            </Link>
          </div>
        </nav> */}
      </div>

      <div className="flex items-center justify-between w-full lg:hidden pr-5 text-white">
        <div className="ml-7">
          <Link href="/">
            <Image src={HeaderLogo} alt="logo" loading="lazy" height={50} />
          </Link>
        </div>
        <div className="flex gap-4">
          <button
            className="flex items-center space-x-2 lg:hidden border rounded-full p-1"
            onClick={() => setShowMobileMenu(true)}
          >
            <Menu size={30} />
          </button>
        </div>
      </div>

      {showMobileMenu && (
        <MobileNav
          items={menuConfig.mainNav}
          setShowMobileMenu={setShowMobileMenu}
        >
          {children}
        </MobileNav>
      )}
    </div>
  );
}
