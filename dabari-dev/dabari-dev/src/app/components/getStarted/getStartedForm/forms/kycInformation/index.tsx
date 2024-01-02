import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import BusinessOwned from "./business-owned";
import Employment from "./employment";
import Inheritance from "./inheritance";
import SourceWealth from "./source-wealth";
import { slideInFromRight } from "../../../../../../../utils/motion";
import IncomeSource from "./ income-sources";
import { SubmitButtonWithIcon } from "@/app/components/ui/button";
import NextButton from "../../next-button";
import { GetUserApiResponse } from "@/app/dashboard/(api)/user";
import FactaFormModal from "../factaFormModal";
import { generatePDFBlob } from "../../../../../../../utils/pdfUtils";

interface Props {
  handleNext: () => void;
  currentSlide: number;
  slides: any
}

export default function KycInformationForm({
  handleNext,
  currentSlide,
  slides
}: Props) {
  const userAuth =
    typeof window !== "undefined" &&
    (localStorage.getItem("userAuth") as string);

  const [userData, setUserData] = useState<GetUserApiResponse>();

  const isUSResident = false;

  const storedUserInfo =
    typeof window !== "undefined" && localStorage.getItem("userAuth");

  const userInfo = storedUserInfo && JSON.parse(storedUserInfo);
  const ref = useRef(null);
  const [checkMode, setCheckMode] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const [onSubmitLoading, setOnSubmitLoading] = useState(false);

  const onSubmit = async (data: any) => {
    console.log("undefined userdata");
    if (!userData) {
      return;
    }
    setOnSubmitLoading(true);
    const bodyData = {
      company_name: data?.company_name,
      ownership: Number(data?.ownership),
      country_of_operation: data?.country_of_operation,
      year: Number(data?.year),
      line_of_business: data?.line_of_business,
      website: data?.website,
      annual_turnover: data?.annual_turnover,
      average_share_of_annual_profit: data?.average_share_of_annual_profit,
      employment_company_name: data?.employment_company_name,
      employment_line_of_busines: data?.employment_line_of_busines,
      employment_position: data?.employment_position,
      period_of_employment: data?.period_of_employment,
      employment_country: data?.employment_country,
      average_annaul_salary: Number(data?.average_annaul_salary),
      donor_name: data?.donor_name,
      relationship_to_client: data?.relationship_to_client,
      total_amount_received: Number(data?.total_amount_received),
      your_received: Number(data?.your_received),
      nature_of_inheritance: data?.nature_of_inheritance ?? "other",
      brief_profile_of_donor: data?.brief_profile_of_donor,
      other_income_source: data?.other_income_source,
      other_income_total_annual_value: Number(
        data?.other_income_total_annual_value
      ),
      user_id: userData.id,
      nature_of_wealth: checkMode ?? "other",
    };
    let body = JSON.stringify(bodyData);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dabari-back.cloud-station.app/api/collections/wealth_info/records",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
      data: body,
    };

    let getUserWealthConfig = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://dabari-back.cloud-station.app/api/collections/wealth_info/records?filter=user_id.id="${userData.id}"`,
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
            .request(getUserWealthConfig)
            .then(async (response) => {
              if (response.status === 200) {
                localStorage.setItem(
                  "userWealthData",
                  JSON.stringify(response?.data)
                );


                // Generate and Submit FACTA PDF form

                if (isUSResident) {
                  try {
                    const pdfBlob = await generatePDFBlob(data);

                    const formData = new FormData();
                    formData.append('form', pdfBlob, 'facta.pdf');
                    formData.append('user_id', `${userData?.id}`);

                    const response = await axios.post('https://dabari-back.cloud-station.app/api/collections/fatca/records', formData, {
                      headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${userData.token}`
                      },
                    });
                    console.log('API Response:', response.data);

                  } catch (error) {
                    console.error('Error:', error);
                  }
                }




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
    if (userInfo?.nature_of_wealth === "business") {
      setCheckMode("business");
    } else if (userInfo?.nature_of_wealth === "employment") {
      setCheckMode("employment");
    } else if (userInfo?.nature_of_wealth === "inheritance") {
      setCheckMode("inheritance");
    } else {
      setCheckMode("other");
    }
  }, [userInfo?.nature_of_wealth]);

  useEffect(() => {
    if (userAuth) {
      try {
        const userJson = JSON.parse(userAuth);
        setUserData(userJson);
      } catch { }
    }
  }, [userAuth]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <motion.div ref={ref} initial="hidden" animate="visible">
          <motion.div variants={slideInFromRight(0)} className="grid space-y-5">
            <SourceWealth />
            <BusinessOwned
              register={register}
              errors={errors}
              checkMode={checkMode}
              setCheckMode={setCheckMode}
            />

            <Employment
              register={register}
              errors={errors}
              checkMode={checkMode}
              setCheckMode={setCheckMode}
            />

            <Inheritance
              register={register}
              errors={errors}
              checkMode={checkMode}
              setCheckMode={setCheckMode}
            />

            <IncomeSource
              register={register}
              errors={errors}
              checkMode={checkMode}
              setCheckMode={setCheckMode}
            />

            {isUSResident && <FactaFormModal register={register} errors={errors} />}
          </motion.div>
        </motion.div>

        {!userInfo?.nature_of_wealth && (
          <div className="absolute right-[6rem] bottom-4 md:bottom-10 z-10">
            <SubmitButtonWithIcon
              disabled={onSubmitLoading || !checkMode}
              title="Next"
              className="text-sm px-7 font-semibold"
              onSubmitLoading={onSubmitLoading}
            />
          </div>
        )}
      </form>
      {userInfo?.nature_of_wealth && (
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
