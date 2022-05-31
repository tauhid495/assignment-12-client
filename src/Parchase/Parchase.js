import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';


import ParchaseDetail from './ParchaseDetail';

const Parchase = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        const url = `https://desolate-tor-13600.herokuapp.com/product/${orderId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);


    return (
        <div className='min-h-screen md:mx-16 my-10'>
            <p className='text-4xl font-bold text-center mb-12'>Order Detail</p>
            <ParchaseDetail order={order} />

        </div>
    );
};

export default Parchase;