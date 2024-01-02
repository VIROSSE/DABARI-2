import Image from 'next/image'
import React from 'react'

import wealthBg from '../../../../public/banners/wealth-bg.png'
import wealthBgMobile from '../../../../public/banners/mobile-wealth.png'

export default function ServiceTypography() {
    return (
        <div className='flex justify-center items-center bg-white pb-20 md:pb-40 md:py-40 relative'>
            <Image
                loading="lazy"
                alt='wealth'
                src={wealthBg}
                height={700}
                className='hidden md:block'
            />
            <Image
                loading="lazy"
                alt='wealth'
                src={wealthBgMobile}
                height={400}
                className='md:hidden'
            />
        </div>
    )
}
