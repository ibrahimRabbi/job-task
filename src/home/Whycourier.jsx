import React from 'react';
 
import HeadLine from '../utility/HeadLine';
const Whycourier = () => {
    return (
        <section className=' w-[90%] mx-auto mt-52'>
            <div className='w-[40%]'>
                <h1 className='text-4xl font-semibold text-green-900'>--Why My Courier</h1>
                <p className='mt-1 text-xs text-zinc-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa totam quas quia! Animi quae quo deserunt corrupti? Aliquam Lorem ipsum dolor Lorem, ipsum dolor.</p>
           </div>
            <div className='flex justify-around gap-10 mt-7'>
                <div className=' border-green-500 rounded-lg w-[52%] border'>
                    <img loading='lazy' className=' block mx-auto' width={230} src="https://i.ibb.co/WWZ99Jc/Delivery-bro-1.png" alt="" />
                    <div className='px-5 pb-4'>
                        <h1 className='text-2xl font-semibold mt-3 text-green-600'>Faster Delivery</h1>
                        <p className='font-semibold text-gray-700 mt-1 text-sm'>We have a dedicated delivery channel of 350+ delivery agents in Dhaka and Chattogram. We have partnered with 50+ franchises all over the country well.</p>
                    </div>
                </div>
                <div className=' border-green-500 rounded-lg w-[52%] border'>
                    <img loading='lazy' className=' block mx-auto' width={230} src="https://i.ibb.co/PDBT8vx/Free-shipping-pana-1.png" alt="" />
                    <div className='px-5 pb-4'>
                        <h1 className='text-2xl font-semibold mt-3 text-green-600'>Free Shipping inside Dhaka</h1>
                        <p className='font-semibold text-gray-700 mt-1 text-sm'>Our team works round the clock to ensure fastest delivery and minimize cancellation ratio so that we, as a business partner, can ensure our customer’s growth.</p>
                    </div>
                </div>
                <div className=' border-green-500 rounded-lg w-[52%] border'>
                    <img loading='lazy' className=' block mx-auto' width={230} src="https://i.ibb.co/nCQ0W5n/Call-center-bro.png" alt="" />
                    <div className='px-5 pb-4'>
                        <h1 className='text-2xl font-semibold mt-3 text-green-600'>Live Support</h1>
                        <p className='font-semibold text-gray-700 mt-1 text-sm'>We collect cash from your customer and transfer it to you on time through a formal banking channel, and of course with all the detailed supporting information.</p>
                    </div>
                </div>
           </div>
         </section>
    );
};

export default Whycourier;
  