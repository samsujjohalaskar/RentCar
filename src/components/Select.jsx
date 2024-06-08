import React from 'react';

const Select = ({ label, name, id, value, onChange, options, disabled, defaultOption }) => {
    return (
        <div className='flex flex-col max-w-lg'>
            <label htmlFor={id} className='mb-2'>{label}</label>
            <select
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                className={`w-full p-2 border rounded bg-input-bg ${disabled ? "cursor-not-allowed" : "cursor-pointer"} sm:w-[32rem]`}
                disabled={disabled}
                required
            >
                <option value="" disabled selected>-- Select {defaultOption} --</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;