import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';

const Checkout = ({ item }) => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    //get product
    const [product, setProduct] = useState([])
    const [processing, setProcessing] = useState('')


    useEffect(() => {
        fetch(`http://localhost:5000/product/${item?.productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [item?.productId])


    const stripe = useStripe();
    const elements = useElements();

    const [clientSecret, setClientSecret] = useState(null)
    const [errors, setErrors] = useState(null)



    useEffect(() => {

        if (product?.productPrice) {
            fetch(`http://localhost:5000/create-payment-intent`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => setClientSecret(data.clientSecret))
        }

    }, [product])



    const handleSubmit = async (event) => {

        setErrors('')
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {

            setErrors(error.message)
        } else {

            setErrors('')
        }

        // confirm card payment 

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email,
                    },
                },
            },
        );

        setProcessing(false)

        if (confirmError) {
            setErrors(confirmError.message)
        }


        if (paymentIntent.status === "succeeded") {

            const paymentInfo = {
                transactionId: paymentIntent.id,
                productInfo: product,
                buyerEmail: user?.email
            }

            fetch(`http://localhost:5000/paid`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        navigate('/dashboard/successPayment', { state: { success: "Your payment is done", transactionId: paymentIntent.id } })
                        localStorage.setItem('Total-cart', localStorage.getItem('Total-cart') - 1)
                    }
                })


            navigate('/dashboard/successPayment', { state: { success: "Your payment is done", transactionId: paymentIntent.id } })
        }



    };

    return (
        <div >
            <h1 className='mt-5 mb-16 text-center font-bold text-boldGreen text-2xl' >Checkout</h1>
            <form className='w-1/2' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-sm border-0 mt-10 bg-boldGreen' disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>



        </div>
    );
};

export default Checkout;