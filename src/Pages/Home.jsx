import React from 'react';
import Banner from '../Component/HomeComponents/Banner';
import AboutUs from '../Component/HomeComponents/AboutUs';
import Service from '../Component/HomeComponents/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service></Service>
        </div>
    );
};

export default Home;