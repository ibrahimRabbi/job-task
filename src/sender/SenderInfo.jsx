import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeadLine from '../utility/HeadLine';
import { BsArrowRight } from 'react-icons/bs';

const SenderInfo = () => {
    const { state } = useLocation()
    const navigate = useNavigate()
   


    const senderInfoHandler = (e) => {
        e.preventDefault()

        const dataObj = {
            ...state,
            senderName: e.target.name.value,
            senderNumber: e.target.number.value,
            senderEmail: e.target.email.value
        }
        
        fetch('http://localhost:5000/location', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(dataObj)
        })
            .then(res => res.json())
            .then(res => {
                if (res.insertedId) {
                    navigate('details', { state: dataObj })
                }
            })

    }


    return (
        <section className='mt-11'>
            <HeadLine title='Sender Necessary Info' />
            <form onSubmit={senderInfoHandler} className='w-[50%] mx-auto mt-5 space-y-2'>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Sender Full Name*</span></label>
                    <input type='text' name='name' className="border border-sky-600 rounded-2xl p-2" placeholder='place your name' required />
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">sender Phone number*</span></label>
                    <input type='number' name='number' className="border border-sky-600 rounded-2xl p-2" placeholder='enter your active number' required />
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">sender email*</span></label>
                    <input type='email' name='email' className="border border-sky-600 rounded-2xl p-2" placeholder='enter your valid email' required />
                </div>

                <div className='pt-6'>
                    <button className='bg-sky-500 btn hover:bg-sky-600 w-full' type="submit">Continue <BsArrowRight /> </button>
                </div>
            </form>
        </section>
    );
};

export default SenderInfo;