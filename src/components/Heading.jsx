import React from 'react'

const Heading = ({ heading, subHeading }) => {
    return (
        <div className='px-8 mt-20 pb-10 sm:px-16 md:px-24 lg:px-32'>
            <div className='bg-black shadow-3xl border-1 border-black rounded-lg px-8 py-4 text-center'>
                <div className={`text-white text-5xl xl:text-6xl mb-2 ${subHeading && "mb-8"}`}>
                    {heading}
                </div>
                <div className='text-white text-xl mb-2'>
                    {subHeading}
                </div>
            </div>
        </div>
    );
}

export default Heading;
