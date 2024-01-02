import React from "react";


interface Props {
    errors: any,
    register: any
}

export default function SurveyFourthForm({ errors, register }: Props) {


    return (
        <div className="flex flex-col  border rounded-md">
            <div className="p-5  border-b">
                <p ><span className="font-bold">D) </span>For those with a U.S. address, please provide complete U.S. mailing address including P.O. Box No.</p>
            </div>

            <div className="grid grid-cols-1 mb-1 border-b">
                <div className="grid ">
                    <input
                        type="text"
                        name="us_address_line_1"
                        className="h-10 w-full px-5"
                        placeholder="Address Line 1:"
                        {...register("us_address_line_1", { required: true })}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 mb-1">
                <div className="grid ">
                    <input
                        type="text"
                        name="us_address_line_2"
                        className="h-10 w-full px-5"
                        placeholder="Address Line 2:"
                        {...register("us_address_line_2", { required: true })}
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 border-t">
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_post_box_no"
                        className="h-10 w-full px-5"
                        placeholder="P.O Box No:"
                        {...register("us_post_box_no", { required: true })}
                    />
                </div>
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_city"
                        className="h-10 w-full px-5"
                        placeholder="City:"
                        {...register("us_city", { required: true })}
                    />
                </div>
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_country"
                        className="h-10 w-full px-5"
                        placeholder="Country:"
                        {...register("us_country", { required: true })}
                    />
                </div>
            </div>

        </div>
    );
}
