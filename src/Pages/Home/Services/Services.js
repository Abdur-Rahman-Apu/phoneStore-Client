import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faShieldVirus, faShippingFast } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className='my-28'>
            <h3 className='text-center text-4xl font-bold text-boldGreen'>Services</h3>
            <p className='text-center mt-5 mb-12'>We focus on our customers satisfaction</p>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>

                <div class=" w-96 p-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <FontAwesomeIcon className='text-4xl text-boldGreen mb-4' icon={faShieldVirus} />
                    <h5 class="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Secure Payment</h5>
                    <hr className='w-1/5 bg-boldGreen h-1 mb-3' />
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Most secure payment for customer</p>
                </div>

                <div class="w-96 p-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <FontAwesomeIcon className='text-4xl text-boldGreen mb-4' icon={faHeadset} />
                    <h5 class="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Customer Support</h5>
                    <hr className='w-1/5 bg-boldGreen h-1 mb-3' />
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">24/7 Customer Support</p>
                </div>

                <div class="w-96 p-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <FontAwesomeIcon className='text-4xl text-boldGreen mb-4' icon={faShippingFast} />
                    <h5 class="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Fast Shipping</h5>
                    <hr className='w-1/5 bg-boldGreen h-1 mb-3' />
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Fast shipping service</p>
                </div>
            </div>
        </div>
    );
};

export default Services;