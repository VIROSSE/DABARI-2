import React from "react";


interface Props {
    errors: any,
    register: any
}

export default function SurveyFifthForm({ errors, register }: Props) {


    return (
        <div className="flex flex-col  border rounded-md">
            <div className="p-5  border-b">
                <p ><span className="font-bold">E) </span> For those born in the US. please override coou of your Birth Certificate. If you have renounced your US citizenship. please provide evidence of this (renunciation cerancate or eauivalent)</p>
            </div>

        </div>
    );
}
