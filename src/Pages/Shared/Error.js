import React from 'react';
import Lottie from "lottie-react";
import ErrorAnimation from '../../assets/error.json'
import Navbar from './Navbar';
import Footer from './Footer';

const Error = () => {

    return (
        <>
            <Navbar></Navbar>
            <div>
                <Lottie animationData={ErrorAnimation} loop={true} className="h-[500px]" />;
            </div>
            <Footer></Footer>
        </>
    );
};

export default Error;