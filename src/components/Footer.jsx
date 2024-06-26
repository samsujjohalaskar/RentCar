import React from 'react'
import logo from "../assets/logoW.png"
import { FaFacebook, FaXTwitter } from 'react-icons/fa6'
import { TiSocialLinkedin, TiSocialYoutube } from 'react-icons/ti'

const Footer = () => {
    const icons = [
        { component: FaXTwitter, url: 'https://twitter.com/iamsamsujjoha' },
        { component: TiSocialLinkedin, url: 'https://www.linkedin.com/in/samsujjohalaskar/' },
        { component: TiSocialYoutube, url: 'https://youtube.com' },
        { component: FaFacebook, url: 'https://facebook.com' }
    ];

    const handleClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className='flex flex-col justify-center items-center text-center bg-black text-white p-4 gap-4'>
            <div>
                <img src={logo} alt="RENTCAR" className='block w-52 lg:w-80 mb-2 sm:hidden' />
            </div>
            <div className='flex flex-wrap justify-around items-center w-full gap-10'>
                <div className='w-52 lg:w-80 text-center'>
                    <img src={logo} alt="RENTCAR" className='hidden w-52 lg:w-80 mb-4 sm:block' />
                    <p>We offer a wide range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                    <p className='hidden sm:block mt-4 text-sm opacity-55'>©RentCar. All Rights Reserved</p>
                </div>
                <div className='flex flex-col gap-2 list-none'>
                    <p className='text-2xl'>Available in</p>
                    {["Delhi", "Mumbai", "Chennai", "Hyderabad", "Bangalore"].map((city, index) => (
                        <li key={index}>{city}</li>
                    ))}
                </div>
                <div className='flex flex-col gap-4' name="contact">
                    <p className='text-2xl'>Contact Us</p>
                    <p>+91 6290539395</p>
                    <p>samsujjohalaskar@gmail.com</p>
                    <div className='flex justify-around text-2xl'>
                        {icons.map((icon, index) => {
                            const IconComponent = icon.component;
                            return (
                                <IconComponent
                                    key={index}
                                    onClick={() => handleClick(icon.url)}
                                    className='cursor-pointer'
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className='mt-4 block sm:hidden text-sm opacity-55 pb-2'>
                ©RentCar. All Rights Reserved
            </div>
        </div>
    )
}

export default Footer
