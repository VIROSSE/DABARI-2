import React from "react";
import { cn } from "../../../../../../../lib/utils";
import Image from "next/image";
import Security from "../../../../../../../public/icons/other/secure.png";

interface Props {
  register: any;
  errors: any;
}

export default function CreateUserForm({ register, errors }: Props) {
  return (
    <div className="grid space-y-2">
      <div className="grid  text-[#455A64]">
        <p className="font-bold text-lg">Create an account</p>
        <p className="text-base">To better control your investments</p>
      </div>
      <div className="grid space-y-2">
        <div className="flex flex-col gap-3 py-2 text-[#37474F]">
          <p className=" text-sm  font-semibold">Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            className={cn(
              "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black",
              errors.name && "border-red-400 border-2"
            )}
            {...register("name", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-3 py-2 text-[#37474F]">
          <p className=" text-sm  font-semibold">Surname</p>
          <input
            type="text"
            placeholder="Enter your surname"
            className={cn(
              "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black",
              errors.surname && "border-red-400 border-2"
            )}
            {...register("surname", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-3 py-2 text-[#37474F]">
          <p className=" text-sm  font-semibold">Email</p>
          <input
            type="email"
            placeholder="Enter your email"
            className={cn(
              "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black",
              errors.email && "border-red-400 border-2"
            )}
            {...register("email", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-3 py-2 text-[#37474F]">
          <p className=" text-sm  font-semibold">password</p>
          <input
            type="password"
            min={8}
            max={72}
            placeholder="Enter your password"
            className={cn(
              "bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black",
              errors.password && "border-red-400 border-2"
            )}
            {...register("password", { required: true })}
          />
          {errors?.password && (
            <p className='px-1 text-xs text-red-600'>{errors?.password?.message as string}</p>
          )}
        </div>
      </div>


      <div className="flex items-center  gap-2 text-sm">
        <Image src={Security} alt="log" height={21} loading="lazy" />
        <p>Save and secure technology guaranteed.</p>
      </div>
    </div>
  );
}
