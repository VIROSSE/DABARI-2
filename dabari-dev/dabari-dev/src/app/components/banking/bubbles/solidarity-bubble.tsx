


import Image from 'next/image'
import React from 'react'

import SolidarityIcon from '../../../../../public/icons/other/solidarity.png'
import FeeDesIcon from '../../../../../public/icons/other/fee-des.png'

export default function SolidarityBubble() {
  return (
    <div className='h-[8rem] w-[7.5rem] md:h-[14rem] md:w-[12rem] gap-2 md:gap-3 bg-[#47586B] text-white rounded-[1.5rem] md:rounded-[3rem] flex items-center justify-center flex-col'>
      <div className='flex items-center gap-3'>
        <Image
          src={SolidarityIcon}
          alt="mobile guaranteed capital"
          loading='lazy'
          height={40}
          className='hidden md:block'
        />
        <Image
          src={SolidarityIcon}
          alt="mobile guaranteed capital"
          loading='lazy'
          height={20}
          className=' md:hidden'
        />
        <div className='flex  md:text-3xl flex-col font-light'>
          <h1>Solidarity</h1>
          <h1>Economy</h1>
        </div>

      </div>
      <Image
        src={FeeDesIcon}
        alt="mobile guaranteed capital"
        loading='lazy'
        height={100}
        className='hidden md:block'
      />
      <Image
        src={FeeDesIcon}
        alt="mobile guaranteed capital"
        loading='lazy'
        height={60}
        className=' md:hidden'
      />
    </div>
  )
}
