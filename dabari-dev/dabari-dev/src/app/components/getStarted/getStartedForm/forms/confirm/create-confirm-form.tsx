import React from 'react'
import { cn } from '../../../../../../../lib/utils'
import { format } from 'date-fns';
import SignaturePad from 'react-signature-pad-wrapper';
import { Button } from '@/app/components/ui/button';


interface Props {
    register: any,
    errors: any,
    control: any,
    setAgreeAgreement: (item: boolean) => void
    setAgreeConsent: (item: boolean) => void,
    agreeAgreement: boolean,
    agreeConsent: boolean,
    setSignatureData: (item: any) => void,
    signatureData: any

}

export default function CreateConfirmForm({ agreeConsent, agreeAgreement, setAgreeConsent, setAgreeAgreement, register, errors, control, setSignatureData, signatureData }: Props) {
    const currentDate = format(new Date(), 'yyyy-MM-dd');

    return (
        <div className='grid space-y-28'>
            <div className='flex md:gap-5 lg:gap-16 md:flex-row flex-col px-2'>
                <div className='flex flex-col space-y-2'>

                    <div className='flex flex-col gap-3 py-2 '>
                        <div className='flex items-center gap-1 text-[#37474F]'>
                            <p className=' text-sm  font-semibold'>Signature of  Investor</p>
                        </div>
                        <div className='border rounded-md'>
                            <SignaturePad
                                ref={(data: any) => setSignatureData(data)}

                                options={{ minWidth: 2, maxWidth: 3 }}
                                canvasProps={{ width: '800', height: '400', className: 'signature-canvas' }}
                            />
                        </div>

                        <div className=''>
                            <Button type='reset' onClick={() => signatureData.clear()} variant={'outline'}>Clear</Button>
                        </div>
                    </div>


                </div>


                <div className='flex flex-col space-y-2'>

                    <div className='flex flex-col gap-3 py-2 '>
                        <div className='flex items-center gap-1 text-[#37474F]'>
                            <p className=' text-sm  font-semibold'>Date</p>
                        </div>
                        <input
                            type="text"
                            value={`${currentDate}`}
                            defaultValue={`${currentDate}`}
                            disabled
                            placeholder='Enter the amounts  '
                            className={cn('bg-[#F7F6F6] hover:cursor-not-allowed h-9 text-sm px-3 md:w-[23rem] text-black',
                                errors.signature_date && 'border-red-400 border-2'
                            )}
                            {...register("signature_date")}
                        />
                    </div>

                </div>
            </div>


            <div className='space-y-5'>
                <div className='flex gap-5 flex-col'>
                    <div className='gap-3 flex text-sm hover:cursor-pointer'   >
                        <div>
                            <input
                                type="checkbox"
                                className={'h-5 w-5'}
                                onClick={() => setAgreeConsent(!agreeConsent)}
                            />
                        </div>
                        <label> I agree to the Consent to Receive Dabari Invest Disclosures and understand that we will send<br></br> account notices to the email address you provided</label>
                    </div>
                </div>
                <div className='flex gap-5 flex-col'>
                    <div className='gap-3 flex text-sm hover:cursor-pointer'   >
                        <div>
                            <input
                                type="checkbox"
                                className={'h-5 w-5'}
                                onClick={() => setAgreeAgreement(!agreeAgreement)}
                            />
                        </div>
                        <label>{` I have read and agree to Dabari's User Agreement and Privacy Policy.`}</label>
                    </div>
                </div>

                <div className='flex gap-5 flex-col'>
                    <div className=' flex flex-col text-sm hover:cursor-pointer'   >
                        <div>
                            <label className='text-[#3D4B5A] border-b border-gray-500'>Helpful Information</label>
                        </div>
                        <label>
                            By submitting, you confirm that you are authorized to use the number entered and agree to receive SMS texts to verify you own the number.<br></br>
                            Carrier fees may apply.</label>
                    </div>
                </div>
            </div>


        </div>
    )
}
