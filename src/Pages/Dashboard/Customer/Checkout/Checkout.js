import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';

const Checkout = ({ item }) => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    console.log("item", item);

    //get product
    const [product, setProduct] = useState([])
    const [processing, setProcessing] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')

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
        // Block native form submission.
        setErrors('')
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }



        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setErrors(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setErrors('')
        }

        // confirm card payment 
        setSuccess('')
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
        setSuccess('')
        if (confirmError) {
            setErrors(confirmError.message)
        }


        if (paymentIntent.status === "succeeded") {
            console.log("paymentIntent", paymentIntent);
            setSuccess("Your payment Done")
            setTransactionId(paymentIntent.id)


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
    console.log(success, transactionId);


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