import React from 'react';
import Data from './Data';

const CarDetails = ({ selectedCar }) => {
    const details = [
        { label: 'Model', value: selectedCar.model },
        { label: 'Mark', value: selectedCar.mark },
        { label: 'Year', value: selectedCar.year },
        { label: 'Engine', value: selectedCar.engine },
        { label: 'Power', value: selectedCar.power },
        { label: 'Max-Speed', value: selectedCar.maxSpeed },
        { label: 'Gear', value: selectedCar.gear },
    ];

    return (
        <div className='flex flex-wrap p-4 justify-center items-center gap-2 max-w-[26rem]'>
            <div className="w-full">
                <Data text={`Rental price from ${selectedCar.rentalPrice}₹ /per day`} width={"w-full"} />
            </div>
            {details.map((detail, index) => (
                <div key={index} className="flex gap-2 w-full">
                    <Data text={detail.label} width={"w-full min-w-max"} />
                    <Data text={detail.value} width={"w-full min-w-max"} />
                </div>
            ))}
        </div>
    );
};

export default CarDetails;