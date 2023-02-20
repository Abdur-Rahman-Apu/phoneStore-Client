import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useRole from '../CustomHooks/useRole';
import Navbar from '../Pages/Shared/Navbar';
import Lottie from "lottie-react";
import Load from '../assets/load.json'

const DashboardLayout = () => {
    const { user, loading } = useContext(AuthContext)

    const [role] = useRole()

    console.log(role);

    let menus;

    if (role === 'Seller') {

        menus = <>
            <li className='mt-8'><Link to="/dashboard/addItem">Add items</Link></li>
            <li><Link to="/dashboard/allItems">All items</Link></li>
            <li><Link to="/dashboard/soldItems">Sold items</Link></li>
        </>

    } else if (role === 'Customer') {
        menus = <>
            <li className='mt-8'><Link to="/dashboard/cart">Cart</Link></li>
            <li><Link to="/dashboard/myProduct">Buy Product</Link></li>
        </>

    } else if (role === 'Admin') {
        menus = <>
            <li className='mt-8'><Link to="/dashboard/allSellers">All Sellers</Link></li>
            <li><Link to="/dashboard/allBuyers">All Buyers</Link></li>
        </>
    }

    if (loading) {
        return <div className='h-[500px] w-[500px] mx-auto'>
            <Lottie animationData={Load} loop={true} />
            <p className='text-center text-3xl font-bold text-sky-400'>Wait loading...</p>
        </div>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-4">
                    {/* <!-- Page content here --> */}

                    <label htmlFor="my-drawer-2" className="btn btn-xs bg-boldGreen border-0 drawer-button lg:hidden mb-5">Sidebar</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side shadow-md ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-full md:w-80 bg-green-400 font-bold text-[#3e363f]">
                        {/* <!-- Sidebar content here --> */}
                        <li className='absolute top-2 right-2 lg:hidden '><label htmlFor='my-drawer-2' className="btn btn-sm btn-circle bg-boldGreen text-white">✕</label></li>
                        {
                            menus
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;