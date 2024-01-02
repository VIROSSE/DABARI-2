"use client";

import React from 'react'

import { company, legal } from '../../../../utils/CONSTANTS'

import FooterItem from './items-card'
import FooterLeftSidebar from './footer-left-sidebar'
import FooterMobileView from './mobile-view'
import FooterItemFollowUs from './footer-item-followus'
import { usePathname } from 'next/navigation';
import { cn } from '../../../../lib/utils';

export default function Footer() {
    const pathName = usePathname();

    return (
        <div className={cn(
            'grid z-50 absolute w-full ',
            (pathName === ('/getStarted') || pathName === ('/login')) ? 'hidden' : 'grid'
        )}>
            <div className='bg-[#4C5A68] text-white h-80 px-14 lg:px-4 xl:px-64 py-8 items-center lg:flex justify-between hidden'>
                <div className='flex flex-col gap-2 w-full'>
                    <FooterLeftSidebar />
                </div>

                <div className='flex justify-between w-full'>
                    {company?.map((item, index) => (
                        <FooterItem title={item?.title} item={item?.item} key={index} />
                    ))}

                    {legal?.map((item, index) => (
                        <FooterItem title={item?.title} item={item?.item} key={index} />
                    ))}

                    <FooterItemFollowUs />
                </div>

            </div>

            <div className='lg:hidden '>
                <FooterMobileView />
            </div>
        </div>
    )
}
