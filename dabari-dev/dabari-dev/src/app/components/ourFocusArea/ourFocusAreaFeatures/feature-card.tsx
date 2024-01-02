import React from 'react'

interface FeatureCardProps {
    title: string,
    description1: string,
    description2: string
}

export default function FeatureCard({ title, description1, description2 }: FeatureCardProps) {
    return (
        <div className='flex flex-col  items-center justify-center gap-8 text-center'>

            <div className='border-b-2  border-b-[#4C5A68] pb-6 flex  items-center justify-center'>
                <h1 className='text-xl md:text-3xl  text-[#3E4B59] font-semibold'> {title}</h1>

            </div>
            <div className='text-[#4E5B69] flex flex-col gap-5 text-center text-xs md:text-base'>
                <p>{description1}</p>
                <p>{description2}</p>
            </div>
        </div>
    )
}
