import React from 'react'
import BgImage from '../../../../../public/banners/our-focus-bg.png'
import BgFeature1 from '../../../../../public/banners/our-focus-f1.png'
import BgFeature2 from '../../../../../public/banners/our-focus-f2.png'
import BgFeature3 from '../../../../../public/banners/our-focus-f3.png'
import Image from 'next/image'
import { OurFeatureFocusItem } from '../../../../../utils/CONSTANTS'
import FeatureCard from './feature-card'


export default function OurFocusAreaFeatures() {

    const { feature1, feature2, feature3 } = OurFeatureFocusItem

    return (
        <div className="isolate h-full bg-white -mt-1 lg:-mt-1 pt-1 md:pt-2 pb-1 ">
            <div className=" bg-white md:max-h-[90rem] flex  justify-center">
                <Image
                    src={BgImage}
                    alt="features"
                    loading='lazy'
                    className='hidden md:block'
                />
                <div className="md:absolute py-10 flex items-center justify-center z-10">
                    <div className='flex justify-center flex-col  md:gap-0 items-center text-center space-y-20 md:-space-y-20 px-10 md:px-0'>
                        <div className='flex md:flex-row flex-col-reverse w-full items-center justify-center max-w-7xl gap-5 md:gap-44'>
                            <div className='flex  w-full max-w-lg'>
                                <FeatureCard title={feature1?.title} description1={feature1?.description1} description2={feature1?.description2} />
                            </div>
                            <div className='flex w-full items-center justify-center '>
                                <Image
                                    src={BgFeature1}
                                    alt="feature1"
                                    height={500}
                                    loading='lazy'
                                    className='hidden md:block'
                                />
                                <Image
                                    src={BgFeature1}
                                    alt="feature1"
                                    height={300}
                                    loading='lazy'
                                    className=' md:hidden'
                                />
                            </div>
                        </div>

                        <div className='flex md:flex-row flex-col w-full items-center justify-center max-w-7xl md:gap-44 gap-5'>

                            <div className='flex w-full items-center justify-center '>
                                <Image
                                    src={BgFeature2}
                                    alt="feature2"
                                    height={500}
                                    loading='lazy'
                                    className='hidden md:block'
                                />
                                <Image
                                    src={BgFeature2}
                                    alt="feature1"
                                    height={300}
                                    loading='lazy'
                                    className=' md:hidden'
                                />
                            </div>
                            <div className='flex  w-full max-w-lg'>
                                <FeatureCard title={feature2?.title} description1={feature2?.description1} description2={feature2?.description2} />
                            </div>
                        </div>

                        <div className='flex md:flex-row flex-col-reverse w-full items-center justify-center max-w-7xl md:gap-44 gap-5'>
                            <div className='flex  w-full max-w-lg'>
                                <FeatureCard title={feature3?.title} description1={feature3?.description1} description2={feature3?.description2} />
                            </div>
                            <div className='flex w-full items-center justify-center '>
                                <Image
                                    src={BgFeature3}
                                    alt="feature1"
                                    height={500}
                                    loading='lazy'
                                    className='hidden md:block'
                                />
                                <Image
                                    src={BgFeature3}
                                    alt="feature1"
                                    height={300}
                                    loading='lazy'
                                    className=' md:hidden'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
