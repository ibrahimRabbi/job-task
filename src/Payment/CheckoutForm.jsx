import React, { useState, useEffect, useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './payment.css'
import useCalculateHooks from '../coustomHooks/CalculateHooks';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthContext';
import Swal from 'sweetalert2';






const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState('');
    const [proccesing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState("");
    const { subTotal, data } = useCalculateHooks()
    const navigate = useNavigate()
    const { user } = useContext(Context)

    console.log()
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
                        name: user?.displayName || 'unknown',
                        email: user?.email || 'anonymouse',
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


        if (paymentIntent?.status == 'succeeded') {
            const summery = {
                transictionId: paymentIntent.id,
                amount: subTotal,
                email: user?.email,
                name: user?.displayName,
                date: new Date().toDateString(),
                district: data.districtName,
            }
            fetch(`https://task-server-seven.vercel.app/summery/${data._id}`, {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(summery)
            })
                .then(res => res.json())
                .then(res => {

                    if (res.result.insertedId) {
                        Swal.fire({
                            title: 'payment successfull',
                            text: "You won't be able to revert this!",
                            icon: 'success',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'go to Dashboard'
                        }).then((result) => {
                            console.log(result)
                            if (result.isConfirmed) {
                                navigate('/dashboard')
                            } else {
                                navigate('/')
                            }
                        })
                        
                    }

                })

        };
    }


    useEffect(() => {
        if (subTotal > 0) {
            fetch(" https://task-server-seven.vercel.app/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ subTotal }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
    }, [subTotal]);

    return (
        <section className='mx-auto h-[80vh]'>

            <form className='w-1/2 mt-20 mx-auto' onSubmit={handleSubmit}>
                <h1 className='text-lg font-semibold text-red-600'>pay: {subTotal}Tk</h1>
                <CardElement />
                <button className='btn btn-sm w-[140px] hover:bg-amber-500 bg-amber-500' type="submit"
                    disabled={!stripe || proccesing || !clientSecret}>Pay</button>
                <p className='text-red-500 mt-4'>{errorMessage}</p>
            </form>
        </section>
    );
};

export default CheckoutForm





