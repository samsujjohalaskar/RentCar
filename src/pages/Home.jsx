import React from 'react'
import Navbar from '../components/Navbar'
import "../style.css"
import Hero from '../components/Hero'
import Form from '../components/Form'
import PlanTrip from '../components/PlanTrip'
import PopularFleets from '../components/PopularFleets'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import { Element } from 'react-scroll'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='font-audiowide'>
            <Navbar />
            <Element name="home">
                <Hero />
            </Element>
            <Element name="book" >
                <Form />
            </Element>
            <PlanTrip />
            <Element name="collections">
                <PopularFleets />
            </Element>
            <Element name="more">
                <WhyUs />
            </Element>
            <Element name="testimonials">
                <Testimonials />
            </Element>
            <FAQ />
            <Footer />
        </div>
    )
}

export default Home
