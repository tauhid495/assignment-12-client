import { ChevronDoubleRightIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';

const Capabilities = () => {
    return (
        <div className='md:px-16 px-4'>
            <div className="md:flex my-24">
                <img src="https://i.ibb.co/H2skk5Z/capability.jpg" className=" md:w-1/2 rounded-lg shadow-2xl" />
                <div className='md:w-1/2 my-7 md:ml-20'>
                    <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Our Capabilities</h1>
                    <p className="py-6 font-serif">Stop by today; our talented staff will be happy to help you find what you’re searching for! <br />

                        <span className='block mt-10'> CEO: Steven Rogers</span></p>
                    <img className='h-16 mb-6' src="https://i.ibb.co/89G87LB/John-Mc-Cain-Signature-300x172.png" alt="" />
                    <button className="btn btn-primary shadow-lg">About Us   <ChevronDoubleRightIcon className='h-4 w-4' /></button>
                </div>
            </div>
        </div>
    );
};

export default Capabilities;