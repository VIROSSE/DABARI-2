import React from "react";
import FocusFeatureCard from "./focus-feature-card";
import { focusFeatures } from "../../../../utils/CONSTANTS";

interface OurFocusSectionProps {
  className?: string;
}

export default function OurFocusSection({ className }: OurFocusSectionProps) {
  return (
    <div className="isolate h-full bg-white -mt-1 pt-28 md:py-28   ">
      <div className="flex justify-center flex-col gap-7 items-center text-center space-y-10">
        <div className="grid  md:max-w-2xl space-y-5 px-9 md:px-0">
          <h1 className="text-3xl md:text-4xl  text-[#3E4B59] font-semibold">
            {" "}
            Our Focus Areas
          </h1>
          <p className="">
            We believe in creating unparalleled opportunities for financial
            growth and prosperity. Our Super Promise is not just an investment
            opportunity but a gateway to a future where your capital is not just
            secured but empowered to thrive.
          </p>
        </div>

        <div className="flex w-full max-w-5xl ">
          <div className="flex  w-full gap-5 flex-wrap md:flex-nowrap px-10 md:px-0">
            {focusFeatures?.map((item, index) => (
              <FocusFeatureCard
                bgColor={item?.bgColor}
                heading={item?.heading}
                title1={item?.title1}
                title2={item?.title2}
                description={item?.description}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
