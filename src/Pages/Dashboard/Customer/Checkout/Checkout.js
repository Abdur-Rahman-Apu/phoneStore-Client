import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const Checkout = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe || !elements}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default Checkout;