import React, { useEffect, useState } from 'react';

const Stat = () => {

    const [customers, setCustomers] = useState(0)
    const [sellers, setSellers] = useState(0)
    const [orders, setOrders] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                const sellerLength = data.seller.length
                const buyerLength = data.customer.length

                setSellers(sellerLength)
                setCustomers(buyerLength)
            })


        fetch(`http://localhost:5000/allPaidItems`)
            .then(res => res.json())
            .then(data => setOrders(data.count))
    }, [])
    return (
        <div className='w-11/12 mx-auto mb-24 min-h-[200px] '>
            <div className="stats grid-flow-row shadow w-full dark:bg-[#1F2937] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

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