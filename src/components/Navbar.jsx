import React from 'react';
import logo from "../assets/logo1.png";
import Button from './Button';
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
    return (
        <div className='flex justify-center items-center p-3 bg-transparent font-audiowide'>
            <nav className='flex justify-between items-center w-full lg:mx-8 2xl:w-9/12'>
                <div>
                    <img src={logo} alt="CarWaale" className='w-36 lg:w-80' />
                </div>
                <div className='hidden list-none gap-4 md:flex xl:text-xl xl:gap-7'>
                    {["home", "collections", "testimonials", "book"].map((item, index) => (
                        <li className='cursor-pointer font-medium uppercase' key={index}>{item}</li>
                    ))}
                </div>
                <div className='hidden md:flex gap-4'>
                    <Button text={"Log in"} width={"md:w-20 xl:w-32"} height={"md:h-8 xl:h-12"} initialState={"bg-white"} hoverEffect={"hover:bg-black hover:text-white"} />
                    <Button text={"Register"} width={"md:w-20 xl:w-32"} height={"md:h-8 xl:h-12"} initialState={"bg-black text-white"} hoverEffect={"hover:bg-white hover:text-black"} />
                </div>
                <div className='md:hidden'>
                    <VscThreeBars color='black'/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
