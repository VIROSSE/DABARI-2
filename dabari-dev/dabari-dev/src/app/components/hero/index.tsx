import React from 'react'
import Image from 'next/image'

import BgImage from '../../../../public/banners/hero-bg.png'

export default function HeroSection() {

    return (
        <div className="relative   h-screen bg-black">

            <Image
                src={BgImage}
                alt="vip section"
                style={{ objectFit: 'cover' }}
                fill
                loading='lazy'
            />
            <div className="absolute inset-0 flex items-center justify-start z-10">
                <div className=" absolute z-20 inset-x-0   flex flex-col  text-black gap-24 justify-end  md:h-auto">
                    <div className='grid  space-y-10 px-5 md:px-20  w-full '>
                        <div className='flex flex-col gap-6 md:gap-8 items-center   '>
                            <div className='flex text-white items-center flex-col md:flex-row'>
                                <h1 className='text-8xl font-semibold md:text-[10rem]   '>12%</h1>
                                <h1 className='text-3xl font-medium md:mt-20'> YEARLY RETURN</h1>
                            </div>
                            <div className='text-xs md:text-base text-[#9BA9B9] gap-1 items-center  flex'>
                                <h1>EXPLORE OPPORTUNITIES</h1>
                                <div className=' h-1 w-1 md:h-2 md:w-2 mt-2 rounded-full bg-[#9BA9B9]' />
                                <h1>INVEST WISELY</h1>
                                <div className='h-1 w-1 md:h-2 md:w-2 mt-2 rounded-full bg-[#9BA9B9]' />
                                <h1>PROSPER UNIQUELY</h1>
                                <div className='h-1 w-1 md:h-2 md:w-2 mt-2 rounded-full bg-[#9BA9B9]' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
