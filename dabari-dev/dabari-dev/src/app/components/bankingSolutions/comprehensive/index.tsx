import React from 'react'
import Image from 'next/image'

import MiniMobile from '../../../../../public/banners/mini-mobile.png'
import { ButtonWithIcon } from '../../ui/button'


export default function Comprehensive() {
    return (
        <div className='justify-center  flex w-full bg-white relative pt-14 md:pt-40'>

            <div className='flex justify-between   w-full max-w-[88rem] md:flex-row flex-col px-5 md:px-0'>
                <div className='space-y-4 max-w-2xl'>
                    <div className='h-2 w-28 bg-[#2B3239]' />
                    <div className='space-y-1 md:space-y-2 text-[#2B3239] text-3xl md:text-7xl font-medium drop-shadow-md'>
                        <h1>Comprehensive </h1>
                        <h1>Investment Solutions </h1>
                    </div>
                    <p className='md:text-lg'>Managing money is hard, but you don’t have to do it alone. DABARI INVEST empowers you to EARN more, spend less, see everything, and take back control of your financial life.</p>

                    <div className='pt-8 hidden md:block'>
                        <ButtonWithIcon title='Explore' link="#" />
                    </div>
                </div>
                <div className='hidden md:flex -mt-40'>
                    <Image
                        src={MiniMobile}
                        alt='banking solution Comprehensive'
                        style={{ objectFit: 'cover' }}
                        loading='lazy'
                        height={900}
                        className='z-10'
                    />
                </div>
                <div className='flex md:hidden  w-full'>
                    <div className='pt-8 md:hidden'>
                        <ButtonWithIcon title='Explore' link="#" size='sm' />
                    </div>
                    <Image
                        src={MiniMobile}
                        alt='banking solution Comprehensive'
                        style={{ objectFit: 'cover' }}
                        loading='lazy'
                        height={380}
                        className='z-20'

                    />
                </div>
            </div>
        </div>
    )
}
