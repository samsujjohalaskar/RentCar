import React, { useState } from 'react'
import Heading from './Heading'
import QuestionAnswer from './QuestionAnswer'
import faqData from '../utils/faqData'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Heading heading={"FAQ's"} subHeading={"Frequently Asked Questions About the Car Booking Process on Our Website and Answers to Common Concerns and Inquiries."} />
            <div className='flex justify-center items-center px-8 mt-12 pb-10 sm:px-16 md:px-24 lg:px-32'>
                <div className='flex flex-col gap-6 max-w-[45rem]'>
                    {faqData.map((item, index) => (
                        <QuestionAnswer
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FAQ