import React, { useState, useEffect } from 'react';
import { BsArrowLeftRight } from "react-icons/bs";
import useCalculateHooks from '../coustomHooks/CalculateHooks';

const Calculate = () => {
 
    const { data, subTotal } = useCalculateHooks()
     


    return (
        <div className='bg-gradient-to-tl from-sky-400  to-sky-200  p-5 mt-12 rounded-lg h-[70vh] sticky top-5'>
            <div className='flex justify-between items-center mt-2 text-sky-800 font-semibold w-[90%] text-xl mx-auto'>
                <p>FROM: Dhaka</p>
                <BsArrowLeftRight />
                <p>TO: {data.districtName}</p>
            </div>
            <div>
                {
                data.item ? <p className='mt-4 text-gray-700 font-semibold'>{`Item Type: ${data.item}`}</p> : ''
                }
                {
                    data.weight ? <p className='mt-1 text-gray-700 font-semibold'>{`weight: ${data.weight}kg`}<span className='text-[12px] pl-2 font-semibold'>{data.weight>1?'(extra 20tk add)':''}</span></p> : ''
                }

                {
                    data.quantity ? <p className='mt-1 text-gray-700 font-semibold'>{`Item quantity: ${data.quantity}`}</p> : ''
                }
                {
                    data.date ? <p className='mt-1 text-gray-700 font-semibold'>{`pickup: ${data.date.date}`}<span className='text-[12px] pl-2 font-semibold'>{data.date.price > 0 ? `(extra ${data.date.price}tk add)`:''}</span></p> : ''
                }
                {
                    data.floor ? <p className='mt-1 text-gray-700 font-semibold'>{`Location height: ${data.floor.floor}`} <span className='text-[12px] font-semibold'>{data.floor.price>0? `(extra ${data.floor.price}tk add)`:''}</span></p> : ''
                }
                 
            </div>
            <div className='mt-11'>
                <hr className='border-2 border-blue-600 ' />
                <h1 className='text-2xl font-semibold mt-2'>Sub Total : {subTotal}-TK</h1>
            </div>
        </div>
    );
};

export default Calculate;