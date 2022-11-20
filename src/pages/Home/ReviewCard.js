import React from 'react';
import './ReviewCard.css';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewCard = ({ userReview }) => {
    const { name, review, rating } = userReview;

    return (
        <div class=" w-52 bg-base-100 shadow-xl ml-4 p-5 rounded-xl">

            <h2 class="card-title">{name}</h2>
            <p className='over'>" {review} "</p>

            <p>Ratings:
                <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                ></Rating>
            </p>


        </div>
    );
};

export default ReviewCard;