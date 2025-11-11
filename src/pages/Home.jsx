import React from 'react';
import Hero from './HeroSection';
import Herotext from './Herotext';
import Data from '../components/Data';
import HeroSection from './HeroSection';
import Extrasection from './Extrasection';

const Home = () => {
    return (
        <div>
            {/* <Herotext/>
            <Hero/> */}
            <HeroSection/>
            <Data/>
            <Extrasection/>
            
        </div>
    );
};

export default Home;