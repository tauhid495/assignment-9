import React from 'react';
import useReviews from '../../hooks/useReview';
import Card from '../card/Card';

const Reviews = () => {
    const [reviews] = useReviews();

    return (
        <div className='md:grid grid-cols-3 gap-16 py-20 px-10 bg-cyan-900'>
            {
                reviews.map(review =>
                    <Card key={review.index} review={review}></Card>)
            }
        </div>
    );
};

export default Reviews;