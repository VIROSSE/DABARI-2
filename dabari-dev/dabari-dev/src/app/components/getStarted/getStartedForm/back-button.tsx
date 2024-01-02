import React from 'react'
import { Button } from '../../ui/button'
import Image from 'next/image'
import RightArrow from '../../../../../public/icons/arrows/right-arrow.svg'

interface Props {
    onClick: (item: any) => void,
    disabled: boolean
}

export default function BackButton({ onClick, disabled }: Props) {
    return (
        <div>
            <Button className='gap-3' onClick={onClick} disabled={disabled}>
                <Image
                    src={RightArrow}
                    alt="right arrow"
                    style={{ transform: 'scaleX(-1)' }}
                    height={10}
                    loading='lazy'
                />
                <p>Back</p>
            </Button>
        </div>
    )
}
