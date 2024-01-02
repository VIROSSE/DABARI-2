"use client"

import Link from "next/link"
import React from "react"
import { MainNavItem } from "../../../types/type"
import { cn } from "../../../lib/utils"
import { useLockBody } from "../../../hooks/use-lock-body"
import { User, X } from "lucide-react"
import { usePathname } from "next/navigation"


interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
  setShowMobileMenu: (item: boolean) => void
}

export function MobileNav({ items, children, setShowMobileMenu }: MobileNavProps) {
  useLockBody();
  const pathName = usePathname();


  const onLinkClick = () => {
    setShowMobileMenu(false)

    // setTimeout(() => {
    //   if (typeof window !== undefined) {
    //     window.location.reload();
    //   }
    // }, 150)

  };

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden text-white"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md mobile-header-gradient-background p-4 text-popover-foreground shadow-md">
        <button
          className="flex items-center space-x-2 lg:hidden"
          onClick={() => setShowMobileMenu(false)}
        >
          <X size={30} />
        </button>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              onClick={onLinkClick}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60", pathName === item?.href && 'underline'
              )}
            >
              {item.title}
            </Link>
          ))}

          <div className="border-t mt-3 border-gray-300 py-2">
            <Link
              onClick={() => setShowMobileMenu(false)}
              href={"/login"}
              className={cn(
                "flex w-full space-x-2 items-center rounded-md p-2 text-sm font-medium hover:underline"
              )}
            >
              <User size={20} className="-mt-1" />
              <span>Login</span>
            </Link>
          </div>
        </nav>
        {children}
      </div>
    </div>
  )
}
