import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {

    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://assignment-12-server-production.up.railway.app/review', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='md:mx-16 my-24'>
            <p className='text-center text-3xl md:text-6xl mb-12 dropshadow-lg font-bold text-primary'>Our Valuable Customars Reviews</p>
            <div class="carousel carousel-start w-full p-4 space-x-4 bg-neutral rounded-box">
                <div className='carousel-item'>
                    {
                        reviews.map(userReview => <ReviewCard
                            userReview={userReview}
                            key={userReview._id}
                        />)
                    }

                </div>

            </div>
        </div>
    );
};

export default Reviews;