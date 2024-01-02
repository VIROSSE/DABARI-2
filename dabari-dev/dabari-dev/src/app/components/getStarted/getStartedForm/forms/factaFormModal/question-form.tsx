import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/table";



const columns = [
    {
        key: "section",
        label: "Section",
    },
    {
        key: "description",
        label: "Description",
    },
    {
        key: "action",
        label: "Action",
    },
];

interface Props {
    errors: any,
    register: any
}

export default function QuestionForm({ errors, register }: Props) {
    const rows = [
        {
            key: "1",
            section: "a",
            description: "Are you a U.S National?",
            action: (
                <div className="grid space-y-2 py-4">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                            <input type="radio" value="yes" name="us_national" className="h-5 w-5"   {...register("us_national", { required: true })} />
                            <p>Yes</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="radio" value="no" name="us_national" className="h-5 w-5" {...register("us_national", { required: true })} />
                            <p>No</p>
                        </div>
                    </div>
                    {errors?.us_national && <span className="text-red-600 text-xs">This field is require!</span>}
                </div>
            ),
        },

        {
            key: "2",
            section: "b",
            description: "Are you a U.S Resident (Green Card Hoker)",
            action: (
                <div className="grid space-y-2 py-4">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                            <input type="radio" value="yes" name="us_national" className="h-5 w-5"   {...register("us_resident", { required: true })} />
                            <p>Yes</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="radio" value="no" name="us_national" className="h-5 w-5" {...register("us_resident", { required: true })} />
                            <p>No</p>
                        </div>
                    </div>
                    {errors?.us_resident && <span className="text-red-600 text-xs">This field is require!</span>}
                </div>
            ),
        },

        {
            key: "3",
            section: "c",
            description: "Were you born in the U.S?",
            action: (
                <div className="grid space-y-2 py-4">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                            <input type="radio" value="yes" name="us_national" className="h-5 w-5"   {...register("us_born", { required: true })} />
                            <p>Yes</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="radio" value="no" name="us_national" className="h-5 w-5" {...register("us_born", { required: true })} />
                            <p>No</p>
                        </div>
                    </div>
                    {errors?.us_born && <span className="text-red-600 text-xs">This field is require!</span>}
                </div>
            ),
        },
        {
            key: "4",
            section: "d",
            description: "Do you have a US maling address (including a U.S, post office box)?",
            action: (
                <div className="grid space-y-2 py-4">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                            <input type="radio" value="yes" name="us_national" className="h-5 w-5"   {...register("us_mailing", { required: true })} />
                            <p>Yes</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="radio" value="no" name="us_national" className="h-5 w-5" {...register("us_mailing", { required: true })} />
                            <p>No</p>
                        </div>
                    </div>
                    {errors?.us_mailing && <span className="text-red-600 text-xs">This field is require!</span>}
                </div>
            ),
        },
        {
            key: "5",
            section: "e",
            description: "Do you have a U.S telephone number ?",
            action: (
                <div className="grid space-y-2 py-4">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                            <input type="radio" value="yes" name="us_national" className="h-5 w-5"   {...register("us_tell_number", { required: true })} />
                            <p>Yes</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="radio" value="no" name="us_national" className="h-5 w-5" {...register("us_tell_number", { required: true })} />
                            <p>No</p>
                        </div>
                    </div>
                    {errors?.us_tell_number && <span className="text-red-600 text-xs">This field is require!</span>}
                </div>
            ),
        },
        {
            key: "6",
            section: "f",
            description: "Do you have any standing instructions to transfer funds to an account maintaned in the U.S ?",
            action: (
                <div className="grid space-y-2 py-4">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                            <input type="radio" value="yes" name="us_national" className="h-5 w-5"   {...register("us_standing_instructions", { required: true })} />
                            <p>Yes</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="radio" value="no" name="us_national" className="h-5 w-5" {...register("us_standing_instructions", { required: true })} />
                            <p>No</p>
                        </div>
                    </div>
                    {errors?.us_standing_instructions && <span className="text-red-600 text-xs">This field is require!</span>}
                </div>
            ),
        },
        {
            key: "7",
            section: "g",
            description: "Have you appointed a Power of Attorney with a U.S mailing adress for No this account ?",
            action: (
                <div className="grid space-y-2 py-4">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                            <input type="radio" value="yes" name="us_national" className="h-5 w-5"   {...register("us_attorney", { required: true })} />
                            <p>Yes</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="radio" value="no" name="us_national" className="h-5 w-5" {...register("us_attorney", { required: true })} />
                            <p>No</p>
                        </div>
                    </div>
                    {errors?.us_attorney && <span className="text-red-600 text-xs">This field is require!</span>}
                </div>
            ),
        },
        {
            key: "8",
            section: "h",
            description: 'Have you provided an "in care of" or "hold mail" address on this account while you reside/are domiciled in the US.? To clarify hold mail is a service offered by some Banks to persons not wanting maid to be delivered to their Registered mailing adress, where tje bank holds the mail for collection',
            action: (
                <div className="grid space-y-2 py-8">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                            <input type="radio" value="yes" name="us_national" className="h-5 w-5"   {...register("us_incare_mail", { required: true })} />
                            <p>Yes</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="radio" value="no" name="us_national" className="h-5 w-5" {...register("us_incare_mail", { required: true })} />
                            <p>No</p>
                        </div>
                    </div>
                    {errors?.us_incare_mail && <span className="text-red-600 text-xs">This field is require!</span>}
                </div>
            ),
        },
    ];

    return (
        <Table
            aria-label="Example table with dynamic content"
            className="drop-shadow-sm border rounded-md"
        >
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
                {(item) => (
                    <TableRow key={item.key} className="border-b last:border-b-0">
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
