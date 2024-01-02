import React from "react";


interface Props {
    errors: any,
    register: any
}

export default function SurveySixthForm({ errors, register }: Props) {


    return (
        <div className="flex flex-col  border rounded-md">


            <div className="grid grid-cols-2 mb-1">
                <div className="grid border-r p-2">
                    <p ><span className="font-bold">F) </span> Please provide U.S telephone number with Country and Area Code</p>
                </div>
                <div className="grid ">
                    <input
                        type="text"
                        name="us_tell_country"
                        className="h-full w-full px-5"
                        placeholder="Tell:"
                        {...register("us_tell_country", { required: true })}
                    />
                </div>

            </div>

        </div>
    );
}
