import React from 'react'
import BgImage from '../../../../public/banners/review-bg.png'

import Image from 'next/image'
import { reviewsData } from '../../../../utils/CONSTANTS'
import ReviewCard from './review-card'

export default function ReviewHero() {

    return (
        <div className='  relative flex flex-col items-center justify-center bg-white pt-44 pb-20  md:pt-20 md:pb-20   px-10 md:px-0'>
            <Image
                src={BgImage}
                alt="debit"
                style={{ objectFit: 'cover' }}
                fill
                loading='lazy'
            />
            <div className='  flex flex-col w-full items-center justify-center z-40 space-y-14'>

                <div className='space-y-14'>
                    <div className=' text-left w-full text-white text-2xl md:text-6xl gap-1 flex flex-col   '>
                        <h1 className='font-bold'>Real Stories, Real Success.</h1>
                        <h1 className='font-light'>Clients Experiences</h1>
                    </div>

                    <div className='grid max-w-[90rem] gap-2  md:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start md:items-center bg-white pb-10 md:p-10 pt-5'>
                        {reviewsData?.map((item, index) => (
                            <ReviewCard review={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )
}
