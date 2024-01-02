import Image from 'next/image'
import React from 'react'
import BgImage from '../../../../../public/banners/login-bg-3.png'
import TickImage from '../../../../../public/icons/other/tick.png'
import Link from 'next/link'

export default function AccountSuccessfullyCreated() {
    return (
        <div className="flex h-screen">
            <Image
                src={BgImage}
                alt="success"
                style={{ objectFit: "cover" }}
                fill
                loading="lazy"
            />

            <div className='absolute items-center justify-center flex w-full h-full'>
                <div className='bg-[#f5f5f588] flex flex-col gap-10 items-center justify-center p-16 rounded-lg '>
                    <div className='flex items-center justify-center flex-col gap-5'>
                        <Image
                            src={TickImage}
                            alt="thick"
                            height={40}
                            loading="lazy"
                        />

                        <p>Account Created Successfully</p>
                    </div>

                    <Link href={'/dashboard'}>
                        <span className='border-b border-black'>Access Dashboard</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
