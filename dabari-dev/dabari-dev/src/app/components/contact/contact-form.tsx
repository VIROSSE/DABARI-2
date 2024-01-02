"use client"

import React, { useState } from 'react'
import { SubmitButtonWithIcon } from '../ui/button'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Input } from '../ui/input';
import { cn } from '../../../../lib/utils';

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [onSubmitLoading, setOnSubmitLoading] = useState(false);

    const inputPublicStyle = "border-0 placeholder:text-[#C4C4C4] placeholder:md:text-lg placeholder:text-sm w-[18rem] md:w-[30rem] bg-transparent focus-visible:outline-none  focus-visible:ring-offset-2 rounded-none"


    const onSubmit = async (data: any) => {
        setOnSubmitLoading(true)
        let body = JSON.stringify(data);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://dabari.cloud-station.app/api/v1/db/data/noco/pbbybf4bwom7pg3/Features/views/Contact_Form',
            headers: {
                'Content-Type': 'application/json',
                'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9iZW5oYXNzb3VAYmxvY2Z4LmV1IiwiaWQiOiJ1c2c1bHBzYWp3aHVuNjVyIiwicm9sZXMiOnsib3JnLWxldmVsLWNyZWF0b3IiOnRydWUsInN1cGVyIjp0cnVlfSwidG9rZW5fdmVyc2lvbiI6IjJkMGJmMTM3MTg0OWQ2N2I0NjlkYjQ2MmI4MjRhNDA0NmM0NTNmYWIzYzc3ZDM5MWNjMzQ5Nzg0Njg5ZDM3MTlmOWM0MmEzZjRjMWI4OWFkIiwiaWF0IjoxNzAzMTUxNTI0LCJleHAiOjE3MDMxODc1MjR9.iVAizSVPHpAKACap3UN_oc2NM5o9UbQsdAsJZP5A3Rw'
            },
            data: body
        };

        axios.request(config)
            .then((response) => {

                if (response.status === 200) {
                    setOnSubmitLoading(false);
                    toast.success(response?.data?.message ?? "Your message has been successfully sent!");
                } else {
                    setOnSubmitLoading(false);
                    toast.error(response?.data?.message ?? "Registration failed");
                }
            })
            .catch((error: any) => {
                setOnSubmitLoading(false);
                toast.error(error?.response?.data?.message ?? "Registration failed");
                console.error('An error occurred:', error);
            });

    };
    return (
        <div className='grid space-y-6'>
            <form onSubmit={handleSubmit(onSubmit)} className='grid space-y-6'>
                <div className={cn('border-b-2 border-[#3D4B5A] flex flex-col gap-3 py-2',
                    errors.Name && 'border-red-400'
                )}>
                    <p className='text-[#080807] text-sm md:text-xl'>Name *</p>
                    <Input
                        type="text"
                        placeholder='Your full name'
                        inputClassName={inputPublicStyle}
                        className='bg-transparent border-0'
                        {...register("Name", { required: true })}
                    />
                </div>

                <div className={cn('border-b-2 border-[#3D4B5A] flex flex-col gap-3 py-2',
                    errors.Email && 'border-red-400'
                )}>
                    <p className='text-[#1D1D1B] text-sm md:text-xl'>Email *</p>
                    <Input
                        type="email"
                        placeholder='Your email address'
                        inputClassName={inputPublicStyle}
                        className='bg-transparent border-0'
                        {...register("Email", { required: true })}
                    />
                </div>

                <div className="border-b-2 border-[#3D4B5A] flex flex-col gap-3 py-2">
                    <p className='text-[#1D1D1B] text-sm md:text-xl'>Telephone</p>
                    <Input
                        type="number"
                        placeholder='Your phone number'
                        inputClassName={inputPublicStyle}
                        className='bg-transparent border-0'
                        {...register("PhoneNumber", { required: false })}
                    />
                </div>

                <div className="border-b-2 border-[#3D4B5A] flex flex-col gap-3 py-2">
                    <p className='text-[#1D1D1B] text-sm md:text-xl'>Message</p>
                    <Input
                        type="text"
                        placeholder='Your text message'
                        inputClassName={inputPublicStyle}
                        className='bg-transparent border-0'
                        {...register("Message", { required: false })}
                    />
                </div>


                <div className="pt-5 md:pt-10  flex ">
                    <SubmitButtonWithIcon title='Submit' className='font-normal h-12' disabled={onSubmitLoading} />
                </div>
            </form>
        </div>
    )
}
