import React from 'react';
import './BannerCard.css';
import { CogIcon, PhoneIncomingIcon, UserGroupIcon } from '@heroicons/react/outline'

const BannerCard = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:mx-16 mx-4'>
            {/* card 1 */}
            <div data-aos="slide-right" className="card relative bg-base-100 shadow-lg hover:shadow-2xl hover:shadow-pink-400 shadow-gray-500 my-4 md:mt-[-50px]">
                <div className="card-body hover:text-white hover:bg-primary transition duration-300 ease-in-out">
                    <CogIcon className="icon h-12 w-12 " />
                    <h2 className="card-title">We Manufacture</h2>
                    <p>We manufacture high quality microwave oven main parts like High Voltage Transformer, Magnetron, Waveguide, Cooling Fan or StirrerCooking Cavity and Case, TurntableDoor, Control Panel, Power Cord etc. </p>
                </div>
            </div>


            {/* Card 2 */}
            <div data-aos="slide-up" className="card bg-base-100 shadow-lg hover:shadow-2xl hover:shadow-pink-400 shadow-gray-500 my-4 md:mt-[-50px]">
                <div className="card-body hover:text-white hover:bg-primary transition duration-300 ease-in-out">
                    <UserGroupIcon className="icon h-12 w-12 " />
                    <h2 className="card-title">Customer Support</h2>
                    <p>Customers are most valuable for us. So we provide 24/365 days full support. We have an experienced support team. We also provide transport support or currier support for better and quick service.</p>
                </div>
            </div>

            {/* card 3 */}
            <div data-aos="slide-left" className="card bg-base-100 shadow-lg hover:shadow-2xl hover:shadow-pink-400 shadow-gray-500 my-4 md:mt-[-50px]">
                <div className="card-body hover:text-white hover:bg-primary transition duration-300 ease-in-out">
                    <PhoneIncomingIcon className="icon h-12 w-12 " />
                    <h2 className="card-title">Contact Us</h2>
                    <p>Customar is our first priority. We are providing best service. We have 40 years of experiances with trust. We here from customers to improve our service and customer satisfaction. </p>
                </div>
            </div>

        </div>
    );
};

export default BannerCard;