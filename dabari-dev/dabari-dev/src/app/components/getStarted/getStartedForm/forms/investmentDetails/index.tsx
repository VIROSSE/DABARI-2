import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { slideInFromRight } from "../../../../../../../utils/motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import { SubmitButtonWithIcon } from "@/app/components/ui/button";
import CreateInvestmentDetailsForm from "./create-investment-details-form";
import { GetUserApiResponse } from "@/app/dashboard/(api)/user";

interface Props {
  handleNext: () => void;
  currentSlide: number;
  slides: any;
}

export default function InvestmentDetails({
  handleNext,
  currentSlide,
  slides,
}: Props) {
  const userAuth =
    typeof window !== "undefined" &&
    (localStorage.getItem("userAuth") as string);

  const [userData, setUserData] = useState<GetUserApiResponse>();

  const ref = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [onSubmitLoading, setOnSubmitLoading] = useState(false);

  const onSubmit = async (data: any) => {
    if (!userData) {
      console.log("undefined userdata");
      return;
    }

    setOnSubmitLoading(true);

    const bodyData = {
      ...data,
      user_id: userData.id,
    };

    var formData = new FormData();

    Object.keys(bodyData).forEach((key) => {
      const value = bodyData[key];

      if (value instanceof File) {
        formData.append(key, value);
      } else if (typeof value === "object" && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://dabari-back.cloud-station.app/api/collections/investment_details/records`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          setOnSubmitLoading(false);
          handleNext();
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

  useEffect(() => {
    if (userAuth) {
      try {
        const userJson = JSON.parse(userAuth);
        setUserData(userJson);
      } catch {}
    }
  }, [userAuth]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <motion.div ref={ref} initial="hidden" animate="visible">
          <motion.div variants={slideInFromRight(0)} className="grid space-y-2">
            <CreateInvestmentDetailsForm
              errors={errors}
              control={control}
              register={register}
            />
          </motion.div>
        </motion.div>

        <div className="absolute right-[6rem] bottom-4 md:bottom-10 z-10">
          <SubmitButtonWithIcon
            title="Next"
            className=" text-sm px-7 font-semibold"
            onSubmitLoading={onSubmitLoading}
          />
        </div>
      </form>
      {/* {userData && (
                <div className='absolute right-[6rem] bottom-4 md:bottom-10 z-10'>
                    <NextButton onClick={handleNext} disabled={currentSlide === slides.length - 1} />
                </div>
            )} */}
    </div>
  );
}
