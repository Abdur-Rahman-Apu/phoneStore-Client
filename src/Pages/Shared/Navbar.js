import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/AuthProvider";
import useRole from "../../CustomHooks/useRole";
import "./Navbar.css";

const Navbar = () => {
  //dark theme
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggleBtn = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // menus
  const { user, logOut } = useContext(AuthContext);

  const pathName = useLocation().pathname;

  const menus = (
    <>
      <li>
        <Link to="/" className={`${pathName === "/" ? "active" : ""}`}>
          Home
        </Link>
      </li>

      <li tabIndex={0} className="relative">
        <Link
          className={`flex items-center ${
            pathName.match("/category/") ? "active" : ""
          }`}
        >
          Category
          <FontAwesomeIcon icon={faAngleDown} />
        </Link>
        <ul className=" bg-boldGreen text-white lg:w-full z-10">
          <li className="hover:bg-[#3e363f] hover:transition-all hover:duration-[0.6s]">
            <Link
              to="/category/1"
              className={`justify-center ${
                pathName === "/category/1" ? "bg-black" : ""
              }`}
            >
              Android
            </Link>
          </li>

          <li className="hover:bg-[#3e363f] hover:transition-all hover:duration-[0.6s]">
            <Link
              to="/category/2"
              className={`justify-center ${
                pathName === "/category/2" ? "bg-black" : ""
              }`}
            >
              Iphone
            </Link>
          </li>

          <li className="hover:bg-[#3e363f] hover:transition-all hover:duration-[0.6s]">
            <Link
              to="/category/3"
              className={`justify-center ${
                pathName === "/category/3" ? "bg-black" : ""
              }`}
            >
              Button
            </Link>
          </li>
        </ul>
      </li>

      {user && (
        <li>
          <Link
            className={`${pathName.match("/dashboard") ? "active" : ""}`}
            to="/dashboard"
          >
            Dashboard
          </Link>
        </li>
      )}

      <li>
        <Link
          className={`${pathName === "/contact" ? "active" : ""}`}
          to="/contact"
        >
          Contact Us
        </Link>
      </li>
    </>
  );

  //user role
  const [role] = useRole();

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch(`https://phone-store-ten.vercel.app/user?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.user?.booked) {
          setCartCount(data?.user?.booked?.length);
          localStorage.setItem("Total-cart", cartCount);
        }
      });
  }, [user?.email, cartCount]);

  return (
    <div className="navbar bg-transparent shadow-md bg-[#e1e6e1] dark:bg-[#b1fc99] dark:shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:text-black font-bold"
          >
            {menus}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl h-24">
          <img
            src={Logo}
            className="hidden md:block img-fluid h-full"
            alt="Logo"
          />

          <p className="text-sm text-boldGreen font-bold md:text-2xl dark:text-black">
            Phone Store
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold  dark:text-black">
          {menus}
        </ul>
      </div>

      <div className="navbar-end ">
        {role && role === "Customer" && (
          <>
            <label tabIndex={0} className="btn btn-ghost btn-circle mr-2">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartCount}
                </span>
              </div>
            </label>
          </>
        )}

        <div className="dropdown dropdown-end flex flex-end">
          {user ? (
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="user img" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 top-[80%]"
              >
                <li className="w-full ">
                  <p className="text-base font-bold text-boldGreen">
                    {user.displayName}
                  </p>
                </li>
                <li className="w-full ">
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge text-[12px]">{role}</span>
                  </Link>
                </li>
                <li className="w-full ">
                  <button
                    onClick={() => {
                      localStorage.removeItem("Total-cart");
                      setCartCount(0);

                      logOut();
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <Link
              to="/login"
              className="btn rounded-full bg-boldGreen border-0 text-xs md:text-sm"
            >
              Log in
            </Link>
          )}
        </div>
      </div>

      {/* toggle btn  */}
      <label className="swap swap-rotate mx-2">
        {/* <!-- this hidden checkbox controls the state --> */}
        <input type="checkbox" onClick={handleToggleBtn} />

        {/* <!-- sun icon --> */}
        <svg
          className="swap-on fill-current w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="green"
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
          />
        </svg>

        {/* <!-- moon icon --> */}
        <svg
          className="swap-off fill-current w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="green"
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
