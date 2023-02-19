import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import useRole from '../../../CustomHooks/useRole';

const Dashboard = () => {

    const [role] = useRole()

    //seller
    const [availableItems, setAvailableItems] = useState(0)
    const [soldItems, setSoldItems] = useState(0)
    const [totalEarned, setTotalEarned] = useState(0)


    //buyer 
    const [totalCart, setTotalCart] = useState(0)
    const [bought, setBought] = useState(0)

    // admin
    const [seller, setSeller] = useState(0)
    const [buyer, setBuyer] = useState(0)

    const { user } = useContext(AuthContext)

    if (role === 'Customer') {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTotalCart(data?.user?.booked?.length))


        fetch(`http://localhost:5000/boughtItem?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBought(data.length))
    }

    return (
        <div>
            <h1 className='text-2xl font-bold text-boldGreen text-center'>Welcome to dashboard</h1>

            {
                role && role === 'Seller' && <>
                    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-10'>

                        <div className="w-11/12  mt-5 lg:mt-0 p-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Available Items</h5>

                            <p className="mb-3 font-normal text-xl text-gray-500 dark:text-gray-400">{availableItems}</p>
                        </div>

                        <div className="w-11/12 mt-5 lg:mt-0 p-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Total Sold</h5>

                            <p className="mb-3 font-normal text-xl text-gray-500 dark:text-gray-400">{soldItems}</p>
                        </div>

                        <div className="w-11/12 mt-5 lg:mt-0 p-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Total Earned</h5>

                            <p className="mb-3 text-xl font-normal text-gray-500 dark:text-gray-400">${totalEarned}</p>
                        </div>
                    </div>
                </>
            }

            {
                role && role === 'Customer' && <>
                    <div className='grid grid-col-1 grid-cols-2 justify-items-center mt-10'>

                        <div className="w-11/12  mt-5 lg:mt-0 p-6 flex flex-col items-center bg-[#27ae60] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <h5 className="mb-4 text-2xl font-semibold tracking-tight text-white dark:text-white">Total Cart Items</h5>

                            <p className="mb-3 font-normal text-xl text-white dark:text-gray-400">{totalCart}</p>
                        </div>

                        <div className="w-11/12 mt-5 lg:mt-0 p-6 flex flex-col items-center bg-[#e67e22] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <h5 className="mb-4 text-2xl font-semibold tracking-tight text-white dark:text-white">Total Bought</h5>

                            <p className="mb-3 font-normal text-xl text-white dark:text-gray-400">{bought}</p>
                        </div>


                    </div>
                </>
            }
            {
                role && role === 'Admin' && <>
                    <div className='grid grid-col-1 grid-cols-2 justify-items-center mt-10'>

                        <div className="w-11/12  mt-5 lg:mt-0 p-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Total Seller</h5>

                            <p className="mb-3 font-normal text-xl text-gray-500 dark:text-gray-400">{seller}</p>
                        </div>

                        <div className="w-11/12 mt-5 lg:mt-0 p-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Total Buyer</h5>

                            <p className="mb-3 font-normal text-xl text-gray-500 dark:text-gray-400">{buyer}</p>
                        </div>


                    </div>
                </>
            }
        </div>
    );
};

export default Dashboard;