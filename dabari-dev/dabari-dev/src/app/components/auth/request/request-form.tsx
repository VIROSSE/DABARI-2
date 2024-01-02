"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import { Input } from "../../ui/input";
import { cn } from "../../../../../lib/utils";
import { SubmitButtonWithIcon } from "../../ui/button";

export default function RequestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [onSubmitLoading, setOnSubmitLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  function checkPasswordMatch(e: any) {
    if (e !== password) {
      setPasswordMatch(false);
    } else setPasswordMatch(true);

    return null;
  }

  const onSubmit = async (data: any) => {
    setOnSubmitLoading(true);
    let body = JSON.stringify(data);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://blocfx-backend.cloud-station.xyz/api/v1/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    };

    axios
      .request(config)
      .then((response) => {
        if (response.status === 201) {
          setOnSubmitLoading(false);
          toast.success(response?.data?.message ?? "Successfully registered!");
        } else {
          setOnSubmitLoading(false);
          toast.error(response?.data?.message ?? "Registration failed");
        }
      })
      .catch((error: any) => {
        setOnSubmitLoading(false);
        toast.error(error?.response?.data?.message ?? "Registration failed");
        console.error("An error occurred:", error);
      });
  };

  return (
    <div className=" bg-white  items-center justify-center flex flex-col gap-10">
      <div className="flex">
        <h1 className="text-2xl md:text-3xl leading-8 text-center">
          Waiting List Registration
        </h1>
      </div>
      <div className="flex w-full   flex-col items-center gap-6 md:px-12">
        <form onSubmit={handleSubmit(onSubmit)} className="grid space-y-4">
          <Input
            title="Email"
            type="text"
            className={cn(errors.email && "border border-red-400")}
            {...register("email", { required: true })}
          />

          <Input
            title="Password"
            type="password"
            className={cn(errors.password && "border border-red-400")}
            {...register("password", { required: true })}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="grid">
            <Input
              title="Retype Password"
              type="password"
              onChange={(e) => checkPasswordMatch(e.target.value)}
            />
            {!passwordMatch && (
              <p className="text-red-400 text-xs text-left p-1 px-2 -mb-2">
                Retype password is not matched!
              </p>
            )}
          </div>

          <div className="grid md:flex items-center gap-4 ">
            <Input
              title="First name"
              type="text"
              className={cn(errors.firstname && "border border-red-400")}
              {...register("firstname", { required: true })}
            />

            <Input
              title="Last name"
              type="text"
              className={cn(errors.lastname && "border border-red-400")}
              {...register("lastname", { required: true })}
            />
          </div>

          <Input
            title="Company"
            type="text"
            className={cn(errors.company && "border border-red-400")}
            {...register("company", { required: true })}
          />

          <Input
            title="Phone number"
            type="text"
            className={cn(errors.phone_number && "border border-red-400")}
            {...register("phone_number", { required: true })}
          />

          <Input
            title="Address"
            type="text"
            className={cn(errors.address && "border border-red-400")}
            {...register("address", { required: true })}
          />

          <Input
            title="Town"
            type="text"
            className={cn(errors.town && "border border-red-400")}
            {...register("town", { required: true })}
          />

          <Input
            title="Region"
            type="text"
            className={cn(errors.region && "border border-red-400")}
            {...register("region", { required: true })}
          />

          <Input
            title="Postcode / zip"
            type="number"
            className={cn(errors.postcode && "border border-red-400")}
            {...register("postcode", { required: true })}
          />

          <Input
            title="Country"
            type="text"
            className={cn(errors.country && "border border-red-400")}
            {...register("country", { required: true })}
          />

          <div className="text-xs flex justify-end px-5 -pt-3 ">
            <div>
              <span>Fields marked</span> <span className="text-red-500">*</span>{" "}
              <span>are required</span>
            </div>
          </div>

          <div className="pt-5 md:pt-10  flex flex-col justify-center items-center gap-5">
            <SubmitButtonWithIcon
              title="Sign up"
              className="font-normal h-12"
              disabled={onSubmitLoading || !passwordMatch}
            />

            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-xs">Remember me</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
