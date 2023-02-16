import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories/Categories';
import Services from '../Services/Services';
import Stat from '../Stat/Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Categories></Categories>
            <Services></Services>
            <Stat></Stat>
        </div>
    );
};

export default Home;