import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const PhoneDetails = () => {

    const data = useLoaderData()

    const { productName, productPrice, description, productImage, SellerEmail } = data;

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()


    const handleBooking = () => {

        fetch(`http://localhost:5000/booking?email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('phone-token')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Ordered successfully", {
                        duration: 4000,
                        position: 'top-center'
                    })
                    localStorage.setItem("Total-cart", parseInt(localStorage.getItem('Total-cart')) + 1)
                    navigate('/dashboard/cart')
                }
            })
    }

    return (
        <div className='my-16'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:basis-[55%]'>
                    <img src={productImage} alt="productImage" />
                </div>
                <div className='md:basis-[45%] bg-gray-100 rounded-sm mt-10 md:mt-0'>
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
                            <label htmlFor="my-modal" className=" btn cursor-pointer border-0 text-white  bg-boldGreen hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-3xl text-xs  px-3 py-1.5 text-center ">Add to cart</label>

                            {/* modal  */}
                            <input type="checkbox" id="my-modal" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-2xl text-center text-boldGreen">Confirmation message</h3>
                                    <p className="py-4 font-semibold">Do you want to add this product to your cart?</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal" className="btn rounded-3xl bg-boldGreen border-0" onClick={handleBooking}>Confirm!</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;