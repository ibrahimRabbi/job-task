import React from 'react';
import useCalculateHooks from '../coustomHooks/CalculateHooks';
import { Link } from 'react-router-dom';

const Review = () => {
    const { data } = useCalculateHooks()
    console.log(data)
    return (
        <section className='w-[60%] mx-auto mt-11'>
            <div className='flex gap-7 border p-4'>
                <div className="avatar">
                    <div className="w-44 rounded-xl">
                        <img src={data.image} />
                    </div>
                </div>
                <div>
                    <p className='text-2xl w-[50%] text-sky-900 font-semibold  border-b-2 pb-2'>Delivery: {data?.districtName}</p>
                    <p className='font-semibold text-gray-600 mt-3'>Distance : {data?.distance}KM</p>
                    <p className='font-semibold text-gray-600'>Item type : {data?.item}</p>
                    <p className='font-semibold text-gray-600'>Item Quantity : {data?.quantity}</p>
                    <p className='font-semibold text-gray-600'>
                        weight : {data?.weight}Kg -
                        <span className='pl-2 text-[13px]'>{data?.weight > 1 ? '(extra 20TK has been added for above of 1kg)' : ''}</span>
                    </p>
                    <p className='font-semibold text-gray-600 mt-1'>
                        Pickup Date : {data?.date?.dayDate ? data?.date?.dayDate : ''} {data?.date?.date} -
                        <span className='pl-2 text-[13px]'>{data?.date?.price > 0 ? `(extra ${data?.date?.price}TK has been added)` : ''}</span>
                    </p>

                    <p className='font-semibold text-gray-600 mt-1'>
                        Location Height : {data?.floor?.floor} -
                        <span className='pl-2 text-[13px]'>{data?.floor?.price > 0 ? `(extra ${data?.floor?.price}TK has been added for above of ground floor)` : ''}</span>
                    </p>
                </div>
            </div>
            <div className=' mt-7 w-[70%]'>
                <Link to='/step/place' className='bg-sky-500 btn hover:bg-sky-600 w-[45%]'>Procced to checkout</Link>
            </div>
         </section>
    );
};

export default Review;