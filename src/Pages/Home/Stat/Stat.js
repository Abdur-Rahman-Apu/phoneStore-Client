import React, { useState } from 'react';

const Stat = () => {

    const [customers, setCustomers] = useState(0)
    const [sellers, setSellers] = useState(0)
    const [orders, setOrders] = useState(0)
    return (
        <div className='w-11/12 mx-auto mb-24'>
            <div className="stats shadow w-full dark:bg-[#1F2937] ">

                <div className="stat place-items-center">
                    <div className="stat-title dark:text-white dark:font-bold">Customers</div>
                    <div className="stat-value text-black dark:text-boldGreen">{customers}</div>

                </div>

                <div className="stat place-items-center">
                    <div className="stat-title dark:text-white dark:font-bold">Sellers</div>
                    <div className="stat-value text-boldGreen dark:text-boldGreen">{sellers}</div>

                </div>

                <div className="stat place-items-center">
                    <div className="stat-title dark:text-white dark:font-bold">Orders Completed</div>
                    <div className="stat-value text-black dark:text-boldGreen">{orders}</div>

                </div>

            </div>
        </div>
    );
};

export default Stat;