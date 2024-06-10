import React from 'react'
import Navbar from '../components/Navbar'
import "../style.css"
import Hero from '../components/Hero'
import Form from '../components/Form'
import PlanTrip from '../components/PlanTrip'
import PopularFleets from '../components/PopularFleets'
import WhyUs from '../components/WhyUs'

const Home = () => {
    return (
        <div className='font-audiowide'>
            <Navbar />
            <Hero />
            <Form />
            <PlanTrip />
            <PopularFleets />
            <WhyUs />
        </div>
    )
}

export default Home
