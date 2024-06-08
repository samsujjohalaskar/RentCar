import React from 'react';

const Input = ({ label, name, id, type, placeholder, pattern, maxLength, value, onChange }) => {
    return (
        <div className='flex flex-col max-w-lg'>
            <label htmlFor={id} className='mb-2'>{label}</label>
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                pattern={pattern}
                maxLength={maxLength}
                value={value}
                onChange={onChange}
                required
                className='w-full p-2 border rounded bg-input-bg sm:w-[32rem]'
            />
        </div>
    );
};

export default Input;
