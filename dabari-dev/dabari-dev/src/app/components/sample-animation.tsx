"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "framer-motion"

import BgImage from '../../../../public/banners/welcome-bg.png'
import { slideInFromLeft } from '../../../utils/motion';

export default function SampleAnimation() {
    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref)


    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);


    return (
        <div className="  h-screen bg-white">
            <div className="absolute inset-0 flex items-center justify-end z-10 md:px-20">
                <div className='flex  justify-center items-end w-full flex-col md:flex-row gap-20'>

                    <div className='flex w-full   justify-center md:justify-end '>
                        <Image
                            src={BgImage}
                            alt='hero'
                            height={400}
                            loading='lazy'
                            className='hidden md:block'
                        />
                        <Image
                            src={BgImage}
                            alt='hero'
                            height={200}
                            loading='lazy'
                            className=' md:hidden'
                        />
                    </div>
                    <div className='flex w-full  text-left px-10 md:px-0   flex-col '>

                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
                        >
                            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                                <motion.div
                                    variants={slideInFromLeft(0.1)}
                                    className="flex flex-col gap-6 mt-6 text-5xl font-bold w-auto h-auto"
                                >
                                    <h1 className='text-2xl text-center md:text-left md:text-4xl text-[#96A3B2] font-light leading-normal'>Welcome to <br />Dabari invest</h1>
                                </motion.div>

                                <motion.p
                                    variants={slideInFromLeft(0.3)}
                                    className="text-lg text-black my-5 max-w-[600px]"
                                >
                                    Dabari Invest serves as a symbol of innovation and progress in both the European and African investment scenes. As a devoted investment fund, we are committed to promoting develop - ment and making significant contributions across diverse sectors. Our portfolio extends into established markets, with a focus on real estate, new technologies, renewable energies, and the solidarity economy.
                                </motion.p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    )
}
