import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import Load from "../../../assets/load.json"
import { AuthContext } from '../../../Context/AuthProvider';


const Phone = ({ item }) => {

    const { loading } = useContext(AuthContext)


    if (loading) {
        return <>
            <Lottie animationData={Load} loop={true} className="h-[600px]" />
        </>
    }
    return (

        <div className="w-11/12 h-[500px] flex-col  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div className='h-[300px] p-4'>
                <img className="rounded-t-lg h-full mx-auto image-full" src={item?.productImage} alt="productImage" />
            </div>

            <div className="p-5">

                <h5 className="mb-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.productName}</h5>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-boldGreen dark:text-white">${item?.productPrice}</span>

                    <Link to={`/phoneDetails/${item?._id}`} className="inline-flex items-center  text-white bg-boldGreen hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-boldGreen dark:hover:bg-green-700 dark:focus:ring-blue-800">Details

                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Phone;