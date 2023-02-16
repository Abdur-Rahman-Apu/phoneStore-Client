import React, { useState } from 'react';

const Stat = () => {

    const [customers, setCustomers] = useState(0)
    const [sellers, setSellers] = useState(0)
    const [orders, setOrders] = useState(0)
    return (
        <div className='w-11/12 mx-auto mb-24'>
            <div className="stats shadow w-full ">

                <div className="stat place-items-center">
                    <div className="stat-title">Customers</div>
                    <div className="stat-value text-black">{customers}</div>

                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Sellers</div>
                    <div className="stat-value text-boldGreen">{sellers}</div>

                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Orders Completed</div>
                    <div className="stat-value text-black">{orders}</div>

                </div>

            </div>
        </div>
    );
};

export default Stat;