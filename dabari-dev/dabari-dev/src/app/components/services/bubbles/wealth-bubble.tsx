
import Image from 'next/image'
import React from 'react'

import ManagementIcon from '../../../../../public/icons/other/managment.png'

export default function WealthBubble() {
  return (
    <div className='h-[6rem] w-[9rem] md:h-[9rem] md:w-[16rem] gap-2 md:gap-3 bubble-gradient text-white rounded-[2rem] md:rounded-[3rem] flex items-center justify-center flex-col'>
      <div className='flex items-center gap-3'>
        <Image
          src={ManagementIcon}
          alt="mobile guaranteed capital"
          loading='lazy'
          height={40}
          className='hidden md:block'
        />
        <Image
          src={ManagementIcon}
          alt="mobile guaranteed capital"
          loading='lazy'
          height={30}
          className=' md:hidden'
        />
        <div className='flex  md:text-3xl flex-col font-light'>
          <h1>Wealth</h1>
          <h1>Management</h1>
        </div>

      </div>
    </div>
  )
}
