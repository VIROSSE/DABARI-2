import Image from 'next/image'
import React from 'react'

import Icon from '../../../../../public/icons/other/estate.png'
import IconMobile from '../../../../../public/icons/other/state.png'

export default function RealEstateBubble() {
  return (
    <div className='h-[10rem] w-[8rem] md:h-[20rem] md:w-[16rem] gap-2 md:gap-3 bg-[#2B3239] text-white rounded-[2rem] md:rounded-[4rem] flex items-center justify-center flex-col'>
      <Image
        src={Icon}
        alt="guaranteed capital"
        loading='lazy'
        height={40}
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
        <h1>Real Estate</h1>
      </div>
      <Image
        src={IconMobile}
        alt="mobile guaranteed capital"
        loading='lazy'
        height={220}
        className='hidden md:block -mt-9'
      />
      <Image
        src={IconMobile}
        alt="mobile guaranteed capital"
        loading='lazy'
        height={90}
        className=' md:hidden -mt-4'
      />
    </div>
  )
}
