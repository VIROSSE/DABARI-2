"use client";
import React, { useState } from "react";
import Header from "./form-header";
import BackButton from "./back-button";
import AccountForm from "./forms/account";
import KycInformationForm from "./forms/kycInformation";
import PersonalDetails from "./forms/personalDetails";
import InvestmentDetails from "./forms/investmentDetails";

import Confirm from "./forms/confirm";
import { GetUserApiResponse } from "@/app/dashboard/(api)/user";

const slides = [
  "account",
  "personalDetails",
  "kycInformation",
  "investmentDetails",
  "confirm",
  "dashboard",
];

interface Props {
  userData: GetUserApiResponse | null;
  currentSlide: number;
  setCurrentSlide: (currentSlide: number) => void;
}

export default function GetStartedForm({
  userData,
  currentSlide,
  setCurrentSlide,
}: Props) {
  const AccountSlide = currentSlide === 0;
  const PersonalDetailsSlide = currentSlide === 1;
  const KycInformationSlide = currentSlide === 2;
  const InvestmentDetailsSlide = currentSlide === 3;
  const ConfirmSlide = currentSlide === 4;

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="flex pt-12 pl-5 pr-5 pb-20 md:pl-32 md:pr-24 md:pb-32 flex-col gap-14 w-full relative">
      <div>
        <Header currentSlide={currentSlide} />
      </div>
      <div className="overflow-scroll w-full flex">
        {AccountSlide && (
          <AccountForm
            slides={slides}
            userData={userData}
            handleNext={handleNext}
            currentSlide={currentSlide}
          />
        )}

        {PersonalDetailsSlide && (
          <PersonalDetails
            slides={slides}
            handleNext={handleNext}
            currentSlide={currentSlide}
          />
        )}

        {KycInformationSlide && (
          <KycInformationForm
            slides={slides}
            handleNext={handleNext}
            currentSlide={currentSlide}
          />
        )}

        {InvestmentDetailsSlide && (
          <InvestmentDetails
            slides={slides}
            handleNext={handleNext}
            currentSlide={currentSlide}
          />
        )}

        {ConfirmSlide && (
          <Confirm
            slides={slides}
            handleNext={handleNext}
            currentSlide={currentSlide}
          />
        )}
      </div>
      <div className="absolute left-[1.5rem] md:left-[8rem] bottom-4 md:bottom-10 z-10">
        <BackButton onClick={handleBack} disabled={currentSlide === 0} />
      </div>
    </div>
  );
}
