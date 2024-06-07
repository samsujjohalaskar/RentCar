import React from 'react'
import Navbar from '../components/Navbar'
import "../style.css"
import Hero from '../components/Hero'
import Form from '../components/Form'

const Home = () => {
    return (
        <div className='font-audiowide'>
            <Navbar />
            <Hero />
            <Form />
        </div>
    )
}

export default Home
