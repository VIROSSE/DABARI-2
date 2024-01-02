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

export default function BusinessOwned({ register, errors, setCheckMode, checkMode }: Props) {
    const storedUserInfo = typeof window !== 'undefined' && localStorage.getItem('userWealthData');
    const userInfo = storedUserInfo && JSON.parse(storedUserInfo);
    const ref = useRef(null)

    return (
        <div className='grid space-y-5'>
            <div
                className='flex gap-2 items-center  text-[#455A64] hover:cursor-pointer'
                onClick={() => setCheckMode('business')}
            >
                <input
                    type='radio'
                    className='h-4 w-4'
                    checked={checkMode === 'business'}
                    defaultChecked={userInfo?.nature_of_wealth === 'business'}
                    defaultValue={userInfo?.nature_of_wealth}
                />
                <p className='font-bold text-lg'>Business(es) Owned</p>
            </div>

            {checkMode === 'business' && (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={fadeIn(0)} className='grid space-y-5 '>

                        <div className='flex md:gap-5 lg:gap-16 md:flex-row flex-col px-2 '>
                            <div className='flex flex-col space-y-2 '>
                                <div className='flex flex-col gap-3 py-2 text-[#37474F] '>
                                    <p className=' text-sm  font-semibold'>Company Name</p>
                                    <input
                                        type="text"
                                        defaultValue={userInfo?.company_name}
                                        placeholder='Enter your company name'
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 w-[20rem] md:w-[25rem] text-black',
                                            errors.company_name && 'border-red-400 border-2'
                                        )}
                                        {...register("company_name", { required: true })}
                                    />
                                </div>

                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>% Ownership</p>
                                    <input
                                        type="number"
                                        defaultValue={userInfo?.ownership}
                                        placeholder='Enter your ownership'
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.ownership && 'border-red-400 border-2'
                                        )}
                                        {...register("ownership", { required: true })}
                                    />
                                </div>

                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Country of Operation</p>
                                    <input
                                        type="text"
                                        defaultValue={userInfo?.country_of_operation}
                                        placeholder='Enter your country of operation'
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.country_of_operation && 'border-red-400 border-2'
                                        )}
                                        {...register("country_of_operation", { required: true })}
                                    />
                                </div>

                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Year of Etablishment</p>
                                    <input
                                        type="number"
                                        defaultValue={userInfo?.year}
                                        placeholder='Enter your year of etablishment'
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.year && 'border-red-400 border-2'
                                        )}
                                        {...register("year", { required: true })}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Line of Business</p>
                                    <input
                                        type="text"
                                        defaultValue={userInfo?.line_of_business}
                                        placeholder='Enter your line of business'
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.line_of_business && 'border-red-400 border-2'
                                        )}
                                        {...register("line_of_business", { required: true })}
                                    />
                                </div>

                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Website, if any</p>
                                    <input
                                        type="url"
                                        placeholder='Enter your website'
                                        defaultValue={userInfo?.website}
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.website && 'border-red-400 border-2'
                                        )}
                                        {...register("website", { required: true })}
                                    />
                                </div>

                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Annual Turnover</p>
                                    <input
                                        type="text"
                                        defaultValue={userInfo?.annual_turnover}
                                        placeholder='Enter your annual turnover'
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.annual_turnover && 'border-red-400 border-2'
                                        )}
                                        {...register("annual_turnover", { required: true })}
                                    />
                                </div>

                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Average Share of Annual Profit</p>
                                    <input
                                        type="text"
                                        defaultValue={userInfo?.average_share_of_annual_profit}
                                        placeholder='Enter your annual profit'
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.average_share_of_annual_profit && 'border-red-400 border-2'
                                        )}
                                        {...register("average_share_of_annual_profit", { required: true })}
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
