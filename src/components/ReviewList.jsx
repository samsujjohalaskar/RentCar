import React from 'react'
import Review from './Review'

const ReviewList = ({ reviews }) => {
    const groupedReviews = [];

    for (let i = 0; i < reviews.length; i += 2) {
        groupedReviews.push(reviews.slice(i, i + 2));
    }

    return (
        <div className='flex justify-center flex-wrap gap-6 px-8 mt-12 pb-10 sm:px-16 md:px-24 lg:px-32'>
            {groupedReviews.map((group, index) => (
                <div key={index} className='flex flex-col gap-6 max-w-96'>
                    {group.map((review, idx) => (
                        <Review
                            key={idx}
                            image={review.image}
                            name={review.name}
                            username={review.username}
                            review={review.review}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ReviewList
