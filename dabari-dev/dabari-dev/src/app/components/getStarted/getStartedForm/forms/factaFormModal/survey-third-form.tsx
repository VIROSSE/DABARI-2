import React from "react";


interface Props {
    errors: any,
    register: any
}

export default function SurveyThirdForm({ errors, register }: Props) {


    return (
        <div className="flex flex-col  border rounded-md">


            <div className="grid grid-cols-2 mb-1">
                <div className="grid border-r p-2">
                    <p ><span className="font-bold">C) </span>For Green Card Holders, please override tour Green Card Number</p>
                </div>
                <div className="grid ">
                    <input
                        type="text"
                        name="us_gc_no"
                        className="h-full w-full px-5"
                        placeholder="GC No:"
                        {...register("us_gc_no", { required: true })}
                    />
                </div>

            </div>

        </div>
    );
}
