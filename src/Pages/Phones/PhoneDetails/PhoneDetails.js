import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PhoneDetails = () => {

    const data = useLoaderData()
    console.log(data);

    const { productName, productPrice, description, productImage, SellerEmail } = data;

    return (
        <div className='my-16'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:basis-[55%]'>
                    <img src={productImage} alt="productImage" />
                </div>
                <div className='md:basis-[45%] bg-gray-100 rounded-sm'>
                    <div className='bg-[#fae3b9] w-full h-16 py-4 px-7'>
                        <p className='font-bold text-[#b98776]'>About Product</p>
                    </div>

                    <div className='px-16 py-11'>
                        <div >
                            <h4 className='text-2xl font-semibold'>{productName}</h4>

                        </div>

                        <div>
                            <p className='text-justify my-10 font-semibold '>{description}</p>
                        </div>

                        <div className='my-10'>
                            <p className='text-[#753a3f] font-semibold text-lg'>Price: ${productPrice}</p>
                        </div>
                        <div>
                            <label class="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;