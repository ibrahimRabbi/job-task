import React, { useState,useEffect } from 'react';
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
import './payment.css'
import useCalculateHooks from '../coustomHooks/CalculateHooks';
import { useNavigate } from 'react-router-dom';
 




const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState('');
    const [proccesing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState("");
    const {subTotal,data} = useCalculateHooks()
const navigate = useNavigate()
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({ type: 'card', card });

        if (error) {
            setErrorMessage(error.message)
        }
        
        const { paymentIntent, error: codeError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card,
                    billing_details: {
                        // name: user?.displayname || 'unknown',
                        // email: user?.email || 'anonymouse'
                        name: 'ibrahim rabbi',
                        email: 'ibrahim@gmail.com'
                    },
                },
            },
        );
        setProcessing(false)

        if (codeError) {
            setErrorMessage(codeError.message)
        } else {
            setErrorMessage('')
            console.log('[paymentIntent]', paymentIntent);
        }


        if (paymentIntent.status == 'succeeded') {
            const summery = {
                transictionId: paymentIntent.id,
                amount: subTotal,
                email: "ibrahim@gtmail.com",
                date: new Date().toDateString(),
                delidary: data.districtName
            }
            fetch(" http://localhost:5000/summery", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(summery)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.insertedId) {
                        navigate('/')
                    }
            })

        };
    }


    useEffect(() => {
        if (subTotal > 0) {
            fetch(" http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ subTotal }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
    }, [subTotal]);

    return (
        <section className='mx-auto'>
            <form className='w-1/2 mt-20 mx-auto' onSubmit={handleSubmit}>
                <CardElement/>
                <button className='btn btn-sm w-[140px] hover:bg-sky-600 bg-sky-500' type="submit"
                    disabled={!stripe || proccesing || !clientSecret}>Pay</button>
                <p className='text-red-500 mt-4'>{errorMessage}</p>
            </form>
        </section>
    );
};

export default CheckoutForm





 