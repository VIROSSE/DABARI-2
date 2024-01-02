import React from 'react'
import { cn } from '../../../../lib/utils'
import FocusFeatureCard from './focus-feature-card'
import { focusAreaFeatures } from '../../../../utils/CONSTANTS'

interface OurFocusAreaProps {
    className?: string
}


export default function OurFocusArea({ className }: OurFocusAreaProps) {
    return (
        <div className="isolate h-full bg-white -mt-1 pt-1 md:pt-2 pb-1 ">
            <div className={cn(' flex  flex-col  text-center   pt-10 md:pt-64 bg-white ', className)}>
                <div className='flex justify-center flex-col  items-center text-center gap-32'>
                    <div className='grid  md:max-w-4xl space-y-5 px-9 md:px-0'>
                        <h1 className='text-3xl md:text-4xl  text-[#3E4B59] font-semibold'> Focus Areas</h1>
                        <p className='text-[#4C5A68] font-semibold'>Discover the difference of investing with purpose</p>
                        <p className='text-[#111112]'>
                            As we navigate the intricate landscape fo investments, we invite you to join us ni shaping het future. Whether you aer na investor seeking strategic opportunities or a business looking for anartner in growth. Dabari invest is your trusted ally on the path to innovation and prosperity
                        </p>
                    </div>

                    <div className='flex w-full '>
                        <div className='flex  w-full flex-wrap ' >
                            {focusAreaFeatures?.map((item, index) => (
                                <FocusFeatureCard
                                    bgColor={item?.bgColor}
                                    heading={item?.heading}
                                    title1={item?.title1}
                                    title2={item?.title2}
                                    description={item?.description}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
