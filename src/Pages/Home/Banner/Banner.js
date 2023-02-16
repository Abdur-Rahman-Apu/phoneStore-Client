import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../../../assets/banner.png';

const Banner = () => {
    return (
        <div className='flex justify-around items-center'>
            <div>
                <h1 className='text-5xl mb-6 font-bold'>Welcome to <span className='text-[#3DB070]'>Phone Store</span></h1>
                <p> You can buy an old phone from this platform.</p>

                <Link className="btn mt-4 rounded-full bg-[#3DB070] border-0">Explore More</Link>
            </div >
            <div>
                <img src={BannerImg} className="img-fluid" alt="banner" />
            </div>
        </div >
    );
};

export default Banner;