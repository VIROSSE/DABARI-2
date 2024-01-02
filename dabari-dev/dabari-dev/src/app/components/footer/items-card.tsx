import Link from 'next/link'
import React from 'react'

interface ItemsCardProps {
    title: string,
    item:
    {
        title: string,
        link: string
    }[]

}

export default function FooterItem({ title, item }: ItemsCardProps) {
    return (

        <div className='space-y-1'>
            <p className='font-semibold text-sm lg:text-[0.84rem] xl:text-base'>{title}</p>
            <div className='flex flex-col gap-1'>
                {item?.map((item, itemIndex) => (
                    <Link href={item?.link} key={itemIndex}>
                        <p className='font-light text-xs lg:text-[0.84rem] xl:text-base'>{item?.title}</p>
                    </Link>
                ))}
            </div>
        </div>

    )
}
