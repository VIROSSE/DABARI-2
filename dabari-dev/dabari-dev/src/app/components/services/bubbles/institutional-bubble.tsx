import Image from 'next/image'
import React from 'react'

import Icon from '../../../../../public/icons/other/institutional-ivestment.png'

export default function InstitutionalBubble() {
  return (
    <div className='h-[6rem] w-[6rem] md:h-[12rem] md:w-[12rem] gap-2 md:gap-3 bg-[#9BA9B9] text-white rounded-[1rem] md:rounded-[4rem] flex items-center justify-center flex-col'>
      <Image
        src={Icon}
        alt="institutional"
        loading='lazy'
        height={50}
        className='hidden md:block'
      />
      <Image
        src={Icon}
        alt="institutional"
        loading='lazy'
        height={22}
        className=' md:hidden'
      />
      <div className='flex text-center  md:text-3xl flex-col font-light'>
        <h1>Institutional</h1>
        <h1>investing</h1>
      </div>
    </div>
  )
}
