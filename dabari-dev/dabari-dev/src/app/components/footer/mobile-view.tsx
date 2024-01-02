import React from 'react'
import Image from 'next/image'

import PhoneImage from '../../../../public/icons/contacts/phone.svg'
import MailImage from '../../../../public/icons/contacts/mail.svg'
import MapImage from '../../../../public/icons/contacts/map.svg'
import Logo from '../../../../public/icons/logo/footer-logo.svg'
import { company, legal, services } from '../../../../utils/CONSTANTS'
import FooterItem from './items-card'
import FooterItemFollowUs from './footer-item-followus'
import Link from 'next/link'

export default function FooterMobileView() {
    return (
        <div className='bg-[#4C5A68] text-white  px-10 py-10 items-start flex flex-col   '>
            <div className='flex gap-8 w-full'>
                <div
                    className="flex">
                    <Image
                        src={Logo}
                        alt="logo"
                        height={80}
                        // style={{ objectFit: 'cover' }}
                        objectPosition='center' loading='lazy'
                    />
                </div>

                <div className='flex justify-between  w-[50%]  gap-4'>

                    {company?.map((item, index) => (
                        <FooterItem title={item?.title} item={item?.item} key={index} />
                    ))}

                    {legal?.map((item, index) => (
                        <FooterItem title={item?.title} item={item?.item} key={index} />
                    ))}


                </div>
            </div>

            <div className=' mt-7 flex  w-ful items-center'>

                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2 w-full'>

                        <div className='flex w-5'>
                            <Image
                                src={MailImage}
                                alt='mail'
                                height={14}
                                loading='lazy'
                            />
                        </div>


                        <Link href='mailto:contact@dabarinvest.com' className=' text-xs -ml-1 '>
                            contact@dabarinvest.com
                        </Link>

                    </div>

                    <div className='flex items-center gap-2 w-full'>
                        <div className='flex w-5'>
                            <Image
                                src={MapImage}
                                alt='map'
                                height={15}
                                loading='lazy'
                            />
                        </div>
                        <div className='flex w-full'>
                            <p className=' text-xs '>5 rue heienhaff, Luxembourg</p>
                        </div>
                    </div>

                </div>
                <FooterItemFollowUs />
            </div>


        </div>
    )
}
