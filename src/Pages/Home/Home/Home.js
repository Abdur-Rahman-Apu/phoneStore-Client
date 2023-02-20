import React from 'react';
import Advertise from '../Advertise/Advertise';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories/Categories';
import Services from '../Services/Services';
import Stat from '../Stat/Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <AdvertiseProduct></AdvertiseProduct>
            <Categories></Categories>
            <Services></Services>
            <Stat></Stat>
        </div>
    );
};

export default Home;