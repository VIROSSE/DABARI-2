import React from 'react'
import VisionBg from '../../../../public/banners/solution-bg.png'
import VisionBg2 from '../../../../public/banners/welcome2-bg.svg'

import Image from 'next/image'

export default function HeroSolution() {

    return (
        <div className=' h-screen flex flex-col items-center justify-center bg-white'>


            <Image
                src={VisionBg2}
                alt="debit"
                style={{ objectFit: 'cover' }}
                fill
                loading='lazy'
                className=''
            />
            <div className='  flex flex-col w-full '>

                <div className="   z-40">
                    <div className='flex w-full md:flex-row flex-col px-10 md:px-0 gap-10 md:gap-0'>
                        <div className=' flex w-full  z-10  px-0 md:px-0'>
                            <div className='flex w-full    flex-col z-20 m-auto  justify-center items-center '>
                                <div className='max-w-lg  md:text-justify space-y-5 md:space-y-16 text-black'>
                                    <div className=' text-xl font-semibold text-center  '>
                                        <h1>We develop innovative, sustainable solutions to </h1>
                                        <h1>{`answer our client's most complicated challenges.`}</h1>
                                    </div>
                                    <p className=' text-center leading-8 text-lg'>Our sustainable investing approach revolves
                                        around you, providing a transparent platform with
                                        values-based and impact investing strategies. It
                                        offers a more personalized way to align your wealth
                                        with principles, making your investment experience
                                        comprenhensive and meaningful.</p>
                                </div>

                            </div>
                        </div>
                        <div className='md:flex w-full h-screen hidden relative '>

                            <Image
                                src={VisionBg}
                                alt='vision background'
                                style={{ objectFit: 'cover' }}
                                loading='lazy'
                                fill
                                className='pt-32'

                            />
                        </div>
                    </div>
                </div>


            </div>
        </div>


    )
}
