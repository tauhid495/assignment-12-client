import { HeartIcon, LightningBoltIcon, PresentationChartLineIcon, TruckIcon } from '@heroicons/react/outline';
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='flex justify-center md:mx-16 md:my-24'>
            <div className="stats md:stats-horizontal stats-vertical shadow md:w-full bg-gray-300">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <HeartIcon className='w-14 h-14' />
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <TruckIcon className='w-14 h-14' />
                    </div>
                    <div className="stat-title">We Served</div>
                    <div className="stat-value text-secondary">100+</div>
                    <div className="stat-desc">Corporate Regular Customers</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-error">
                        <LightningBoltIcon className='w-14 h-14' />
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-error">33k+</div>
                    <div className="stat-desc">More than 70% good reviews</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">

                        <div className="w-16 rounded-full">
                            <PresentationChartLineIcon className='w-14 h-14 text-success' />
                        </div>

                    </div>
                    <div className="stat-value text-success">120M+</div>
                    <div className="stat-title">Annual Revenue</div>
                    <div className="stat-desc text-secondary">Business Groth Rate 120%</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;