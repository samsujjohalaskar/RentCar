import React from 'react'

const Data = ({ text, width }) => {
    return (
        <div className={`flex justify-center items-center bg-white ${width} h-10 font-medium text-sm p-2 shadow-3xl border-1 border-black rounded-lg xl:text-base`}>
            <p>{text}</p>
        </div>
    )
}

export default Data
