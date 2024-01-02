import Image from 'next/image'
import React from 'react'

import Icon from '../../../../../public/icons/other/capital.png'
import IconMobile from '../../../../../public/icons/other/capital-mobile.png'

export default function GuaranteedBubble() {
  return (
    <div className='h-[10rem] w-[8rem] md:h-[20rem] md:w-[16rem] gap-2 md:gap-3 bg-[#2B3239] text-white rounded-[2rem] md:rounded-[4rem] flex items-center justify-center flex-col'>
      <Image
        src={Icon}
        alt="guaranteed capital"
        loading='lazy'
        height={50}
        className='hidden md:block'
      />
      <Image
        src={Icon}
        alt="guaranteed capital"
        loading='lazy'
        height={22}
        className=' md:hidden'
      />
      <div className='flex text-center  md:text-3xl flex-col font-light'>
        <h1>Guaranteed</h1>
        <h1>capital</h1>
      </div>
      <Image
        src={IconMobile}
        alt="mobile guaranteed capital"
        loading='lazy'
        height={130}
        className='hidden md:block'
      />
      <Image
        src={IconMobile}
        alt="mobile guaranteed capital"
        loading='lazy'
        height={60}
        className=' md:hidden'
      />
    </div>
  )
}
