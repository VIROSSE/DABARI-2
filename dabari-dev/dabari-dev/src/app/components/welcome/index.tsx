import React from 'react'
import VisionBg from '../../../../public/banners/welcome-bg.png'

import Image from 'next/image'

export default function WelcomeSection() {

    return (
        <div className='bg-white w-full  text-white  relative flex -mt-1'>
            <div className='flex w-full md:h-screen flex-col md:flex-row'>
                <div className='flex w-full h-[50%] md:h-full'>
                    <Image
                        src={VisionBg}
                        alt='vision background'
                        style={{ objectFit: 'cover' }}
                        loading='lazy'
                    />
                </div>
                <div className='relative flex w-full  z-10 bg-white p-10 md:p-0 '>
                    <div className='flex w-full    flex-col z-20 m-auto  justify-center items-center '>
                        <div className='max-w-lg  md:text-justify space-y-5 md:space-y-10 '>
                            <div className=' text-2xl font-semibold  text-left md:text-3xl text-[#4C5A68] '>
                                <h1>Welcome to </h1>
                                <h1>Dabari Invest</h1>
                            </div>
                            <p className='text-[#4C5A68] text-left text-xs md:text-justify leading-6 md:text-base md:leading-8 font-light'>Dabari Invest serves as a symbol of innovation and progress in both the European and African investment scenes. As a devoted investment fund, we are committed to promoting develop - ment and making significant contributions across diverse sectors. Our portfolio extends into established markets, with a focus on real estate, new technologies, renewable energies, and the solidarity economy.</p>
                        </div>

                    </div>
                </div>

            </div>


        </div>

    )
}
