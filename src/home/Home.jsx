import React from 'react';
import Banner from './Banner';
import Whycourier from './Whycourier';
import About from './About';
import Location from '../location/Location';
import Counter from './Counter';

const Home = () => {
    return (
        <div>
            <Banner />
            <Location/>
            <Whycourier />
            <About />
            <Counter/>
        </div>
    );
};

export default Home;