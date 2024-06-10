import React from 'react'

const Card = ({ icon, heading, subHeading, flexDirection, maxWidth, margin }) => {
    return (
        <div className={`flex p-4 bg-input-bg justify-center items-center text-center shadow-3xl border-1 border-black rounded-lg  ${maxWidth} ${flexDirection}`}>
            <div>
                {icon}
            </div>
            <div className={`${margin}`}>
                <div className='text-3xl my-4 font-medium'>
                    {heading}
                </div>
                <div className='text-lg'>
                    {subHeading}
                </div>
            </div>
        </div>
    )
}

export default Card
