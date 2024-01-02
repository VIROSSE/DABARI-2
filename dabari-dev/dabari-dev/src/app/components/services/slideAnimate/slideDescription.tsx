import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideInFromRight } from "../../../../../utils/motion";
import { ButtonWithIcon } from "../../ui/button";

interface Props {
  details: {
    header: string;
    title: string;
    description: string;
  };
  ref: any;
}

export default function SlideDescription({ details, ref }: Props) {
  return (
    <motion.div ref={ref} initial="hidden" animate="visible">
      <div className="hidden md:flex flex-col space-y-4 md:space-y-10 justify-center items-center md:items-start md:justify-start">
        <motion.div variants={fadeIn(0.1)}>
          <div className="flex w-full flex-col gap-2 md:gap-9 text-center md:text-left">
            <h1 className="text-base md:text-3xl font-light uppercase">
              {details.header}
            </h1>
            <h1 className="text-2xl md:text-5xl font-medium drop-shadow">
              {details.title}
            </h1>
            <p className="text-xs md:text-xl max-w-xs  md:max-w-7xl">
              {details.description}
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeIn(0.2)}>
          <div className="hidden md:flex gap-4">
            <ButtonWithIcon title="Ddashboard" link="/dashboard" size="lg" />
            <ButtonWithIcon title="Get started" link="/getStarted" size="lg" />
          </div>
          <div className="flex gap-4 md:hidden">
            <ButtonWithIcon title="Ddashboard" link="/dashboard" size="sm" />
            <ButtonWithIcon title="Get started" link="/getStarted" size="sm" />
          </div>
        </motion.div>
      </div>

      {/** Mobile view animation */}
      <div className="flex md:hidden flex-col space-y-4 md:space-y-10 justify-center items-center md:items-start md:justify-start">
        <motion.div variants={fadeIn(0.1)}>
          <div className="flex w-full flex-col gap-2 md:gap-9 text-center md:text-left">
            <h1 className="text-base md:text-3xl font-light uppercase">
              {details.header}
            </h1>
            <h1 className="text-2xl md:text-5xl font-medium drop-shadow">
              {details.title}
            </h1>
            <p className="text-xs md:text-xl max-w-xs  md:max-w-7xl">
              {details.description}
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeIn(0.2)}>
          <div className="md:block hidden">
            <ButtonWithIcon title="Get started" link="/getStarted" size="lg" />
          </div>
          <div className="md:hidden">
            <ButtonWithIcon title="Get started" link="/getStarted" size="sm" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
