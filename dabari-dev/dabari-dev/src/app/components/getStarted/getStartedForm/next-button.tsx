import React from 'react'
import { Button } from '../../ui/button'
import Image from 'next/image'
import RightArrow from '../../../../../public/icons/arrows/right-arrow.svg'

interface Props {
    onClick: (item: any) => void,
    disabled: boolean
}

export default function NextButton({ onClick, disabled }: Props) {
    return (
        <div>
            <Button className='gap-3' onClick={onClick} disabled={disabled}>
                <p>Next</p>
                <Image
                    src={RightArrow}
                    alt="right arrow"
                    className=""
                    height={10}
                    loading='lazy'
                />
            </Button>
        </div>
    )
}
