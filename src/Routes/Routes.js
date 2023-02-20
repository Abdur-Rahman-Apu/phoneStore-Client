import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyer/AllBuyers";
import AllSellers from "../Pages/Dashboard/Admin/AllSeller/AllSellers";
import BuyedProduct from "../Pages/Dashboard/Customer/Buyed/BuyedProduct";
import Cart from "../Pages/Dashboard/Customer/Cart/Cart";
import Success from "../Pages/Dashboard/Customer/Checkout/Success";
import Payment from "../Pages/Dashboard/Customer/Payment/Payment";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AddItem from "../Pages/Dashboard/Seller/AddItem/AddItem";
import AllItems from "../Pages/Dashboard/Seller/AllItems/AllItems";
import SoldItems from "../Pages/Dashboard/Seller/SoldItems/SoldItems";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import PasswordReset from "../Pages/PasswordReset/PasswordReset";
import PhoneDetails from "../Pages/Phones/PhoneDetails/PhoneDetails";
import Phones from "../Pages/Phones/Phones/Phones";
import Register from "../Pages/Register/Register";

import Error from "../Pages/Shared/Error";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Phones></Phones></PrivateRoute>,
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/reset',
                element: <PasswordReset></PasswordReset>
            },
            {
                path: '/phoneDetails/:id',
                element: <PhoneDetails></PhoneDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params?.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/dashboard/addItem',
                element: <PrivateRoute><AddItem></AddItem></PrivateRoute>
            },
            {
                path: '/dashboard/soldItems',
                element: <PrivateRoute><SoldItems></SoldItems></PrivateRoute>
            },
            {
                path: '/dashboard/allItems',
                element: <PrivateRoute><AllItems></AllItems></PrivateRoute>
            },
            {
                path: '/dashboard/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: '/dashboard/myProduct',
                element: <PrivateRoute><BuyedProduct></BuyedProduct></PrivateRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <PrivateRoute><AllBuyers></AllBuyers></PrivateRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <PrivateRoute><AllSellers></AllSellers></PrivateRoute>
            },
            {
                path: '/dashboard/payment',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
                path: '/dashboard/successPayment',
                element: <PrivateRoute><Success></Success></PrivateRoute>
            },

        ]
    }
])