"use client";
import React, { useState } from "react";
import AccountSuccessfullyCreated from "./account-successfully-created";
import Image from "next/image";
import GetStartedForm from ".";

import BgImage from "../../../../../public/banners/get-started-bg.png";
import Logo from "../../../../../public/icons/logo/mini-logo2.png";
import LogoName from "../../../../../public/banners/logo-name.png";
import { GetUserApiResponse } from "@/app/dashboard/(api)/user";

export default function GetStartedLayout({
  userData,
}: {
  userData: GetUserApiResponse | null;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const accountCreated = currentSlide === 5;
  return (
    <>
      {accountCreated ? (
        <AccountSuccessfullyCreated />
      ) : (
        <div className="flex h-screen">
          <div className="hidden md:flex w-full max-w-lg relative">
            <Image
              src={BgImage}
              alt="get started"
              style={{ objectFit: "cover" }}
              fill
              loading="lazy"
            />
            <div className="absolute">
              <div className="grid space-y-3 p-10">
                <Image
                  src={Logo}
                  alt="get started"
                  height={80}
                  loading="lazy"
                />
                <Image
                  src={LogoName}
                  alt="get started"
                  height={13}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <GetStartedForm
              userData={userData}
              setCurrentSlide={setCurrentSlide}
              currentSlide={currentSlide}
            />
          </div>
        </div>
      )}
    </>
  );
}
