import React from 'react'
import LogoBg from '../../../../public/icons/logo/logo-bg.svg'
import BgImage from '../../../../public/banners/responsibility-bg.png'

import Image from 'next/image'
import WelcomeBlockItemCard from './welcome-block-item-card'
import { responsibilityData } from '../../../../utils/CONSTANTS'

export default function ResponsibilitySection2() {
    return (
        <div className=' md:h-screen flex flex-col bg-slate-600 items-center justify-center '>
            <Image
                src={BgImage}
                alt="debit"
                style={{ objectFit: 'cover' }}
                fill
                loading='lazy'
            />
            <div className='  flex flex-col w-full py-16 md:py-0'>

                <div className="   text-white z-40">
                    <div className='flex justify-between  flex-col  items-center text-center  px-7 space-y-12 lg:gap-40 xl:px-10 '>
                        <div className='grid  md:max-w-4xl space-y-2 md:space-y-8 px-0 md:px-0'>
                            <h1 className='text-3xl md:text-5xl font-semibold'> Responsibility</h1>
                            <p className=' font-semibold text-xs sm:text-lg'>
                                A Personalized Journey through Comprehensive and Transparent Sustainable Investing Strategies
                            </p>
                        </div>

                        <div className='flex w-full items-center justify-center gap-10 md:gap-24 flex-wrap md:flex-nowrap' >
                            <div className='flex flex-col w-full gap-5 md:gap-16'>
                                <WelcomeBlockItemCard
                                    description={responsibilityData.block1}
                                />
                                <div className='h-[0.2rem] w-full bg-white' />
                                <WelcomeBlockItemCard
                                    description={responsibilityData.block2}
                                />
                            </div>

                            <div className='flex  '>
                                <Image
                                    src={LogoBg}
                                    alt='logo block'
                                    height={550}
                                    className='hidden md:block'
                                    loading='lazy'
                                />
                                <Image
                                    src={LogoBg}
                                    alt='logo block'
                                    height={180}
                                    className='md:hidden'
                                    loading='lazy'
                                />
                            </div>

                            <div className='flex flex-col w-full gap-5 md:gap-16'>
                                <WelcomeBlockItemCard
                                    description={responsibilityData.block3}
                                />
                                <div className='h-[0.2rem] w-full bg-white' />
                                <WelcomeBlockItemCard
                                    description={responsibilityData.block4}
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
