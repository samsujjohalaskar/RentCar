import React, { useState } from 'react';
import { carData } from '../utils/carData';
import { locationSuggestions } from '../utils/locationSuggestions';
import Button from './Button';

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
            <form action="#" className='shadow-3xl border-1 border-black rounded-lg p-4 '>
                <div className='gap-2 sm:flex sm:flex-wrap sm:justify-center sm:items-center lg:gap-8'>
                    <div className='flex flex-col max-w-lg'>
                        <label htmlFor="car-type" className='mb-2'>Select Car Type</label>
                        <select name="car-type" id="car-type" value={selectedType} onChange={handleTypeChange} className='w-full p-2 border rounded cursor-pointer sm:w-[32rem]'>
                            <option value="">-- Select Type --</option>
                            <option value="hatchback">Hatchbacks</option>
                            <option value="sedan">Sedans</option>
                            <option value="suv">SUVs (Sport Utility Vehicles)</option>
                            <option value="mpv">MPVs (Multi-Purpose Vehicles)</option>
                            <option value="ev">Electric Vehicles (EVs)</option>
                            <option value="luxury">Luxury Cars</option>
                            <option value="sports">Sports Cars</option>
                            <option value="crossover">Crossovers</option>
                            <option value="pickup">Pickup Trucks</option>
                            <option value="convertible">Convertibles</option>
                        </select>
                    </div>
                    <div className='flex flex-col max-w-lg'>
                        <label htmlFor="car-name" className='mb-2'>Select Car</label>
                        <select name="car-name" id="car-name" value={selectedCar} onChange={handleCarChange} className={`w-full p-2 border rounded ${!selectedType && "cursor-not-allowed"} sm:w-[32rem]`} disabled={!selectedType}>
                            <option value="">-- Select Car --</option>
                            {selectedType && carData[selectedType].map((car, index) => (
                                <option key={index} value={car}>{car}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col max-w-lg'>
                        <label htmlFor="pick-loc" className='mb-2'>Pick-up Location</label>
                        <select name="pick-loc" id="pick-loc" className='w-full p-2 border rounded cursor-pointer sm:w-[32rem]'>
                            <option value="">-- Select Location --</option>
                            {locationSuggestions.map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col max-w-lg'>
                        <label htmlFor="pick-date" className='mb-2'>Pick-up Date</label>
                        <input type='date' name="pick-date" id="pick-date" className='w-full p-2 border rounded cursor-pointer bg-input-bg sm:w-[32rem]'>
                        </input>
                    </div>
                    <div className='flex flex-col max-w-lg'>
                        <label htmlFor="drop-loc" className='mb-2'>Drop-off Location</label>
                        <select name="drop-loc" id="drop-loc" className='w-full p-2 border rounded cursor-pointer sm:w-[32rem]'>
                            <option value="">-- Select Location --</option>
                            {locationSuggestions.map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col max-w-lg'>
                        <label htmlFor="drop-date" className='mb-2'>Drop-off Date</label>
                        <input type='date' name="drop-date" id="drop-date" className='w-full p-2 border rounded cursor-pointer bg-input-bg sm:w-[32rem]'>
                        </input>
                    </div>
                    <div className='flex flex-col max-w-lg'>
                        <label htmlFor="licence-num" className='mb-2'>Driver's License Number</label>
                        <input type='text' name="licence-num" id="licence-num" placeholder='Enter Number' className='w-full p-2 border rounded bg-input-bg sm:w-[32rem]'>
                        </input>
                    </div>
                    <div className='flex flex-col max-w-lg'>
                        <label htmlFor="licence-expiry" className='mb-2'>Driver's License Expiry Date</label>
                        <input type='date' name="licence-expiry" id="licence-expiry" className='w-full p-2 border rounded cursor-pointer bg-input-bg sm:w-[32rem]'>
                        </input>
                    </div>
                    <div className='flex flex-col max-w-lg'>
                        <label htmlFor="phone-num" className='mb-2'>Your Phone Number</label>
                        <input type='text' pattern="\d{10}" maxLength={10} name="phone-num" id="phone-num" placeholder='Enter Number' className='w-full p-2 border rounded bg-input-bg sm:w-[32rem]'>
                        </input>
                    </div>
                </div>
                <div className='flex justify-center pt-10'>
                    <Button text={"Book car"} width={"w-full"} height={"h-12"} initialState={"bg-black text-white"} hoverEffect={"hover:bg-white hover:text-black"} />
                </div>
            </form>
        </div>
    );
};

export default Form;
