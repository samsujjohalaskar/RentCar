import React from 'react';
import Button from './Button';
import punch from "../assets/punch.png";
import background from "../assets/background.png";
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='mx-10 my-8 bg-cover bg-no-repeat sm:my-10 xl:min-h-[52rem] xl:flex xl:justify-center xl:w-10/12 xl:m-8 xl:pl-8 xl:gap-16' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
                <div className='xl:pt-40'>
                    <div className='text-white text-5xl mb-6 xl:text-6xl'>
                        Rent the luxury. Own the thrill.
                    </div>
                    <div className='text-white mb-6'>
                        From exotic sports cars to luxury sedans and SUVs, the Exotic Car Collection by Exclusive Car Rental offers an exceptional selection and the trusted, personalized service of Enterprise.
                    </div>
                    <div className='flex gap-4 flex-wrap'>
                        <Link to="book" spy={true} smooth={true} duration={2000}>
                            <Button text={"Book ride"} width={"w-32"} height={"h-12"} initialState={"bg-black text-white"} hoverEffect={"hover:bg-white hover:text-black"} />
                        </Link>
                        <Link to="more" spy={true} smooth={true} duration={2000}>
                            <Button text={"Learn more"} width={"w-32"} height={"h-12"} initialState={"bg-white"} hoverEffect={"hover:bg-black hover:text-white"} />
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='mt-10 xl:w-[100rem]' src={punch} alt="punch" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
