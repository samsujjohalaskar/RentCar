import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import { carData } from '../utils/carData';
import Button from './Button';
import punch from "../assets/punch.png"
import CarDetails from './CarDetails';

const PopularFleets = () => {
    const [selectedCar, selectCar] = useState(null);
    const [randomCars, setRandomCars] = useState([]);

    useEffect(() => {
        function getFirstHatchbackCars(carData, numberOfCars) {
            const allHatchbackCars = carData.hatchback;
            return allHatchbackCars.slice(0, numberOfCars);
        }

        const hatchbackCars = getFirstHatchbackCars(carData, 8);
        setRandomCars(hatchbackCars);
        selectCar(hatchbackCars[0]);
    }, []);

    return (
        <>
            <Heading heading={"Most popular fleets"} subHeading={"Choose from a variety of our exclusive vehicles to rent for your next trip"} />
            <div className='px-8 mt-12 pb-10 sm:px-16 md:px-24 lg:px-32'>
                <div className='flex justify-center items-center flex-wrap p-4 text-center gap-10 2xl:gap-24'>
                    <div className={`flex flex-wrap p-4 justify-center items-center gap-2 max-w-[26rem]`}>
                        {randomCars.map((car, index) => (
                            <Button
                                key={index}
                                onClick={() => selectCar(car)}
                                text={`${car.carName}`}
                                width={"w-full"}
                                height={"h-10"}
                                initialState={`${selectedCar && selectedCar.carName === car.carName ? "bg-black text-white" : "bg-white"}`}
                                hoverEffect={"hover:bg-black hover:text-white"}
                            />
                        ))}
                    </div>
                    <div className={`flex justify-center items-center max-w-[30rem]`}>
                        <img className='w-full' src={punch} alt={selectedCar && selectedCar.carName} />
                    </div>
                    {selectedCar && <CarDetails selectedCar={selectedCar} />}
                </div>
            </div>
        </>
    )
}

export default PopularFleets
