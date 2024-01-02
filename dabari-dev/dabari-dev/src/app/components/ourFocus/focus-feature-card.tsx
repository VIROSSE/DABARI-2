import React from 'react'

interface FocusFeatureCardProps {
  heading: string,
  title1: string,
  title2: string,
  description: string
  bgColor: string
}

export default function FocusFeatureCard({ bgColor, heading, title1, title2, description }: FocusFeatureCardProps) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className='flex w-full text-white py-20 px-10 flex-col items-start text-left'>
      <h1 className='text-5xl md:text-7xl'>{heading}</h1>

      <div className='mt-10 text-2xl md:text-4xl'>
        <h1 className=''>{title1}</h1>
        <h1 className=''>{title2}</h1>
      </div>

      <p className='flex mt-10 md:mt-16 text-sm md:text-base'>
        {description}
      </p>
    </div>
  )
}
