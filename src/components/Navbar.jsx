import React, { useState } from 'react';
import logo from "../assets/logo.png";
import Button from './Button';
import { VscChromeClose, VscMenu } from "react-icons/vsc";

const Navbar = () => {
    const [topBar, showTopBar] = useState(false);

    return (
        <div className={`${topBar ? "absolute bg-input-bg w-full shadow-3xl" : ""}`}>
            <div className={'flex justify-center items-center p-3 pb-0 bg-transparent font-audiowide'}>
                <nav className='flex justify-between items-center w-full lg:mx-8 2xl:w-9/12'>
                    <div>
                        <img src={logo} alt="RENTCAR" className='w-52 lg:w-80' />
                    </div>
                    <div className='hidden list-none gap-4 md:flex xl:text-xl xl:gap-7'>
                        {["home", "collections", "testimonials", "book"].map((item, index) => (
                            <li className='cursor-pointer font-medium uppercase hover:underline' key={index}>{item}</li>
                        ))}
                    </div>
                    <div className='hidden md:flex gap-4'>
                        <Button text={"Log in"} width={"md:w-20 xl:w-32"} height={"md:h-8 xl:h-12"} initialState={"bg-white"} hoverEffect={"hover:bg-black hover:text-white"} />
                        <Button text={"Register"} width={"md:w-20 xl:w-32"} height={"md:h-8 xl:h-12"} initialState={"bg-black text-white"} hoverEffect={"hover:bg-white hover:text-black"} />
                    </div>
                    <div className='md:hidden'>
                        {!topBar && (<VscMenu color='black' size={20} onClick={() => { showTopBar(true) }} />)}
                        {topBar && (<VscChromeClose color='black' size={20} onClick={() => { showTopBar(false) }} />)}
                    </div>
                </nav>
            </div>
            {topBar &&
                (
                    <div className='px-6 pt-8'>
                        <div className='flex flex-col gap-4 list-none'>
                            {["home", "collections", "testimonials", "book"].map((item, index) => (
                                <li className='cursor-pointer font-medium uppercase hover:underline' key={index}>{item}</li>
                            ))}
                        </div>
                        <div className='flex flex-wrap gap-6 py-6'>
                            <Button text={"Register"} width={"md:w-20 xl:w-32"} height={"md:h-8 xl:h-12"} initialState={"bg-black text-white"} hoverEffect={"hover:bg-white hover:text-black"} />
                            <Button text={"Log in"} width={"md:w-20 xl:w-32"} height={"md:h-8 xl:h-12"} initialState={"bg-white"} hoverEffect={"hover:bg-black hover:text-white"} />
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Navbar
