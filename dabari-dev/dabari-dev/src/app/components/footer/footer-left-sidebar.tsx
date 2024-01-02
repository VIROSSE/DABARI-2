import React from 'react'
import Logo from '../logo'
import Image from 'next/image'

import PhoneImage from '../../../../public/icons/contacts/phone.svg'
import MailImage from '../../../../public/icons/contacts/mail.svg'
import MapImage from '../../../../public/icons/contacts/map.svg'
import logo from "../../../../public/icons/logo/footer-logo.svg"

import Link from 'next/link'

export default function FooterLeftSidebar() {
    return (
        <div className='flex flex-col gap-8'>
            <div
                className="flex px-3 md:px-0">
                <Image
                    src={logo}
                    alt="logo"
                    height={90}
                    style={{ objectFit: 'cover' }}
                    objectPosition='center' loading='lazy'
                />
            </div>
            <div className='flex flex-col gap-1'>
                {/* <div className='flex items-center gap-2'>
                    <Image
                        src={PhoneImage}
                        alt='phone call'
                        height={16}
                        loading='lazy'
                    />
                    <Link href='tel:+97142579127' className='font-cenios text-xs px-1'>
                        +971 42 579 127
                    </Link>
                </div> */}
                <div className='flex items-center gap-2'>
                    <Image
                        src={MailImage}
                        alt='mail'
                        height={16}
                        loading='lazy'
                    />
                    <Link href='mailto:contact@dabarinvest.com' className=' text-sm px-1'>
                        contact@dabarinvest.com
                    </Link>

                </div>
                <div className='flex items-center gap-2'>
                    <Image
                        src={MapImage}
                        alt='map'
                        height={19}
                        loading='lazy'
                    />
                    <p className=' text-sm px-2'>5 rue heienhaff, Luxembourg</p>
                </div>
            </div>
        </div>
    )
}
