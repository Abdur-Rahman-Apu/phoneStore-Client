import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from '../Checkout/Checkout';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe(process.env.Stripe_Key);


const Payment = () => {
    const location = useLocation()

    const item = location?.state?.data;
    console.log(item);
    return (
        <Elements stripe={stripePromise}>
            <Checkout></Checkout>
        </Elements>
    );
};

export default Payment;