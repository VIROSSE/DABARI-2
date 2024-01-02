import React from 'react'
import Image from 'next/image'
import { cn } from '../../../../lib/utils'

interface TeamCardProps {
    className?: string
    name: string
    role: string
    image: any
}

export default function TeamCard({ className, name, role, image }: TeamCardProps) {
    return (
        <div className={cn('bg-[#3D4B5A] grid flex-col text-white text-left rounded-xl ', className)}>
            <div className='grid flex-col max-w-[13rem] px-5 items-start pt-5  '>
                <h1 className=' '>{name}</h1>
                <p className='font-light text-sm max-w-[10rem]'>
                    {role}
                </p>
            </div>
            <div className='flex justify-end relative  '>
                <Image
                    src={image}
                    alt='team background'
                    style={{ objectFit: 'cover' }}
                    height={300}
                    loading='lazy'
                    className='rounded-xl md:block hidden'
                />
                <Image
                    src={image}
                    alt='team background'
                    style={{ objectFit: 'cover' }}
                    height={400}
                    loading='lazy'
                    className='rounded-xl md:hidden '

                />
            </div>
        </div>
    )
}
