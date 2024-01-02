import React from 'react'
import VisionBg from '../../../../../public/banners/telecommunication-bg.png'
import VisionBgMobile from '../../../../../public/banners/telecommunication-bg-mobile.png'

import Image from 'next/image'
import { telecommunicationFeature } from '../../../../../utils/CONSTANTS'

export default function TelecommunicationSection() {
    const DesktopView = () => {
        return (
            <div className='bg-white w-full  text-black  relative hidden md:flex'>
                <div className='flex w-full md:h-screen flex-col md:flex-row'>

                    <div className='relative flex w-full  z-10 bg-white p-10 md:p-0 '>
                        <div className='flex w-full    flex-col z-20 m-auto  justify-center items-center '>
                            <div className='max-w-xl  md:text-justify space-y-5 md:space-y-10 '>
                                <div className=' text-2xl font-semibold  text-left md:text-5xl  '>
                                    <h1 className='drop-shadow'>Telecommunication</h1>
                                </div>
                                <div className=' text-base font-semibold  text-left md:text-xl  '>
                                    <h1 className='drop-shadow'>Investment with Euro World Distribution</h1>
                                </div>
                                <div className='space-y-5 md:space-y-10 text-left text-xs  leading-6 md:text-xl md:leading-8'>
                                    <p >{`Discover Mali's wealth through Dabari Invest, your key to strategic gold trading. We engage in the purchase and trade of gold, inviting you to diversify your portfolio with precious metals. Mali's rich natural resources and strategic global positioning make it an ideal investment landscape.`}</p>
                                </div>

                                <div className='flex pt-20 justify-center'>
                                    <div className='flex gap-7 text-white justify-center '>
                                        {telecommunicationFeature?.map((item, index) => (
                                            <div key={index} className='bg-[#2B3239] h-[9rem] w-[9rem] rounded-full flex flex-col items-center justify-center gap-2 md:gap-4'>
                                                <Image
                                                    src={item?.icon}
                                                    alt={item.title1}
                                                    loading='lazy'
                                                    height={40}

                                                />
                                                <div className='flex text-[0.7rem] items-center justify-center flex-col uppercase'>
                                                    <p>{item?.title1}</p>
                                                    <p>{item?.title2}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='flex w-full '>
                        <Image
                            src={VisionBg}
                            alt='real state background'
                            style={{ objectFit: 'cover' }}
                            loading='lazy'
                            className='hidden md:block'
                        />
                    </div>

                </div>


            </div>




        )
    }
    const MobileView = () => {
        return (
            <div className='bg-white w-full  text-black  relative flex md:hidden h-screen'>
                <div className='flex w-full  flex-col md:flex-row'>
                    <div className='flex w-full px-6 pt-6'>
                        <Image
                            src={VisionBgMobile}
                            alt='real state background'
                            style={{ objectFit: 'cover' }}
                            loading='lazy'
                        />
                    </div>
                    <div className='relative flex w-full  z-10 bg-white p-10 md:p-0 '>
                        <div className='flex w-full    flex-col z-20 m-auto  justify-center items-center '>
                            <div className='max-w-xl  md:text-justify space-y-5 md:space-y-10 '>
                                <div className='  font-semibold  text-left text-lg  '>
                                    <h1 className='drop-shadow'>Telecommunication</h1>
                                </div>
                                <div className=' text-sm font-semibold  text-left md:text-xl  '>
                                    <h1 className='drop-shadow'>Investment with Euro World Distribution</h1>
                                </div>
                                <div className='space-y-5  text-left text-xs  leading-5 md:text-xl md:leading-8'>
                                    <p >{`Discover Mali's wealth through Dabari Invest, your key to strategic gold trading. We engage in the purchase and trade of gold, inviting you to diversify your portfolio with precious metals. Mali's rich natural resources and strategic global positioning make it an ideal investment landscape.`}</p>
                                </div>

                                <div className='flex  justify-center'>
                                    <div className='flex gap-7 text-white justify-center mt-10'>
                                        {telecommunicationFeature?.map((item, index) => (
                                            <div key={index} className='bg-[#2B3239] h-[4.5rem] w-[4.5rem] md:h-[9rem] md:w-[9rem] rounded-full flex flex-col items-center justify-center gap-2 md:gap-4'>
                                                <Image
                                                    src={item?.icon}
                                                    alt={item.title1}
                                                    loading='lazy'
                                                    height={20}

                                                />
                                                <div className='flex text-[0.3rem] items-center justify-center flex-col uppercase'>
                                                    <p>{item?.title1}</p>
                                                    <p>{item?.title2}</p>
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

    return (
        <>
            <DesktopView />
            <MobileView />

        </>

    )
}
