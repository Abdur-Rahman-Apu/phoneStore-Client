import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
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

                    <ul className="menu p-4 w-full md:w-80 bg-green-400 font-bold text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='absolute top-2 right-2 lg:hidden '><label htmlFor='my-drawer-2' className="btn btn-sm btn-circle bg-boldGreen text-white">✕</label></li>
                        <li className='mt-8'><Link>Sidebar Item 1</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;