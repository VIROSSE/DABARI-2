import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginForm from "@/app/components/auth/login/login-form";

import BgImage from "../../../../../public/banners/login-bg-4-min.png";
import BgImageMobile from "../../../../../public/banners/login-mobile-4-min.png";
import Logo from "../../../../../public/icons/logo/mini-logo2.png";
import LogoName from "../../../../../public/banners/logo-name.png";

export default function LoginPage() {
  const DesDesktopView = () => {
    return (
      <div className="hidden md:flex flex-col p-10 w-full h-full gap-3 z-50 relative overflow-y-auto">
        <div className="flex items-end">
          <div className="flex w-[50%] items-start justify-start">
            <Link
              href={"/"}
              className="flex justify-center items-center flex-col gap-2"
            >
              <Image src={Logo} alt="log" height={70} loading="lazy" />
              <Image
                src={LogoName}
                alt="investment"
                height={8}
                loading="lazy"
              />
            </Link>
          </div>
          <div className="flex w-full pl-24 -pt-10">
            <h1 className="text-5xl font-bold text-white">Welcome back!</h1>
          </div>
        </div>
        <div className="w-full flex flex-col text-black gap-24 justify-end md:h-auto ">
          <div className="grid w-full py-28 gap-10">
            <div className="flex flex-col gap-6 md:gap-8 items-center   ">
              <div className="flex text-white text-2xl items-center flex-col">
                <p>Login to continue</p>
              </div>
            </div>

            <div className="max-w-lg items-center pl-10 w-full flex mx-auto">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DesMobileView = () => {
    return (
      <div className="relative flex md:hidden h-full z-10 flex-col p-10 w-full gap-3 overflow-y-auto">
        <div className=" w-full  flex flex-col  text-black gap-24 justify-end  md:h-auto ">
          <div className="grid  w-full py-36 gap-10">
            <div className="flex flex-col  items-center   ">
              <div className="flex text-white items-center flex-col gap-4">
                <p className="font-bold text-2xl">Welcome back!</p>
                <p>Login to continue</p>
              </div>
            </div>

            <div className="max-w-xs items-center pl-5 md:pl-10 w-full  flex mx-auto">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <Image
        src={BgImage}
        alt="vip section"
        style={{ objectFit: "cover" }}
        fill
        loading="lazy"
        className="hidden md:block"
      />
      <Image
        src={BgImageMobile}
        alt="vip section"
        style={{ objectFit: "cover" }}
        fill
        loading="lazy"
        className="md:hidden"
      />
      <DesDesktopView />
      <DesMobileView />
    </div>
  );
}
