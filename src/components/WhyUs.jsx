import React from 'react'
import Heading from './Heading'
import Button from './Button'
import { IoDiamond } from 'react-icons/io5'
import Card from './Card'
import { TbPremiumRights } from 'react-icons/tb'
import { PiPiggyBankBold } from 'react-icons/pi'

const WhyUs = () => {
    return (
        <>
            <Heading heading={"Drive in comfort and style"} subHeading={"Why it is profitable to rent premium cars in RentCar? As owners of cars, we can afford to offer for rent convertibles, sports cars and executive sedans at the best market prices with available anywhere in India within a short time."} />
            <div className='flex flex-wrap gap-20 px-8 mt-12 pb-10 sm:px-16 md:px-24 lg:px-32 md:justify-center md:items-center'>
                <div className='flex flex-col justify-center items-center gap-2 text-center max-w-2xl text-white'>
                    <div className='text-3xl'>
                        Why choose us?
                    </div>
                    <div className='text-5xl mb-6'>
                        Best valued deals you will ever find
                    </div>
                    <div className='mb-4 text-xl'>
                        Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.
                    </div>
                    <div className=''>
                        <Button text={"Find out more"} width={"w-60"} height={"h-12"} initialState={"bg-black text-white"} hoverEffect={"hover:bg-white hover:text-black"} />
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <Card
                        icon={<IoDiamond size={100} />}
                        heading={"Luxury Drive"}
                        subHeading={"Take your driving experience to the next level with our top-notch vehicles for your exclusive adventures."}
                        flexDirection={"flex-row"}
                        maxWidth={"max-w-[40rem]"}
                        margin={"ml-2 md:ml-6 xl:ml-10"}
                    />
                    <Card
                        icon={<TbPremiumRights size={100} />}
                        heading={"All Inclusive Pricing"}
                        subHeading={"Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."}
                        flexDirection={"flex-row"}
                        maxWidth={"max-w-[40rem]"}
                        margin={"ml-2 md:ml-6 xl:ml-10"}
                    />
                    <Card
                        icon={<PiPiggyBankBold size={100} />}
                        heading={"No Hidden Charges"}
                        subHeading={"Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."}
                        flexDirection={"flex-row"}
                        maxWidth={"max-w-[40rem]"}
                        margin={"ml-2 md:ml-6 xl:ml-10"}
                    />
                </div>
            </div>
        </>
    )
}

export default WhyUs
