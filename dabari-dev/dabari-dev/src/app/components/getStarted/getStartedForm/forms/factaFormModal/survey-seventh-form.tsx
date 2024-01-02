import React from "react";


interface Props {
    errors: any,
    register: any
}

export default function SurveySeventhForm({ errors, register }: Props) {


    return (
        <div className="flex flex-col  border rounded-md">
            <div className="p-5  border-b">
                <p ><span className="font-bold">G) </span>{`For those with Standing Instructions to make fixed frequency transfers to the U.S., please provide the following details`}</p>
            </div>

            <div className="grid grid-cols-2 mb-1">
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_transfer_address_line_1"
                        className="h-10 w-full px-5"
                        placeholder="U.S Nationals:"
                        {...register("us_transfer_address_line_1", { required: true })}
                    />
                </div>
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_transfer_amount"
                        className="h-10 w-full px-5"
                        placeholder="Amount (USD):"
                        {...register("us_transfer_amount", { required: true })}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 border-t">
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_transfer_address_line_2"
                        className="h-10 w-full px-5"
                        placeholder="Address Line 2:"
                        {...register("us_transfer_address_line_2", { required: true })}
                    />
                </div>
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_transfer_amount_us_account_no"
                        className="h-10 w-full px-5"
                        placeholder="U.S Account No:"
                        {...register("us_transfer_amount_us_account_no", { required: true })}
                    />
                </div>
            </div>

        </div>
    );
}
