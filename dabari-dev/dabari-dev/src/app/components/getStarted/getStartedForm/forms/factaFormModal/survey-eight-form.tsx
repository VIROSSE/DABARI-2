import React from "react";


interface Props {
    errors: any,
    register: any
}

export default function SurveyEightForm({ errors, register }: Props) {


    return (
        <div className="flex flex-col  border rounded-md">
            <div className="p-5  border-b">
                <p ><span className="font-bold">J) </span>{`For U.S. property owners, please provide details address of U.S. property owned:`}</p>
            </div>
            <div className="grid grid-cols-2 border-t">
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_property_owner_address_line_1"
                        className="h-10 w-full px-5"
                        placeholder="Address Line 1:"
                        {...register("us_property_owner_address_line_1", { required: true })}
                    />
                </div>
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_property_owner_address_line_2"
                        className="h-10 w-full px-5"
                        placeholder="Address Line 2:"
                        {...register("us_property_owner_address_line_2", { required: true })}
                    />
                </div>
            </div>

        </div>
    );
}
