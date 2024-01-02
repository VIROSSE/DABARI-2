import React from "react";


interface Props {
    errors: any,
    register: any
}

export default function SurveyNineForm({ errors, register }: Props) {


    return (
        <div className="flex flex-col  border rounded-md">
            <div className="p-5  border-b">
                <p ><span className="font-bold">H) </span>Does the POA holder have a U.S. mailing address?</p>
            </div>

            <div className="grid grid-cols-2 border-b">
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_poa_holder_name"
                        className="h-10 w-full px-5"
                        placeholder="Name:"
                        {...register("us_poa_holder_name", { required: true })}
                    />
                </div>
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_poa_nationality"
                        className="h-10 w-full px-5"
                        placeholder="Nationality:"
                        {...register("us_poa_nationality", { required: true })}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 mb-1 border-b">
                <div className="grid ">
                    <input
                        type="text"
                        name="us_poa_address_line_1"
                        className="h-10 w-full px-5"
                        placeholder="Address Line 1:"
                        {...register("us_poa_address_line_1", { required: true })}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 mb-1">
                <div className="grid ">
                    <input
                        type="text"
                        name="us_poa_address_line_2"
                        className="h-10 w-full px-5"
                        placeholder="Address Line 2:"
                        {...register("us_poa_address_line_2", { required: true })}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 border-t">
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_poa_city"
                        className="h-10 w-full px-5"
                        placeholder="City:"
                        {...register("us_poa_city", { required: true })}
                    />
                </div>
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_poa_country"
                        className="h-10 w-full px-5"
                        placeholder="Country:"
                        {...register("us_poa_country", { required: true })}
                    />
                </div>
            </div>

        </div>
    );
}
