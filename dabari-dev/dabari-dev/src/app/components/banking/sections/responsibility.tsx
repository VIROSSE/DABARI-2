import React from 'react'
import VisionBg from '../../../../../public/banners/responsibility-bg-2.png'

import Image from 'next/image'
import { responsibilityFeature } from '../../../../../utils/CONSTANTS'

export default function ResponsibilitySection() {

    return (
        <div className='layout-gradient-mobile w-full  text-black h-screen  relative flex'>
            <div className='flex w-full  flex-col md:flex-row'>
                <div className='flex w-full '>
                    <Image
                        src={VisionBg}
                        alt='real state background'
                        style={{ objectFit: 'cover' }}
                        loading='lazy'
                        className='hidden md:block'
                    />
                </div>
                <div className='relative flex w-full  z-10  p-10 md:p-0 text-white'>

                    <div className='flex w-full    flex-col z-20 m-auto  justify-center items-center '>
                        <div className='max-w-2xl   space-y-5 md:space-y-7 '>
                            <div className=' text-2xl font-semibold  text-left md:text-5xl  '>
                                <h1 className='drop-shadow'>Responsibility</h1>
                            </div>
                            <div className=' text-base font-semibold  text-left md:text-xl  '>
                                <h1 className='drop-shadow'>Comprehensive, Transparent and Sustainable Investing Journey</h1>
                            </div>


                            <div className='flex pt-20 justify-center'>
                                <div className='flex gap-5 md:gap-12 text-white justify-center flex-col'>
                                    {responsibilityFeature?.map((item, index) => (
                                        <div key={index} className='flex  items-start gap-5'>
                                            <div className='flex w-10'>
                                                <div className='bg-[#263238] h-9 w-9 md:h-10 md:w-10 rounded-full flex flex-col items-center justify-center gap-2 md:gap-4'>
                                                    <div>
                                                        <Image
                                                            src={item?.icon}
                                                            alt={item.title}
                                                            loading='lazy'
                                                            height={20}
                                                            width={20}
                                                            className='hidden md:block'

                                                        />
                                                        <Image
                                                            src={item?.icon}
                                                            alt={item.title}
                                                            loading='lazy'
                                                            height={18}
                                                            width={18}
                                                            className=' md:hidden'

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex text-xs md:text-lg items-center justify-center flex-col pb-4 border-b-2  '>
                                                <p>{item?.title}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>



            </div>


        </div>

    )
}
