import React, { useState } from 'react';
import '../../Starrating/StarRating.css';
import { FaStar } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const AddReview = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = (data) => {

        const review = {
            name: user.displayName,
            email: user.email,
            review: data.review,
            rating: rating,

        }
        console.log(review);

        fetch('https://motools.onrender.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    toast.success('Review Added')
                }

            })


    }


    return (
        <div className='mt-16 flex items-center justify-center'>

            <form className='md:w-1/2' onSubmit={handleSubmit(onSubmit)}>
                {/* short description */}
                <p className='my-2 text-xl md:ml-24'>Add your opinion</p>
                <div className="form-control w-full max-w-xs">
                    <textarea
                        type="text"
                        placeholder="Short Description"
                        className="input input-bordered w-full max-w-xs h-52"
                        {...register("review", {
                            validate: (value) => value.length < 150
                        })}
                    />
                    <label className="label">
                        {errors.review && <p className="label-text-alt text-red-500">Your description is more than 150 characters</p>}
                    </label>
                </div>

                {/* star */}
                <p className='my-2 text-xl md:ml-24'>Give your rating</p>
                <div className='flex md:ml-12 my-4'>
                    {[...Array(5)].map((star, i) => {
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
                                    size={40}
                                />
                            </label>
                        );
                    })
                    }
                </div>


                <input className='btn btn-primary my-4 w-full max-w-xs text-white' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;