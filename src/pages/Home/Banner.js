import { ChevronDoubleRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen bg-[url(https://i.ibb.co/Jy3Mq8n/microwave.jpg)]">
                <div className="hero-overlay bg-[#0c0721] bg-opacity-70"></div>
                <div data-aos="zoom-in" className=" hero-content text-center text-neutral-content">
                    <div className="max-w-2xl text-white">
                        <h1 className="mb-5 text-6xl drop-shadow-lg ">Microwave Oven Main Parts Manufacturer</h1>
                        <p className="mb-5 text-2xl ">With Over 40 Years Experience.</p>
                        <Link to='/underconstruction'><button className="btn btn-primary mx-2">In Details  <ChevronDoubleRightIcon className='h-4 w-4' /></button></Link>
                        <Link to='/underconstruction'><button className="btn btn-info btn-outline mx-2">Contact Us  <ChevronDoubleRightIcon className='h-4 w-4' /></button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;