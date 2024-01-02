import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { slideInFromRight } from "../../../../../../../utils/motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import { SubmitButtonWithIcon } from "@/app/components/ui/button";
import CreatePersonalDetailsForm from "./create-personal-details-form";
import NextButton from "../../next-button";
import { GetUserApiResponse } from "@/app/dashboard/(api)/user";

interface Props {
  handleNext: () => void;
  currentSlide: number;
  slides: any;
}
export default function PersonalDetails({
  handleNext,
  currentSlide,
  slides,
}: Props) {
  const userAuth = localStorage.getItem("userAuth") as string;

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

    function renderRidentJsonData() {
      if (data?.uae_resident_building_name) {
        return {
          uae_resident_building_name: data?.uae_resident_building_name,
          uae_resident_flat_number: data?.uae_resident_flat_number,
          uae_resident_city: data?.uae_resident_city,
        };
      }
      return {
        non_uae_resident_address_line: data?.non_uae_resident_address_line,
        non_uae_resident_address_country:
          data?.non_uae_resident_address_country,
        non_uae_resident_address_city: data?.non_uae_resident_address_city,
        non_uae_resident_address_postbox:
          data?.non_uae_resident_address_postbox,
      };
    }

    const updatedData = {
      ...data,
      address: renderRidentJsonData(),
    };

    var formData = new FormData();

    Object.keys(updatedData).forEach((key) => {
      const value = updatedData[key];

      if (value instanceof File) {
        formData.append(key, value);
      } else if (typeof value === "object" && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    });

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `https://dabari-back.cloud-station.app/api/collections/users/records/${userData.id}`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
      data: formData,
    };

    let getUserInfoConfig = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://dabari-back.cloud-station.app/api/collections/users/records/${userData.id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          axios
            .request(getUserInfoConfig)
            .then((response) => {
              if (response.status === 200) {
                setOnSubmitLoading(false);
                handleNext();
              } else {
                toast.error(
                  response?.data?.message ??
                    "Something happened wrong due get user data!"
                );
              }
            })
            .catch((error: any) => {
              toast.error(
                error?.response?.data?.message ??
                  "Something happened wrong due get user data!"
              );
              console.error("An error occurred:", error);
            });
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
            <CreatePersonalDetailsForm
              userInfo={userData}
              errors={errors}
              control={control}
              register={register}
            />
          </motion.div>
        </motion.div>

        {!userData?.nationality && (
          <div className="absolute right-[6rem] bottom-4 md:bottom-10 z-10">
            <SubmitButtonWithIcon
              title="Next"
              className=" text-sm px-7 font-semibold"
              onSubmitLoading={onSubmitLoading}
            />
          </div>
        )}
      </form>
      {userData?.nationality && (
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
