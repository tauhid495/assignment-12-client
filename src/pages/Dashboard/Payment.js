import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1PpSCHxuHbzG52OeWhAXxM2rfxIvZl7IQEGHu8QmkiKxPYxYMymyeptvDmyasvbUuXTK5Tr58VJMhSrvaV0JlE00wktlTg3W');

const Payment = () => {

    const { id } = useParams();
    const url = `https://assignment-12-server-production.up.railway.app/order/${id}`;


    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card md:w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Pay for : {order.product}</h2>
                            <p>Please pay $ {parseFloat(order.price) * parseFloat(order.order)}</p>
                            <p>We will ship your order soon.</p>
                        </div>
                    </div>

                    <div className="card w-80 md:w-[500px] bg-base-100 shadow-xl">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm order={order} />
                            </Elements>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payment;