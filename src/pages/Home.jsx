import React from 'react'
import Navbar from '../components/Navbar'
import "../style.css"
import Hero from '../components/Hero'
import Form from '../components/Form'
import PlanTrip from '../components/PlanTrip'
import PopularFleets from '../components/PopularFleets'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'

const Home = () => {
    return (
        <div className='font-audiowide'>
            <Navbar />
            <Hero />
            <Form />
            <PlanTrip />
            <PopularFleets />
            <WhyUs />
            <Testimonials />
        </div>
    )
}

export default Home
