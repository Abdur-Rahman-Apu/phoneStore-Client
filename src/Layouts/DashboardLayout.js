import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useRole from '../CustomHooks/useRole';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)

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
            <li className='mt-8'><Link>Cart</Link></li>
            <li><Link>Buy Product</Link></li>
        </>

    } else if (role === 'Admin') {
        menus = <>
            <li className='mt-8'><Link>All Sellers</Link></li>
            <li><Link>All Buyers</Link></li>
        </>
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