import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


interface ReviewCardProps {
    review: {
        title: string,
        comment: string,
        avatar: any
    }
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className='grid'>
            <div className='flex flex-col items-center justify-center text-center'>
                <div className='flex py-3 md:py-6'>
                    <Image
                        src={review?.avatar}
                        alt={review?.title}
                        height={200}
                        loading='lazy'
                        className='hidden md:block'
                    />
                    <Image
                        src={review?.avatar}
                        alt={review?.title}
                        height={90}
                        loading='lazy'
                        className=' md:hidden'

                    />
                </div>
                <div className='md:flex md:py-5 text-[#edd977] hidden '>
                    <Star fill='#edd977' />
                    <Star fill='#edd977' />
                    <Star fill='#edd977' />
                    <Star fill='#edd977' />
                </div>
                <div className='md:hidden py-5 text-[#edd977] flex '>
                    <Star fill='#edd977' size={13} />
                    <Star fill='#edd977' size={13} />
                    <Star fill='#edd977' size={13} />
                    <Star fill='#edd977' size={13} />
                </div>
                <div className='grid space-y-3 px-4 md:px-0 max-h-56 h-full overflow-hidden '>
                    <p className='font-semibold text-[0.65rem] md:text-base'>{review?.title}</p>
                    <p className='text-[0.65rem] md:text-base   line-clamp-5'>{review?.comment}</p>
                </div>
            </div>
        </div>
    )
}
