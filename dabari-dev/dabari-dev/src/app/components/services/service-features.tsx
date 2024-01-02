"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  capitalBubbleVariant,
  commercialBubbleVariant,
  fadeIn,
  feeBubbleVariant,
  institutionalBubbleVariant,
  scaleFromOneToTen,
  slideInFromLeft,
  transformFromCenterToTopLeft,
  wealthBubbleVariant,
  yearlyReturnBubbleVariant,
} from "../../../../utils/motion";

import Image from "next/image";
import BgImage from "../../../../public/banners/yearly-bg.png";
import SlideDescription from "./slideAnimate/slideDescription";
import { servicesFeatures } from "../../../../utils/CONSTANTS";
import { cn } from "../../../../lib/utils";
import SlideImage from "./slideAnimate/slideImage";
import InstitutionalBubble from "./bubbles/institutional-bubble";
import GuaranteedBubble from "./bubbles/guaranteed-bubble";
import YearlyBubble from "./bubbles/yearly-bubble";
import CommercialBubble from "./bubbles/commercial-bubble";
import FeeBubble from "./bubbles/fee-bubble";
import WealthBubble from "./bubbles/wealth-bubble";

export default function ServiceFeatures() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isBlog2Visible, setIsBlog2Visible] = useState(true);

  const handleSlideChange = useCallback((newIndex: number) => {
    setCurrentSlideIndex(newIndex);
  }, []);

  useEffect(() => {
    const startAnimation = async () => {
      setTimeout(() => {
        controls.start("visible");
        setIsBlog2Visible(false);
      }, 1000);
    };

    if (isInView) {
      startAnimation();
    }
  }, [controls, isInView]);

  return (
    <div className="h-screen justify-center items-center flex bg-white overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        className="flex flex-row items-center justify-center  w-full "
      >
        <motion.div
          variants={wealthBubbleVariant(0.1)}
          className="-mt-[13rem] -mr-[9rem] md:mt-[-20rem] md:-mr-[25rem] z-30 absolute"
        >
          <WealthBubble />
        </motion.div>

        <motion.div
          variants={feeBubbleVariant(0.1)}
          className="mt-[15rem] -mr-[13rem] md:mt-[18rem] md:-mr-[35rem] z-30 absolute"
        >
          <FeeBubble />
        </motion.div>

        <motion.div
          variants={commercialBubbleVariant(0.1)}
          className="mt-[0rem] -mr-[16rem] md:mt-[40rem] md:-mr-[17rem] z-30 absolute"
        >
          <CommercialBubble />
        </motion.div>

        <motion.div
          variants={yearlyReturnBubbleVariant(0.1)}
          className="-mt-[-20rem] mr-[5rem] md:mt-[40rem] md:-mr-[28rem] z-30 absolute md:relative"
        >
          <YearlyBubble />
        </motion.div>

        <motion.div
          variants={capitalBubbleVariant(0.1)}
          className="-mt-[-10rem] mr-[14rem] md:mt-[12rem] md:-mr-[5rem] z-20 absolute md:relative"
        >
          <GuaranteedBubble />
        </motion.div>

        <motion.div
          variants={institutionalBubbleVariant(0.1)}
          className="-mt-[13rem] mr-[14rem] md:-mt-[20rem] md:-mr-[12rem] z-20 absolute md:relative"
        >
          <InstitutionalBubble />
        </motion.div>

        <motion.div
          variants={scaleFromOneToTen(0.1)}
          className="md:h-[40rem] md:w-[40rem] h-[20rem] w-[20rem] bg-[#d7e1e4] rounded-full justify-center items-center  flex overflow-hidden"
        >
          {isBlog2Visible && (
            <div className="flex z-10 relative">
              <div className="flex overflow-hidden">
                <Image
                  src={BgImage}
                  alt={"sdf"}
                  loading="lazy"
                  height={800}
                  className="hidden md:block mt-[30rem]"
                />
                <Image
                  src={BgImage}
                  alt={"sdf"}
                  loading="lazy"
                  height={400}
                  className=" md:hidden mt-[17rem]"
                />
              </div>
            </div>
          )}
        </motion.div>

        <div className=" flex  w-full  absolute z-10 ">
          <div className="flex justify-center   items-center gap-10 md:gap-0  w-full px-5 md:px-10 flex-col md:flex-row">
            <div className="flex justify-center   items-center  w-full ">
              <motion.div
                variants={slideInFromLeft(1.4)}
                className="flex flex-col gap-5 md:gap-7 text-white  md:pl-10"
              >
                {servicesFeatures.featureList?.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-[#4D5D6E] h-[5.2rem] w-[5.2rem] md:h-[10rem] md:w-[10rem] rounded-full flex flex-col items-center justify-center gap-2 md:gap-4 hover:cursor-pointer drop-shadow-md z-20",
                      index === currentSlideIndex && "bg-[#2B3239]"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSlideChange(index);
                    }}
                  >
                    <Image
                      src={item?.icon}
                      alt={item.title1}
                      loading="lazy"
                      height={40}
                      className="hidden md:block"
                    />
                    <Image
                      src={item?.icon}
                      alt={item.title1}
                      loading="lazy"
                      height={20}
                      className=" md:hidden"
                    />
                    <div className="flex text-[0.55rem] md:text-base items-center justify-center flex-col uppercase">
                      <p>{item?.title1}</p>
                      <p>{item?.title2}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={transformFromCenterToTopLeft(1)}
                className={cn(
                  "flex flex-col w-full justify-center items-center md:justify-end md:items-end  md:mt-[30rem] md:-mr-[6rem] "
                )}
              >
                {currentSlideIndex === 0 && (
                  <SlideImage
                    control={isBlog2Visible ? controls : "visible"}
                    delayAnimation={isBlog2Visible ? 1.1 : 0.1}
                    ref={ref}
                    src={servicesFeatures.firstFeatureDes.mainImage}
                  />
                )}
                {currentSlideIndex === 1 && (
                  <SlideImage
                    control={isBlog2Visible ? controls : "visible"}
                    ref={ref}
                    src={servicesFeatures.secondFeatureDes.mainImage}
                  />
                )}
                {currentSlideIndex === 2 && (
                  <SlideImage
                    ref={ref}
                    src={servicesFeatures.thirdFeatureDes.mainImage}
                  />
                )}
                {currentSlideIndex === 3 && (
                  <SlideImage
                    ref={ref}
                    src={servicesFeatures.fourthFeatureDes.mainImage}
                  />
                )}
              </motion.div>
            </div>
            <div className="flex w-full md:w-[70%] ">
              <motion.div
                variants={fadeIn(1.4)}
                className="hidden md:flex md:max-w-[42rem] w-full justify-center h-xs "
              >
                {currentSlideIndex === 0 && (
                  <SlideDescription
                    ref={ref}
                    details={servicesFeatures.firstFeatureDes}
                  />
                )}
                {currentSlideIndex === 1 && (
                  <SlideDescription
                    ref={ref}
                    details={servicesFeatures.secondFeatureDes}
                  />
                )}
                {currentSlideIndex === 2 && (
                  <SlideDescription
                    ref={ref}
                    details={servicesFeatures.thirdFeatureDes}
                  />
                )}
                {currentSlideIndex === 3 && (
                  <SlideDescription
                    ref={ref}
                    details={servicesFeatures.fourthFeatureDes}
                  />
                )}
              </motion.div>

              {/** Mobile view  */}
              <motion.div
                variants={fadeIn(1.4)}
                className="flex md:hidden md:max-w-[42rem] w-full justify-center h-xs "
              >
                {currentSlideIndex === 0 && (
                  <SlideDescription
                    ref={ref}
                    details={servicesFeatures.firstFeatureDes}
                  />
                )}
                {currentSlideIndex === 1 && (
                  <SlideDescription
                    ref={ref}
                    details={servicesFeatures.secondFeatureDes}
                  />
                )}
                {currentSlideIndex === 2 && (
                  <SlideDescription
                    ref={ref}
                    details={servicesFeatures.thirdFeatureDes}
                  />
                )}
                {currentSlideIndex === 3 && (
                  <SlideDescription
                    ref={ref}
                    details={servicesFeatures.fourthFeatureDes}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
