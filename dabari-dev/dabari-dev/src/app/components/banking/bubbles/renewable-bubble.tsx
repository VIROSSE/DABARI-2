
import Image from 'next/image'
import React from 'react'

import RenewableIcon from '../../../../../public/icons/other/renewable.png'

export default function RenewableBubble() {
  return (
    <div className='h-[7rem] w-[9rem] md:h-[10rem] md:w-[16rem] gap-2 md:gap-3 bubble-gradient text-white rounded-[2rem] md:rounded-[3rem] flex items-center justify-center flex-col'>
      <div className='flex items-center gap-2 flex-col'>
        <Image
          src={RenewableIcon}
          alt="mobile guaranteed capital"
          loading='lazy'
          height={40}
          className='hidden md:block'
        />
        <Image
          src={RenewableIcon}
          alt="mobile guaranteed capital"
          loading='lazy'
          height={30}
          className=' md:hidden'
        />
        <div className='flex  md:text-3xl flex-col font-light text-center'>
          <h1>Renawable</h1>
          <h1>energies</h1>
        </div>

      </div>
    </div>
  )
}
