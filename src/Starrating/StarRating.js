import './StarRating.css';
import { FaStar } from 'react-icons/fa';
import React, { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

    return (
        <div>
            { [...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                            />
                            <FaStar
                                onMouseOver={() => setHover(ratingValue)}
                                onMouseOut={() => setHover(null)}
                                className='star'
                                color={ratingValue <= (rating || hover) ? '#ffc107' : '#e4e5e9'}
                                size={100}
                            />
                        </label>
                    );
                })
            }
        </div>
    );
};

export default StarRating;