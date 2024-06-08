import React, { useState } from 'react';
import { carData } from '../utils/carData';
import { locationSuggestions } from '../utils/locationSuggestions';
import Button from './Button';
import Select from './Select';
import Input from './Input';

const Form = () => {
    const [selectedType, setSelectedType] = useState('');
    const [selectedCar, setSelectedCar] = useState('');

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
        setSelectedCar('');
    };

    const handleCarChange = (event) => {
        setSelectedCar(event.target.value);
    };

    return (
        <div className='px-8 mt-20 pb-10 sm:px-16 md:px-24 lg:px-32'>
            <form action="#" className='shadow-3xl border-1 border-black rounded-lg p-4'>
                <div className='gap-2 sm:flex sm:flex-wrap sm:justify-center sm:items-center lg:gap-8'>
                    <Select
                        label="Select Car Type"
                        name="car-type"
                        id="car-type"
                        value={selectedType}
                        onChange={handleTypeChange}
                        defaultOption={"Type"}
                        options={[
                            { value: 'hatchback', label: 'Hatchbacks' },
                            { value: 'sedan', label: 'Sedans' },
                            { value: 'suv', label: 'SUVs (Sport Utility Vehicles)' },
                            { value: 'mpv', label: 'MPVs (Multi-Purpose Vehicles)' },
                            { value: 'ev', label: 'Electric Vehicles (EVs)' },
                            { value: 'luxury', label: 'Luxury Cars' },
                            { value: 'sports', label: 'Sports Cars' },
                            { value: 'crossover', label: 'Crossovers' },
                            { value: 'pickup', label: 'Pickup Trucks' },
                            { value: 'convertible', label: 'Convertibles' }
                        ]}
                    />
                    <Select
                        label="Select Car"
                        name="car-name"
                        id="car-name"
                        value={selectedCar}
                        onChange={handleCarChange}
                        defaultOption={"Car"}
                        options={selectedType ? carData[selectedType].map(car => ({ value: car.carName, label: car.carName })) : []}
                        disabled={!selectedType}
                    />
                    <Select
                        label="Pick-up Location"
                        name="pick-loc"
                        id="pick-loc"
                        defaultOption={"Location"}
                        options={locationSuggestions.map(location => ({ value: location, label: location }))}
                    />
                    <Input
                        label="Pick-up Date"
                        name="pick-date"
                        id="pick-date"
                        type="date"
                    />
                    <Select
                        label="Drop-off Location"
                        name="drop-loc"
                        id="drop-loc"
                        defaultOption={"Location"}
                        options={locationSuggestions.map(location => ({ value: location, label: location }))}
                    />
                    <Input
                        label="Drop-off Date"
                        name="drop-date"
                        id="drop-date"
                        type="date"
                    />
                    <Input
                        label="Driver's License Number"
                        name="licence-num"
                        id="licence-num"
                        type="text"
                        placeholder="Enter Credentials"
                    />
                    <Input
                        label="Driver's License Expiry Date"
                        name="licence-expiry"
                        id="licence-expiry"
                        type="date"
                    />
                    <Input
                        label="Your Phone Number"
                        name="phone-num"
                        id="phone-num"
                        type="text"
                        pattern="\d{10}"
                        maxLength={10}
                        placeholder="Enter Number (10 digits)"
                    />
                </div>
                <div className='flex justify-center pt-10'>
                    <Button type="submit" text={"Book car"} width={"w-full"} height={"h-12"} initialState={"bg-black text-white"} hoverEffect={"hover:bg-white hover:text-black"} />
                </div>
            </form>
        </div>
    );
};

export default Form;