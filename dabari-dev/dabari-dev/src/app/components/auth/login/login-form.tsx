"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";

import Loading from "../../../../../public/icons/other/loading.png";
import { cn } from "../../../../../lib/utils";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [onSubmitLoading] = useState(false);

  const onSubmit = async (fieldValues: FieldValues) => {
    try {
      const { data } = await axios.post("/api/auth/login", {
        identity: fieldValues["identity"],
        password: fieldValues["password"],
      });
      if (data && data.successful) {
        localStorage.setItem("userAuth", JSON.stringify(data.data));
        const redirectPath = searchParams.get("redirect");
        if (redirectPath) {
          return router.push(redirectPath);
        } else {
          return router.push("/dashboard");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="grid space-y-3">
        <div className="flex flex-col gap-3 py-2 text-white">
          <p className=" text-sm md:text-lg">Email</p>
          <input
            type="email"
            placeholder="Email"
            className={cn(
              "bg-[#F7F6F6] h-10 text-sm px-3 w-[17rem] md:w-[25rem] text-black",
              errors.email && "border-red-400 border-2"
            )}
            {...register("identity", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-3 py-2 text-white">
          <p className=" text-sm md:text-lg">Password</p>
          <input
            type="password"
            placeholder="Password"
            className={cn(
              "bg-[#F7F6F6] h-10 text-sm px-3 w-[17rem] md:w-[25rem] text-black",
              errors.password && "border-red-400 border-2"
            )}
            {...register("password", { required: true })}
          />
        </div>

        <div className="flex text-xs md:text-base justify-between  -pt-3 text-white font-light  ">
          <div>
            <a href="/" className="border-b">
              Forgot password ?
            </a>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" />
            <span>Remember me</span>
          </div>
        </div>

        <div className="pt-7 flex ">
          <button
            type="submit"
            className="bg-[#4E596A] h-10 text-lg w-[17rem] md:w-[25rem] text-white flex items-center justify-center"
          >
            {onSubmitLoading ? (
              <Image
                src={Loading}
                alt="log"
                height={20}
                loading="lazy"
                className="spin-in animate-spin"
              />
            ) : (
              <p>Login</p>
            )}
          </button>
        </div>
      </form>
      <div className="flex items-center text-white justify-center flex-col gap-6 text-xs md:text-base">
        <div>
          <p>
            Dont have an account?{" "}
            <a href="#" className="border-b mb-1">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
