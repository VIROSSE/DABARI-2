import React, { useRef } from 'react'
import { cn } from '../../../../../../../lib/utils'
import { motion } from "framer-motion"

import { fadeIn } from '../../../../../../../utils/motion'


interface Props {
    register: any,
    errors: any,
    setCheckMode: (item: string) => void,
    checkMode: string | undefined
}

export default function IncomeSource({ register, errors, setCheckMode, checkMode }: Props) {
    const storedUserInfo = typeof window !== 'undefined' && localStorage.getItem('userWealthData');
    const userInfo = storedUserInfo && JSON.parse(storedUserInfo);
    const ref = useRef(null)
    return (
        <div className='grid space-y-5'>
            <div
                className='flex gap-2 items-center  text-[#455A64] hover:cursor-pointer'
                onClick={() => setCheckMode('other')}
            >
                <input
                    type='radio'
                    className='h-4 w-4'
                    checked={checkMode === 'other'}
                    defaultChecked={userInfo?.nature_of_wealth === 'income_source'}
                    defaultValue={userInfo?.nature_of_wealth}
                />
                <p className='font-bold text-lg'>Other Income Sources</p>
            </div>

            {checkMode === 'other' && (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={fadeIn(0)} className='grid space-y-5'>
                        <div className='flex md:gap-5 lg:gap-16 md:flex-row flex-col px-2 '>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Source (property Sale, rental, investments etc.)</p>
                                    <input
                                        type="text"
                                        defaultValue={userInfo?.other_income_source}
                                        placeholder='Enter your source'
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 w-[20rem] md:w-[25rem] text-black',
                                            errors.other_income_source && 'border-red-400 border-2'
                                        )}
                                        {...register("other_income_source", { required: true })}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Total Annual Value</p>
                                    <input
                                        type="number"
                                        defaultValue={userInfo?.other_income_total_annual_value}
                                        placeholder='Enter your total amount Received'
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.other_income_total_annual_value && 'border-red-400 border-2'
                                        )}
                                        {...register("other_income_total_annual_value", { required: true })}
                                    />
                                </div>
                            </div>
                        </div>




                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}
