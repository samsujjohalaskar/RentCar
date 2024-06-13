import React, { useEffect, useState } from 'react'
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
import { FaArrowUp } from 'react-icons/fa6'
import { animateScroll } from 'react-scroll'

const Home = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 700) {
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            {showScrollToTop && (
                <div onClick={() => animateScroll.scrollToTop({ duration: 2000, smooth: true })} className="fixed flex justify-center items-center cursor-pointer text-2xl animate-bounce w-10 h-10 bottom-10 right-10 bg-black text-white rounded-full">
                    <FaArrowUp />
                </div>
            )}
        </div>
    )
}

export default Home
