import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'

const Review = ({ image, name, username, review }) => {
    return (
        <div className={`flex flex-col gap-6 p-4 bg-input-bg text-center shadow-3xl border-1 border-black rounded-lg`}>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <div>
                        <img className='w-14 h-14 object-cover rounded-full' src={image} alt={name} />
                    </div>
                    <div className='flex flex-col items-start'>
                        <p className='text-lg'>{name}</p>
                        <p className='text-sm opacity-45'>{username}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <FaXTwitter size={30} />
                </div>
            </div>
            <div className='font-light'>
                {review}
            </div>
        </div>
    )
}

export default Review
