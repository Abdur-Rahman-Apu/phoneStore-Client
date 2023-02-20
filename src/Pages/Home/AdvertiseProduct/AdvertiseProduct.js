import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import required modules

import DisplayAdvertiseProduct from './DisplayAdvertiseProduct';
import { EffectCards } from "swiper";
import './adv.css'


const AdvertiseProduct = () => {

    const [products, setProducts] = useState([])





    // fetch data 
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {

                const android = data.android;
                const iphone = data.iphone;
                const button = data.button;

                const product = [].concat(android.filter(item => item?.advertise === 1)).concat(iphone.filter(item => item?.advertise === 1)).concat(button.filter(item => item?.advertise === 1))

                setProducts(product)

            })
    }, [])
    return (
        <div className='h-[500px] mb-36'>
            <h1 className='text-center text-4xl font-bold text-boldGreen my-20'>Advertisement</h1>

            <Swiper

                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >

                {
                    products && products.map((item, idx) => <SwiperSlide><DisplayAdvertiseProduct key={idx} item={item}></DisplayAdvertiseProduct></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default AdvertiseProduct;