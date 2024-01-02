import React from "react";


interface Props {
    errors: any,
    register: any
}

export default function SurveyForm({ errors, register }: Props) {


    return (
        <div className="flex flex-col  border rounded-md">
            <div className="p-5  border-b">
                <p ><span className="font-bold">A) </span>{`‍‍Form for individuals - Section «B» If you have answered Yes to any of the questions in Section A Please override further details as undor:a`}</p>
            </div>

            <div className="grid grid-cols-3 mb-1">
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_national"
                        className="h-10 w-full px-5"
                        placeholder="U.S Nationals:"
                        {...register("us_nationals", { required: true })}
                    />
                </div>
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_passport_no"
                        className="h-10 w-full px-5"
                        placeholder="Passport No:"
                        {...register("us_passport_no", { required: true })}
                    />
                </div>
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_phone_no"
                        className="h-10 w-full px-5"
                        placeholder="Phone No:"
                        {...register("us_phone_no", { required: true })}
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 border-t">
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_second_country"
                        className="h-10 w-full px-5"
                        placeholder="Second country of dual nationality:"
                        {...register("us_second_country", { required: true })}
                    />
                </div>
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_passport_no"
                        className="h-10 w-full px-5"
                        placeholder="Passport No:"
                        {...register("us_second_country_passport_no", { required: true })}
                    />
                </div>
                <div className="grid border-r">
                    <input
                        type="text"
                        name="us_phone_no"
                        className="h-10 w-full px-5"
                        placeholder="Phone No:"
                        {...register("us_second_country_phone_no", { required: true })}
                    />
                </div>
            </div>

        </div>
    );
}
