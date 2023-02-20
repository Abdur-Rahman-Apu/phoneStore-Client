import React, { useContext } from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer';
import { AuthContext } from '../Context/AuthProvider';
import Lottie from "lottie-react";
import Load from '../assets/load.json'

const Main = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <div className='h-[500px] w-[500px] mx-auto'>
            <Lottie animationData={Load} loop={true} />
            <p className='text-center text-3xl font-bold text-sky-400'>Wait loading...</p>
        </div>
    }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;