import Image from 'next/image'
import React from 'react'

import ReturnIcon from '../../../../../public/icons/other/return.png'
import ReturnDesIcon from '../../../../../public/icons/other/return-des.png'

export default function YearlyBubble() {
  return (
    <div className='h-[6.5rem] w-[8rem] md:h-[12rem] md:w-[17rem] gap-2 md:gap-3 bubble-gradient text-white rounded-[1.5rem] md:rounded-[4rem] flex items-center justify-center flex-col'>
      <div className='flex items-center gap-2'>
        <Image
          src={ReturnIcon}
          alt="mobile guaranteed capital"
          loading='lazy'
          height={40}
          className='hidden md:block'
        />
        <Image
          src={ReturnIcon}
          alt="mobile guaranteed capital"
          loading='lazy'
          height={22}
          className=' md:hidden'
        />
        <div className='flex  md:text-3xl flex-col font-light'>
          <h1>12% yearly</h1>
          <h1>return</h1>
        </div>

      </div>
      <Image
        src={ReturnDesIcon}
        alt="mobile guaranteed capital"
        loading='lazy'
        height={70}
        className='hidden md:block'
      />
      <Image
        src={ReturnDesIcon}
        alt="mobile guaranteed capital"
        loading='lazy'
        height={30}
        className=' md:hidden'
      />
    </div>
  )
}
