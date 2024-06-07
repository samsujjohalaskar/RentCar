import React from 'react'
import Navbar from '../components/Navbar'
import "../style.css"
import Hero from '../components/Hero'
import Form from '../components/Form'
import PlanTrip from '../components/PlanTrip'

const Home = () => {
    return (
        <div className='font-audiowide'>
            <Navbar />
            <Hero />
            <Form />
            <PlanTrip />
        </div>
    )
}

export default Home
