import React, { useState } from 'react';

const Dashboard = () => {
    const [availableItems, setAvailableItems] = useState(0)
    const [soldItems, setSoldItems] = useState(0)
    const [totalEarned, setTotalEarned] = useState(0)
    return (
        <div>
            <h1 className='text-2xl font-bold text-boldGreen text-center'>Welcome to dashboard</h1>

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
        </div>
    );
};

export default Dashboard;