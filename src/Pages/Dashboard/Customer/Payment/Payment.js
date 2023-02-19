import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from '../Checkout/Checkout';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);


const Payment = () => {

    //get product data
    const location = useLocation()
    const item = location?.state?.data;


    return (
        <Elements stripe={stripePromise}>
            <Checkout item={item}></Checkout>
        </Elements>
    );
};

export default Payment;