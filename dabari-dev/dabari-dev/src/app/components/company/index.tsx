import React from 'react'
import VisionBg from '../../../../public/banners/dabari-investment.png'
import MobileBG from '../../../../public/banners/mobile-welcome-bg.png'


import Image from 'next/image'

export default function CompanyHeroSection() {

    return (
        // <div className=' w-full   absolute top-0 -z-20'>
        <div className='bg-white w-full  text-black  relative flex'>
            <div className='flex w-full md:h-screen flex-col md:flex-row'>
                <div className='flex w-full '>
                    <Image
                        src={VisionBg}
                        alt='vision background'
                        style={{ objectFit: 'cover' }}
                        loading='lazy'
                        className='hidden md:block'
                    />
                    <Image
                        src={MobileBG}
                        alt='vision background'
                        style={{ objectFit: 'cover' }}
                        loading='lazy'
                        className=' md:hidden'
                    />
                </div>
                <div className='relative flex w-full  z-10 bg-white p-10 md:p-0 '>
                    <div className='flex w-full    flex-col z-20 m-auto  justify-center items-center '>
                        <div className='max-w-lg  md:text-justify space-y-5 md:space-y-10 '>
                            <div className=' text-2xl font-semibold  text-left md:text-5xl  '>
                                <h1 className='drop-shadow'>We are Dabari</h1>
                                <h1 className='drop-shadow'>invest</h1>
                            </div>
                            <div className='space-y-5 md:space-y-10 text-left text-sm md:text-justify leading-6 md:text-xl md:leading-8'>
                                <p >At the heart of Dabari Invest lies a narrative woven with opportunities seized and businesses thriving.</p>
                                <p >From our inception, we have been steadfast in our commitment to investing in companies and services that operate in established markets. We believe in the power of diversification and the positive influence our investments can have across diverse industries.</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>


        </div>


        // </div>

    )
}
