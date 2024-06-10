import React from 'react'
import Heading from './Heading'
import { reviewData } from '../utils/reviewData'
import ReviewList from './ReviewList'

const Testimonials = () => {
    return (
        <>
            <Heading heading={"People Cheers for Us!"} subHeading={"Discover the positive impact we've made on our clients through their testimonials. Our clients have experienced our services and results, and they're eager to share their positive experiences with you."} />
            <ReviewList reviews={reviewData} />
        </>
    )
}

export default Testimonials
