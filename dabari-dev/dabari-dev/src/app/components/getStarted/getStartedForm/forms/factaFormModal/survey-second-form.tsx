import React from "react";


interface Props {
    errors: any,
    register: any
}

export default function SurveySecondForm({ errors, register }: Props) {


    return (
        <div className="flex flex-col  border rounded-md">


            <div className="grid grid-cols-2 mb-1">
                <div className="grid border-r p-2">
                    <p ><span className="font-bold">B) </span>For individual U.S. tax payers, please provide your Tax Identification Number (TIN) or Social Security (SS) Number:</p>
                </div>
                <div className="grid ">
                    <input
                        type="text"
                        name="us_tin_ss_no"
                        className="h-full w-full px-5"
                        placeholder="TIN/SS No:"
                        {...register("us_tin_ss_no", { required: true })}
                    />
                </div>

            </div>

        </div>
    );
}
