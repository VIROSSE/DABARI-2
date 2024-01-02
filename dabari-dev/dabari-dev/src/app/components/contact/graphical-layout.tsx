import Image from 'next/image'
import React from 'react'

import VisionBg from '../../../../public/banners/contact-us-bg.png'


export default function GraphicalLayout() {
    return (
        <div className='relative w-full h-[300px] md:h-[600px] hidden md:block'>
            <Image
                src={VisionBg}
                alt='contact us background'
                fill
                style={{ objectFit: 'cover' }}
                loading='lazy'
            />
        </div>
    )
}
