import Image from 'next/image'
import React from 'react'

import TickImage from '../../../../public/icons/other/tick.svg'

interface WelcomeBlockItemCardProps {
    description: string
}

export default function WelcomeBlockItemCard({ description }: WelcomeBlockItemCardProps) {
    return (
        <div className='flex w-full justify-center items-center gap-3 md:gap-7'>
            <div className='flex w-8'>
                <Image
                    src={TickImage}
                    alt='tick icon'
                    height={25}
                    className='hidden md:block'
                    loading='lazy'
                />
                <Image
                    src={TickImage}
                    alt='tick icon'
                    height={20}
                    className='md:hidden'
                    loading='lazy'
                />
            </div>
            <div className='flex w-full'>
                <p className=' text-left text-xs sm:text-base'>
                    {description}
                </p>
            </div>
        </div>
    )
}
