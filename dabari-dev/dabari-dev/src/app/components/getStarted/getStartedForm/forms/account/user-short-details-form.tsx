import React from "react";

interface Props {
  userData: any;
}

export default function UserShortDetailsForm({ userData }: Props) {
  return (
    <div className="grid space-y-2 mb-10">
      <div className="grid  text-[#455A64]">
        <p className="font-bold text-lg">Account </p>
        <p className=" text-base">Your account information</p>
      </div>
      <div className="grid space-y-2">
        <div className="flex flex-col gap-3 py-2 text-[#37474F] ">
          <p className=" text-sm  font-semibold">Name</p>
          <input
            type="text"
            disabled
            value={userData?.name}
            placeholder="Enter your name"
            className="bg-[#F7F6F6] h-9 text-sm px-3 w-[20rem] md:w-[23rem] text-black disabled:cursor-not-allowed"
          />
        </div>

        <div className="flex flex-col gap-3 py-2 text-[#37474F]">
          <p className=" text-sm  font-semibold">Surname</p>
          <input
            type="text"
            disabled
            value={userData?.surname}
            placeholder="Enter your surname"
            className="bg-[#F7F6F6] h-9 text-sm px-3 w-[20rem] md:w-[23rem] text-black disabled:cursor-not-allowed"
          />
        </div>

        <div className="flex flex-col gap-3 py-2 text-[#37474F]">
          <p className=" text-sm  font-semibold">Email</p>
          <input
            type="email"
            disabled
            value={userData?.email}
            placeholder="Enter your email"
            className="bg-[#F7F6F6] h-9 text-sm px-3 w-[20rem] md:w-[23rem] text-black disabled:cursor-not-allowed"
          />
        </div>
      </div>
    </div>
  );
}
