import React from 'react'
import Image from 'next/image'
import logo from "../../../public/icons/logo/logo2.svg"
import { cn } from '../../../lib/utils'

interface LogoProps {
    className?: string
}

export default function Logo({ className }: LogoProps) {
    return (
        <div
            className={cn(
                "flex px-3 md:px-0",
                className
            )}>
            <Image src={logo} alt="logo" height={40} style={{ objectFit: 'cover' }}
                objectPosition='center' loading='lazy' />
        </div>
    )
}
