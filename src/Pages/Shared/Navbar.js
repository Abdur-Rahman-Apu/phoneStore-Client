import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../assets/logo.png"

const Navbar = () => {
    const [theme, setTheme] = useState(null)

    useEffect(() => {

        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])


    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleToggleBtn = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const menus = <>
        <li><Link>Home</Link></li>
        <li tabIndex={0}>
            <Link className="flex  items-center">
                Category
                <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <ul className="w-full bg-[#3DB070] text-white">
                <li className='hover:bg-[#3e363f] hover:transition-all hover:duration-[0.6s]'><Link className='justify-center'>Android</Link></li>
                <li className='hover:bg-[#3e363f] hover:transition-all hover:duration-[0.6s]'><Link className='justify-center'>Iphone</Link></li>
                <li className='hover:bg-[#3e363f] hover:transition-all hover:duration-[0.6s]'><Link className='justify-center'>Button</Link></li>
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
                <Link className="btn rounded-full bg-boldGreen border-0 ">Log in</Link>
                <label className="swap swap-rotate mx-2" >

                    {/* <!-- this hidden checkbox controls the state --> */}
                    <input type="checkbox" onClick={handleToggleBtn} />

                    {/* <!-- sun icon --> */}
                    <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill='green' d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* <!-- moon icon --> */}
                    <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill='green' d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
        </div>
    );
};

export default Navbar;