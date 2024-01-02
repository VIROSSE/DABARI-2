import React from 'react'

interface FocusFeatureCardProps {
  heading: string,
  title1: string,
  title2: string,
  description: string
  bgColor: string
}

export default function FocusFeatureCard({ bgColor, heading, title1, title2, description }: FocusFeatureCardProps) {

  const DeskTopView = () => {
    return (
      <div
        style={{ backgroundColor: bgColor }}
        className='md:flex w-full text-white py-16 px-44  items-center text-left hidden '>
        <div className='flex flex-col w-[40%] gap-4'>
          <h1 className='text-5xl md:text-5xl font-thin '>{heading}</h1>

          <div className='text-2xl md:text-2xl'>
            <h1 className=''>{title1}</h1>
            <h1 className=''>{title2}</h1>
          </div>
        </div>

        <div className='flex w-full  text-sm md:text-base'>
          <p >
            {description}
          </p>
        </div>
      </div>
    )
  }

  const MobileView = () => {
    return (
      <div
        style={{ backgroundColor: bgColor }}
        className='flex flex-col gap-6 md:hidden text-white w-full  items-center text-left px-10 py-20 '
      >
        <div className='flex w-full gap-4 items-center'>
          <div className='grid text-5xl md:text-5xl font-thin '>{heading}</div>
          <div className='grid  '>
            <div className='text-xl'>
              <h1 className=''>{title1}</h1>
              <h1 className=''>{title2}</h1>
            </div>
          </div>
        </div>
        <div className='grid col-span-7 font-light'>{description}</div>
      </div>
    )
  }

  return (
    <>
      <DeskTopView />
      <MobileView />
    </>
  )
}
