import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../../../../../utils/motion';
import Image from 'next/image';

interface Props {
    src: any
    ref: any
    control?: any
    delayAnimation?: number
}


export default function SlideImage({ src, ref, control = 'visible', delayAnimation = 0.1 }: Props) {
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={control}


        >
            <motion.div
                variants={fadeIn(delayAnimation)}

            >
                <Image
                    src={src}
                    alt={src}
                    loading='lazy'
                    height={800}
                    className='hidden md:block'
                />
                <Image
                    src={src}
                    alt={src}
                    loading='lazy'
                    height={400}
                    className=' md:hidden'
                />
            </motion.div>
        </motion.div>
    )
}
