import React from 'react'
import Heading from './Heading'
import Card from './Card'
import { IoCarSportOutline } from "react-icons/io5"
import { BiSupport } from 'react-icons/bi'
import { GiSteeringWheel } from 'react-icons/gi'

const PlanTrip = () => {
    return (
        <>
            <Heading heading={"Plan your trip now"} />
            <div className='px-8 mt-12 pb-10 sm:px-16 md:px-24 lg:px-32'>
                <div className='flex justify-center items-center flex-wrap p-4 text-center gap-10 2xl:gap-24'>
                    <Card
                        icon={<IoCarSportOutline size={100} />}
                        heading={"Select your car"}
                        subHeading={"We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"}
                        flexDirection={"flex-col"}
                    />
                    <Card
                        icon={<BiSupport size={100} />}
                        heading={"Contact Operator"}
                        subHeading={"Our knowledgeable and friendly operators are always ready to help with any questions or concerns"}
                        flexDirection={"flex-col"}
                    />
                    <Card
                        icon={<GiSteeringWheel size={100} />}
                        heading={"Let's Drive"}
                        subHeading={"Whether you're hitting the open road, we've got you covered with our wide range of cars"}
                        flexDirection={"flex-col"}
                    />
                </div>
            </div>
        </>
    )
}

export default PlanTrip
