import React, { useRef } from 'react'
import { cn } from '../../../../../../../lib/utils'
import Image from 'next/image'
import { motion } from "framer-motion"


import Security from '../../../../../../../public/icons/other/secure.png'
import { fadeIn, slideInFromRight } from '../../../../../../../utils/motion'


interface Props {
    register: any,
    errors: any,
    setCheckMode: (item: string) => void,
    checkMode: string | undefined
}

export default function Employment({ register, errors, setCheckMode, checkMode }: Props) {
    const storedUserInfo = typeof window !== 'undefined' && localStorage.getItem('userWealthData');
    const userInfo = storedUserInfo && JSON.parse(storedUserInfo);

    const ref = useRef(null)
    return (
        <div className='grid space-y-5'>
            <div
                className='flex gap-2 items-center  text-[#455A64] hover:cursor-pointer'
                onClick={() => setCheckMode('employment')}
            >
                <input
                    type='radio'
                    className='h-4 w-4'
                    checked={checkMode === 'employment'}
                    defaultChecked={userInfo?.nature_of_wealth === 'employment'}
                    defaultValue={userInfo?.nature_of_wealth}
                />
                <p className='font-bold text-lg'>Employment</p>
            </div>

            {checkMode === 'employment' && (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={fadeIn(0)} className='grid space-y-5 '>

                        <div className='flex md:gap-5 lg:gap-16 md:flex-row flex-col px-2 '>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Company Name</p>
                                    <input
                                        type="text"
                                        defaultValue={userInfo?.employment_company_name}
                                        placeholder='Enter your company name'
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 w-[20rem] md:w-[25rem] text-black',
                                            errors.employment_company_name && 'border-red-400 border-2'
                                        )}
                                        {...register("employment_company_name", { required: true })}
                                    />
                                </div>

                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Line of Business</p>
                                    <input
                                        type="text"
                                        placeholder='Enter your line of business'
                                        defaultValue={userInfo?.employment_line_of_busines}
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.employment_line_of_busines && 'border-red-400 border-2'
                                        )}
                                        {...register("employment_line_of_busines", { required: true })}
                                    />
                                </div>

                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Position</p>
                                    <input
                                        type="text"
                                        placeholder='Enter your position'
                                        defaultValue={userInfo?.employment_position}
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.employment_position && 'border-red-400 border-2'
                                        )}
                                        {...register("employment_position", { required: true })}
                                    />
                                </div>

                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Period of Employment</p>
                                    <input
                                        type="text"
                                        defaultValue={userInfo?.period_of_employment}
                                        placeholder='Enter your period of employment'
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.period_of_employment && 'border-red-400 border-2'
                                        )}
                                        {...register("period_of_employment", { required: true })}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Country</p>
                                    <input
                                        type="text"
                                        placeholder='Enter your country'
                                        defaultValue={userInfo?.employment_country}
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.employment_country && 'border-red-400 border-2'
                                        )}
                                        {...register("employment_country", { required: true })}
                                    />
                                </div>

                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Average annual Salary + Bonus</p>
                                    <input
                                        type="number"
                                        placeholder='Enter your annual salary + bonus'
                                        defaultValue={userInfo?.average_annaul_salary}
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.average_annaul_salary && 'border-red-400 border-2'
                                        )}
                                        {...register("average_annaul_salary", { required: true })}
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
