import Image from 'next/image';
import React, { useRef } from 'react';
import { useController } from 'react-hook-form';

interface Props {
    control: any,
    name: string,
    label: string
}

const FileInput = ({ control, name, label }: Props) => {
    const inputRef = useRef<any>(null);

    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { invalid, error },
    } = useController({
        control,
        name,
        rules: { required: 'This field is required' },
    });

    const handleFileChange = (e: any) => {
        onChange(e.target.files[0]);
    };

    const handleButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <div className='flex items-center flex-col'>
            <input
                type="file"
                ref={(e) => {
                    ref(e);
                    inputRef.current = e;
                }}
                onChange={handleFileChange}
                className="hidden"
                onBlur={onBlur}
                accept="image/png, image/jpeg, .pdf"
            />


            <button type="button" onClick={handleButtonClick} className='flex flex-col items-center gap-4'>
                <Image src="/icons/other/input-file.png" alt="Upload Icon" height={200} width={200} />
                {label}
            </button>
            <span className='text-sm text-gray-400 mt-2'>{value?.name}</span>
            {invalid && <span className='text-sm text-red-400'>{error?.message}</span>}
        </div>
    );
};

export default FileInput;