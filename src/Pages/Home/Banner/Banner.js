import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../../../assets/banner.png';

const Banner = () => {
    return (
        <div className='mt-10 flex flex-col lg:flex-row justify-around items-center dark:bg-black'>
            <div className='mb-10 md:mb-0'>
                <h1 className='text-2xl lg:text-5xl mb-6 font-bold dark:text-[#e1ad01]'>Welcome to <span className='text-[#3DB070] '>Phone Store</span></h1>
                <p className='text-xs dark:text-white'> You can buy an old phone from this platform.</p>

                <Link className="btn mt-4 rounded-full bg-[#3DB070] border-0 ">Explore More</Link>
            </div >
            <div>
                <img src={BannerImg} className="img-fluid" alt="banner" />
            </div>
        </div >
    );
};

export default Banner;