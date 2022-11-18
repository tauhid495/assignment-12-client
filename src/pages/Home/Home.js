import React from 'react';
import Banner from './Banner';
import BannerCard from './BannerCard';
import BusinessSummary from './BusinessSummary';
import Capabilities from './Capabilities';
import Leaflate from './Leaflate';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <BannerCard />
            <Capabilities />
            <Products />
            <BusinessSummary />
            <Reviews />
            <Leaflate />
        </div>
    );
};

export default Home;