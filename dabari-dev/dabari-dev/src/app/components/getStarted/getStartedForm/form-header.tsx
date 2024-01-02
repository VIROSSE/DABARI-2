import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import RightArrow from '../../../../../public/icons/arrows/right-arrow-2.png'
import HomeImage from '../../../../../public/icons/other/home.svg'
import FileImage from '../../../../../public/icons/other/file.svg'
import ConfirmImage from '../../../../../public/icons/other/confirm.svg'
import DashboardImage from '../../../../../public/icons/other/dashboard.svg'
import UserImage from '../../../../../public/icons/other/user.svg'
import InvestmentDetails from '../../../../../public/icons/other/investment.svg'

import HomeImageLight from '../../../../../public/icons/other/home.png'
import FileImageLight from '../../../../../public/icons/other/file.png'
import ConfirmImageLight from '../../../../../public/icons/other/confirm.png'
import DashboardImageLight from '../../../../../public/icons/other/dashboard.png'
import UserImageLight from '../../../../../public/icons/other/user.png'
import InvestmentDetailsLight from '../../../../../public/icons/other/investment.png'

import { cn } from '../../../../../lib/utils'

interface HeaderCardProps {
    src: any,
    title: string,
    description: string,
    active: boolean,
    lastItem?: boolean
}

interface Props {
    currentSlide: number
}
export default function Header({ currentSlide }: Props) {

    const HeaderCard = ({ src, title, description, active, lastItem }: HeaderCardProps) => {
        return (
            <div className='flex items-center gap-3'>
                <div className={cn('h-11 w-16 md:w-11 rounded-lg items-center justify-center flex', active ? 'bg-[#455A64]' : 'bg-[#F5F5F5] text-[#BBBFC6]')} >
                    <Image
                        src={src}
                        alt={title}
                        height={25}
                        loading='lazy'
                    />
                </div>
                <div className='flex flex-col  text-xs'>
                    <p className='font-semibold text-[#37474F]'>{title}</p>
                    <p className='text-[#BBBFC6]'>{description}</p>
                </div>
                <div className={cn('ml-5', lastItem && 'hidden')}>
                    <Image
                        src={RightArrow}
                        alt='arrow'
                        height={10}
                        loading='lazy'
                    />
                </div>
            </div>
        )
    }

    return (
        <div className='flex items-center gap-7 overflow-x-scroll md:overflow-auto md:flex-wrap pb-5 md:pb-0'>
            <HeaderCard src={currentSlide === 0 ? HomeImage : HomeImageLight} title='Account' description='Enter username' active={currentSlide === 0} />

            <HeaderCard src={currentSlide === 1 ? UserImage : UserImageLight} title='Personal Details' description='Enter info' active={currentSlide === 1} />

            <HeaderCard src={currentSlide === 2 ? FileImage : FileImageLight} title='KYC information' description='Enter info' active={currentSlide === 2} />

            <HeaderCard src={currentSlide === 3 ? InvestmentDetails : InvestmentDetailsLight} title='Investment details' description='Enter info' active={currentSlide === 3} />

            <HeaderCard src={currentSlide === 4 ? ConfirmImage : ConfirmImageLight} title='Confirm' description='Confirm' active={currentSlide === 4} />

            <HeaderCard src={currentSlide === 5 ? DashboardImage : DashboardImageLight} title='Dashboard' description='Dashboard' active={currentSlide === 5} lastItem />
        </div>
    )
}
