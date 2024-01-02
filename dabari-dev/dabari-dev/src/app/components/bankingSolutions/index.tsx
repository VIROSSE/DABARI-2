import React from 'react'
import VisionBg from '../../../../public/banners/banking-solutions.png'

import Image from 'next/image'
import { ButtonWithIcon } from '../ui/button'

export default function BankingSolutionSection() {

    return (
        <div className='bg-white w-full  text-white absolute top-0 -z-20'>
            <div className='flex w-full h-screen'>
                <div className='relative flex w-full  z-10 bg-white px-10 md:px-0'>
                    <div className='flex w-full    flex-col z-20 m-auto  justify-center items-center '>
                        <div className='max-w-lg  md:text-justify space-y-5 md:space-y-10 '>
                            <div className=' text-3xl font-semibold text-center  md:text-3xl text-[#4C5A68] '>
                                <h1>Comprehensive </h1>
                                <h1>Banking Solutions</h1>
                            </div>
                            <p className='text-[#4C5A68] text-center  leading-8 '>That empower you to gain access to a host of banking. solutions, including the convenience of opening an IBAN account. Manage your finances effortlessly with a dedicated bank card and a user friendly mobile app.</p>
                        </div>
                        <div className='md:hidden mt-20 '>
                            <ButtonWithIcon title='DISCOVER SOLUTIONS' link="#" />
                        </div>
                    </div>
                </div>
                <div className='md:flex w-full hidden relative h-screen'>
                    <Image
                        src={VisionBg}
                        alt='banking solution'
                        style={{ objectFit: 'cover' }}
                        loading='lazy'

                    />
                    <div className='z-10 absolute bottom-10 right-10'>
                        <ButtonWithIcon title='DISCOVER SOLUTIONS' link="#" />
                    </div>
                </div>


            </div>


        </div>

    )
}
