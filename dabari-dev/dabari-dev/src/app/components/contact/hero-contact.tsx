import React from 'react'

import ContactForm from './contact-form'

export default function HeroContact() {

    return (
        <div className='  md:-mb-32 h-screen flex flex-col items-center justify-center '>

            <div className='  flex flex-col w-full '>

                <div className="   z-40">
                    <div className='flex w-full md:flex-row flex-col px-10 md:px-0 gap-10 md:gap-0'>
                        <div className='relative flex w-full  z-10   '>
                            <div className='flex w-full    flex-col z-20 m-auto  justify-center items-center '>
                                <div className='max-w-4xl   space-y-5 md:space-y-8 text-[#4C5A68]'>
                                    <div className='text-2xl md:text-6xl font-semibold text-center md:text-left  drop-shadow'>
                                        <h1>Contact us</h1>
                                    </div>
                                    <div className='text-center md:text-left md:max-w-[25rem] leading-6 md:leading-9 text-sm md:text-2xl'>
                                        <p >Below, you will find contact information of DABARI office. {`We'd love to hear from you!`}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex w-full '>
                            <ContactForm />
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}
