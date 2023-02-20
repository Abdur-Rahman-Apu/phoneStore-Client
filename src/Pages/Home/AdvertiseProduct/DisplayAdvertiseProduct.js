import React from 'react';
import './displayAdv.css'

const DisplayAdvertiseProduct = ({ item }) => {
    console.log(item);
    return (

        <div className="card w-full h-full bg-base-100 shadow-xl">
            <div className='h-1/2 mx-auto'><img className='img-full h-full' src={item?.productImage} alt="Shoes" /></div>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-black">
                    {item?.productName}
                </h2>
                <span className="badge badge-secondary">NEW</span>
                <p className='text-xl font-bold text-gray-900 dark:text-white'>${item?.productPrice}</p>

            </div>
        // </div>



    );
};

export default DisplayAdvertiseProduct;