import React from 'react';
import { BsPinMapFill, BsCash } from 'react-icons/bs'
import { FaTruck } from 'react-icons/fa'
import HeadLine from '../utility/HeadLine';
const Whycourier = () => {
    return (
        <section className=' w-[90%] mx-auto mt-16'>
            <h1 className='text-4xl font-semibold text-sky-900'>--Why My Courier</h1>
            <div className='flex justify-around gap-10 mt-7'>
                <div className=' border-amber-500 p-6 rounded-lg w-[52%] border-2'>
                    <BsPinMapFill className='mx-auto text-4xl text-emerald-600' />
                    <div>
                        <h1 className='text-2xl font-semibold mt-3 text-amber-500'>Wide Coverage</h1>
                        <p className='font-semibold text-gray-600 mt-2'>We have a dedicated delivery channel of 350+ delivery agents in Dhaka and Chattogram. We have partnered with 50+ franchises all over the country as well.</p>
                    </div>
                </div>
                <div className=' border-amber-500 p-6 rounded-lg w-[52%] border-2'>
                    <FaTruck className='mx-auto text-4xl text-emerald-600' />
                    <div>
                        <h1 className='text-2xl font-semibold mt-3 text-amber-500'>Fastest Service</h1>
                        <p className='font-semibold text-gray-600 mt-2'>Our team works round the clock to ensure fastest delivery and minimize cancellation ratio so that we, as a business partner, can ensure our customer’s growth.</p>
                    </div>
                </div>
                <div className=' border-amber-500 p-6 rounded-lg w-[52%] border-2'>
                    <BsCash className='mx-auto text-4xl text-emerald-600' />
                    <div>
                        <h1 className='text-2xl font-semibold mt-3 text-amber-500'>Cash on Delivery</h1>
                        <p className='font-semibold text-gray-600 mt-2'>We collect cash from your customer and transfer it to you on time through a formal banking channel, and of course with all the detailed supporting information.</p>
                    </div>
                </div>
           </div>
         </section>
    );
};

export default Whycourier;
  