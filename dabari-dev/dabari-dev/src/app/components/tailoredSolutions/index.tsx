import React from 'react'
import BgImage from '../../../../public/banners/welcome2-bg.svg'
import Image from 'next/image'
import { tailoredSolutionFeatures } from '../../../../utils/CONSTANTS'
import TailoredFeatureCard from './tailored-feature-card'
import { ButtonWithIcon } from '../ui/button'

export default function TailoredSolutions() {
    return (
        <div className="isolate md:h-screen bg-white -mt-1 lg:-mt-1 pt-1 md:pt-2 pb-1 ">
            <Image
                src={BgImage}
                alt="Tailored"
                style={{ objectFit: 'cover' }}
                fill
                loading='lazy'
                className='hidden md:block'
            />
            <div className="md:absolute py-20 flex items-center justify-center z-10 m-auto w-full">
                <div className='flex justify-center flex-col gap-6 md:gap-12 items-center text-center space-y-10'>
                    <div className='grid  md:max-w-2xl space-y-5 px-9 md:px-0'>
                        <h1 className='text-3xl md:text-4xl  text-[#3E4B59] font-semibold'> Tailored Solutions</h1>
                    </div>

                    <div className='flex w-full max-w-7xl '>
                        <div className='flex  w-full gap-7 flex-wrap  px-10 md:px-0' >
                            {tailoredSolutionFeatures?.map((item, index) => (
                                <TailoredFeatureCard
                                    id={item?.id}
                                    title={item?.title}
                                    description={item?.description}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <ButtonWithIcon title='LEARN MORE' link="#" />
                    </div>
                </div>

            </div>
            <div className='hidden md:block z-10 absolute bottom-10 right-10'>
                <ButtonWithIcon title='LEARN MORE' link="#" />
            </div>
        </div>
    )
}
