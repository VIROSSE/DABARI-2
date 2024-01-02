import React from 'react'

interface TailoredFeatureCardProps {
    id: string,
    title: string,
    description: string
}

export default function TailoredFeatureCard({ id, title, description }: TailoredFeatureCardProps) {

    const DeskTopMode = () => {
        return (
            <div className='hidden md:grid grid-cols-12 w-full border-b last:border-b-0 border-[#4C5A68] pb-7 items-center text-left'>
                <div className='grid col-span-1 text-2xl font-thin text-[#4C5A68]'>{id}</div>
                <div className='grid col-span-4 text-[#4E5B69]'>{title}</div>
                <div className='grid col-span-7 font-light'>{description}</div>
            </div>
        )
    }

    const MobileMode = () => {
        return (
            <div className='flex flex-col gap-2 md:hidden  w-full border-b last:border-b-0 border-[#4C5A68] pb-7 items-center text-left'>
                <div className='flex w-full gap-4 items-center'>
                    <div className='grid text-2xl font-thin text-[#4C5A68]'>{id}</div>
                    <div className='grid  text-[#4E5B69]'>{title}</div>
                </div>
                <div className='grid col-span-7 font-light'>{description}</div>
            </div>
        )
    }

    return (
        <>
            <DeskTopMode />
            <MobileMode />
        </>
    )
}
