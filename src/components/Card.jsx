import React from 'react'

const Card = ({ icon, heading, subHeading, flexDirection }) => {
    return (
        <div className={`flex p-4 bg-input-bg justify-center items-center max-w-[22rem] shadow-3xl border-1 border-black rounded-lg ${flexDirection}`}>
            <div>
                {icon}
            </div>
            <div className='mt-2'>
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
