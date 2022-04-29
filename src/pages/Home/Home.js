import React from 'react';
import Chart from '../../components/Chart/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart />
        </div>
    );
};

export default Home;