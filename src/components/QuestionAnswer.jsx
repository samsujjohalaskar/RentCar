import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const QuestionAnswer = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div onClick={onToggle} className={`w-full bg-input-bg p-4 cursor-pointer shadow-3xl border-1 border-black rounded-lg ${!isOpen && "hover:bg-black hover:text-white"}`}>
            <div className='flex justify-between items-center gap-4'>
                <div className='text-xl'>
                    {question}
                </div>
                <div className='text-xl'>
                    {!isOpen ? (<FaPlus />) : (<FaMinus />)}
                </div>
            </div>
            <div className={isOpen ? 'mt-4' : ''}>
                {isOpen && answer}
            </div>
        </div>
    );
};

export default QuestionAnswer