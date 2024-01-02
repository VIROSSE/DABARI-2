import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import LinkedinIcon from '../../../../public/icons/socialNetworks/linkedin.svg'
import XIcon from '../../../../public/icons/socialNetworks/x.svg'
import YoutubeIcon from '../../../../public/icons/socialNetworks/youtube.svg'
import InstagramIcon from '../../../../public/icons/socialNetworks/instagram.svg'


export default function FooterItemFollowUs() {
    return (

        <div className='space-y-1'>
            <p className='font-semibold text-sm lg:text-[0.84rem] xl:text-base'>FOLLOW US</p>
            <div className='flex  gap-1'>

                <Link href="#" >
                    <Image
                        src={LinkedinIcon}
                        alt='linkedin'
                        height={28}
                        loading='lazy'
                    />
                </Link>
                <Link href="#" >
                    <Image
                        src={XIcon}
                        alt='x'
                        height={28}
                        loading='lazy'
                    />
                </Link>
                <Link href="#" >
                    <Image
                        src={YoutubeIcon}
                        alt='Youtube'
                        height={30}
                        loading='lazy'
                    />
                </Link>
                <Link href="#" >
                    <Image
                        src={InstagramIcon}
                        alt='Instagram'
                        height={30}
                        loading='lazy'
                    />
                </Link>

            </div>
        </div>

    )
}
