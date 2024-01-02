"use client";

import { cn } from "../../../../lib/utils";
import GetInTouchIcon from "../svg/getInTouchIcon";
import InstituteIcon from "../svg/instituteIcon";
import DashboardIcon from "../svg/dashboardIcon";
import CurrencyIcon from "../svg/currencyIcon";
import ContactIcon from "../svg/contactIcon";
import ChevronDown from "../svg/chevronDown";
import DepositIcon from "../svg/depositIcon";
import InvestIcon from "../svg/investIcon";
import TrackIcon from "../svg/trackIcon";
import { useState } from "react";
import { useRouter } from "next/navigation";

type MenuItemProps = {
  text: string;
  icon: React.ReactNode;
  link: string;
  closeSidebar: () => void;
  className?: string;
};

function MenuItem({
  text,
  icon,
  link,
  className,
  closeSidebar,
}: MenuItemProps) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(link);
        closeSidebar();
      }}
      className={cn(
        "flex items-center gap-4 w-full px-[1.5rem] py-[1rem] rounded-[0.625rem]",
        "bg-[#9BA9B9] text-white text-[1.25rem] font-bold",
        className
      )}
    >
      {icon}
      {text}
    </button>
  );
}

function SimpleMenuItem({
  text,
  icon,
  link,
  className,
  closeSidebar,
}: MenuItemProps) {
  const router = useRouter();
  return (
    <button
      className={cn(
        "flex items-center justify-start text-[1rem] gap-3",
        className
      )}
      onClick={() => {
        router.push(link);
        closeSidebar();
      }}
    >
      {icon}
      {text}
    </button>
  );
}

function DepositMoneyMenuItem({ closeSidebar }: { closeSidebar: () => void }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div
      role="button"
      className={cn(
        "w-full px-[1.5rem] py-[1rem] rounded-[0.625rem] bg-[#9BA9B9]"
      )}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center gap-4 text-white text-[1.25rem] font-bold">
        <DepositIcon />
        Deposit money
        <ChevronDown
          className={cn("transition-transform duration-200", {
            "rotate-180": !open,
          })}
        />
      </div>

      {open && (
        <div className="flex flex-col items-stretch gap-[1.7rem] mt-[2rem]">
          <button
            className="flex items-center gap-3 text-[#37474F] text-[0.875rem] font-bold"
            onClick={() => {
              router.push("/dashboard/deposit");
              closeSidebar();
            }}
          >
            <InstituteIcon />
            Amount
          </button>

          <button
            className="flex items-center gap-3 text-[#37474F] text-[0.875rem] font-bold"
            onClick={() => {
              router.push("/dashboard/deposit");
              closeSidebar();
            }}
          >
            <CurrencyIcon />
            Currency
          </button>

          <button
            className="flex items-center gap-3 text-[#37474F] text-[0.875rem] font-bold"
            onClick={() => {
              router.push("/dashboard/deposit");
              closeSidebar();
            }}
          >
            <ContactIcon />
            Get in touch
          </button>
        </div>
      )}
    </div>
  );
}

export default function Menu({ closeSidebar }: { closeSidebar: () => void }) {
  return (
    <div className="flex flex-col items-stretch gap-[1.6rem]">
      <MenuItem
        text="Dashboard"
        link="/dashboard"
        icon={<DashboardIcon />}
        closeSidebar={closeSidebar}
      />

      <DepositMoneyMenuItem closeSidebar={closeSidebar} />

      <SimpleMenuItem
        text="Invest in a new project"
        icon={<InvestIcon className="relative top-[-2px]" />}
        link="/dashboard/invest"
        closeSidebar={closeSidebar}
      />

      <SimpleMenuItem
        text="Track my Personal Investment"
        icon={<TrackIcon />}
        link="/dashboard/track-investment"
        closeSidebar={closeSidebar}
      />

      <SimpleMenuItem
        text="Get in touch"
        icon={<GetInTouchIcon />}
        link="/dashboard/contact"
        closeSidebar={closeSidebar}
      />
    </div>
  );
}
