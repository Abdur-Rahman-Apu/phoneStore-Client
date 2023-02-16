import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../assets/logo.png"

const Navbar = () => {
    const menus = <>
        <li><Link>Home</Link></li>
        <li tabIndex={0}>
            <Link className="flex  items-center">
                Category
                <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <ul className="p-2 bg-[#3DB070] text-white">
                <li><Link>Android</Link></li>
                <li><Link>Iphone</Link></li>
                <li><Link>Button</Link></li>
            </ul>
        </li>
        <li><Link>Contact Us</Link></li>
    </>
    return (
        <div className="navbar bg-transparent shadow-md bg-[#e1e6e1]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menus
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl h-24">

                    <img src={Logo} className="img-fluid h-full" alt="Logo" />

                    <p className='hidden md:block text-boldGreen font-bold text-2xl'>Phone Store</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        menus
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn rounded-full bg-[#3DB070] border-0">Log in</Link>
            </div>
        </div>
    );
};

export default Navbar;