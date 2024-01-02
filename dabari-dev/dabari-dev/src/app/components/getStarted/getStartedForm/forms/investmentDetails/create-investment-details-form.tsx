import React, { useState } from 'react'
import { cn } from '../../../../../../../lib/utils'


interface Props {
    register: any,
    errors: any,
    control: any
}

export default function CreateInvestmentDetailsForm({ register, errors, control }: Props) {

    const [renewalType, setRenewalType] = useState('');

    return (
        <div className='grid space-y-10'>

            <div className='grid  text-[#455A64]'>
                <p className='font-bold text-lg'>Investment  Details</p>
                <p className=' text-base'>Investment  Details of investor</p>
            </div>

            <div className='flex md:gap-5 lg:gap-16 md:flex-row flex-col px-2'>
                <div className='flex flex-col space-y-2'>

                    <div className='flex flex-col gap-3 py-2 '>
                        <div className='flex items-center gap-1 text-[#37474F]'>
                            <p className=' text-sm  font-semibold'>Reference No </p>
                            <p className=' text-xs'>(CIF No / Account/ Credit card/  Emirates ID No)</p>
                        </div>
                        <input
                            type="text"
                            placeholder='Enter your reference number '
                            className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black',
                                errors.reference && 'border-red-400 border-2'
                            )}
                            {...register("reference", { required: true })}
                        />
                    </div>

                    <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                        <p className=' text-sm  font-semibold'>Currency</p>
                        <select
                            name="currency"
                            className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black',
                                errors.currency && 'border-red-400 border-2'
                            )}
                            {...register("currency", { required: true })}
                        >
                            <option value="AED">AED</option>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-3 py-2 text-[#37474F]'>
                        <p className=' text-sm  font-semibold'>
                            Renewal instructions{" "}
                            <span className='text-red-600 text-xs'>{errors.renewal_instructions && 'This field is require!'}</span>
                        </p>
                        <div className='flex gap-5 flex-col'>
                            <div className='gap-3 flex text-sm hover:cursor-pointer'   >
                                <div>
                                    <input
                                        type="radio"
                                        name="renewal_instructions"
                                        value="interestCreditAccount"
                                        className={'h-5 w-5'}
                                        onClick={() => setRenewalType('interestCreditAccount')}
                                        {...register("renewal_instructions", { required: true })}
                                    />
                                </div>
                                <label> <b>A)</b> Renew principal at the same tenure at the prevailing rate of interest  and credit the interest to the following </label>
                            </div>
                            {renewalType === 'interestCreditAccount' && (
                                <div className='grid pl-6 space-y-2'>
                                    <p className=' text-xs'>IBAN number</p>
                                    <input
                                        type="text"
                                        name='iban_number'
                                        disabled={renewalType !== 'interestCreditAccount'}
                                        placeholder='Enter your reference number '
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[20rem] text-black',
                                            renewalType !== 'interestCreditAccount' && 'hover:cursor-not-allowed',
                                            errors.iban_number && 'border-red-400 border-2'
                                        )}
                                        {...register("iban_number", { required: true })}
                                    />
                                </div>
                            )}



                        </div>

                        <div className='flex gap-5 flex-col'>
                            <div className='gap-3 flex text-sm' >
                                <div>
                                    <input
                                        type="radio"
                                        name="renewal_instructions"
                                        value="renewalTenure"
                                        className='h-5 w-5'
                                        onClick={() => setRenewalType('renewalTenure')}
                                        {...register("renewal_instructions", { required: true })}
                                    />
                                </div>
                                <label> <b>B)</b> Principal  to be credited to the following IBAN </label>
                            </div>
                            {renewalType === 'renewalTenure' && (
                                <div className='grid pl-6 space-y-2'>
                                    <p className=' text-xs'>IBAN number</p>
                                    <input
                                        type="text"
                                        name='iban_number'
                                        disabled={renewalType !== 'renewalTenure'}
                                        placeholder='Enter your reference number '
                                        className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[20rem] text-black',
                                            renewalType !== 'renewalTenure' && 'hover:cursor-not-allowed',
                                            errors.iban_number && 'border-red-400 border-2'
                                        )}
                                        {...register("iban_number", { required: true })}
                                    />
                                </div>
                            )}



                        </div>
                    </div>


                </div>


                <div className='flex flex-col space-y-2'>

                    <div className='flex flex-col gap-3 py-2 '>
                        <div className='flex items-center gap-1 text-[#37474F]'>
                            <p className=' text-sm  font-semibold'>Amount in fugures </p>
                        </div>
                        <input
                            type="text"
                            placeholder='Enter the amounts  '
                            className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black',
                                errors.amounts && 'border-red-400 border-2'
                            )}
                            {...register("amounts", { required: true })}
                        />
                    </div>

                    <div className='flex   flex-col gap-5 py-2 text-[#37474F] '>
                        <p className=' text-sm  font-semibold'>Term of Investments</p>

                        <div className='flex gap-10'>
                            <div className='gap-3 flex text-sm'>
                                <input
                                    type="radio"
                                    name="terms_of_investments"
                                    value="1year"
                                    className='h-5 w-5'
                                    {...register("terms_of_investments", { required: true })}
                                />
                                <label> 1 year </label>
                            </div>

                            <div className='gap-3 flex text-sm' >
                                <input
                                    type="radio"
                                    name="terms_of_investments"
                                    value="2years"
                                    className='h-5 w-5'
                                    {...register("terms_of_investments", { required: true })}
                                />
                                <label> 2 years </label>
                            </div>
                            <div className='gap-3 flex text-sm' >
                                <input
                                    type="radio"
                                    name="terms_of_investments"
                                    value="3years"
                                    className='h-5 w-5'
                                    {...register("terms_of_investments", { required: true })}
                                />
                                <label> 3 years </label>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 py-4 '>
                        <div className='flex items-center gap-1 text-[#37474F]'>
                            <p className=' text-sm  font-semibold'>Date of  credit </p>
                        </div>
                        <input
                            type="date"
                            placeholder='Enter the date of credit  '
                            className={cn('bg-[#F7F6F6] h-9 text-sm px-3 md:w-[23rem] text-black',
                                errors.date_of_credits && 'border-red-400 border-2'
                            )}
                            {...register("date_of_credits", { required: true })}
                        />
                    </div>

                </div>
            </div>


        </div>
    )
}
