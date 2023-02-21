import React from 'react';
import { useLocation } from 'react-router-dom';
import Lottie from 'lottie-react'
import SuccessAnimation from '../../../../assets/success.json'

const Success = () => {

    const location = useLocation()


    return (
        <div className='flex justify-center items-center min-h-[60%]'>
            <div className='border-1 shadow-sm bg-gray-100 w-[600px] p-10 rounded-lg'>
                <div className='h-[300px] w-[300px] mx-auto'>
                    <Lottie animationData={SuccessAnimation} loop={true} />
                </div>
                <h3 className='my-5 text-2xl font-bold text-boldGreen text-center'>{location.state.success}</h3>
                <p className='text-center'>Your transaction id is <span className='font-semibold text-boldGreen'>${location.state.transactionId}</span></p>
            </div>
        </div>
    );
};

export default Success;