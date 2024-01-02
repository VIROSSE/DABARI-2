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

export default function Inheritance({ register, errors, setCheckMode, checkMode }: Props) {
    const storedUserInfo = typeof window !== 'undefined' && localStorage.getItem('userWealthData');
    const userInfo = storedUserInfo && JSON.parse(storedUserInfo);
    const ref = useRef(null)
    return (
        <div className='grid space-y-5'>
            <div
                className='flex gap-2 items-center  text-[#455A64] hover:cursor-pointer'
                onClick={() => setCheckMode('inheritance')}
            >
                <input
                    type='radio'
                    className='h-4 w-4'
                    onChange={() => setCheckMode('inheritance')}
                    checked={checkMode === 'inheritance'}
                    defaultChecked={userInfo?.nature_of_wealth === 'inheritance'}
                    defaultValue={userInfo?.nature_of_wealth}
                />
                <p className='font-bold text-lg'>Inheritance</p>
            </div>

            {checkMode === 'inheritance' && (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={fadeIn(0)} className='grid space-y-5'>

                        <div className='flex md:gap-5 lg:gap-16 md:flex-row flex-col px-2 '>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Donor name</p>
                                    <input
                                        type="text"
                                        defaultValue={userInfo?.donor_name}
                                        placeholder='Enter your donar name'
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 w-[20rem] md:w-[25rem] text-black',
                                            errors.donor_name && 'border-red-400 border-2'
                                        )}
                                        {...register("donor_name", { required: true })}
                                    />
                                </div>

                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Relationship to Client</p>
                                    <input
                                        type="text"
                                        placeholder='Enter your relationship to client'
                                        defaultValue={userInfo?.relationship_to_client}
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.relationship_to_client && 'border-red-400 border-2'
                                        )}
                                        {...register("relationship_to_client", { required: true })}
                                    />
                                </div>

                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Total amount Received</p>
                                    <input
                                        type="number"
                                        placeholder='Enter your total amount Received'
                                        defaultValue={userInfo?.total_amount_received}
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.total_amount_received && 'border-red-400 border-2'
                                        )}
                                        {...register("total_amount_received", { required: true })}
                                    />
                                </div>

                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Year Received</p>
                                    <input
                                        type="number"
                                        placeholder='Enter your year received'
                                        defaultValue={userInfo?.your_received}
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.your_received && 'border-red-400 border-2'
                                        )}
                                        {...register("your_received", { required: true })}
                                    />
                                </div>

                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Nature of inheritance (Will/ Gift)</p>
                                    <select
                                        name="nature_of_wealth"
                                        defaultValue={userInfo?.nature_of_inheritance}
                                        defaultChecked={userInfo?.nature_of_inheritance}
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[25rem] text-black',
                                            errors.nature_of_inheritance && 'border-red-400 border-2'
                                        )}
                                        {...register("nature_of_inheritance", { required: true })}
                                    >
                                        <option value="Will">Will</option>
                                        <option value="Gift" selected>Gift</option>
                                        <option value="employment" selected>Employment</option>
                                        <option value="other" selected>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                                    <p className=' text-sm  font-semibold'>Brief profile of the donor</p>
                                    <textarea
                                        defaultValue={userInfo?.brief_profile_of_donor}
                                        type="text"
                                        placeholder='Enter your brief profile of the donor'
                                        className={cn('bg-[#F7F6F6] p-2 h-20 text-sm px-3 md:w-[25rem] text-black',
                                            errors.brief_profile_of_donor && 'border-red-400 border-2'
                                        )}
                                        {...register("brief_profile_of_donor", { required: true })}
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
