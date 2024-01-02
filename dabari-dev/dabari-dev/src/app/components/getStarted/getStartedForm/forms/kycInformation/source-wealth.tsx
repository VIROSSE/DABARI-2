import React, { useRef } from "react";

export default function SourceWealth() {
  const storedUserInfo =
    typeof window !== "undefined" && localStorage.getItem("userAuth");
  const userInfo = storedUserInfo && JSON.parse(storedUserInfo);

  return (
    <div className="grid space-y-5 w-full">
      <div className="flex gap-2   text-[#455A64] flex-col">
        <p className="font-bold text-lg">Source of wealth addendum</p>
      </div>

      <div className="flex flex-col gap-3 py-2 text-[#37474F] w-full px-2">
        <p className=" text-sm  font-semibold">Enter your name</p>
        <div className="bg-[#F7F6F6] h-9 w-[20rem] text-sm px-3 py-2 md:w-[25rem] text-black disabled:cursor-not-allowed">
          {userInfo?.record?.name}
        </div>
      </div>
    </div>
  );
}
