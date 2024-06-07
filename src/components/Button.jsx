import React from 'react'

const Button = ({ text, initialState, hoverEffect, width, height }) => {
    return (
        <button className={`flex justify-center items-center ${initialState} ${width} ${height} ${hoverEffect} font-medium text-sm p-2 cursor-pointer shadow-3xl border-1 border-black rounded-lg xl:text-base`}>
            {text}
        </button>
    )
}

export default Button
