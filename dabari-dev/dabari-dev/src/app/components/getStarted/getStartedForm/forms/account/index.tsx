import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { slideInFromRight } from "../../../../../../../utils/motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import { SubmitButtonWithIcon } from "@/app/components/ui/button";
import NextButton from "../../next-button";
import CreateUserForm from "./create-user-form";
import UserShortDetailsForm from "./user-short-details-form";
import { generateRandomCode } from "../../../../../../../lib/utils";
import { GetUserApiResponse } from "@/app/dashboard/(api)/user";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Props {
  handleNext: () => void;
  currentSlide: number;
  slides: any;
  userData: GetUserApiResponse | null;
}

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password can't be less than 8 character")
    .max(72, "Password can't be above 72"),
});

export default function AccountForm({
  userData,
  handleNext,
  currentSlide,
  slides,
}: Props) {
  const [formErrors, setFormErrors] = useState<
    { property: string; error: string }[]
  >([]);
  const ref = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [onSubmitLoading, setOnSubmitLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setOnSubmitLoading(true);
    const createAccountBodyData = {
      username: `${data.name
        .replace(/\s/g, "")
        .toLowerCase()}_${generateRandomCode()}`,
      email: data?.email,
      surname: data?.surname,
      emailVisibility: true,
      password: data?.password,
      passwordConfirm: data?.password,
      name: data?.name,
    };

    let createAccountBody = JSON.stringify(createAccountBodyData);

    let createAccountConfig = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dabari-back.cloud-station.app/api/collections/users/records",
      headers: {
        "Content-Type": "application/json",
      },
      data: createAccountBody,
    };

    axios
      .request(createAccountConfig)
      .then(async (response) => {
        if (response.status === 200) {
          const { email, password } = data;

          try {
            const { data } = await axios.post("/api/auth/login", {
              identity: email,
              password: password,
            });

            if (data && data.successful) {
              setOnSubmitLoading(false);
              localStorage.setItem("userAuth", JSON.stringify(data.data));
              handleNext();
            }
          } catch (error) {
            console.log(error);
            setOnSubmitLoading(false);
            toast.error(response?.data?.message ?? "Registration failed");
          }
        } else {
          setOnSubmitLoading(false);
          toast.error(response?.data?.message ?? "Registration failed");
        }
      })
      .catch((error: any) => {
        if (axios.isAxiosError(error)) {
          const { data } = error.response?.data;
          if (data) {
            const properties = Object.getOwnPropertyNames(data);
            const errors = properties.map((property) => {
              return { property, error: data[property].message };
            });
            setFormErrors(errors);
          }
        }
        setOnSubmitLoading(false);
        toast.error(error?.response?.data?.message ?? "Registration failed");
        console.error("An error occurred:", error);
      });
  };

  return (
    <div>
      {formErrors && (
        <ul className="list-disc mb-4">
          {formErrors.map((err) => (
            <li className="list-item text-red-500" key={err.property}>
              {err.property}: {err.error}
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <motion.div ref={ref} initial="hidden" animate="visible">
          <motion.div variants={slideInFromRight(0)} className="grid space-y-2">
            {userData ? (
              <UserShortDetailsForm userData={userData} />
            ) : (
              <CreateUserForm errors={errors} register={register} />
            )}
          </motion.div>
        </motion.div>

        {!userData && (
          <div className="absolute right-[6rem] bottom-4 md:bottom-10 z-10">
            <SubmitButtonWithIcon
              title="Next"
              className="text-sm px-7 font-semibold"
              onSubmitLoading={onSubmitLoading}
            />
          </div>
        )}
      </form>
      {userData && (
        <div className="absolute right-[6rem] bottom-4 md:bottom-10 z-10">
          <NextButton
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
          />
        </div>
      )}
    </div>
  );
}
